from django.contrib import admin
from .models import Project, Aboutme, Education, WorkExperience, Skill, SkillCapabilities


admin.site.register(Project)
admin.site.register(Aboutme)
admin.site.register(Education)
admin.site.register(WorkExperience)
admin.site.register(Skill)
admin.site.register(SkillCapabilities)
