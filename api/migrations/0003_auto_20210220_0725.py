# Generated by Django 3.1.6 on 2021-02-20 02:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_addproduct'),
    ]

    operations = [
        migrations.RenameField(
            model_name='addproduct',
            old_name='seller_id',
            new_name='seller',
        ),
    ]