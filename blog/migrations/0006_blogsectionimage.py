# Generated by Django 3.2.6 on 2021-11-07 12:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0005_rename_article_title_blogreadinglink_section_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='BlogSectionImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_title', models.CharField(max_length=100)),
                ('number_of_image', models.IntegerField(default=0)),
                ('image_path', models.ImageField(blank=True, null=True, upload_to='')),
                ('section_title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.blogsection')),
            ],
            options={
                'verbose_name_plural': 'Blog Section Images',
                'ordering': ('id',),
            },
        ),
    ]
