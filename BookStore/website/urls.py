from django.urls import path
from . import views, functions, cart

urlpatterns = [
    path('', views.index, name='index'),
    path('login', views.login, name='login'),
    path('logout', views.logout, name='logout'),
    #path('category/<int:id>', views.index, name='category'),
    #path('detail/<int:id>', views.detail, name='detail'),
    path('search', views.search, name='search'),
    path('cart', views.cart, name='cart'),
    path('checkout', views.checkout, name='checkout'),
    path('profile', views.profile, name='profile'),
    path('order', views.order, name='order'),
    path('order_detail/<int:id>', views.order_detail, name='order_detail'),
    # path('', views.index, name='index'),
    # path('', views.index, name='index'),
    # path('', views.index, name='index'),
    path('category', views.category, name='category'),
    path('detail', views.detail, name='detail'),


    #cart
    path('add/<int:id_product>', cart.add, name='add'),
    path('add_qty/<int:id_product>/<int:qty>', cart.add_qty, name='add_qty'),
    path('sub/<int:id_product>', cart.sub, name='sub'),
    path('set_qty/<int:id_product>/<int:qty>', cart.set_qty, name='set_qty'),
    path('remove/<int:id_product>', cart.remove, name='remove'),
    path('clear', cart.clear, name='clear'),
    path('show', cart.show, name='show'),
    path('count', cart.count, name='count'),
]