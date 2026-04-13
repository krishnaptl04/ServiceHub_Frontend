import { Button } from "@/components/ui/button"
import React from "react"
import { Link } from "react-router-dom"

const CTA = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          {/* Heading */}
          <div className="mb-8">
            <h2 className="mb-4">Ready to Get Started?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Join thousands of satisfied customers who trust ServiceHub for
              their home service needs
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild>
              <Link to="/services">Book a Service</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link to="/provider/dashboard">Become a Provider</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CTA
