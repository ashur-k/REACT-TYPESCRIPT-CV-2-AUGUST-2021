from django.db import models

from .legacy_models import Blog


class BlogBlock(models.Model):
    class BlockType(models.TextChoices):
        HEADING = "heading", "Heading"
        PARAGRAPH = "paragraph", "Paragraph"
        IMAGE = "image", "Image"
        CODE = "code", "Code Snippet"
        TERMINAL = "terminal", "Terminal Command"
        QUOTE = "quote", "Quote"
        CALLOUT = "callout", "Information Box"
        TABLE = "table", "Table"
        DIVIDER = "divider", "Divider"
        READING_LINKS = "reading_links", "Reading Links"

    blog = models.ForeignKey(
        Blog,
        on_delete=models.CASCADE,
        related_name="blocks",
    )

    block_type = models.CharField(
        max_length=30,
        choices=BlockType.choices,
    )

    position = models.PositiveIntegerField(default=0)

    title = models.CharField(
        max_length=200,
        blank=True,
    )

    content = models.TextField(
        blank=True,
    )

    image = models.ImageField(
        upload_to="blogs/blocks/",
        null=True,
        blank=True,
    )

    configuration = models.JSONField(
        default=dict,
        blank=True,
    )

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Blog Content Block"
        verbose_name_plural = "Blog Content Blocks"
        ordering = ("position", "id")
        indexes = (
            models.Index(
                fields=["blog", "position"],
                name="blog_block_position_idx",
            ),
        )

    def __str__(self):
        return (
            f"{self.blog.article_title} - "
            f"{self.get_block_type_display()} "
            f"(Position {self.position})"
        )
