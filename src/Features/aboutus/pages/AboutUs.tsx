import { Card, CardContent } from "@/components/ui/card"

import { Award, Badge, Heart, Shield, Target, Users, Zap } from "lucide-react"
import React from "react"

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <Badge className="mb-4">About ServiceHub</Badge>
          <h1 className="mb-6">
            Connecting Communities with Trusted Local Services
          </h1>
          <p className="text-xl text-muted-foreground">
            We're on a mission to make finding and booking local services as
            easy as ordering takeout.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-muted/50 py-16">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4">
          <div>
            <div className="text-4xl font-bold text-primary">50K+</div>
            <p className="text-muted-foreground">Active Users</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">5K+</div>
            <p className="text-muted-foreground">Verified Providers</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">100K+</div>
            <p className="text-muted-foreground">Services Completed</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">4.9</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
        </div>
      </div>

      {/* Mission + Story */}
      <div className="container mx-auto grid gap-12 px-4 py-20 md:grid-cols-2">
        {/* Mission */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Target className="text-primary" />
            <h2>Our Mission</h2>
          </div>
          <p className="text-muted-foreground">
            To revolutionize how people find and book local services with a
            transparent and trustworthy marketplace.
          </p>
        </div>

        {/* Story */}
        <div>
          <div className="mb-4 flex items-center gap-3">
            <Users className="text-primary" />
            <h2>Our Story</h2>
          </div>
          <p className="text-muted-foreground">
            ServiceHub started from a simple frustration of finding reliable
            services quickly. Today, it's a growing platform connecting users
            with trusted professionals.
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="container mx-auto mb-20 px-4">
        <h2 className="mb-12 text-center">Our Values</h2>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="flex gap-4 p-6">
              <Shield className="text-primary" />
              <div>
                <h4>Trust & Safety</h4>
                <p className="text-sm text-muted-foreground">
                  Verified professionals for your peace of mind.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Zap className="text-primary" />
              <div>
                <h4>Quick & Reliable</h4>
                <p className="text-sm text-muted-foreground">
                  Fast matching with skilled providers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Heart className="text-primary" />
              <div>
                <h4>Customer First</h4>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our priority.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Award className="text-primary" />
              <div>
                <h4>Quality Assured</h4>
                <p className="text-sm text-muted-foreground">
                  Only top providers are selected.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Team */}
      <div className="container mx-auto mb-20 px-4">
        <h2 className="mb-12 text-center">Meet Our Team</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="circle-avatar">SJ</div>
              <h4>Sarah Johnson</h4>
              <p className="text-sm text-primary">CEO</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="circle-avatar">MC</div>
              <h4>Michael Chen</h4>
              <p className="text-sm text-primary">CTO</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="circle-avatar">ER</div>
              <h4>Emily Rodriguez</h4>
              <p className="text-sm text-primary">Operations</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="circle-avatar">DK</div>
              <h4>David Kim</h4>
              <p className="text-sm text-primary">Relations</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-20 text-center text-white">
        <h2 className="mb-4">Join Our Community</h2>
        <p className="mb-6">Find services or become a provider today.</p>

        <div className="flex justify-center gap-4">
          <a className="btn-white">Browse Services</a>
          <a className="btn-outline">Become Provider</a>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
