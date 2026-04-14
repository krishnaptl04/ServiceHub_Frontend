import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Calendar, Filter, Search } from "lucide-react"

const BookingMonitoring = () => {
  const bookings = [
    {
      id: 1001,
      service: "Emergency Plumbing Repair",
      customer: "Sarah M.",
      provider: "Mike Johnson",
      date: "March 20, 2026",
      amount: "$55.00",
      status: "in-progress",
    },
    {
      id: 1002,
      service: "Electrical Installation",
      customer: "John D.",
      provider: "Sarah Williams",
      date: "March 22, 2026",
      amount: "$65.00",
      status: "confirmed",
    },
    {
      id: 1003,
      service: "HVAC Maintenance",
      customer: "Emily R.",
      provider: "David Chen",
      date: "March 15, 2026",
      amount: "$60.00",
      status: "completed",
    },
    {
      id: 1004,
      service: "House Cleaning",
      customer: "Robert T.",
      provider: "Emma Davis",
      date: "March 18, 2026",
      amount: "$45.00",
      status: "completed",
    },
    {
      id: 1005,
      service: "Painting Service",
      customer: "Lisa B.",
      provider: "Maria Garcia",
      date: "March 10, 2026",
      amount: "$50.00",
      status: "cancelled",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-blue-500"
      case "in-progress":
        return "bg-yellow-500"
      case "completed":
        return "bg-green-500"
      case "cancelled":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }
  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
                <Input placeholder="Search bookings..." className="pl-10" />
              </div>
            </div>
            <select className="rounded-lg border bg-background px-4 py-2">
              <option>All Status</option>
              <option>Confirmed</option>
              <option>In Progress</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <select className="rounded-lg border bg-background px-4 py-2">
              <option>All Categories</option>
              <option>Plumbing</option>
              <option>Electrical</option>
              <option>HVAC</option>
              <option>Cleaning</option>
            </select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table */}
      <Card>
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="mb-4 flex items-center justify-between">
              <h4>All Bookings ({bookings.length})</h4>
              <Button variant="outline" size="sm">
                Export
              </Button>
            </div>

            <div className="space-y-3">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex flex-col gap-4 rounded-lg border p-4 transition-colors hover:bg-muted/50 lg:flex-row lg:items-center"
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm">#{booking.id}</h4>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.replace("-", " ")}
                      </Badge>
                    </div>
                    <p className="text-sm font-medium">{booking.service}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span>Customer: {booking.customer}</span>
                      <span>•</span>
                      <span>Provider: {booking.provider}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {booking.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-semibold text-primary">
                      {booking.amount}
                    </span>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      {booking.status === "cancelled" && (
                        <Button variant="destructive" size="sm">
                          Refund
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between border-t pt-4">
              <p className="text-sm text-muted-foreground">
                Showing 1-{bookings.length} of {bookings.length} bookings
              </p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BookingMonitoring
