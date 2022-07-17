from django.db import models


class Genre(models.Model):
    name = models.CharField(max_length=50)


class Movie(models.Model):
    title = models.TextField()
    summary = models.TextField()
    thumbURL = models.TextField()
    genre = models.ManyToManyField(Genre)


class WatchList(models.Model):
    movie = models.ForeignKey(Genre, on_delete=models.CASCADE)
    user_id = models.CharField(max_length=255)


class FavouriteList(models.Model):
    movie = models.ForeignKey(Genre, on_delete=models.CASCADE)
    user_id = models.CharField(max_length=255)
