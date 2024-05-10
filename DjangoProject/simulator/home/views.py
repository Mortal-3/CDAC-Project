
from django.shortcuts import render,HttpResponse,redirect
from django.http import FileResponse
import os
from home.models import Contact
# from .models import Contact
from datetime import datetime
from django.contrib import messages

# messages.add_message(request, messages.INFO, "Hello world.")

from django.utils import timezone



# Create your views here.
def index(request):
    # messages.sucess(request)
    numbers=list(range(20))
    # return render(request,'simulator.html',context)
    return render(request,'simulator.html',{'numbers':numbers})
def simulator(request):
    numbers=list(range(20))
    # return render(request,'simulator.html',context)
    return render(request,'simulator.html',{'numbers':numbers})
def about(request):
 
    return render(request,'about.html')

from django.shortcuts import render, redirect
from django.contrib import messages
from .models import Contact
from datetime import datetime

def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
       
        # Create an instance of the Contact model and save it to the database
        contact = Contact(name=name, email=email, phone=phone, desc=desc, date=datetime.today())
        contact.save()
        
        messages.success(request, "Your details have been successfully sent!")

        return render(request, 'contact.html')

    else:
        return render(request, 'contact.html')  # Render contact.html for GET requests

def quantum_grocery(request):
 
        return render("Data uploaded Soon ! :)")

