from django.urls import path
from . import views


urlpatterns = [
  path('users/login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
  path('', views.getRoutes, name='routes'),
  path('users/profile/', views.getUserProfile, name='user-profile'),
  path('users/', views.getUsers, name='users'),
  path('projects/', views.getProjects, name='projects'),
  path('project/<str:pk>/', views.getProject, name='project'),
  path('addProject/', views.addProject, name='addProject'),
  path('about_me/', views.getResumePage, name="About-Me"),
]
