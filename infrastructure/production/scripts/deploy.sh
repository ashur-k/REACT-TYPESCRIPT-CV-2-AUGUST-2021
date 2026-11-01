
#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="/home/ashur_kanwal/REACT-TYPESCRIPT-CV-2-AUGUST-2021"
COMPOSE_FILE="$PROJECT_DIR/infrastructure/production/compose.yml"
ENV_FILE="$PROJECT_DIR/infrastructure/production/.env"

IMAGE_PREFIX="ghcr.io/ashur-k/react-typescript-cv-2-august-2021"

STATE_DIR="/home/ashur_kanwal/.local/state/resume-deploy"
STATE_FILE="$STATE_DIR/deployed-sha"

# Prepare deployment state and prevent overlapping deployments.
mkdir -p "$STATE_DIR"
exec 9>"$STATE_DIR/deploy.lock"
flock -n 9 || {
    echo "Another deployment is running. Skipping."
    exit 0
}

API_URL="https://api.github.com/repos/ashur-k/REACT-TYPESCRIPT-CV-2-AUGUST-2021/actions/workflows/publish-images.yml/runs?branch=main&per_page=1"

echo "Checking the latest production release..."

RUN=$(curl -fsSL "$API_URL")

STATUS=$(jq -r '.workflow_runs[0].status // empty' <<< "$RUN")
CONCLUSION=$(jq -r '.workflow_runs[0].conclusion // empty' <<< "$RUN")
RELEASE_SHA=$(jq -r '.workflow_runs[0].head_sha // empty' <<< "$RUN")

if [[ "$STATUS" != "completed" || "$CONCLUSION" != "success" ]]; then
    echo "Latest publishing run is not successful. Skipping deployment."
    exit 0
fi

if [[ ! "$RELEASE_SHA" =~ ^[a-f0-9]{40}$ ]]; then
    echo "Invalid release commit SHA."
    exit 1
fi

echo "Approved release: $RELEASE_SHA"

if [[ -f "$STATE_FILE" ]] && [[ "$(cat "$STATE_FILE")" == "$RELEASE_SHA" ]]; then
    echo "This release is already deployed."
    exit 0
fi

# Confirm both images exist before deployment.
echo "Checking backend image..."
sudo docker manifest inspect "$IMAGE_PREFIX-backend:$RELEASE_SHA" > /dev/null

echo "Checking frontend image..."
sudo docker manifest inspect "$IMAGE_PREFIX-frontend:$RELEASE_SHA" > /dev/null

# Identify the currently deployed backend release.
echo "Identifying the currently deployed release..."

BACKEND_CONTAINER=$(sudo docker compose \
    --env-file "$ENV_FILE" \
    -f "$COMPOSE_FILE" \
    ps -q backend)

if [[ -z "$BACKEND_CONTAINER" ]]; then
    echo "ERROR: Cannot identify the currently deployed backend."
    exit 1
fi

PREVIOUS_IMAGE=$(sudo docker inspect \
    --format '{{.Config.Image}}' "$BACKEND_CONTAINER")

PREVIOUS_SHA="${PREVIOUS_IMAGE##*:}"

if [[ ! "$PREVIOUS_SHA" =~ ^[a-f0-9]{40}$ ]]; then
    echo "ERROR: Cannot identify the previous release SHA."
    exit 1
fi

echo "Previous release: $PREVIOUS_SHA"

# Verify that both application services are healthy enough to serve requests.
verify_deployment() {
    local running_services

    echo "Checking application containers..."

    running_services=$(sudo docker compose \
        --env-file "$ENV_FILE" \
        -f "$COMPOSE_FILE" \
        ps --status running --services) || return 1

    for service in backend frontend; do
        if ! grep -qx "$service" <<< "$running_services"; then
            echo "ERROR: $service is not running."
            return 1
        fi
    done

    echo "Checking Nginx configuration..."

    sudo docker compose \
        --env-file "$ENV_FILE" \
        -f "$COMPOSE_FILE" \
        exec -T frontend nginx -t || return 1

    echo "Checking frontend HTTP response..."

    sudo docker compose \
        --env-file "$ENV_FILE" \
        -f "$COMPOSE_FILE" \
        exec -T frontend \
        wget -q -O /dev/null http://127.0.0.1/ || return 1

    echo "Checking backend HTTP response..."

    sudo docker compose \
        --env-file "$ENV_FILE" \
        -f "$COMPOSE_FILE" \
        exec -T frontend \
        wget -q -O /dev/null \
        --header="Host: ashur-resume.co.uk" \
        http://backend:8000/api/ || return 1

    echo "Application verification passed."
}

# Restore the previous release if deployment verification fails.
rollback_deployment() {
    echo "ERROR: Deployment verification failed."
    echo "Restoring previous release: $PREVIOUS_SHA"

    if sudo env IMAGE_TAG="$PREVIOUS_SHA" docker compose \
        --env-file "$ENV_FILE" \
        -f "$COMPOSE_FILE" \
        up -d --no-build --no-deps backend frontend \
        && verify_deployment
    then
        printf '%s\n' "$PREVIOUS_SHA" > "$STATE_FILE"
        echo "Previous release restored and verified."
    else
        echo "CRITICAL: Automatic rollback failed. Manual investigation required."
    fi

    exit 1
}

# Roll back automatically if an error occurs after deployment starts.
deployment_error_handler() {
    local exit_code=$?
    trap - ERR

    if [[ "${DEPLOYMENT_STARTED:-0}" == "1" ]]; then
        rollback_deployment
    fi

    exit "$exit_code"
}

trap deployment_error_handler ERR
DEPLOYMENT_STARTED=0

# Identify the currently deployed frontend.
FRONTEND_CONTAINER=$(sudo docker compose \
    --env-file "$ENV_FILE" \
    -f "$COMPOSE_FILE" \
    ps -q frontend)

if [[ -z "$FRONTEND_CONTAINER" ]]; then
    echo "ERROR: Cannot identify the currently deployed frontend."
    exit 1
fi

FRONTEND_IMAGE=$(sudo docker inspect \
    --format '{{.Config.Image}}' "$FRONTEND_CONTAINER")

FRONTEND_SHA="${FRONTEND_IMAGE##*:}"

if [[ "$FRONTEND_SHA" != "$PREVIOUS_SHA" ]]; then
    echo "ERROR: Backend and frontend are on different releases."
    exit 1
fi

# Pull the approved images.
echo "Pulling approved images..."

sudo env IMAGE_TAG="$RELEASE_SHA" docker compose \
    --env-file "$ENV_FILE" \
    -f "$COMPOSE_FILE" \
    pull backend frontend

# Update only the application services. Do not recreate the database.
echo "Updating application containers..."

DEPLOYMENT_STARTED=1

sudo env IMAGE_TAG="$RELEASE_SHA" docker compose \
    --env-file "$ENV_FILE" \
    -f "$COMPOSE_FILE" \
    up -d --no-build --no-deps backend frontend

# Verify the new release.
echo "Verifying new deployment..."

verify_deployment

# Record the release only after successful verification.
printf '%s\n' "$RELEASE_SHA" > "$STATE_FILE"

echo "Deployment completed successfully: $RELEASE_SHA"
