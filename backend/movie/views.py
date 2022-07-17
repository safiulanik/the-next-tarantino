from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView, ListAPIView
from rest_framework.response import Response
from rest_framework import status, filters

from .serializers import MovieSerializer, FavouriteListSerializer, WatchListSerializer
from .models import Movie, FavouriteList, WatchList


class MovieListListCreateAPIView(ListCreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'genre__name']


class MovieRetrieveUpdateAPIView(RetrieveUpdateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


class WatchListListAPIView(ListAPIView):
    queryset = WatchList.objects.all()
    serializer_class = WatchListSerializer


class FavouriteMoviesListCreateAPIView(ListCreateAPIView):
    queryset = FavouriteList.objects.all()
    serializer_class = FavouriteListSerializer
