import { FunctionComponent } from "react";

// Icon helper function imported
import getIcon from "../../helperFunctions/getIcon";

// Material UI and bootstrap Components import
import { Icon, Typography } from "@mui/material";
import { Card, CardGroup } from "react-bootstrap";
import { useId, useState } from "react";

// css imports
import "./CardComponent.css";

export const CardComponent: FunctionComponent<{
  icon: string;
  title: string;
  description: string;
  details?: string;
}> = ({ icon, title, description, details }) => {
  const [expanded, setExpanded] = useState(false);
  const detailsId = useId();

  return (
    <CardGroup>
      <Card className="service_card">
        <Card.Body>
          <div className="service_header">
            <div className="service_icon_wrapper">
              <Icon className="service_icon SVG-PRIMARY-COLOR">{getIcon(icon)}</Icon>
            </div>

            <Typography className="service_title">{title}</Typography>
          </div>

          <Typography className="service_description" variant="body2">
            {description}
          </Typography>

          {details && (
            <>
              <button
                type="button"
                className="service_expand_button"
                aria-expanded={expanded}
                aria-controls={detailsId}
                onClick={() => setExpanded(!expanded)}
              >
                {expanded ? "Show less" : "Learn more"}
                <span className={expanded ? "arrow rotated" : "arrow"}>→</span>
              </button>

              <div
                id={detailsId}
                className={`service_details ${expanded ? "expanded" : ""}`}
                hidden={!expanded}
              >
                {details}
              </div>
            </>
          )}
        </Card.Body>
      </Card>
    </CardGroup>
  );
};
