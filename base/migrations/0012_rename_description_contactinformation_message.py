# Generated by Django 3.2.6 on 2022-01-30 15:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_contactinformation_received_at'),
    ]

    operations = [
        migrations.RenameField(
            model_name='contactinformation',
            old_name='description',
            new_name='message',
        ),
    ]
