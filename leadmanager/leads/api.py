from rest_framework import viewsets, permissions
from leads.models import Lead
from .serializers import LeadSerializer

# Lead Viewset

class LeadViewset(viewsets.ModelViewSet):
    queryset = Lead.objects.all()
    permission_classes = [
        # Gonna be chabged to only the user
        # permissions.AllowAny
        permissions.IsAuthenticated
    ]
    def getQuerySet(self):
        return self.request.user.leads.all()
    serializer_class = LeadSerializer

    def perform_destroy(self, serializer):
        serializer.save(owner=self.request.user)