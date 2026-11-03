from rest_framework import serializers

from base.models import WorkExperience

from .models import (
    Achievement,
    ExperiencedTechnology,
    KeyContribution,
    ProjectExperience,
    TechnologyCategory,
    TechnologyStack,
    WorkProject,
    WorkRelatedStudy,
)


class ProjectExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectExperience
        fields = (
            "id",
            "title",
            "description",
            "icon",
            "display_order",
        )


class WorkProjectSerializer(serializers.ModelSerializer):
    experiences = ProjectExperienceSerializer(many=True, read_only=True)

    class Meta:
        model = WorkProject
        fields = (
            "id",
            "title",
            "description",
            "display_order",
            "experiences",
        )


class TechnologyCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = TechnologyCategory
        fields = (
            "id",
            "name",
            "description",
            "display_order",
        )


class TechnologyStackSerializer(serializers.ModelSerializer):
    category = TechnologyCategorySerializer(read_only=True)

    class Meta:
        model = TechnologyStack
        fields = (
            "id",
            "name",
            "description",
            "icon",
            "display_order",
            "category",
        )


class ExperiencedTechnologySerializer(serializers.ModelSerializer):
    technology_stack = TechnologyStackSerializer(read_only=True)

    class Meta:
        model = ExperiencedTechnology
        fields = (
            "id",
            "technology_stack",
            "display_order",
        )


class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = (
            "id",
            "title",
            "description",
            "display_order",
        )


class KeyContributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyContribution
        fields = (
            "id",
            "title",
            "description",
            "display_order",
        )


class WorkRelatedStudySerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkRelatedStudy
        fields = (
            "id",
            "title",
            "institution",
            "description",
            "study_date",
            "study_url",
            "display_order",
        )


class WorkExperienceDetailSerializer(serializers.ModelSerializer):
    work_projects = WorkProjectSerializer(many=True, read_only=True)
    technologies = ExperiencedTechnologySerializer(
        source="experience_technologies",
        many=True,
        read_only=True,
    )
    achievements = AchievementSerializer(many=True, read_only=True)
    key_contributions = KeyContributionSerializer(many=True, read_only=True)
    related_studies = WorkRelatedStudySerializer(many=True, read_only=True)

    class Meta:
        model = WorkExperience
        fields = (
            "id",
            "title",
            "job_title",
            "date",
            "description",
            "location",
            "company_logo",
            "office_job",
            "work_url",
            "deployed_url",
            "github_url",
            "display_order",
            "work_projects",
            "technologies",
            "achievements",
            "key_contributions",
            "related_studies",
        )
