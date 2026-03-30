import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp } from "lucide-react"
import React from "react"

const Testimonials = () => {
  return (
    <div>
      <section className="bg-muted/50 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Real reviews from real customers
          </p>
        </div>
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <p>"Great service!"</p>
              <ThumbsUp className="mt-2 text-primary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p>"Very professional"</p>
              <ThumbsUp className="mt-2 text-primary" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <p>"Good experience"</p>
              <ThumbsUp className="mt-2 text-primary" />
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Testimonials
