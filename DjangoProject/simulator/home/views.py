from django.shortcuts import render,HttpResponse

# Create your views here.
def index(request):
   
    return render(request,'base.html')
def simulator(request):
    numbers = list(range(20))

    # return render(request,'simulator.html',context)
    return render(request,'simulator.html',{'numbers': numbers})
def about(request):
 
    return render(request,'about.html')
def contact(request):
   
    return render(request,'contact.html')
def quantum_grocery(request):
    return HttpResponse("My Quantum Grocery.")   