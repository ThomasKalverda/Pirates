from django.shortcuts import render, redirect
from .models import *
from .forms import CreateUserForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.views.generic import ListView


def registerPage(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, 'Account was created for '+ username)
            return redirect('login')
    
    context = {'form': form}
    return render(request, 'game/register.html', context)

def loginPage(request):
    context = {}
    if request.method == 'POST':

        user = authenticate(request, username=request.POST.get('username'), password=request.POST.get('password'))
        if user is not None:
            login(request, user)
            return redirect('menu')
        else:
            messages.info(request, 'Username OR password is incorrect')
    
    return render(request, 'game/login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')


class GameListView(ListView):
    model = Game
    template_name = 'game/game_list.html'
    context_object_name = 'games'

    # Set extra context data for user specific poules
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        user = self.request.user.id
        user_games = Game.objects.filter(users__id=user)
        context['user_games'] = user_games
        return context

def menu(request):
    return render(request, 'game/menu.html')
