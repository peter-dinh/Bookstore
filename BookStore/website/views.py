from django.shortcuts import render

# Create your views here.


def index(request):
    return render(request, 'website/page/index.html', {})
def login(request):
    return render(request, 'website/page/login.html', {})
def logout(request):
    return render(request, 'website/page/index.html', {})   
# def category(request, id):
#     return render(request, 'website/page/category.html', {})

def category(request):
    return render(request, 'website/page/category.html', {})

# def detail(request, id):
#     return render(request, 'website/page/index.html', {})

def detail(request):
    return render(request, 'website/page/detail.html', {})

def search(request):
    return render(request, 'website/page/search.html', {})
def cart(request):
    return render(request, 'website/page/cart.html', {})
def checkout(request):
    return render(request, 'website/page/checkout.html', {})
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