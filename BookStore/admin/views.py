from django.shortcuts import render, redirect

import requests, json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, Http404
from django.contrib import messages
import random   

from datetime import datetime
from datetime import timedelta

# ip product : 192.168.48.4
# ip order: 192.168.48.
# ip stock:

# Create your views here.

def check_account(request):
    if 'token' in request.session:
        url = "http://192.168.48.4/api/account/checktoken"
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer " + request.session.get('token'),
            }
        response = requests.get(url, headers=headers)
        if response.status_code == requests.codes.ok:
            json = response.json()
            if json['role'] == 1:
                return 1
            else:
                return 0
        return 0
    return 0

def check_account_stock(request):
    if 'token' in request.session:
        url = "http://192.168.48.4/api/account/checktoken"
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer " + request.session.get('token'),
            }
        response = requests.get(url, headers=headers)
        if response.status_code == requests.codes.ok:
            json = response.json()
            if json['role'] == 1:
                return 1
            else:
                return 0
        return 0
    return 0

@csrf_exempt
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
        url = "http://192.168.48.4/api/account/login"
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
    return render(request, 'admin/login.html', {})

def logout(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    del request.session['token']
    return redirect('/admin/login')

def index(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    return render(request, 'admin/page/index.html', {})

def manager_account(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')

    url = "http://192.168.48.4/api/account/all"
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        json = response.json()
        print(json)
        return render(request, 'admin/page/account/manager.html', {"data": json})
    messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
    return redirect('/admin')

def see_account(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url = "http://192.168.48.4/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        json = response.json()
        json['created'] = json['created'].split('T')[0]
        return render(request, 'admin/page/account/see.html', {'data': json})
    messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
    return redirect('/admin')
    
def manager_rating(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url = "http://192.168.48.4/api/rating/GetAvailable"
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        json = response.json()
        print(json)
        return render(request, 'admin/page/rating/manager.html', {"data": json})
    messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
    return redirect('/admin')
def see_rating(request):
    return render(request, 'admin/page/rating/see.html', {})

def manager_order(request):
    return render(request, 'admin/page/order/manager.html', {})
def see_order(request):
    return render(request, 'admin/page/order/see.html', {})

def manager_category(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url = "http://192.168.48.4/api/category/GetAvailable"
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        json = response.json()
        print(json)
        return render(request, 'admin/page/category/manager.html', {"data": json})
    messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
    return redirect('/admin')
    
@csrf_exempt
def add_category(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    if request.method == "POST":
        name = request.POST.get('inputName')
        if name == "":
            messages.warning(request, message="Không được để trống tên thể loại!", extra_tags='alert')
            return redirect('/admin/manager_category')
        url = "http://192.168.48.4/api/category"
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer " + request.session.get('token'),
            }
        payload = {
            'categoryName':  name, 
            'quantity': 0, 
            'archive': False, 
        }
        response = requests.post(url, json=payload, headers=headers)
        if response.status_code == requests.codes.ok:
            messages.success(request, message="Sửa thành công!", extra_tags='alert')
            return redirect('/admin/manager_category')
        else:
            messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
            return redirect('/admin/manager_category')
    return render(request, 'admin/page/category/add.html', {})

@csrf_exempt
def edit_category(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    # check user
    url = "http://192.168.48.4/api/category/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        json = response.json()
    else:
        messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        return redirect('/admin/manager_category')
    # edit
    if request.method == "POST":
        name = request.POST.get('inputName')
        if name == "":
            messages.warning(request, message="Không được để trống tên thể loại!", extra_tags='alert')
            return redirect('/admin/manager_category')
        url = "http://192.168.48.4/api/category/" + str(id)
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer " + request.session.get('token'),
            }
        payload = {
            'id': str(id),
            'categoryName':  name, 
            'quantity': json['quantity'], 
            'archive': json['archive'], 
        }
        response_edit = requests.put(url, json=payload, headers=headers)
        if response_edit.status_code == requests.codes.ok:
            messages.success(request, message="Sửa thành công!", extra_tags='alert')
            return redirect('/admin/manager_category')
        else:
            messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
            return redirect('/admin/manager_category')
    return render(request, 'admin/page/category/edit.html', {"data": json})

def manager_product(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url = "http://192.168.48.4/api/product/all"
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        json = response.json()
        print(json)
        return render(request, 'admin/page/product/manager.html', {"data": json})
    messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
    return redirect('/admin')

@csrf_exempt
def add_product(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    
    if request.method == "POST" and request.FILES['inputFile']:
        print(request.POST)
        print(request.FILES['inputFile'])
        # image = request.FILES['inputFile']
        # url_image = 'http://192.168.48.4/api/upload'
        # headers = {
        #     'content-type': "multipart/form-data; boundary=33b4531a79be4b278de5f5688fab7701",
        #     'authorization': "Bearer " + request.session.get('token'),
        # }
        # files = {'file': image}
        # response_upload_image = requests.post(url_image, files=files, headers=headers)
        # print(response_upload_image.json())
        # if response_upload_image.status_code == requests.codes.ok:
        #     id_image = (response_upload_image.text)
        #     print(id_image)
        # else:
        #     messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        #     return redirect('/admin/manager_product')
        list_image : [random.randint(0,9)]
        url_add_product = 'http://192.168.48.4/api/product'

    url = "http://192.168.48.4/api/category/GetAvailable"
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.get(url, headers=headers)
    if response.status_code == requests.codes.ok:
        category = response.json()
    else:
        messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        return redirect('/admin/manager_product')
    return render(request, 'admin/page/product/add.html', {"category": category})

@csrf_exempt
def edit_product(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')

    
    return render(request, 'admin/page/product/edit.html', {})

def manager_receipt(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    return render(request, 'admin/page/receipt/manager.html', {})
@csrf_exempt
def add_receipt(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    return render(request, 'admin/page/receipt/add.html', {})
@csrf_exempt
def edit_receipt(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    return render(request, 'admin/page/receipt/edit.html', {})

def manager_stock(request):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    return render(request, 'admin/page/stock/manager.html', {})

@csrf_exempt
def see_stock(request):
    if check_account_stock(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    
    return render(request, 'admin/page/stock/add.html', {})
@csrf_exempt
def edit_stock(request):
    return render(request, 'admin/page/stock/edit.html', {})
def setup(request):
    return


# def login(request):
#     return render(request, 'admin/page/login.html', {})
# def login(request):
#     return render(request, 'admin/page/login.html', {})
