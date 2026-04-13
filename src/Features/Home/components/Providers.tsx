import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ImageWithFallback } from "@/Features/common/ImageWithFallback"
import { Star } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const Providers = () => {
  const featuredProviders = [
    {
      id: 1,
      name: "Mike Johnson",
      service: "Plumbing Expert",
      rating: 4.9,
      reviews: 156,
      price: "$50/hr",
      image:
        "https://images.unsplash.com/photo-1731694411560-050e5b91e943?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwd29ya2luZyUyMHRvb2xzfGVufDF8fHx8MTc3Mzc2MDMwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      name: "Sarah Williams",
      service: "Electrical Services",
      rating: 4.8,
      reviews: 142,
      price: "$60/hr",
      image:
        "https://images.unsplash.com/photo-1766524789958-b0ec578d7d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpY2lhbiUyMHByb2Zlc3Npb25hbCUyMHVuaWZvcm18ZW58MXx8fHwxNzczNzc0MTU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      name: "David Chen",
      service: "HVAC Specialist",
      rating: 5.0,
      reviews: 98,
      price: "$55/hr",
      image:
        "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwcmVwYWlyJTIwc2VydmljZSUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzM3NzQxNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ]
  return (
    <div>
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Top Rated Providers</h2>
            <p className="text-muted-foreground">
              Meet our verified, highly-rated service professionals
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {featuredProviders.map((provider) => (
              <Card
                key={provider.id}
                className="overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="relative h-48">
                  <ImageWithFallback
                    src={provider.image}
                    alt={provider.name}
                    className="h-full w-full object-cover"
                  />
                  <Badge className="absolute top-4 right-4 bg-background/90">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    {provider.rating}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h4 className="mb-1">{provider.name}</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    {provider.service}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {provider.reviews} reviews
                    </span>
                    <span className="font-semibold text-primary">
                      {provider.price}
                    </span>
                  </div>
                  <Button className="mt-4 w-full" asChild>
                    <Link to={`/services/${provider.id}`}>View Profile</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Providers
