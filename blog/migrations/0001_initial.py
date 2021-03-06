# Generated by Django 3.2.6 on 2021-10-10 10:33

import django.contrib.postgres.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_title', models.CharField(max_length=30)),
                ('article_overview', models.TextField(blank=True, null=True)),
                ('banner_image_path', models.ImageField(blank=True, null=True, upload_to='')),
                ('requirements', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(max_length=200), size=None)),
            ],
            options={
                'verbose_name_plural': 'Blogs',
            },
        ),
        migrations.CreateModel(
            name='BlogSection',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('paragraph', models.TextField(blank=True, null=True)),
                ('image_path', models.ImageField(blank=True, null=True, upload_to='')),
                ('article_title', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.blog')),
            ],
            options={
                'verbose_name_plural': 'Blog Sections',
            },
        ),
    ]
