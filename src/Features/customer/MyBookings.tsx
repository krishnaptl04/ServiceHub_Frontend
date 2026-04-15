import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Filter } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const MyBookings = () => {
  const bookings = [
    {
      id: 1,
      category: "Plumbing",
      status: "pending",
      urgency: "high",
      serviceName: "Pipe Leak Fix",
      providerName: "John Doe",
      date: "2026-04-20",
      time: "10:00 AM",
      totalPrice: 50,
    },
    {
      id: 2,
      category: "Cleaning",
      status: "confirmed",
      urgency: "regular",
      serviceName: "Home Cleaning",
      providerName: "Jane Smith",
      date: "2026-04-18",
      time: "02:00 PM",
      totalPrice: 80,
    },
    {
      id: 3,
      category: "Electrical",
      status: "completed",
      urgency: "regular",
      serviceName: "Fan Repair",
      providerName: "Mike Ross",
      date: "2026-04-10",
      time: "11:30 AM",
      totalPrice: 40,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-500"
      case "confirmed":
        return "bg-blue-500"
      case "completed":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" className="w-full">
        <div className="mb-6 flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Bookings</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* SAME UI in all tabs */}
        <TabsContent value="all">
          <BookingsList bookings={bookings} getStatusColor={getStatusColor} />
        </TabsContent>

        <TabsContent value="pending">
          <BookingsList bookings={bookings} getStatusColor={getStatusColor} />
        </TabsContent>

        <TabsContent value="confirmed">
          <BookingsList bookings={bookings} getStatusColor={getStatusColor} />
        </TabsContent>

        <TabsContent value="completed">
          <BookingsList bookings={bookings} getStatusColor={getStatusColor} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function BookingsList({
  bookings,
  getStatusColor,
}: {
  bookings: any[]
  getStatusColor: (status: string) => string
}) {
  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <Card key={booking.id} className="transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <Badge variant="secondary">{booking.category}</Badge>
                  <Badge className={getStatusColor(booking.status)}>
                    {booking.status}
                  </Badge>
                  {booking.urgency !== "regular" && (
                    <Badge variant="destructive">{booking.urgency}</Badge>
                  )}
                </div>

                <h4 className="mb-2">{booking.serviceName}</h4>

                <p className="mb-2 text-sm text-muted-foreground">
                  Provider: {booking.providerName}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(booking.date).toLocaleDateString()}
                  </span>
                  <span>•</span>
                  <span>{booking.time}</span>
                  <span>•</span>
                  <span className="font-semibold text-foreground">
                    ${booking.totalPrice}
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="#">View Details</Link>
                </Button>

                <Button variant="outline" size="sm">
                  Reschedule
                </Button>

                <Button variant="destructive" size="sm">
                  Cancel
                </Button>

                <Button size="sm">Leave Review</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default MyBookings
