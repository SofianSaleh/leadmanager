from django.shortcuts import render

# Create your views here.
# Loading templates
def index(request):
    return render(request,'frontend/index.html')
