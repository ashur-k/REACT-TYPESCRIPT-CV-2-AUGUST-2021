from rest_framework import serializers
from .models import Blog, BlogSection


class BlogSectionSerializer(serializers.ModelSerializer):
  class Meta:
    model = BlogSection
    fields = '__all__'



class BlogSerializer(serializers.ModelSerializer):
  
  blog_sections = serializers.SerializerMethodField(read_only=True)
  
  class Meta:
    model = Blog
    fields = '__all__'
    
  def get_blog_sections(self, obj):   
    blog_sections = obj.blogsection_set.all()
    serializer = BlogSectionSerializer(blog_sections, many=True)
    return serializer.data