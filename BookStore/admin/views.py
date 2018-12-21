from django.shortcuts import render

# Create your views here.

def login(request):
    return render(request, 'admin/login.html', {})
def logout(request):
    return 
def index(request):
    return render(request, 'admin/page/index.html', {})
def manager_account(request):
    return render(request, 'admin/page/account/manager.html', {})
def see_account(request):
    return render(request, 'admin/page/account/see.html', {})
def manager_rating(request):
    return render(request, 'admin/page/rating/manager.html', {})
def see_rating(request):
    return render(request, 'admin/page/rating/see.html', {})
def manager_order(request):
    return render(request, 'admin/page/order/manager.html', {})
def see_order(request):
    return render(request, 'admin/page/order/see.html', {})
def manager_category(request):
    return render(request, 'admin/page/category/manager.html', {})
def add_category(request):
    return render(request, 'admin/page/category/add.html', {})
def edit_category(request):
    return render(request, 'admin/page/category/edit.html', {})
def manager_product(request):
    return render(request, 'admin/page/product/manager.html', {})
def add_product(request):
    return render(request, 'admin/page/product/add.html', {})
def edit_product(request):
    return render(request, 'admin/page/product/edit.html', {})
def manager_issue(request):
    return render(request, 'admin/page/issue/manager.html', {})
def add_issue(request):
    return render(request, 'admin/page/issue/add.html', {})
def edit_issue(request):
    return render(request, 'admin/page/issue/edit.html', {})
def manager_receipt(request):
    return render(request, 'admin/page/receipt/manager.html', {})
def add_receipt(request):
    return render(request, 'admin/page/receipt/add.html', {})
def edit_receipt(request):
    return render(request, 'admin/page/receipt/edit.html', {})
def manager_stock(request):
    return render(request, 'admin/page/stock/manager.html', {})
def add_stock(request):
    return render(request, 'admin/page/stock/add.html', {})
def edit_stock(request):
    return render(request, 'admin/page/stock/edit.html', {})
def setup(request):
    return


# def login(request):
#     return render(request, 'admin/page/login.html', {})
# def login(request):
#     return render(request, 'admin/page/login.html', {})
