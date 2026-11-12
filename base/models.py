from pathlib import Path

from django.conf import settings
from django.contrib.postgres.fields import ArrayField
from django.core.exceptions import ValidationError
from django.core.files.storage import FileSystemStorage
from django.db import models


class Aboutme(models.Model):
    class Meta:
        verbose_name_plural = "About me"

    about_me = models.TextField(null=True, blank=True)

    def __str__(self):
        return "Ashur Aboutme"


class Education(models.Model):
    class Meta:
        verbose_name_plural = "Education_details"

    about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
    title = models.CharField(max_length=30, null=False, blank=False)
    institute_name = models.CharField(max_length=150, null=False, blank=False)
    institute_link = models.CharField(max_length=255, null=False, blank=False)
    date = models.CharField(max_length=150, null=False, blank=False)
    description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title


class WorkExperience(models.Model):
    class Meta:
        verbose_name_plural = "Experiences"
        ordering = ("display_order", "pk")

    about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
    title = models.CharField(max_length=50, null=False, blank=False)
    date = models.CharField(max_length=150, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    display_order = models.IntegerField(null=False, blank=False, default=1, unique=True)
    office_job = models.BooleanField(default=False)
    job_title = models.CharField(max_length=100, null=True, blank=True)
    work_url = models.CharField(
        max_length=500, null=True, blank=True, default="www.google.com"
    )
    deployed_url = models.CharField(max_length=500, null=True, blank=True)
    github_url = models.CharField(max_length=500, null=True, blank=True)

    location = models.CharField(
        max_length=150,
        null=True,
        blank=True,
    )

    company_logo = models.ImageField(
        upload_to="company_logos/",
        null=True,
        blank=True,
    )

    def __str__(self):
        return self.title

    def clean(self):
        if self.office_job and not self.job_title:
            raise ValidationError(
                {"job_title": "Job title is required when office job is selected."}
            )


class Skill(models.Model):
    class Meta:
        verbose_name_plural = "Skills"

    about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
    title = models.CharField(max_length=250, null=False, blank=False)
    description = models.TextField(null=True, blank=True)
    icon = models.CharField(max_length=300)

    def __str__(self):
        return self.title


class SkillCapabilities(models.Model):
    class Meta:
        verbose_name_plural = "Skills-Capabilities"

    about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
    title = models.CharField(max_length=30, null=False, blank=False)
    category = ArrayField(models.CharField(max_length=200))
    icon = models.CharField(max_length=300, null=True, blank=True)

    def __str__(self):
        return self.title


class Project(models.Model):
    class Meta:
        verbose_name_plural = "Projects"

    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="images", null=True, blank=True)
    description = models.TextField()
    category = ArrayField(models.CharField(max_length=200))
    key_techs = ArrayField(models.CharField(max_length=200))
    deployed_url_icon = models.CharField(
        max_length=150, default="add icon name", null=False, blank=False
    )
    deployed_url = models.CharField(max_length=500)
    github_url = models.CharField(max_length=500)

    def __str__(self):
        return self.name


class ContactInformation(models.Model):
    class Meta:
        verbose_name_plural = "Contact Information"

    name = models.CharField(max_length=200)
    email = models.EmailField(max_length=50, blank=True)
    message = models.TextField()
    received_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


cv_storage = FileSystemStorage(location=Path(settings.BASE_DIR) / "uploads" / "cv")


def validate_cv_file(value):
    if Path(value.name).suffix.lower() != ".pdf":
        raise ValidationError("Only PDF files are allowed.")

    if value.size > 10 * 1024 * 1024:
        raise ValidationError("CV file must not exceed 10 MB.")


class CVDocument(models.Model):
    file = models.FileField(
        upload_to="",
        storage=cv_storage,
        validators=[validate_cv_file],
    )
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "CV"
        verbose_name_plural = "CV"

    def __str__(self):
        return f"CV (updated {self.updated_at:%Y-%m-%d})"

    def save(self, *args, **kwargs):
        old_file = None

        if self.pk:
            try:
                old_file = type(self).objects.get(pk=self.pk).file
            except type(self).DoesNotExist:
                pass

        super().save(*args, **kwargs)

        if old_file and old_file.name != self.file.name:
            old_file.delete(save=False)
