from django.urls import path

from . import views

urlpatterns = [
    # Legacy blog API
    path("blogs/", views.getBlogs, name="blogs"),
    path("blog/<str:pk>/", views.getBlog, name="blog"),
    # New blog API
    path("articles/", views.getBlogArticles, name="blog-articles"),
    path(
        "articles/<int:pk>/",
        views.getBlogArticle,
        name="blog-article",
    ),
]
