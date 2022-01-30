from django.shortcuts import render
from django.http import JsonResponse
# Importing Django Rest Framework to View
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from .models import Project, Aboutme, ContactInformation
from .serializers import ProjectSerializer, AboutmeSerializer, UserSerializer, UserSerializerWithToken
from django.contrib.auth.models import User

# To Hash Passwords
from django.contrib.auth.hashers import make_password

# for error status
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for key, value in serializer.items():
          data[key] = value

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = ['api/getProjects']
    return Response(routes)

# Users Views
@api_view(['POST'])
def registerUser(request): 
    ''' Creating user taking frontend input values'''
    data = request.data
    try:        
        user = User.objects.create(
            first_name = data['name'],
            username = data['email'],
            email = data['email'],
            password = make_password(data['password'])
        )    
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists.'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)
  

@api_view(['GET'])
@permission_classes([IsAdminUser])
def getUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


# Project Views
@api_view(['GET'])
def getProjects(request):
    projects = Project.objects.all()
    serializer = ProjectSerializer(projects, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getProject(request, pk):
    project = Project.objects.get(id=pk)
    serializer = ProjectSerializer(project, many=False)
    print(pk)
    return Response(serializer.data)


@api_view(['POST'])
def addProject(request):
    data = request.data
    project = Project.objects.create(
        name=data['name'],
        description=data['description'],
        category=data['category'],
        key_techs=data['key_techs'],
        deployed_url_icon=data['deployed_url_icon'],
        deployed_url=data['deployed_url'],
        github_url=data['github_url'],
    )

    return Response('serializer.data')


@api_view(['GET'])
def getResumePage(request):
    about_me = Aboutme.objects.all()
    serializer = AboutmeSerializer(about_me, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def getContactInformation(request):
    
    data = request.data
    
    information = ContactInformation.objects.create(
        name = data['name'],
        email = data['email'],
        message= data['message']
        
    )
    
    message = {'detail': 'Your message is successfully received, thanks and I will contact you back soon.'}
    
    return Response(message, status=status.HTTP_200_OK)