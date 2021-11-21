from rest_framework import serializers
from .models import (
  Blog, 
  BlogSection, 
  BlogReadingLink, 
  BlogSectionImage, 
  BlogSectionCodeSnippet,
  BlogSectionTerminalCommand
  )


class BlogReadingLinkSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogReadingLink
    fields = '__all__'


class BlogSectionImageSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogSectionImage
    fields = '__all__'
  

class BlogSectionCodeSnippetSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogSectionCodeSnippet
    fields = '__all__'


class BlogSectionTerminalCommandSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogSectionTerminalCommand
    fields = '__all__'


class BlogSectionSerializer(serializers.ModelSerializer):
  
  blog_reading_links = serializers.SerializerMethodField(read_only=True)
  blog_section_images = serializers.SerializerMethodField(read_only=True)
  blog_section_code_snippets = serializers.SerializerMethodField(read_only=True)
  blog_section_terminal_commands = serializers.SerializerMethodField(read_only=True)
  
  
  class Meta:
    model = BlogSection
    fields = '__all__'
    
  def get_blog_reading_links(self, obj):
    blog_reading_links = obj.blogreadinglink_set.all()
    serializer = BlogReadingLinkSerializer(blog_reading_links, many=True)
    return serializer.data
  
  def get_blog_section_images(self, obj):
    blog_section_images = obj.blogsectionimage_set.all()
    serializer = BlogSectionImageSerializer(blog_section_images, many=True)
    return serializer.data
  
  def get_blog_section_code_snippets(self, obj):
    blog_section_code_snippets = obj.blogsectioncodesnippet_set.all()
    serializer = BlogSectionCodeSnippetSerializer(blog_section_code_snippets, many=True)
    return serializer.data

  def get_blog_section_terminal_commands(self, obj):
    blog_section_terminal_commands = obj.blogsectionterminalcommand_set.all()
    serializer = BlogSectionTerminalCommandSerializer(blog_section_terminal_commands, many=True)
    return serializer.data
    

class BlogSerializer(serializers.ModelSerializer):
  
  blog_sections = serializers.SerializerMethodField(read_only=True)
  
  class Meta:
    model = Blog
    fields = '__all__'
    
  def get_blog_sections(self, obj):   
    blog_sections = obj.blogsection_set.all()
    serializer = BlogSectionSerializer(blog_sections, many=True)
    return serializer.data
  

