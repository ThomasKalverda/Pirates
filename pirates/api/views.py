from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .serializers import GameSerializer, MapSerializer
from .models import Game, Map


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

def main(request):
    return HttpResponse("Hello")
