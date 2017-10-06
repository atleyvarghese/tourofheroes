from django.contrib import admin

# Register your models here.
from hero.models import HeroList

admin.site.register(HeroList)
