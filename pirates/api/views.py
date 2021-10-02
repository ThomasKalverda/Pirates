from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import GameSerializer, MapSerializer, IslandSerializer, HexSerializer, PlayerSerializer, FleetSerializer
from .models import Game, Map
from game.models import Island, Hex, Player, Fleet


class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class MapList(generics.ListCreateAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

class MapDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Map.objects.all()
    serializer_class = MapSerializer

class IslandList(generics.ListCreateAPIView):
    queryset = Island.objects.all()
    serializer_class = IslandSerializer

class IslandDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Island.objects.all()
    serializer_class = IslandSerializer

class HexList(generics.ListCreateAPIView):
    queryset = Hex.objects.all()
    serializer_class = HexSerializer

class HexDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Hex.objects.all()
    serializer_class = HexSerializer

class PlayerList(generics.ListCreateAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class PlayerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Player.objects.all()
    serializer_class = PlayerSerializer

class FleetList(generics.ListCreateAPIView):
    queryset = Fleet.objects.all()
    serializer_class = FleetSerializer

class FleetDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Fleet.objects.all()
    serializer_class = FleetSerializer


def main(request):
    return HttpResponse("Hello")
