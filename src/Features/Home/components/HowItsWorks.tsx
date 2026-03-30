import { Calendar, CheckCircle2, Search, Section, Star } from "lucide-react"

const HowItsWorks = () => {
  const howItWorks = [
    {
      step: 1,
      title: "Choose Service",
      description:
        "Browse and select from our wide range of professional services",
      icon: Search,
    },
    {
      step: 2,
      title: "Book Appointment",
      description:
        "Pick your preferred date, time, and provide service details",
      icon: Calendar,
    },
    {
      step: 3,
      title: "Get Matched",
      description: "We connect you with verified, top-rated service providers",
      icon: CheckCircle2,
    },
    {
      step: 4,
      title: "Service Complete",
      description: "Enjoy quality service and rate your experience",
      icon: Star,
    },
  ]
  return (
    // <section id="how-it-works" className="py-16">
    //   <div className="container mx-auto px-4">
    //     {/* Heading */}
    //     <div className="mb-12 text-center">
    //       <h2 className="mb-4">How It Works</h2>
    //       <p className="text-muted-foreground">
    //         Get started in four simple steps
    //       </p>
    //     </div>

    //     {/* Steps */}
    //     <div className="grid gap-6 text-center md:grid-cols-4">
    //       <div>
    //         <Search className="mx-auto mb-2 text-primary" />
    //         <h4>Choose Service</h4>
    //       </div>

    //       <div>
    //         <Calendar className="mx-auto mb-2 text-primary" />
    //         <h4>Book Appointment</h4>
    //       </div>

    //       <div>
    //         <CheckCircle2 className="mx-auto mb-2 text-primary" />
    //         <h4>Get Matched</h4>
    //       </div>

    //       <div>
    //         <Star className="mx-auto mb-2 text-primary" />
    //         <h4>Done</h4>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4">How It Works</h2>
          <p className="text-muted-foreground">
            Get started in four simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <div key={item.step} className="text-center">
              <div className="relative mb-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
              </div>
              <h4 className="mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItsWorks
