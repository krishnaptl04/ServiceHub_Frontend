import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react"
import React from "react"

const Form = () => {
  return (
    <div>
      {/* Form + Info */}
      <div className="py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="space-y-6 p-8">
                <div className="flex items-center gap-3">
                  <MessageSquare className="text-primary" />
                  <h3>Send Message</h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="mb-2 font-bold">Name</Label>
                    <Input placeholder="Your name" />
                  </div>

                  <div>
                    <Label className="mb-2 font-bold">Email</Label>
                    <Input placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label className="mb-2 font-bold">Phone</Label>
                    <Input placeholder="Phone number" />
                  </div>

                  <div>
                    <Label className="mb-2 font-bold">Subject</Label>
                    <Input placeholder="Subject" />
                  </div>
                </div>

                <div>
                  <Label className="mb-2 font-bold">Message</Label>
                  <Textarea rows={5} placeholder="Your message..." />
                </div>

                <Button className="w-50%">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info (Static) */}
          <div className="space-y-4">
            <Card>
              <CardContent className="flex gap-3 p-4">
                <Mail className="text-primary" />
                <div>
                  <p>Email</p>
                  <p className="text-sm text-muted-foreground">
                    support@servicehub.com
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex gap-3 p-4">
                <Phone className="text-primary" />
                <div>
                  <p>Phone</p>
                  <p className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex gap-3 p-4">
                <MapPin className="text-primary" />
                <div>
                  <p>Office</p>
                  <p className="text-sm text-muted-foreground">
                    123 Market Street, CA
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex gap-3 p-4">
                <Clock className="text-primary" />
                <div>
                  <p>Hours</p>
                  <p className="text-sm text-muted-foreground">
                    Mon - Fri: 9AM - 6PM
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form
