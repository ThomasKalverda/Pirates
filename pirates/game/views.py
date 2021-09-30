from django.shortcuts import render, redirect
from .models import *
from .forms import CreateUserForm
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


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
            return redirect('home')
        else:
            messages.info(request, 'Username OR password is incorrect')
    
    return render(request, 'game/login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login')