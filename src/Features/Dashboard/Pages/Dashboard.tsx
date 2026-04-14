import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Briefcase, DollarSign, Star, TrendingUp, Users } from "lucide-react"
import React from "react"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$124,500",
      change: "+20.1% from last month",
      icon: DollarSign,
      color: "text-green-500",
    },
    {
      title: "Active Providers",
      value: "342",
      change: "+12 this month",
      icon: Users,
      color: "text-blue-500",
    },
    {
      title: "Total Bookings",
      value: "1,248",
      change: "+180 this month",
      icon: Briefcase,
      color: "text-purple-500",
    },
  ]

  const recentActivity = [
    {
      title: "New provider registered",
      description: "John Smith - Electrical Services",
      time: "5 minutes ago",
      type: "success",
    },
    {
      title: "Booking completed",
      description: "Plumbing service for Sarah M.",
      time: "15 minutes ago",
      type: "info",
    },
    {
      title: "Provider pending approval",
      description: "Emily Davis - Cleaning Services",
      time: "1 hour ago",
      type: "warning",
    },
    {
      title: "Review flagged",
      description: "Low rating review needs moderation",
      time: "2 hours ago",
      type: "alert",
    },
  ]

  const topProviders = [
    { name: "Mike Johnson", service: "Plumbing", rating: 4.9, jobs: 450 },
    { name: "Sarah Williams", service: "Electrical", rating: 4.8, jobs: 142 },
    { name: "David Chen", service: "HVAC", rating: 5.0, jobs: 98 },
  ]
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <TrendingUp className="h-4 w-4 text-green-500" />
              </div>
              <h2 className="mb-1 text-3xl font-bold">{stat.value}</h2>
              <p className="mb-1 text-sm text-muted-foreground">{stat.title}</p>
              <p className="text-xs text-green-600">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`mt-2 h-2 w-2 rounded-full ${
                      activity.type === "success"
                        ? "bg-green-500"
                        : activity.type === "info"
                          ? "bg-blue-500"
                          : activity.type === "warning"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }`}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.description}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Providers */}
        <Card>
          <CardHeader>
            <CardTitle>Top Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProviders.map((provider, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{provider.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {provider.service}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-primary text-primary" />
                      {provider.rating}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {provider.jobs} jobs
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Platform Health */}
      <Card>
        <CardHeader>
          <CardTitle>Platform Health</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Provider Approval Rate</span>
              <span className="font-semibold">85%</span>
            </div>
            <Progress value={85} />
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Booking Completion Rate</span>
              <span className="font-semibold">95%</span>
            </div>
            <Progress value={95} />
          </div>
          <div>
            <div className="mb-2 flex justify-between text-sm">
              <span>Customer Satisfaction</span>
              <span className="font-semibold">92%</span>
            </div>
            <Progress value={92} />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Dashboard
