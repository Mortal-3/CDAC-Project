
from django.shortcuts import render,HttpResponse
from django.http import FileResponse
import os
from home.models import Contact
# Create your views here.
def index(request):
    numbers=list(range(20))
    # return render(request,'simulator.html',context)
    return render(request,'simulator.html',{'numbers':numbers})
def simulator(request):
    numbers=list(range(20))
    # return render(request,'simulator.html',context)
    return render(request,'simulator.html',{'numbers':numbers})
def about(request):
 
    return render(request,'about.html')
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        contact =Contact
    return render(request,'contact.html')

def quantum_grocery(request):
    # Get the base directory of the Django project
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    # Construct the path to the PDF file
    pdf_path = os.path.join(BASE_DIR, 'simulator', 'static', 'Quantum.pdf')
    try:
        # Open the PDF file in binary mode
        with open('D:\\Hpc_Quantum_FrontEnd_Simulator\\DjangoProject\\simulator\\static\\Quantum.pdf', 'rb') as pdf_file:
            # Return the PDF file as a response
            return FileResponse(pdf_file, content_type='application/pdf')
    except FileNotFoundError:
        # Return a 404 response if the file is not found
        return HttpResponse("PDF file not found", status=404)

