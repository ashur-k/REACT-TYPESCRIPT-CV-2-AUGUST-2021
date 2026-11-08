from typing import ClassVar

from django.contrib import admin

from .models import (
    Blog,
    BlogBlock,
    BlogPresentation,
    BlogReadingLink,
    BlogSection,
    BlogSectionCodeSnippet,
    BlogSectionImage,
    BlogSectionTerminalCommand,
)


class BlogPresentationInline(admin.StackedInline):
    model = BlogPresentation
    extra = 1
    max_num = 1


class BlogBlockInline(admin.StackedInline):
    model = BlogBlock
    extra = 1
    fields = (
        "position",
        "block_type",
        "title",
        "content",
        "image",
        "configuration",
    )

    class Media:
        css: ClassVar[dict] = {"all": ("blog/admin/blog_blocks_inline.css",)}
        js = ("blog/admin/blog_blocks_inline.js",)


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    list_display = (
        "article_title",
        "display_template",
    )

    search_fields = ("article_title",)

    inlines = (
        BlogPresentationInline,
        BlogBlockInline,
    )

    @admin.display(description="Template")
    def display_template(self, obj):
        try:
            return obj.presentation.get_template_display()
        except BlogPresentation.DoesNotExist:
            return "Legacy article"


# Preserve legacy administration.
admin.site.register(BlogSection)
admin.site.register(BlogReadingLink)
admin.site.register(BlogSectionImage)
admin.site.register(BlogSectionCodeSnippet)
admin.site.register(BlogSectionTerminalCommand)
