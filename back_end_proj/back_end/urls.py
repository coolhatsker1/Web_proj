from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
# from products.rand_db import get_random_product
from products.views import ProductList

urlpatterns = [
    path('', ProductList.as_view(), name='home'),
    path('admin/', admin.site.urls),
    # path('get_random_product/', get_random_product, name='get_random_product'),
    path('api/products/', ProductList.as_view(), name='product-list'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
