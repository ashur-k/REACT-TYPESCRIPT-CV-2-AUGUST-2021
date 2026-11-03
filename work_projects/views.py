from django.db.models import Prefetch
from rest_framework import generics
from rest_framework.permissions import AllowAny

from base.models import WorkExperience

from .models import (
    ExperiencedTechnology,
    WorkProject,
)
from .serializers import WorkExperienceDetailSerializer


class WorkExperienceDetailView(generics.RetrieveAPIView):
    serializer_class = WorkExperienceDetailSerializer
    permission_classes = (AllowAny,)

    queryset = WorkExperience.objects.select_related("about_me").prefetch_related(
        Prefetch(
            "work_projects",
            queryset=WorkProject.objects.prefetch_related("experiences"),
        ),
        Prefetch(
            "experience_technologies",
            queryset=ExperiencedTechnology.objects.select_related(
                "technology_stack__category"
            ),
        ),
        "achievements",
        "key_contributions",
        "related_studies",
    )
