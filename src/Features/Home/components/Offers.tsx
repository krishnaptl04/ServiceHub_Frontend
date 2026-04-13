import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tag } from "lucide-react"
import React from "react"

const Offers = () => {
  const offers = [
    {
      title: "New Customer Offer",
      discount: "20% OFF",
      description: "First service booking",
      code: "NEW20",
    },
    {
      title: "Referral Bonus",
      discount: "$25 OFF",
      description: "Refer a friend and get discount",
      code: "REFER25",
    },
    {
      title: "Bundle Deal",
      discount: "15% OFF",
      description: "Book 3+ services together",
      code: "BUNDLE15",
    },
  ]
  return (
    <div>
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Special Offers</h2>
            <p className="text-muted-foreground">
              Save more with our exclusive deals
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {offers.map((offer, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 border-primary/20"
              >
                <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-primary/10" />
                <CardContent className="p-6">
                  <Tag className="mb-3 h-8 w-8 text-primary" />
                  <h4 className="mb-2">{offer.title}</h4>
                  <p className="mb-2 text-3xl font-bold text-primary">
                    {offer.discount}
                  </p>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {offer.description}
                  </p>
                  <Badge variant="secondary" className="w-fit">
                    Code: {offer.code}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offers
