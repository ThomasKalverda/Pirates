from django.urls import path
from .views import GameDetail, GameList, MapList, MapDetail, IslandList, IslandDetail, HexDetail, HexList, FleetDetail, FleetList, PlayerList, PlayerDetail

urlpatterns = [
    path('game-list/', GameList.as_view()),
    path('game-detail/<pk>/', GameDetail.as_view()),
    path('map-list/', MapList.as_view()),
    path('map-detail/<pk>/', MapDetail.as_view()),
    path('island-list/', IslandList.as_view()),
    path('island-detail/<pk>/', IslandDetail.as_view()),
    path('hex-list/', HexList.as_view()),
    path('hex-detail/<pk>/', HexDetail.as_view()),
    path('player-list/', PlayerList.as_view()),
    path('player-detail/<pk>/', PlayerDetail.as_view()),
    path('fleet-list/', FleetList.as_view()),
    path('fleet-detail/<pk>/', FleetDetail.as_view()),
]