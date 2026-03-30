import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Badge } from "lucide-react"

import { Link } from "react-router-dom"

const HeroSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <Badge className="mb-4">Trusted by 50,000+ customers</Badge>
            <h1 className="mb-4 text-5xl font-bold">
              Book Trusted Local Services{" "}
              <span className="text-primary">Instantly</span>
            </h1>
            <p className="mb-6 text-muted-foreground">
              Connect with verified professionals for all your home service
              needs.
            </p>

            <div className="flex gap-4">
              <Button asChild>
                <Link to="/services">
                  Browse Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link to="/provider/dashboard">Become a Provider</Link>
              </Button>
            </div>
          </div>

          <Card>
            <CardContent className="space-y-4 p-6">
              <h3 className="text-sm font-bold">Quick Booking</h3>
              <label className="mb-2 block text-xs font-bold">
                Service Type
              </label>
              <select className="w-full rounded border p-2">
                <option>Plumbing</option>
                <option>Electrical</option>
                <option>HVAC</option>
                <option>Carpentry</option>
                <option>Painting</option>
                <option>Cleaning</option>
              </select>
              <label className="mb-2 block text-xs font-bold">
                Your Location
              </label>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full rounded border p-2"
              />
              <label className="mb-2 block text-xs font-bold">
                Preferred Date
              </label>
              <input type="date" className="w-full rounded border p-2" />

              <Button className="w-full">Find Services</Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
