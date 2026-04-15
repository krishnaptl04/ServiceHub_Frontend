import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, MapPin } from "lucide-react"
import React from "react"

const ActiveJobs = () => {
  const jobs = [
    {
      id: "1",
      serviceName: "Plumbing Repair",
      status: "confirmed",
      urgency: "urgent",
      customerName: "John Doe",
      date: "10 Mar 2024",
      time: "10:00 AM",
      address: "123 Main St, New York, NY",
      price: 120,
    },
    {
      id: "2",
      serviceName: "Electrical Wiring",
      status: "in-progress",
      urgency: "regular",
      customerName: "Sarah Smith",
      date: "12 Mar 2024",
      time: "2:00 PM",
      address: "456 Elm St, New York, NY",
      price: 200,
    },
    {
      id: "3",
      serviceName: "Home Cleaning",
      status: "completed",
      urgency: "regular",
      customerName: "Alex Brown",
      date: "8 Mar 2024",
      time: "9:00 AM",
      address: "789 Park Ave, New York, NY",
      price: 90,
    },
  ]

  return (
    <Tabs defaultValue="all" className="w-full">
      <TabsList className="mb-6">
        <TabsTrigger value="all">All Jobs</TabsTrigger>
        <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
        <TabsTrigger value="in-progress">In Progress</TabsTrigger>
        <TabsTrigger value="completed">Completed</TabsTrigger>
      </TabsList>

      {/* ALL */}
      <TabsContent value="all">
        <JobsList jobs={jobs} />
      </TabsContent>

      {/* CONFIRMED */}
      <TabsContent value="confirmed">
        <JobsList jobs={[jobs[0]]} />
      </TabsContent>

      {/* IN PROGRESS */}
      <TabsContent value="in-progress">
        <JobsList jobs={[jobs[1]]} />
      </TabsContent>

      {/* COMPLETED */}
      <TabsContent value="completed">
        <JobsList jobs={[jobs[2]]} />
      </TabsContent>
    </Tabs>
  )
}

function JobsList({ jobs }: { jobs: any[] }) {
  if (jobs.length === 0) {
    return (
      <Card>
        <CardContent className="p-12 text-center">
          <p className="text-muted-foreground">No jobs found</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {jobs.map((job) => (
        <Card key={job.id}>
          <CardContent className="p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              {/* Left */}
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <h4>{job.serviceName}</h4>
                  <Badge>{job.status}</Badge>
                  {job.urgency !== "regular" && (
                    <Badge variant="destructive">{job.urgency}</Badge>
                  )}
                </div>

                <p className="mb-2 text-sm text-muted-foreground">
                  Customer: {job.customerName}
                </p>

                <p className="flex gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {job.date} at {job.time}
                </p>

                <p className="mt-1 flex gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  {job.address}
                </p>

                <div className="mt-3 text-xl font-bold text-primary">
                  ${job.price}
                </div>
              </div>

              {/* Right */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
                <Button size="sm">Start Job</Button>
                <Button size="sm">Complete</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ActiveJobs
