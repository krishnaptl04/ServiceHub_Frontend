import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin } from "lucide-react"
import React from "react"

const BookingRequests = () => {
  const requests = [
    {
      id: "1",
      serviceName: "Emergency Plumbing Repair",
      urgency: "emergency",
      customerName: "John Doe",
      date: "10 Mar 2024",
      time: "10:00 AM",
      address: "123 Main St, New York, NY",
      description: "Water leakage in kitchen sink",
      price: 80,
    },
    {
      id: "2",
      serviceName: "AC Repair",
      urgency: "urgent",
      customerName: "Sarah Smith",
      date: "12 Mar 2024",
      time: "2:00 PM",
      address: "456 Elm St, New York, NY",
      description: "AC not cooling properly",
      price: 120,
    },
  ]

  return (
    <div className="space-y-4">
      {requests.map((req) => (
        <Card key={req.id}>
          <CardContent className="p-6">
            <div className="flex flex-col gap-6">
              {/* Header */}
              <div className="flex items-center gap-2">
                <h3 className="text-lg">{req.serviceName}</h3>

                <Badge
                  variant={
                    req.urgency === "emergency"
                      ? "destructive"
                      : req.urgency === "urgent"
                        ? "default"
                        : "secondary"
                  }
                >
                  {req.urgency}
                </Badge>
              </div>

              {/* Info */}
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Customer: {req.customerName}
                </p>

                <p className="flex gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {req.date} at {req.time}
                </p>

                <p className="flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {req.address}
                </p>
              </div>

              {/* Description */}
              <div className="rounded-lg bg-muted p-4">
                <h4 className="mb-2 text-sm">Service Description</h4>
                <p className="text-sm text-muted-foreground">
                  {req.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  ${req.price}
                </span>

                <div className="flex gap-2">
                  <Button variant="outline">Decline</Button>
                  <Button>Accept Request</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default BookingRequests
