from rest_framework import serializers
from hero.models import HeroList




class HeroListSerializer(serializers.ModelSerializer):
    class Meta:
        model = HeroList
        fields = ('id', 'name')