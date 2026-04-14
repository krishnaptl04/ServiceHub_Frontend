import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, Mail, Phone, XCircle } from "lucide-react"
import React from "react"

const ContactSubmissions = () => {
  const submissions = [
    {
      id: 1001,
      name: "John Doe",
      email: "john@example.com",
      phone: "+91 9876543210",
      subject: "Service Inquiry",
      message: "I need more details about your services.",
      status: "new",
      createdAt: "2026-04-10",
    },
    {
      id: 1002,
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Complaint",
      message: "I faced an issue with my last booking.",
      status: "in-progress",
      createdAt: "2026-04-09",
    },
    {
      id: 1003,
      name: "Mike Ross",
      email: "mike@example.com",
      subject: "Feedback",
      message: "Great service! Really satisfied.",
      status: "resolved",
      createdAt: "2026-04-08",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-500"
      case "in-progress":
        return "bg-yellow-500"
      case "resolved":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-2">Contact Submissions</h2>
        <p className="text-muted-foreground">
          Manage and respond to customer inquiries
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard label="Total" value="24" icon={Mail} />
        <StatCard label="New" value="8" icon={Clock} />
        <StatCard label="In Progress" value="10" icon={XCircle} />
        <StatCard label="Resolved" value="6" icon={CheckCircle} />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList className="mb-6">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="resolved">Resolved</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <SubmissionsList
            submissions={submissions}
            getStatusColor={getStatusColor}
          />
        </TabsContent>

        <TabsContent value="new">
          <SubmissionsList
            submissions={submissions}
            getStatusColor={getStatusColor}
          />
        </TabsContent>

        <TabsContent value="in-progress">
          <SubmissionsList
            submissions={submissions}
            getStatusColor={getStatusColor}
          />
        </TabsContent>

        <TabsContent value="resolved">
          <SubmissionsList
            submissions={submissions}
            getStatusColor={getStatusColor}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function StatCard({ label, value, icon: Icon }: any) {
  return (
    <Card>
      <CardContent className="flex items-center gap-4 p-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
      </CardContent>
    </Card>
  )
}

function SubmissionsList({ submissions, getStatusColor }: any) {
  return (
    <div className="space-y-4">
      {submissions.map((submission: any) => (
        <Card key={submission.id} className="transition-shadow hover:shadow-md">
          <CardContent className="p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row">
              <div className="flex-1">
                <div className="mb-3 flex items-center gap-2">
                  <h4>{submission.subject}</h4>
                  <Badge className={getStatusColor(submission.status)}>
                    {submission.status}
                  </Badge>
                </div>

                <p className="mb-2 text-sm text-muted-foreground">
                  <strong>From:</strong> {submission.name}
                </p>

                <div className="mb-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {submission.email}
                  </span>

                  {submission.phone && (
                    <span className="flex items-center gap-1">
                      <Phone className="h-4 w-4" />
                      {submission.phone}
                    </span>
                  )}

                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {submission.createdAt}
                  </span>
                </div>

                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {submission.message}
                </p>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View
                </Button>
                <Button size="sm">Action</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default ContactSubmissions
