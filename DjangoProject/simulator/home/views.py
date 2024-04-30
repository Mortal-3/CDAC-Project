from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
   
    return render(request,'simulator.html')
def simulator(request):
    context = {
        'number_1': range(5),
        'number_2':range(20),
    }
  
    # return render(request,'simulator.html',context)
    return render(request,'simulator.html',context)
def about(request):
 
    return render(request,'about.html')
def contact(request):
   
    return render(request,'contact.html')
def quantum_grocery(request):
    return HttpResponse("My Quantum Grocery.")   