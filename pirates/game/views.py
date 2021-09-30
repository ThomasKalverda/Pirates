from django.shortcuts import render, redirect
from .models import *
from .forms import CreateUserForm
from django.contrib.auth.forms import UserCreationForm


def registerPage(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    
    context = {'form': form}
    return render(request, 'game/register.html', context)

def loginPage(request):
    context = {}
    return render(request, 'game/login.html', context)
