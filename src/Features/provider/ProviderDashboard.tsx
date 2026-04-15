import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DollarSign, Star, TrendingUp } from "lucide-react"
import React from "react"

const ProviderDashboard = () => {
  const stats = [
    {
      title: "Total Earnings",
      value: "$12,450",
      change: "+12% from last month",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Completed Jobs",
      value: "450",
      change: "+18 this month",
      icon: Star,
      color: "text-blue-500",
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: "156 reviews",
      icon: Star,
      color: "text-yellow-500",
    },
    {
      title: "Response Time",
      value: "45 min",
      change: "Average response",
      icon: Star,
      color: "text-purple-500",
    },
  ]

  const pendingRequests = [
    {
      id: 1,
      service: "Emergency Plumbing Repair",
      customer: "Sarah M.",
      date: "March 20, 2026",
      time: "2:00 PM",
      price: "$55.00",
    },
    {
      id: 2,
      service: "Pipe Installation",
      customer: "John D.",
      date: "March 22, 2026",
      time: "10:00 AM",
      price: "$120.00",
    },
  ]

  const upcomingJobs = [
    {
      id: 3,
      service: "Drain Cleaning",
      customer: "Emily R.",
      date: "March 18, 2026",
      status: "confirmed",
    },
  ]
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <h2 className="text-3xl font-bold">{stat.value}</h2>
              <p className="text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pending Requests */}
      <Card>
        <CardHeader className="flex justify-between">
          <CardTitle>Pending Booking Requests</CardTitle>
          <Badge variant="destructive">2 New</Badge>
        </CardHeader>

        <CardContent className="space-y-4">
          {pendingRequests.map((r) => (
            <div
              key={r.id}
              className="flex justify-between rounded-lg border p-4"
            >
              <div>
                <h4>{r.service}</h4>
                <p className="text-sm text-muted-foreground">
                  Customer: {r.customer}
                </p>
                <p className="text-sm text-muted-foreground">
                  {r.date} • {r.time} •{" "}
                  <span className="font-semibold text-primary">{r.price}</span>
                </p>
              </div>

              <div className="flex gap-2">
                <Button size="sm">Accept</Button>
                <Button size="sm" variant="outline">
                  Decline
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Bottom Grid */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Upcoming Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Jobs</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {upcomingJobs.map((job) => (
              <div key={job.id} className="rounded-lg border p-4">
                <div className="mb-2 flex justify-between">
                  <Badge>{job.status}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {job.date}
                  </span>
                </div>

                <h4>{job.service}</h4>
                <p className="text-sm text-muted-foreground">
                  Customer: {job.customer}
                </p>

                <Button variant="outline" size="sm" className="mt-2 w-full">
                  View Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Performance */}
        <Card>
          <CardHeader>
            <CardTitle>This Month's Performance</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm">
                <span>Jobs Completion Rate</span>
                <span>95%</span>
              </div>
              <Progress value={95} />
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>Customer Satisfaction</span>
                <span>98%</span>
              </div>
              <Progress value={98} />
            </div>

            <div>
              <div className="flex justify-between text-sm">
                <span>On-Time Arrival</span>
                <span>92%</span>
              </div>
              <Progress value={92} />
            </div>

            <div className="rounded-lg bg-muted p-4">
              <h4 className="text-sm">Monthly Goal</h4>
              <p className="text-xs text-muted-foreground">
                Complete 20 jobs to unlock Premium benefits
              </p>

              <div className="mt-3">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>18/20</span>
                </div>
                <Progress value={90} />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default ProviderDashboard
