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
        "is_disabled",
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


@admin.register(BlogSection)
class BlogSectionAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "article_title",
    )

    list_filter = (("article_title", admin.RelatedOnlyFieldListFilter),)

    search_fields = (
        "title",
        "article_title__article_title",
    )

    @admin.display(description="Blog")
    def article_title(self, obj):
        return obj.article_title


class BlogFilter(admin.SimpleListFilter):
    title = "Blog"
    parameter_name = "blog"

    def lookups(self, request, model_admin):
        blogs = Blog.objects.order_by("article_title")

        return [(str(blog.pk), blog.article_title) for blog in blogs]

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(section_title__article_title_id=self.value())

        return queryset


class BlogSectionFilter(admin.SimpleListFilter):
    title = "Blog Section"
    parameter_name = "blog_section"

    def lookups(self, request, model_admin):
        sections = BlogSection.objects.all()

        blog_id = request.GET.get("blog")
        if blog_id:
            sections = sections.filter(article_title_id=blog_id)

        return [
            (str(section.pk), section.title) for section in sections.order_by("title")
        ]

    def queryset(self, request, queryset):
        if self.value():
            return queryset.filter(section_title_id=self.value())
        return queryset


@admin.register(BlogSectionImage)
class BlogSectionImageAdmin(admin.ModelAdmin):
    list_display = (
        "image_title",
        "section_title",
        "number_of_image",
    )

    list_filter = (
        BlogFilter,
        BlogSectionFilter,
    )

    search_fields = (
        "image_title",
        "section_title__title",
        "section_title__article_title__article_title",
    )


admin.site.register(BlogReadingLink)
admin.site.register(BlogSectionCodeSnippet)
admin.site.register(BlogSectionTerminalCommand)
