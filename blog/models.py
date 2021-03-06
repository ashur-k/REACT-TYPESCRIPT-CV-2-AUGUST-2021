from django.db import models
from django.contrib.postgres.fields import ArrayField


class Blog(models.Model):
  class Meta:
    verbose_name_plural = 'Blogs'
  
  article_title = models.CharField(max_length=50, null=False, blank=False)
  article_overview = models.TextField(null=True, blank=True)
  banner_image_path = models.ImageField(null=True, blank=True)
  category = ArrayField(models.CharField(max_length=200, null=True, blank=True))
  requirements = ArrayField(models.CharField(max_length=200))
  

  def __str__(self):
    return self.article_title


class BlogSection(models.Model):  
  class Meta:
    verbose_name_plural = 'Blog Sections'
    ordering = ('id',)
  
  article_title = models.ForeignKey(Blog, on_delete=models.CASCADE)
  title =  models.CharField(max_length=100, null=False, blank=False)
  paragraph = models.TextField(null=True, blank=True)
  image_path = models.ImageField(null=True, blank=True)
  
  def __str__(self):
    return self.title


class BlogReadingLink(models.Model):
  class Meta:
    verbose_name_plural = 'Blog Reading Links'
    ordering = ('id',)
  
  section_title = models.ForeignKey(BlogSection, on_delete=models.CASCADE)
  link_title = models.CharField(max_length=100, null=False, blank=False)
  link_url = models.URLField(max_length = 200, null=False, blank=False)
  
  def __str__(self):
    return self.section_title.title + " - " + self.link_title


class BlogSectionImage(models.Model):
  class Meta:
    verbose_name_plural = 'Blog Section Images'
    ordering = ('id',)
  
  section_title = models.ForeignKey(BlogSection, on_delete=models.CASCADE)
  image_title = models.CharField(max_length=100, null=False, blank=False)
  number_of_image = models.IntegerField(default=0)
  image_path = models.ImageField(null=True, blank=True)
  
  def __str__(self):
    return self.section_title.title + " - " + self.image_title


class BlogSectionCodeSnippet(models.Model):
  class Meta:
    verbose_name_plural = 'Code Snippets'
    ordering = ('id',)
  
  section_title = models.ForeignKey(BlogSection, on_delete=models.CASCADE)
  code_title = models.CharField(max_length=100, null=False, blank=False)
  code_snippet = models.TextField(null=True, blank=True)
  
  def __str__(self):
    return self.section_title.title + " - " + self.code_title


class BlogSectionTerminalCommand(models.Model):
  class Meta:
    verbose_name_plural = 'Terminal Commands'
    ordering = ('id',)
  
  section_title = models.ForeignKey(BlogSection, on_delete=models.CASCADE)
  command_title = models.CharField(max_length=100, null=False, blank=False)
  command_icon = models.CharField(max_length=100, null=False, blank=False)
  command = models.TextField(null=True, blank=True)
  
  def __str__(self):
    return self.section_title.title + " - " + self.command_title