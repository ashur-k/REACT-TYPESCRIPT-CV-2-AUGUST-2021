from django.shortcuts import render
from django.http import JsonResponse
# Importing Django Rest Framework to View
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Project, Aboutme
from .serializers import ProjectSerializer, AboutmeSerializer


@api_view(['GET'])
def getRoutes(request):
  routes = [ 'api/getProjects' ]
  return Response(routes)


@api_view(['GET'])
def getProjects(request):
  projects = Project.objects.all()
  serializer = ProjectSerializer(projects, many=True)
  return Response(serializer.data)


@api_view(['GET'])
def getProject(request, pk):
  project = None
  return Response(project)


@api_view(['GET'])
def getResumePage(request):
  about_me = Aboutme.objects.all();
  serializer = AboutmeSerializer(about_me, many=True)
  return Response(serializer.data)