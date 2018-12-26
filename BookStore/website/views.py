from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'website/page/index.html', {})
def login(request):
    return render(request, 'website/page/index.html', {})
def logout(request):
    return render(request, 'website/page/index.html', {})   
def category(request, id):
    return render(request, 'website/page/index.html', {})
def detail(request, id):
    return render(request, 'website/page/index.html', {})
def search(request):
    return render(request, 'website/page/index.html', {})
def cart(request):
    return render(request, 'website/page/index.html', {})
def checkout(request):
    return render(request, 'website/page/index.html', {})
def profile(request):
    return render(request, 'website/page/index.html', {})
def order(request):
    return render(request, 'website/page/index.html', {})
def order_detail(request, id):
    return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})
# def index(request):
#     return render(request, 'website/page/index.html', {})