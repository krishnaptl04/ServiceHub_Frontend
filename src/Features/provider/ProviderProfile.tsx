import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, X } from "lucide-react"
import React from "react"

const ProviderProfile = () => {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Business Info */}
      <Card>
        <CardHeader>
          <CardTitle>Business Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Business Name</Label>
            <Input defaultValue="Mike Johnson Plumbing" className="mt-2" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>First Name</Label>
              <Input defaultValue="Mike" className="mt-2" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input defaultValue="Johnson" className="mt-2" />
            </div>
          </div>

          <div>
            <Label>Professional Bio</Label>
            <Textarea
              rows={4}
              defaultValue="Professional plumber with over 10 years of experience."
              className="mt-2"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Phone</Label>
              <Input defaultValue="(555) 123-4567" className="mt-2" />
            </div>
            <div>
              <Label>Email</Label>
              <Input defaultValue="mike@example.com" className="mt-2" />
            </div>
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Services */}
      <Card>
        <CardHeader>
          <CardTitle>Services Offered</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-wrap gap-2">
            <Badge>Emergency Repairs</Badge>
            <Badge>Leak Detection</Badge>
            <Badge>Pipe Installation</Badge>
            <Badge>Drain Cleaning</Badge>
          </div>

          <div className="flex gap-2">
            <Input placeholder="Add new service" />
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card>
        <CardHeader>
          <CardTitle>Pricing</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Hourly Rate</Label>
              <div className="mt-2 flex items-center gap-2">
                <span>$</span>
                <Input defaultValue="50" />
                <span>/hr</span>
              </div>
            </div>

            <div>
              <Label>Call-Out Fee</Label>
              <div className="mt-2 flex items-center gap-2">
                <span>$</span>
                <Input defaultValue="50" />
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3 rounded-lg border p-3">
              <p className="flex-1 text-sm">Drain Cleaning</p>
              <Input className="w-32" defaultValue="$80-$150" />
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex items-center gap-3 rounded-lg border p-3">
              <p className="flex-1 text-sm">Water Heater Install</p>
              <Input className="w-32" defaultValue="$800-$1500" />
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Button variant="outline">Add Service Pricing</Button>
        </CardContent>
      </Card>

      {/* Service Area */}
      <Card>
        <CardHeader>
          <CardTitle>Service Area</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Zip Codes</Label>
            <Textarea placeholder="10001, 10002..." className="mt-2" />
          </div>

          <div>
            <Label>Service Radius</Label>
            <select className="mt-2 w-full rounded-lg border bg-background px-4 py-2">
              <option>10 miles</option>
              <option>20 miles</option>
              <option>30 miles</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Certifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>License</Label>
              <Input defaultValue="PL-12345" className="mt-2" />
            </div>
            <div>
              <Label>Insurance</Label>
              <Input defaultValue="INS-98765" className="mt-2" />
            </div>
          </div>

          <div className="rounded-lg border-2 border-dashed p-6 text-center">
            Upload Documents
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProviderProfile
