from django.shortcuts import render, redirect

import requests, json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, Http404
from django.contrib import messages
import random   

from datetime import datetime
from datetime import timedelta
# Create your views here.

def check_account(request):
    if 'token' in request.session:
        url = "http://192.168.48.3/api/account/checktoken"
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer " + request.session.get('token'),
            }
        response = requests.get(url, headers=headers)
        if response.status_code == requests.codes.ok:
            json = response.json()
            if json['role'] == 0:
                return 1
            else:
                return 0
        return 0
    return 0

def check_account_stock(request):
    if 'token' in request.session:
        url = "http://192.168.48./api/account/checktoken"
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer " + request.session.get('token'),
            }
        response = requests.get(url, headers=headers)
        if response.status_code == requests.codes.ok:
            json = response.json()
            if json['role'] == 0:
                return 1
            else:
                return 0
        return 0
    return 0

def index(request):

    return render(request, 'website/page/index.html', {})
def login(request):
    if check_account(request):
        messages.warning(request, message="Tài khoản đã đăng nhập vào hệ thống", extra_tags='alert')
        return redirect('/admin')  
    if request.method == "POST":
        email = request.POST.get('inputEmail')
        password = request.POST.get('inputPassword')
        if email == '':
            messages.warning(request, message="Email không được để trống!", extra_tags='alert')
            return redirect('/admin/login')
        if password == '':
            messages.warning(request, message="Mật khẩu không được để trống!", extra_tags='alert')
            return redirect('/admin/login')
        url = "http://192.168.48.3/api/account/login"
        payload = {
            "Email": email,
            "Password": password,
        }
        headers = {'contentType' : 'application/json'}
        response = requests.post(url, json=payload, headers=headers)
        if response.status_code == requests.codes.ok:
            json = response.json()
            messages.success(request, message="Đăng nhập thành công", extra_tags='alert')
            request.session['token'] = json["token"]
            return redirect('/admin')
        messages.warning(request, message="Không thể đăng nhập", extra_tags='alert')
        return redirect('/admin/login')
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