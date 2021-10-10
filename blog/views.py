from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Blog, BlogSection
from .serializers import BlogSerializer


@api_view(['GET'])
def getBlogs(request):
    blogs = Blog.objects.all()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getBlog(request, pk):
    project = Blog.objects.get(id=pk)
    serializer = BlogSerializer(project, many=False)
    print(pk)
    return Response(serializer.data)