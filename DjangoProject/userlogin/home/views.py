from django.shortcuts import render
# user= vishal
# password = password$
# Create your views here.
def index(request):
    return render(request,"index.html")
    
def login(request):
    render(request,"login.html")
    
def logout(request):
    render(request,"index.html")