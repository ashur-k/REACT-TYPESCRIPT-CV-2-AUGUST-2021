from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Project, Aboutme, Education, WorkExperience, Skill, SkillCapabilities
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
  
  name = serializers.SerializerMethodField(read_only=True)
  isAdmin= serializers.SerializerMethodField(read_only=True)
  
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'name', 'isAdmin']
  
  
  def get_isAdmin(self, obj):
    return obj.is_staff
  
  
  def get_name(self, obj):
    name = obj.first_name # + ' ' + obj.last_name
    if name == '':
      name = obj.email
      
    return name
      

class UserSerializerWithToken(UserSerializer):  
  token = serializers.SerializerMethodField(read_only=True)
  class Meta:
      model = User 
      fields = ['id', 'username', 'email', 'name', 'isAdmin', 'token']  
  
  def get_token(self, obj):
      token = RefreshToken.for_user(obj)
      return str(token.access_token)



class EducationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Education
    fields = '__all__'


class WorkExperienceSerializer(serializers.ModelSerializer):
  class Meta:
    model = WorkExperience
    fields = '__all__'


class SkillSerializer(serializers.ModelSerializer):
  class Meta:
    model = Skill
    fields = '__all__'


class SkillCapabilitiesSerializer(serializers.ModelSerializer):
  class Meta:
    model = SkillCapabilities
    fields = '__all__'


class AboutmeSerializer(serializers.ModelSerializer):  
  
  education_details = serializers.SerializerMethodField(read_only=True)
  work_expereinces = serializers.SerializerMethodField(read_only=True)
  skills = serializers.SerializerMethodField(read_only=True)
  skill_capabilities = serializers.SerializerMethodField(read_only=True)
  
  class Meta:
    model = Aboutme
    fields = '__all__'
  
  def get_education_details(self, obj):   
    education_details = obj.education_set.all()
    serializer = EducationSerializer(education_details, many=True)
    return serializer.data
  
  def get_work_expereinces(self, obj):
    work_expereinces = obj.workexperience_set.all()
    serializer = WorkExperienceSerializer(work_expereinces, many=True)
    return serializer.data
  
  def get_skills(self, obj):
    skills = obj.skill_set.all()
    serializer = SkillSerializer(skills, many=True)
    return serializer.data

  def get_skill_capabilities(self, obj):
    skill_capabilities = obj.skillcapabilities_set.all()
    serializer = SkillCapabilitiesSerializer(skill_capabilities, many=True)
    return serializer.data


class ProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = Project
    fields = '__all__'