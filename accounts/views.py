from django.contrib.auth import get_user_model
from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets, permissions
from rest_framework.authtoken.models import Token

from accounts.serializers import UserSerializer


class UserViewSet(viewsets.ModelViewSet):


    queryset = get_user_model().objects
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class UserEdit(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    def get_queryset(self,request):
        import pdb
        pdb.set_trace()
        user = Token.objects.get(key=request.get()).user
        return user
