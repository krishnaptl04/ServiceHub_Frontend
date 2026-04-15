import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle,
} from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const Dashboard = () => {
  const activeBookings = [
    {
      id: 1,
      service: "Emergency Plumbing Repair",
      provider: "Mike Johnson",
      date: "March 20, 2026",
      time: "2:00 PM",
      status: "confirmed",
      category: "Plumbing",
    },
    {
      id: 2,
      service: "Electrical Installation",
      provider: "Sarah Williams",
      date: "March 22, 2026",
      time: "10:00 AM",
      status: "in-progress",
      category: "Electrical",
    },
  ]

  const stats = [
    {
      title: "Active Bookings",
      value: "2",
      icon: Calendar,
      color: "text-blue-500",
    },
    {
      title: "Completed",
      value: "12",
      icon: CheckCircle2,
      color: "text-green-500",
    },
    {
      title: "Pending",
      value: "1",
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Cancelled",
      value: "0",
      icon: XCircle,
      color: "text-red-500",
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
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/services">Book New Service</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/customer/bookings">View All Bookings</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/customer/profile">Update Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Active Bookings */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Active Bookings</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link to="/customer/bookings">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activeBookings.map((booking) => (
              <div
                key={booking.id}
                className="flex flex-col justify-between rounded-lg border p-4 transition-colors hover:bg-muted/50 sm:flex-row sm:items-center"
              >
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary">{booking.category}</Badge>
                    <Badge className={getStatusColor(booking.status)}>
                      {booking.status}
                    </Badge>
                  </div>
                  <h4 className="mb-1">{booking.service}</h4>
                  <p className="text-sm text-muted-foreground">
                    {booking.provider}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{booking.date}</span>
                    <span>•</span>
                    <span>{booking.time}</span>
                  </div>
                </div>
                <div className="mt-4 flex gap-2 sm:mt-0">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/customer/bookings/${booking.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-green-500" />
              <div className="flex-1">
                <p className="text-sm">
                  Booking confirmed for Plumbing Service
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-blue-500" />
              <div className="flex-1">
                <p className="text-sm">Service completed - Electrical Repair</p>
                <p className="text-xs text-muted-foreground">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-2 h-2 w-2 rounded-full bg-yellow-500" />
              <div className="flex-1">
                <p className="text-sm">Review submitted for HVAC Service</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
