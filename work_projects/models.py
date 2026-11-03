from typing import ClassVar

from django.db import models


class WorkProject(models.Model):
    work_experience = models.ForeignKey(
        "base.WorkExperience",
        on_delete=models.CASCADE,
        related_name="work_projects",
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Work projects"
        ordering = ("display_order", "pk")

    def __str__(self):
        return self.title


class ProjectExperience(models.Model):
    work_project = models.ForeignKey(
        WorkProject,
        on_delete=models.CASCADE,
        related_name="experiences",
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    display_order = models.PositiveIntegerField(default=0)
    icon = models.CharField(max_length=300, default="give-icon-name")

    class Meta:
        verbose_name_plural = "Project experiences"
        ordering = ("display_order", "pk")

    def __str__(self):
        return self.title


class TechnologyCategory(models.Model):
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Technology categories"
        ordering = ("display_order", "name")

    def __str__(self):
        return self.name


class TechnologyStack(models.Model):
    category = models.ForeignKey(
        TechnologyCategory,
        on_delete=models.PROTECT,
        related_name="technologies",
    )
    name = models.CharField(max_length=100, unique=True)
    description = models.TextField(null=True, blank=True)
    icon = models.CharField(max_length=300, null=True, blank=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Technology stack"
        ordering = ("category", "display_order", "name")

    def __str__(self):
        return self.name


class ExperiencedTechnology(models.Model):
    work_experience = models.ForeignKey(
        "base.WorkExperience",
        on_delete=models.CASCADE,
        related_name="experience_technologies",
    )
    technology_stack = models.ForeignKey(
        TechnologyStack,
        on_delete=models.PROTECT,
        related_name="work_experiences",
    )
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Experience technologies"
        ordering = ("display_order",)
        constraints: ClassVar[list[models.UniqueConstraint]] = [
            models.UniqueConstraint(
                fields=("work_experience", "technology_stack"),
                name="unique_experience_technology",
            )
        ]

    def __str__(self):
        return f"{self.work_experience} - {self.technology_stack}"


class Achievement(models.Model):
    work_experience = models.ForeignKey(
        "base.WorkExperience",
        on_delete=models.CASCADE,
        related_name="achievements",
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Achievements"
        ordering = ("display_order", "pk")

    def __str__(self):
        return self.title


class KeyContribution(models.Model):
    work_experience = models.ForeignKey(
        "base.WorkExperience",
        on_delete=models.CASCADE,
        related_name="key_contributions",
    )
    title = models.CharField(max_length=200)
    description = models.TextField()
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Key contributions"
        ordering = ("display_order", "pk")

    def __str__(self):
        return self.title


class WorkRelatedStudy(models.Model):
    work_experience = models.ForeignKey(
        "base.WorkExperience",
        on_delete=models.CASCADE,
        related_name="related_studies",
    )
    title = models.CharField(max_length=200)
    institution = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    study_date = models.CharField(max_length=150, null=True, blank=True)
    study_url = models.URLField(max_length=500, null=True, blank=True)
    display_order = models.PositiveIntegerField(default=0)

    class Meta:
        verbose_name_plural = "Work-related studies"
        ordering = ("display_order", "pk")

    def __str__(self):
        return self.title
