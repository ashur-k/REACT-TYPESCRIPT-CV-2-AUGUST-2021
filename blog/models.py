from django.db import models
from django.contrib.postgres.fields import ArrayField


class Blog(models.Model):
  class Meta:
    verbose_name_plural = 'Blogs'
  
  article_title = models.CharField(max_length=30, null=False, blank=False)
  article_overview = models.TextField(null=True, blank=True)
  banner_image_path = models.ImageField(null=True, blank=True)
  category = ArrayField(models.CharField(max_length=200, null=True, blank=True))
  requirements = ArrayField(models.CharField(max_length=200))
  

  def __str__(self):
    return self.article_title


class BlogSection(models.Model):  
  class Meta:
    verbose_name_plural = 'Blog Sections'  
  
  article_title = models.ForeignKey(Blog, on_delete=models.CASCADE)
  title =  models.CharField(max_length=100, null=False, blank=False)
  paragraph = models.TextField(null=True, blank=True)
  image_path = models.ImageField(null=True, blank=True)
  
  def __str__(self):
    return self.article_title