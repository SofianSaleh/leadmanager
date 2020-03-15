from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer

# Lead Viewset

class LeadViewset(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        # Gonna be chabged to only the user
        permissions.AllowAny
    ]

    serializer_class = LeadSerializer