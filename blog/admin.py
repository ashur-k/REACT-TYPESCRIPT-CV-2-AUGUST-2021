from django.contrib import admin
from .models import Blog, BlogSection, BlogReadingLink


admin.site.register(Blog)
admin.site.register(BlogSection)
admin.site.register(BlogReadingLink)
