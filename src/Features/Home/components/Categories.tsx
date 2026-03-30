import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Hammer, PaintBucket, Wind, Wrench, Zap } from "lucide-react"

const Categories = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto grid grid-cols-2 gap-4 px-4 md:grid-cols-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Droplet className="mx-auto mb-2 text-blue-500" />
              Plumbing
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Zap className="mx-auto mb-2 text-yellow-500" />
              Electrical
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Wind className="mx-auto mb-2 text-cyan-500" />
              HVAC
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Hammer className="mx-auto mb-2 text-amber-700" />
              Carpentry
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <PaintBucket className="mx-auto mb-2 text-purple-500" />
              Painting
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Wrench className="mx-auto mb-2 text-green-500" />
              Cleaning
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Categories
