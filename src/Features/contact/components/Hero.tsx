import { Badge } from "@/components/ui/badge"
import React from "react"

const Hero = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Get in Touch</Badge>
          <h1 className="mb-6">We're Here to Help</h1>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Have a question or need assistance? Our team is ready to help.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
