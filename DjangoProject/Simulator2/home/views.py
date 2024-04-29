from django.shortcuts import render,HttpResponse
# Create your views here.
def index(request):
    # return HttpResponse("My Home Page.")   
    return render(request,'base.html')
def about(request):
    return HttpResponse("My About Page.")   
def contact(request):
    return HttpResponse("My Contact Page.")   
def quantum_grocery(request):
    return HttpResponse("My Quantum Grocery.")   