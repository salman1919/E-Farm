# Generated by Django 3.1.6 on 2021-02-20 02:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210220_0725'),
    ]

    operations = [
        migrations.AddField(
            model_name='addproduct',
            name='base_price',
            field=models.IntegerField(blank=True, default=0, max_length=100000),
        ),
        migrations.AddField(
            model_name='addproduct',
            name='quantity',
            field=models.IntegerField(blank=True, default=0, max_length=1000),
        ),
    ]
