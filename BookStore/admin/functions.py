from django.shortcuts import render, redirect

import requests, json
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, Http404
from django.contrib import messages

from datetime import datetime
from datetime import timedelta

# ip product : 192.168.48.4
# ip order: 
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


#can check khong cho phep khoa tai khoan dang login
def lock(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    flat = True
    url = "http://192.168.48.4/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.delete(url, headers=headers)
    if response.status_code != requests.codes.ok:
        flat = False
    
    url = "http://192.168.48.5/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.delete(url, headers=headers)
    if response.status_code != requests.codes.ok:
        flat = False
    
    url = "http://192.168.48.3/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.delete(url, headers=headers)
    if response.status_code != requests.codes.ok:
        flat = False
    if flat == True:
        messages.success(request, message="Khóa thành công!", extra_tags='alert')
        return redirect('/admin/manager_account')
    else:
        messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        return redirect('/admin/manager_account')

def unlock(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url_account = "http://192.168.48.5/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response_account = requests.get(url_account, headers=headers)
    if response_account.status_code == requests.codes.ok:
        json = response_account.json()
    else:
        messages.warning(request, message="Không tồn tại tài khoản", extra_tags='alert')
        return redirect('/admin/manager_account')

    flat = True

    url = "http://192.168.48.4/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    payload = {
        'id': json['id'], 
        'email': json['email'],
        'password': json['password'],
        'accountName': json['accountName'],
        'accountType': json['accountType'],
        'phone': json['phone'],
        'address': json['address'],
        'token': None, 
        'created': json['created'],
        'lock': False
        }
    response = requests.put(url, json=payload, headers=headers)
    if response.status_code != requests.codes.ok:
        flat = False
    
    url = "http://192.168.48.5/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    payload = {
        'id':  json['id'], 
        'email': json['email'],
        'password': json['password'],
        'accountName': json['accountName'],
        'accountType': json['accountType'],
        'phone': json['phone'],
        'address': json['address'],
        'token': None, 
        'created': json['created'],
        'lock': False
        }
    response = requests.put(url, json=payload, headers=headers)
    if response.status_code != requests.codes.ok:
        flat = False
    
    url = "http://192.168.48.3/api/account/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    payload = {
        'id':  json['id'], 
        'email': json['email'],
        'password': json['password'],
        'accountName': json['accountName'],
        'accountType': json['accountType'],
        'phone': json['phone'],
        'address': json['address'],
        'token': None, 
        'created': json['created'],
        'lock': False
        }
    response = requests.put(url, json=payload, headers=headers)
    if response.status_code != requests.codes.ok:
        flat = False
    if flat == True:
        messages.success(request, message="Mở khóa thành công!", extra_tags='alert')
        return redirect('/admin/manager_account')
    else:
        messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        return redirect('/admin/manager_account')

def lock_rating(request):
    return

def unlock_rating(request):
    return

def archive_category(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url = "http://192.168.48.4/api/category/" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    response = requests.delete(url, headers=headers)
    if response.status_code == requests.codes.ok:
        messages.success(request, message="Xóa thành công!", extra_tags='alert')
        return redirect('/admin/manager_category')
    else:
        messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        return redirect('/admin/manager_category')

def success_receipt(request, id):
    if check_account(request) == 0:
        messages.warning(request, message="Vui lòng đăng nhập!", extra_tags='alert')
        return redirect('/admin/login')
    url = "http://192.168.48.3/api/receipt//" + str(id)
    headers = {
        'content-type': "application/json",
        'authorization': "Bearer " + request.session.get('token'),
        }
    payload = [
        ""
    ]
    response = requests.put(url, json=payload, headers=headers)
    if response.status_code == requests.codes.ok:
        messages.success(request, message="Xóa thành công!", extra_tags='alert')
        return redirect('/admin/manager_category')
    else:
        messages.warning(request, message="Lỗi hệ thống!", extra_tags='alert')
        return redirect('/admin/manager_category')
    return

def cancel_receipt(request, id):
    return

def delete_receiptdetail(request, id):
    return

def success_order(request, id):
    return

def cancel_order(request, id):
    return

def delivering_order(request, id):
    return