import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import React from "react"

const CTA = () => {
  return (
    <div>
      {" "}
      <div className="bg-muted/50 py-20 text-center">
        <h2 className="mb-4">Need Immediate Assistance?</h2>
        <p className="mb-8 text-xl text-muted-foreground">
          For urgent service requests or technical support, please call us
          directly.
        </p>
        <Button size="lg">
          <Phone className="mr-2 h-4 w-4" />
          Call +1 (555) 123-4567
        </Button>
      </div>
    </div>
  )
}

export default CTA
