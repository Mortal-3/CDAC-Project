from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path("",views.index,name='home'),
    path("simulator",views.simulator,name='simulator'),
    path("about",views.about,name='about'),
    path("contact",views.contact,name='contact'),
    path("quantum_grocery", views.quantum_grocery, name='quantum_grocery')
]   