
from rest_framework import viewsets, permissions, generics


from hero.models import HeroList
from hero.serializers import HeroListSerializer


class HeroViewSet(viewsets.ModelViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """
    queryset = HeroList.objects.all()
    serializer_class = HeroListSerializer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class SearchList(generics.ListAPIView):
    serializer_class = HeroListSerializer

    def get_queryset(self):
        name = self.kwargs['name']
        return HeroList.objects.filter(name__icontains=name)


