from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Account(User):
    display_name = models.CharField(max_length=200)
    phone = models.CharField(max_length=10)
    address = models.CharField(max_length=200)
    is_admin = models.BooleanField(default=False)