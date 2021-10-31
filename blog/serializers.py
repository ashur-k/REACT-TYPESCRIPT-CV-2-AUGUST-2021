from rest_framework import serializers
from .models import Blog, BlogSection, BlogReadingLink


class BlogReadingLink(serializers.ModelSerializer):
  class Meta:
    model = BlogReadingLink
    fields = '__all__'


class BlogSectionSerializer(serializers.ModelSerializer):
  
  blog_reading_links = serializers.SerializerMethodField(read_only=True)
  
  class Meta:
    model = BlogSection
    fields = '__all__'
    
  def get_blog_reading_links(self, obj):
    blog_reading_links = obj.blogreadinglink_set.all()
    serializer = BlogReadingLink(blog_reading_links, many=True)
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
  

