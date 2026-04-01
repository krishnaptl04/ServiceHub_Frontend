import { Card, CardContent } from "@/components/ui/card"
import React from "react"

const FAQ = () => {
  return (
    <div>
      {" "}
      <div className="mt-20">
        <h2 className="mb-10 text-center text-3xl">FAQs</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <h4>How fast is service?</h4>
              <p className="text-sm text-muted-foreground">
                Usually within minutes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4>Refund policy?</h4>
              <p className="text-sm text-muted-foreground">
                We ensure satisfaction guarantee.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h4>Become provider?</h4>
              <p className="text-sm text-muted-foreground">
                Sign up and start working.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default FAQ
