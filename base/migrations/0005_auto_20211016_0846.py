# Generated by Django 3.2.6 on 2021-10-16 07:46

import base.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0004_project_deployed_url_icon'),
    ]

    operations = [
        migrations.AddField(
            model_name='workexperience',
            name='display_order',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='workexperience',
            name='office_job',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='workexperience',
            name='work_url',
            field=models.CharField(blank=True, default='www.google.com', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='deployed_url',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='workexperience',
            name='github_url',
            field=models.CharField(blank=True, max_length=500, null=True),
        ),
    ]
