from django.urls import path
from . import views

urlpatterns = [
    path('register/', views.registerPage, name='register'),
    path('login/', views.loginPage, name='login'),
    path('logout/', views.logoutUser, name='logout'),
    path('menu/', views.menu, name='menu'),
    path('game-list/', views.GameListView.as_view(), name='game-list')
]