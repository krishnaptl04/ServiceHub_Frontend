import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Briefcase,
  Clock,
  Coffee,
  DollarSign,
  Heart,
  Laptop,
  MapPin,
  TrendingUp,
  Users,
} from "lucide-react"

const Careers = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero */}
      <div className="bg-gradient-to-b from-primary/10 to-background py-20 text-center">
        <Badge className="mb-4">Join Our Team</Badge>
        <h1 className="mb-4">Build the Future of Local Services</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Help us create a platform that connects communities and empowers local
          businesses.
        </p>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Values */}
        <h2 className="mb-8 text-center">Why ServiceHub?</h2>
        <div className="mb-20 grid gap-6 md:grid-cols-4">
          <Card>
            <CardContent className="p-6 text-center">
              <h4>Customer Obsessed</h4>
              <p className="text-sm text-muted-foreground">
                We put users first
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h4>Move Fast</h4>
              <p className="text-sm text-muted-foreground">We ship quickly</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h4>Own It</h4>
              <p className="text-sm text-muted-foreground">
                We take responsibility
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <h4>Build Together</h4>
              <p className="text-sm text-muted-foreground">We grow as a team</p>
            </CardContent>
          </Card>
        </div>

        {/* Benefits */}
        <h2 className="mb-12 text-center">Benefits & Perks</h2>
        <div className="mb-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex gap-4 p-6">
              <Heart className="text-primary" />
              <div>
                <h4>Health & Wellness</h4>
                <p className="text-sm text-muted-foreground">
                  Full insurance coverage
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <TrendingUp className="text-primary" />
              <div>
                <h4>Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Learning & career growth
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Coffee className="text-primary" />
              <div>
                <h4>Work-Life Balance</h4>
                <p className="text-sm text-muted-foreground">Flexible hours</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Laptop className="text-primary" />
              <div>
                <h4>Remote Work</h4>
                <p className="text-sm text-muted-foreground">
                  Work from anywhere
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <DollarSign className="text-primary" />
              <div>
                <h4>Competitive Pay</h4>
                <p className="text-sm text-muted-foreground">Top salaries</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="flex gap-4 p-6">
              <Users className="text-primary" />
              <div>
                <h4>Great Culture</h4>
                <p className="text-sm text-muted-foreground">Friendly team</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs */}
        <h2 className="mb-8 text-center">Open Positions</h2>

        <div className="space-y-4">
          {/* Job 1 */}
          <Card>
            <CardContent className="flex flex-col justify-between gap-4 p-6 lg:flex-row">
              <div>
                <h4>Senior Full Stack Engineer</h4>
                <p className="mb-2 text-muted-foreground">
                  Build scalable apps using React & Node
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex gap-1">
                    <MapPin /> Remote
                  </span>
                  <span className="flex gap-1">
                    <Clock /> Full-time
                  </span>
                </div>
              </div>
              <Button>Apply</Button>
            </CardContent>
          </Card>

          {/* Job 2 */}
          <Card>
            <CardContent className="flex flex-col justify-between gap-4 p-6 lg:flex-row">
              <div>
                <h4>Product Designer</h4>
                <p className="mb-2 text-muted-foreground">
                  Design modern UI/UX
                </p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex gap-1">
                    <MapPin /> Remote
                  </span>
                  <span className="flex gap-1">
                    <Clock /> Full-time
                  </span>
                </div>
              </div>
              <Button>Apply</Button>
            </CardContent>
          </Card>

          {/* Job 3 */}
          <Card>
            <CardContent className="flex flex-col justify-between gap-4 p-6 lg:flex-row">
              <div>
                <h4>Marketing Manager</h4>
                <p className="mb-2 text-muted-foreground">Lead campaigns</p>
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <span className="flex gap-1">
                    <MapPin /> Remote
                  </span>
                  <span className="flex gap-1">
                    <Clock /> Full-time
                  </span>
                </div>
              </div>
              <Button>Apply</Button>
            </CardContent>
          </Card>
        </div>

        {/* Extra */}
        <div className="mt-12 rounded-lg bg-muted p-8 text-center">
          <Briefcase className="mx-auto mb-4" />
          <h3>Don't see the right role?</h3>
          <p className="mb-4 text-muted-foreground">
            Send us your resume and we’ll get in touch.
          </p>
          <Button variant="outline">Send Application</Button>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-primary py-20 text-center text-white">
        <h2 className="mb-4">Ready to Join?</h2>
        <p className="mb-6">Let’s build something amazing together.</p>
        <Button className="bg-white text-black">View Openings</Button>
      </div>
    </div>
  )
}

export default Careers
