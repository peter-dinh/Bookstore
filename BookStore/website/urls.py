from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    path('category/<int:id>', views.index, name='category'),
    path('detail/<int:id>', views.detail, name='detail'),
    path('search', views.search, name='search'),
    path('cart', views.cart, name='cart'),
    path('checkout', views.checkout, name='checkout'),
    path('profile', views.profile, name='profile'),
    path('order', views.order, name='order'),
    path('order_detail/<int:id>', views.order_detail, name='order_detail'),
    # path('', views.index, name='index'),
    # path('', views.index, name='index'),
    # path('', views.index, name='index'),
]