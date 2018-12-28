from django.urls import path
from . import views, functions

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('manager_account', views.manager_account, name='manager_account'),
    path('see_account/<int:id>', views.see_account, name='see_account'),

    path('manager_rating', views.manager_rating, name='manager_rating'),
    path('see_rating', views.see_rating, name='see_rating'),

    path('manager_order', views.manager_order, name='manager_order'),
    path('see_order', views.see_order, name='see_order'),

    path('manager_category', views.manager_category, name='manager_category'),
    path('add_category', views.add_category, name='add_category'),
    path('edit_category/<int:id>', views.edit_category, name='edit_category'),
    
    path('manager_product', views.manager_product, name='manager_product'),
    path('add_product', views.add_product, name='add_product'),
    path('edit_product/<int:id>', views.edit_product, name='edit_product'),

    path('manager_receipt', views.manager_receipt, name='manager_receipt'),
    path('add_receipt', views.add_receipt, name='add_receipt'),
    path('edit_receipt', views.edit_receipt, name='edit_receipt'),

    path('manager_stock', views.manager_stock, name='manager_stock'),
    path('see_stock', views.see_stock, name='see_stock'),
    path('setup', views.setup, name='setup'),



    path('unlock_rating/<int:id>', functions.unlock, name='unlock_rating'),
    path('lock_rating/<int:id>', functions.lock, name='lock_rating'),
    path('unlock/<int:id>', functions.unlock, name='unlock'),
    path('lock/<int:id>', functions.lock, name='lock'),
    path('archive_category/<int:id>', functions.archive_category, name='archive_category'),
    path('success_receipt/<int:id>', functions.success_receipt, name='success_receipt'),
    path('cancel_receipt/<int:id>', functions.cancel_receipt, name='cancel_receipt'),
    path('delete_receiptdetail/<int:id>', functions.delete_receiptdetail, name='delete_receiptdetail'),
    path('success_order/<int:id>', functions.success_order, name='success_order'),
    path('cancel_order/<int:id>', functions.cancel_order, name='cancel_order'),
    path('delivering_order/<int:id>', functions.delivering_order, name='delivering_order'),
    path('upload/<int:id>', functions.cancel_order, name='cancel_order'),
    path('info_image/<int:id>', functions.delivering_order, name='delivering_order'),
    
]