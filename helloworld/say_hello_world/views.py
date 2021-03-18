from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def index(request):
    return render(request, "sayhello/index.html")


def brian(request):
    return HttpResponse("Hello, Brian!")


def david(request):
    return HttpResponse("Hello, David!")


def greet(request, name):
    return render(request, "sayhello/greet.html", {
        "name": name.capitalize()
    })
