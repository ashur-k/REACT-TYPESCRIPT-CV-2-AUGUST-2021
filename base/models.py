from django.db import models
from django.contrib.postgres.fields import ArrayField
from cloudinary.models import CloudinaryField


class Aboutme(models.Model):
  class Meta:
    verbose_name_plural = 'About me'
  
  about_me = models.TextField(null=True, blank=True)

  def __str__(self):
    return 'Ashur Aboutme'
  

class Education(models.Model):
  class Meta:
    verbose_name_plural = 'Education_details'

  about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
  title =  models.CharField(max_length=30, null=False, blank=False)
  institute_name = models.CharField(max_length=150, null=False, blank=False)
  institute_link = models.CharField(max_length=255, null=False, blank=False)
  date = models.CharField(max_length=150, null=False, blank=False)
  description = models.TextField(null=True, blank=True)
  
  def __str__(self):
    return self.title


class WorkExperience(models.Model):  
  class Meta:
    verbose_name_plural = 'Experiences'
    ordering = ['display_order', 'pk']
  
  about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
  title =  models.CharField(max_length=50, null=False, blank=False)
  date = models.CharField(max_length=150, null=False, blank=False)
  description = models.TextField(null=True, blank=True)
  display_order = models.IntegerField(null=False, blank=False, default=1)
  office_job = models.BooleanField(default=False)
  work_url = models.CharField(max_length=500, null=True, blank=True, default="www.google.com")
  deployed_url = models.CharField(max_length=500, null=True, blank=True)
  github_url = models.CharField(max_length=500, null=True, blank=True)
  
  def __str__(self):
    return self.title


class Skill(models.Model):  
  class Meta:
    verbose_name_plural = 'Skills'
  
  about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
  title = models.CharField(max_length=30, null=False, blank=False)
  description = models.TextField(null=True, blank=True)
  icon = models.CharField(max_length=300)
  
  def __str__(self):
    return self.title


class SkillCapabilities(models.Model):
  class Meta:
    verbose_name_plural = 'Skills-Capabilities'
  
  about_me = models.ForeignKey(Aboutme, on_delete=models.CASCADE)
  title = models.CharField(max_length=30, null=False, blank=False)
  category = ArrayField(
    models.CharField(max_length=200)
  )
  def __str__(self):
    return self.title


class Project(models.Model):
  class Meta:
    verbose_name_plural = 'Projects'

  name = models.CharField(max_length=200)
  image = models.ImageField(upload_to="images", null=True, blank=True)
  description = models.TextField()
  category = ArrayField(
    models.CharField(max_length=200)
  )
  key_techs = ArrayField(
    models.CharField(max_length=200)
  )
  deployed_url_icon = models.CharField(max_length=150, default="add icon name", null=False, blank=False)
  deployed_url = models.CharField(max_length=500)
  github_url = models.CharField(max_length=500)
  
  def __str__(self):
    return self.name


class ContactInformation(models.Model):
  class Meta:
    verbose_name_plural = 'Contact Information'
  
  
  name = models.CharField(max_length=200)
  email = models.EmailField(max_length=50, blank=True)
  message = models.TextField()
  received_at = models.DateTimeField(auto_now_add=True)
  
  def __str__(self):
    return self.name