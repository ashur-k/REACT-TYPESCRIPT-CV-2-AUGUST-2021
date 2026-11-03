from django.urls import path

from .views import WorkExperienceDetailView

urlpatterns = [
    path(
        "work-experiences/<int:pk>/",
        WorkExperienceDetailView.as_view(),
        name="work-experience-detail",
    ),
]
