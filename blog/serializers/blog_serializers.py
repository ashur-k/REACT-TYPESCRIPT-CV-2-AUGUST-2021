from rest_framework import serializers

from ..models import Blog, BlogBlock, BlogPresentation


class BlogPresentationSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPresentation
        fields = (
            "id",
            "template",
            "configuration",
        )


class BlogBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogBlock
        fields = (
            "id",
            "block_type",
            "position",
            "title",
            "content",
            "image",
            "configuration",
        )


class BlogArticleSerializer(serializers.ModelSerializer):
    presentation = BlogPresentationSerializer(read_only=True)
    blocks = BlogBlockSerializer(many=True, read_only=True)

    class Meta:
        model = Blog
        fields = (
            "id",
            "article_title",
            "article_overview",
            "banner_image_path",
            "category",
            "requirements",
            "presentation",
            "blocks",
        )


class BlogListSerializer(serializers.ModelSerializer):
    presentation = serializers.SerializerMethodField()

    class Meta:
        model = Blog
        fields = (
            "id",
            "article_title",
            "article_overview",
            "banner_image_path",
            "category",
            "presentation",
        )

    def get_presentation(self, obj):
        presentation = getattr(obj, "presentation", None)

        if presentation is None:
            return {
                "template": "legacy",
                "label": "Legacy Blog",
            }

        return {
            "template": presentation.template,
            "label": presentation.get_template_display(),
        }
