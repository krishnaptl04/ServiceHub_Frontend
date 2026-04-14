import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react"
import React from "react"

const MyBookings = () => {
  const booking = {
    id: "1001",
    category: "Plumbing",
    status: "confirmed",
    urgency: "urgent",
    serviceName: "Pipe Leak Repair",
    providerName: "Mike Johnson",
    providerPhone: "+91 9876543210",
    providerEmail: "mike@example.com",
    date: "2026-04-20",
    time: "10:00 AM",
    address: {
      street: "123 Main Street",
      city: "Surat",
      state: "Gujarat",
      zip: "395007",
    },
    description: "Fix leaking pipe in kitchen sink.",
    notes: "Please come early.",
    price: 100,
    platformFee: 10,
    totalPrice: 110,
  }

  const timeline = [
    { status: "Requested", date: "April 10, 2026", completed: true },
    { status: "Confirmed", date: "April 11, 2026", completed: true },
    { status: "In Progress", date: "Scheduled for April 20", completed: false },
    { status: "Completed", date: "Pending", completed: false },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardContent className="flex items-center justify-between p-6">
          <div>
            <div className="mb-2 flex gap-2">
              <Badge variant="secondary">{booking.category}</Badge>
              <Badge className="bg-blue-500 text-white">{booking.status}</Badge>
              <Badge variant="destructive">{booking.urgency}</Badge>
            </div>
            <h1>{booking.serviceName}</h1>
            <p className="text-muted-foreground">Booking ID: #{booking.id}</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline">Reschedule</Button>
            <Button variant="outline">Contact Provider</Button>
            <Button variant="destructive">Cancel Booking</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Timeline */}
          <Card>
            <CardHeader>
              <CardTitle>Booking Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              {timeline.map((step, index) => (
                <div key={index} className="mb-4 flex gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white">
                    {step.completed ? "✓" : index + 1}
                  </div>
                  <div>
                    <p>{step.status}</p>
                    <p className="text-sm text-muted-foreground">{step.date}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Service Details */}
          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                <strong>Service:</strong> {booking.serviceName}
              </p>

              <Separator />

              <div className="flex gap-4">
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {booking.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {booking.time}
                </span>
              </div>

              <Separator />

              <p className="flex gap-2">
                <MapPin className="h-4 w-4" />
                {booking.address.street}, {booking.address.city}
              </p>

              <Separator />

              <p>{booking.description}</p>

              <Separator />

              <p>
                <strong>Notes:</strong> {booking.notes}
              </p>
            </CardContent>
          </Card>

          {/* Payment */}
          <Card>
            <CardHeader>
              <CardTitle>Payment Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <span>Service Fee</span>
                <span>${booking.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Platform Fee</span>
                <span>${booking.platformFee}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${booking.totalPrice}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Provider */}
          <Card>
            <CardHeader>
              <CardTitle>Provider</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback>MJ</AvatarFallback>
                </Avatar>
                <div>
                  <p>{booking.providerName}</p>
                  <p className="text-sm text-muted-foreground">
                    {booking.category} Expert
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              <p className="flex gap-2">
                <Phone className="h-4 w-4" />
                {booking.providerPhone}
              </p>
              <p className="flex gap-2">
                <Mail className="h-4 w-4" />
                {booking.providerEmail}
              </p>

              <Button className="mt-4 w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message
              </Button>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full">
                Reschedule
              </Button>
              <Button variant="outline" className="w-full">
                Update Address
              </Button>
              <Button variant="destructive" className="w-full">
                Cancel Booking
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default MyBookings
