from django.db import models

# Create your models here.

class HeroList(models.Model):

    name = models.CharField(max_length=40)

    class Meta:
        verbose_name_plural = "Hero List"

    def __str__(self):  # __unicode__ on Python 2
        return self.name

