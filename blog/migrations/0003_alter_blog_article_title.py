# Generated by Django 3.2.6 on 2021-10-30 10:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0002_blog_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='article_title',
            field=models.CharField(max_length=50),
        ),
    ]
