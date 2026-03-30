import { Card, CardContent } from "@/components/ui/card"
import { Tag } from "lucide-react"
import React from "react"

const Offers = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <Tag className="mb-2 text-primary" />
              <h4>20% OFF</h4>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <Tag className="mb-2 text-primary" />
              <h4>$25 OFF</h4>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <Tag className="mb-2 text-primary" />
              <h4>15% OFF</h4>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Offers
