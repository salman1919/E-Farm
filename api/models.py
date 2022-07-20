import datetime

from django.contrib.auth.models import AbstractUser
from django.db import models

d = datetime.date(2021, 12, 31)


class User(AbstractUser):
    type = models.TextField(max_length=20, blank=True)


class AddProduct(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.IntegerField(blank=True, default=0)
    base_price = models.IntegerField(blank=True, default=0)
    expiry = models.DateField(default=d)
    description = models.TextField(max_length=500, blank=True)
    seller = models.ForeignKey(User, on_delete=models.CASCADE)


class AddBid(models.Model):
    bidPrice = models.IntegerField(blank=True, default=0)
    msg = models.TextField(max_length=500, blank=True)
