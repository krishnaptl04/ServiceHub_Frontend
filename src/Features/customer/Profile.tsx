import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Camera } from "lucide-react"
import React from "react"

const Profile = () => {
  return (
    <div className="max-w-4xl space-y-6">
      {/* Profile Picture */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Picture</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-2xl">JD</AvatarFallback>
            </Avatar>
            <div>
              <Button>
                <Camera className="mr-2 h-4 w-4" />
                Change Photo
              </Button>
              <p className="mt-2 text-sm text-muted-foreground">
                JPG, PNG or GIF. Max size 2MB.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Personal Info */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>First Name</Label>
              <Input placeholder="John" className="mt-2" />
            </div>
            <div>
              <Label>Last Name</Label>
              <Input placeholder="Doe" className="mt-2" />
            </div>
          </div>

          <div>
            <Label>Email Address</Label>
            <Input placeholder="john.doe@example.com" className="mt-2" />
          </div>

          <div>
            <Label>Phone Number</Label>
            <Input placeholder="(555) 123-4567" className="mt-2" />
          </div>

          <Button>Save Changes</Button>
        </CardContent>
      </Card>

      {/* Address */}
      <Card>
        <CardHeader>
          <CardTitle>Default Address</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Street Address</Label>
            <Input placeholder="123 Main Street" className="mt-2" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>City</Label>
              <Input placeholder="New York" className="mt-2" />
            </div>
            <div>
              <Label>State</Label>
              <Input placeholder="NY" className="mt-2" />
            </div>
          </div>

          <div>
            <Label>Zip Code</Label>
            <Input placeholder="10001" className="mt-2" />
          </div>

          <Button>Save Address</Button>
        </CardContent>
      </Card>

      {/* Password */}
      <Card>
        <CardHeader>
          <CardTitle>Change Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Current Password</Label>
            <Input type="password" className="mt-2" />
          </div>

          <div>
            <Label>New Password</Label>
            <Input type="password" className="mt-2" />
          </div>

          <div>
            <Label>Confirm New Password</Label>
            <Input type="password" className="mt-2" />
          </div>

          <Button>Update Password</Button>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch />
            <Label>Email Notifications</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch />
            <Label>SMS Notifications</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch />
            <Label>Push Notifications</Label>
          </div>
        </CardContent>
      </Card>

      {/* Danger */}
      <Card className="border-destructive">
        <CardHeader>
          <CardTitle className="text-destructive">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <h4 className="mb-1 text-sm">Delete Account</h4>
            <p className="text-sm text-muted-foreground">
              Permanently delete your account
            </p>
          </div>
          <Button variant="destructive">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Profile
