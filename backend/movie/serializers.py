from movie.models import Movie, Genre, WatchList, FavouriteList
from rest_framework import serializers


class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'

class MovieSerializer(serializers.ModelSerializer):
    genre = GenreSerializer(required=False)
    class Meta:
        model = Movie
        fields = '__all__'


class WatchListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = '__all__'


class FavouriteListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WatchList
        fields = '__all__'
