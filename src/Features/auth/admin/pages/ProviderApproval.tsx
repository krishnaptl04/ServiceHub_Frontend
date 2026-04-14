import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Mail, Phone, Star, XCircle } from "lucide-react"

const ProviderApproval = () => {
  const pendingProviders = [
    {
      id: 1,
      name: "John Smith",
      service: "Electrical Services",
      email: "john@example.com",
      phone: "(555) 111-2222",
      experience: "8 years",
      license: "EL-45678",
      status: "pending",
    },
    {
      id: 2,
      name: "Emily Davis",
      service: "Cleaning Services",
      email: "emily@example.com",
      phone: "(555) 333-4444",
      experience: "5 years",
      license: "CL-98765",
      status: "pending",
    },
  ]

  const approvedProviders = [
    {
      id: 3,
      name: "Mike Johnson",
      service: "Plumbing",
      rating: 4.9,
      jobs: 450,
    },
    {
      id: 4,
      name: "Sarah Williams",
      service: "Electrical",
      rating: 4.8,
      jobs: 142,
    },
  ]
  return (
    <Tabs defaultValue="pending">
      {/* Tabs */}
      <TabsList className="mb-6">
        <TabsTrigger value="pending">Pending Approval (2)</TabsTrigger>
        <TabsTrigger value="approved">Approved Providers</TabsTrigger>
        <TabsTrigger value="rejected">Rejected</TabsTrigger>
      </TabsList>

      {/* Pending */}
      <TabsContent value="pending">
        <div className="space-y-4">
          {pendingProviders.map((provider) => (
            <Card key={provider.id}>
              <CardContent className="p-6">
                <div className="flex flex-col gap-6 lg:flex-row">
                  {/* Left */}
                  <div className="flex flex-1 gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <h4>{provider.name}</h4>
                        <Badge variant="secondary">pending</Badge>
                      </div>

                      <p className="mb-3 text-sm text-muted-foreground">
                        {provider.service}
                      </p>

                      <div className="space-y-2">
                        <p className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          {provider.email}
                        </p>
                        <p className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          {provider.phone}
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="rounded-lg bg-muted p-3">
                          <p className="text-xs text-muted-foreground">
                            Experience
                          </p>
                          <p className="text-sm font-medium">
                            {provider.experience}
                          </p>
                        </div>

                        <div className="rounded-lg bg-muted p-3">
                          <p className="text-xs text-muted-foreground">
                            License
                          </p>
                          <p className="text-sm font-medium">
                            {provider.license}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Buttons (UI only) */}
                  <div className="flex flex-col gap-2">
                    <Button>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Approve
                    </Button>
                    <Button variant="outline">
                      <XCircle className="mr-2 h-4 w-4" />
                      Reject
                    </Button>
                    <Button variant="ghost">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Approved */}
      <TabsContent value="approved">
        <div className="space-y-4">
          {approvedProviders.map((provider) => (
            <Card key={provider.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>{provider.name.charAt(0)}</AvatarFallback>
                    </Avatar>

                    <div>
                      <h4>{provider.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {provider.service}
                      </p>

                      <div className="mt-1 flex gap-4">
                        <span className="flex items-center gap-1 text-sm">
                          <Star className="h-3 w-3 fill-primary text-primary" />
                          {provider.rating}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {provider.jobs} jobs completed
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Profile
                    </Button>
                    <Button variant="destructive" size="sm">
                      Suspend
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Rejected */}
      <TabsContent value="rejected">
        <Card>
          <CardContent className="p-12 text-center">
            <XCircle className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2">No Rejected Providers</h3>
            <p className="text-muted-foreground">
              Rejected providers will appear here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default ProviderApproval
