from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics, status
from .serializers import GameSerializer, MapSerializer, IslandSerializer, HexSerializer, PlayerSerializer, FleetSerializer
from .models import Game, Map
from game.models import Island, Hex, Player, Fleet
from rest_framework.views import APIView
from rest_framework.response import Response
from json import dumps

class GameList(generics.ListCreateAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GameDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Game.objects.all()
    serializer_class = GameSerializer

class GetGame(APIView):
    serializer_class = GameSerializer
    lookup_url_kwarg = "code"

    def get(self, request, format=None):
        code = request.GET.get(self.lookup_url_kwarg)
        if code != None:
            game = Game.objects.filter(code=code).first()
            map = Map.objects.filter(game=game).first()
            islands = Island.objects.filter(map=map)
            if game:
                data = GameSerializer(game).data
                if map and islands:
                    island_list = []
                    for island in islands:
                        island_data = IslandSerializer(island).data
                        island_list.append(island_data)
                    data['islands'] = dumps(island_list)
                    print(data)
                return Response(data, status=status.HTTP_200_OK)
            return Response(
                {"Game Not Found": "Invalid Game Code."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(
            {"Bad Request": "Code parameter not found in request"},
            status=status.HTTP_400_BAD_REQUEST,
        )

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
