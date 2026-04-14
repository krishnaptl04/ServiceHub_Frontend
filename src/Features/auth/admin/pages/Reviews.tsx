import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Flag, Star, Trash2 } from "lucide-react"

const Reviews = () => {
  const flaggedReviews = [
    {
      id: 1,
      customer: "Anonymous User",
      provider: "Mike Johnson",
      service: "Plumbing",
      rating: 1,
      comment:
        "Terrible service. Never showed up and didn't even call. Waste of time!",
      date: "March 15, 2026",
      reason: "Offensive language",
    },
    {
      id: 2,
      customer: "John D.",
      provider: "Sarah Williams",
      service: "Electrical",
      rating: 2,
      comment:
        "Not satisfied with the work quality. Had to call another electrician.",
      date: "March 12, 2026",
      reason: "Disputed service quality",
    },
  ]

  const recentReviews = [
    {
      id: 3,
      customer: "Emily R.",
      provider: "David Chen",
      service: "HVAC",
      rating: 5,
      comment: "Excellent service! Very professional and thorough.",
      date: "March 18, 2026",
    },
    {
      id: 4,
      customer: "Sarah M.",
      provider: "Emma Davis",
      service: "Cleaning",
      rating: 4,
      comment: "Good service overall. Arrived on time.",
      date: "March 17, 2026",
    },
  ]
  return (
    <Tabs defaultValue="flagged">
      {/* Tabs */}
      <TabsList className="mb-6">
        <TabsTrigger value="flagged">Flagged Reviews (2)</TabsTrigger>
        <TabsTrigger value="recent">Recent Reviews</TabsTrigger>
        <TabsTrigger value="all">All Reviews</TabsTrigger>
      </TabsList>

      {/* Flagged Reviews */}
      <TabsContent value="flagged">
        <div className="space-y-4">
          {flaggedReviews.map((review) => (
            <Card key={review.id} className="border-destructive">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{review.customer.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="mb-2 flex justify-between">
                      <div>
                        <h4 className="text-sm">{review.customer}</h4>
                        <p className="text-xs text-muted-foreground">
                          {review.date}
                        </p>
                      </div>
                      <Badge variant="destructive">
                        <Flag className="mr-1 h-3 w-3" />
                        Flagged
                      </Badge>
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                      <div className="mb-2 flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>

                    {/* Details */}
                    <div className="mb-4 rounded-lg bg-muted p-3">
                      <p className="text-sm">
                        <span className="font-medium">Provider:</span>{" "}
                        {review.provider}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Service:</span>{" "}
                        {review.service}
                      </p>
                      <p className="mt-2 text-sm">
                        <span className="font-medium">Reason:</span>{" "}
                        {review.reason}
                      </p>
                    </div>

                    {/* Actions (UI only) */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Approve
                      </Button>
                      <Button size="sm" variant="destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </Button>
                      <Button size="sm" variant="ghost">
                        Contact User
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* Recent Reviews */}
      <TabsContent value="recent">
        <div className="space-y-4">
          {recentReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback>{review.customer.charAt(0)}</AvatarFallback>
                  </Avatar>

                  <div className="flex-1">
                    <div className="mb-2">
                      <h4 className="text-sm">{review.customer}</h4>
                      <p className="text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </div>

                    <div className="mb-3">
                      <div className="mb-2 flex gap-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-primary text-primary"
                          />
                        ))}
                      </div>
                      <p className="text-sm">{review.comment}</p>
                    </div>

                    <div className="mb-4 rounded-lg bg-muted p-3">
                      <p className="text-sm">
                        <span className="font-medium">Provider:</span>{" "}
                        {review.provider}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Service:</span>{" "}
                        {review.service}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Flag Review
                      </Button>
                      <Button size="sm" variant="ghost">
                        View Booking
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      {/* All Reviews */}
      <TabsContent value="all">
        <Card>
          <CardContent className="p-12 text-center">
            <Star className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2">All Reviews</h3>
            <p className="text-muted-foreground">
              Complete review history will be displayed here
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export default Reviews
