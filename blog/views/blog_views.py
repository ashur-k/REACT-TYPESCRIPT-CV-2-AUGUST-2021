from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response

from ..models import Blog
from ..serializers import BlogArticleSerializer


@api_view(["GET"])
def getBlogArticles(request):
    blogs = (
        Blog.objects.filter(presentation__isnull=False)
        .prefetch_related("blocks")
        .select_related("presentation")
        .order_by("id")
    )

    serializer = BlogArticleSerializer(blogs, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getBlogArticle(request, pk):
    blog = get_object_or_404(
        Blog.objects.select_related("presentation").prefetch_related("blocks"),
        pk=pk,
        presentation__isnull=False,
    )

    serializer = BlogArticleSerializer(blog)
    return Response(serializer.data)
