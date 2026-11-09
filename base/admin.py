from django.contrib import admin

from .models import (
    Aboutme,
    ContactInformation,
    CVDocument,
    Education,
    Project,
    Skill,
    SkillCapabilities,
    WorkExperience,
)


class ContactInformationAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "message", "received_at")


@admin.register(CVDocument)
class CVDocumentAdmin(admin.ModelAdmin):
    list_display = ("id", "file", "updated_at")
    readonly_fields = ("updated_at",)

    def has_add_permission(self, request):
        return not CVDocument.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False


admin.site.register(Project)
admin.site.register(Aboutme)
admin.site.register(Education)
admin.site.register(WorkExperience)
admin.site.register(Skill)
admin.site.register(SkillCapabilities)
admin.site.register(ContactInformation, ContactInformationAdmin)
