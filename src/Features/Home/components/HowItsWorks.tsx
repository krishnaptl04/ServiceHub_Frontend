import { Calendar, CheckCircle2, Search, Star } from "lucide-react"

const HowItsWorks = () => {
  return (
    <div>
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto grid gap-6 px-4 text-center md:grid-cols-4">
          <div>
            <Search className="mx-auto mb-2 text-primary" />
            <h4>Choose Service</h4>
          </div>

          <div>
            <Calendar className="mx-auto mb-2 text-primary" />
            <h4>Book Appointment</h4>
          </div>

          <div>
            <CheckCircle2 className="mx-auto mb-2 text-primary" />
            <h4>Get Matched</h4>
          </div>

          <div>
            <Star className="mx-auto mb-2 text-primary" />
            <h4>Done</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItsWorks
