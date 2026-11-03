from django.contrib import admin

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


class ProjectExperienceInline(admin.TabularInline):
    model = ProjectExperience
    extra = 1


@admin.register(WorkProject)
class WorkProjectAdmin(admin.ModelAdmin):
    list_display = ("title", "work_experience", "display_order")
    list_filter = ("work_experience",)
    search_fields = ("title", "description")
    ordering = ("display_order", "pk")
    inlines = (ProjectExperienceInline,)


@admin.register(TechnologyCategory)
class TechnologyCategoryAdmin(admin.ModelAdmin):
    list_display = ("name", "display_order")
    search_fields = ("name",)
    ordering = ("display_order", "name")


@admin.register(TechnologyStack)
class TechnologyStackAdmin(admin.ModelAdmin):
    list_display = ("name", "category", "display_order")
    list_filter = ("category",)
    search_fields = ("name", "description")
    ordering = ("category", "display_order", "name")


@admin.register(ExperiencedTechnology)
class ExperiencedTechnologyAdmin(admin.ModelAdmin):
    list_display = (
        "work_experience",
        "technology_stack",
        "display_order",
    )
    list_filter = ("work_experience", "technology_stack__category")
    search_fields = (
        "work_experience__title",
        "technology_stack__name",
    )
    ordering = ("display_order",)


@admin.register(Achievement)
class AchievementAdmin(admin.ModelAdmin):
    list_display = ("title", "work_experience", "display_order")
    list_filter = ("work_experience",)
    search_fields = ("title", "description")
    ordering = ("display_order", "pk")


@admin.register(KeyContribution)
class KeyContributionAdmin(admin.ModelAdmin):
    list_display = ("title", "work_experience", "display_order")
    list_filter = ("work_experience",)
    search_fields = ("title", "description")
    ordering = ("display_order", "pk")


@admin.register(WorkRelatedStudy)
class WorkRelatedStudyAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "work_experience",
        "institution",
        "study_date",
        "display_order",
    )
    list_filter = ("work_experience",)
    search_fields = ("title", "institution", "description")
    ordering = ("display_order", "pk")
