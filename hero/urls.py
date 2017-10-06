from django.conf.urls import url, include

from accounts.views import UserViewSet
from hero import views
from hero.views import HeroViewSet, SearchList

# hero_list = HeroViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
# hero_detail = HeroViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'delete': 'destroy'
# })

# urlpatterns = [
#     url(r'^list/$', hero_list,),
#     url(r'^details/$', hero_detail,),
# ]
#
from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'heroes', HeroViewSet)
router.register(r'accounts', UserViewSet)
urlpatterns = [
    url(r'^search/(?P<name>[-\w]+)/$', views.SearchList.as_view()),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    ]
urlpatterns = urlpatterns+router.urls