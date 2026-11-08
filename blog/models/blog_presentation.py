from django.db import models

from .legacy_models import Blog


class BlogPresentation(models.Model):
    class Template(models.TextChoices):
        TECHNICAL_ARTICLE = (
            "technical_article",
            "Technical Article",
        )
        ENGINEERING_DEEP_DIVE = (
            "engineering_deep_dive",
            "Engineering Deep Dive",
        )
        STEP_BY_STEP_TUTORIAL = (
            "step_by_step_tutorial",
            "Step-by-Step Tutorial",
        )
        ENGINEERING_CASE_STUDY = (
            "engineering_case_study",
            "Engineering Case Study",
        )
        DEVELOPER_NOTES = (
            "developer_notes",
            "Developer Notes",
        )

    blog = models.OneToOneField(
        Blog,
        on_delete=models.CASCADE,
        related_name="presentation",
    )

    template = models.CharField(
        max_length=50,
        choices=Template.choices,
    )

    configuration = models.JSONField(
        default=dict,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Blog Presentation"
        verbose_name_plural = "Blog Presentations"

    def __str__(self):
        return f"{self.blog.article_title} - {self.get_template_display()}"
