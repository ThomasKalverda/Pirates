from django.urls import path
from .views import GameDetail, GameList, MapList, MapDetail

urlpatterns = [
    path('game-list/', GameList.as_view()),
    path('game-detail/<pk>/', GameDetail.as_view()),
    path('map-list/', MapList.as_view()),
    path('map-detail/<pk>/', MapDetail.as_view()),
]