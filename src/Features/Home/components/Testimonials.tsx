import { Card, CardContent } from "@/components/ui/card"
import { Star, ThumbsUp } from "lucide-react"
import React from "react"

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment:
        "Excellent service! The plumber arrived on time and fixed our leak quickly. Highly recommend!",
      service: "Plumbing",
    },
    {
      name: "John Smith",
      rating: 5,
      comment:
        "Very professional electrician. Great communication and quality work. Will use again!",
      service: "Electrical",
    },
    {
      name: "Lisa Brown",
      rating: 4,
      comment:
        "Good experience overall. The HVAC technician was knowledgeable and thorough.",
      service: "HVAC",
    },
  ]
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4">What Our Customers Say</h2>
            <p className="text-muted-foreground">
              Real reviews from real customers
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-3 flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-sm">{testimonial.comment}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.service}
                      </p>
                    </div>
                    <ThumbsUp className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
