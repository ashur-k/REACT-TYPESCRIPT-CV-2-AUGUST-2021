from django.contrib import admin
from .models import Blog, BlogSection, BlogReadingLink, BlogSectionImage, BlogSectionCodeSnippet


admin.site.register(Blog)
admin.site.register(BlogSection)
admin.site.register(BlogReadingLink)
admin.site.register(BlogSectionImage)
admin.site.register(BlogSectionCodeSnippet)
