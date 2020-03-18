from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.model import AuthToken
from .serializers import UserSerializer, RegisterSerializer

#  Register api
# Takes care of everything so we don't have to werite tonnes of code
class RegisterApi(generics.GenericAPIView)

# Login Api

# Get User api
