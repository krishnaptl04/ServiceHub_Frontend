import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Star, ThumbsUp } from "lucide-react"
import React from "react"

const MyReviews = () => {
  const reviews = [
    {
      id: "1",
      serviceProvider: "Mike Johnson",
      service: "Plumbing Repair",
      rating: 5,
      comment:
        "Excellent service! Mike was professional and fixed the issue quickly. Highly recommend!",
      date: "2024-03-10",
      helpful: 12,
      reply:
        "Thank you for your kind words! It was a pleasure working with you.",
    },
    {
      id: "2",
      serviceProvider: "Sarah Electrician",
      service: "Electrical Wiring",
      rating: 4,
      comment:
        "Good work overall. Arrived on time and completed the job efficiently.",
      date: "2024-03-05",
      helpful: 8,
    },
    {
      id: "3",
      serviceProvider: "Clean Pro Services",
      service: "Home Cleaning",
      rating: 5,
      comment:
        "Amazing deep cleaning service! My house has never looked better.",
      date: "2024-02-28",
      helpful: 15,
      reply:
        "We appreciate your feedback! Looking forward to serving you again.",
    },
  ]

  return (
    <div className="mx-auto max-w-4xl">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
          My Reviews
        </h1>
        <p className="text-slate-600 dark:text-slate-400">
          Reviews you've left for service providers
        </p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl border bg-white p-6 dark:bg-slate-800">
          <div className="mb-2 flex items-center gap-3">
            <MessageSquare className="h-5 w-5 text-orange-500" />
            <span>Total Reviews</span>
          </div>
          <div className="text-3xl font-bold">3</div>
        </div>

        <div className="rounded-xl border bg-white p-6 dark:bg-slate-800">
          <div className="mb-2 flex items-center gap-3">
            <Star className="h-5 w-5 text-yellow-500" />
            <span>Average Rating</span>
          </div>
          <div className="text-3xl font-bold">4.7</div>
        </div>

        <div className="rounded-xl border bg-white p-6 dark:bg-slate-800">
          <div className="mb-2 flex items-center gap-3">
            <ThumbsUp className="h-5 w-5 text-green-500" />
            <span>Helpful Votes</span>
          </div>
          <div className="text-3xl font-bold">35</div>
        </div>
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-xl border bg-white p-6 dark:bg-slate-800"
          >
            {/* Header */}
            <div className="mb-4 flex justify-between">
              <div>
                <h3 className="font-semibold">{review.serviceProvider}</h3>
                <p className="text-sm text-slate-500">{review.service}</p>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                {review.date}
              </div>
            </div>

            {/* Stars */}
            <div className="mb-4 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${
                    star <= review.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-slate-300"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="mb-4">{review.comment}</p>

            {/* Reply */}
            {review.reply && (
              <div className="mb-4 rounded-lg border-l-4 border-orange-500 bg-slate-50 p-4 dark:bg-slate-900/50">
                <p className="mb-2 text-sm font-medium">Provider Response</p>
                <p className="text-sm">{review.reply}</p>
              </div>
            )}

            {/* Footer */}
            <div className="flex justify-between border-t pt-4">
              <div className="flex items-center gap-2 text-sm">
                <ThumbsUp className="h-4 w-4" />
                {review.helpful} people found this helpful
              </div>

              <Button variant="ghost" size="sm">
                Edit Review
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyReviews
