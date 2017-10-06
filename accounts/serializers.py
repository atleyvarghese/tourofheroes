from django.contrib.auth.models import User
from rest_framework import serializers




class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name','last_name','email', 'username', 'password')
    def create(self,request, *args, **kwargs):
        # print(request)

        # import pdb
        # pdb.set_trace()

        print(request)
        user = User(
            email=request['email'],
            username=request['username'],
            first_name =request['first_name'],
            last_name=request['last_name'],
        )
        user.set_password(request['password'])
        user.save()
        return user