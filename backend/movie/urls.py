from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from movie import views

urlpatterns = [
    path('/', views.MovieListListCreateAPIView.as_view()),
    path('/<int:pk>/', views.MovieListListCreateAPIView.as_view()),
    path('/favourite/', views.FavouriteMoviesListCreateAPIView.as_view()),
    path('/watchlist/', views.WatchListListAPIView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
