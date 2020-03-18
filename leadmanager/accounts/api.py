from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer

#  Register api
# Takes care of everything so we don't have to werite tonnes of code
class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
        "user": UserSerializer(user, context=self.get_serializer_context()).data,
        # AuthToken.objects.create(user) returns a tupil so choose[1]
        "token": AuthToken.objects.create(user)[1]
        })

# Login Api

# Get User api
