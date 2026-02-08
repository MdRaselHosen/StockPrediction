from django.urls import path
from user import views as UserViews
urlpatterns = [
    path('register/', UserViews.RegistrationView.as_view()),
    
]
