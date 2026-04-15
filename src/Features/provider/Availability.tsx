import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

import React from "react"

const Availability = () => {
  const weekDays = [
    { day: "Monday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Tuesday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Wednesday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Thursday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Friday", enabled: true, start: "09:00", end: "18:00" },
    { day: "Saturday", enabled: true, start: "10:00", end: "16:00" },
    { day: "Sunday", enabled: false, start: "10:00", end: "16:00" },
  ]

  return (
    <div className="max-w-4xl space-y-6">
      {/* Status */}
      <Card>
        <CardHeader>
          <CardTitle>Current Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between rounded-lg bg-muted p-4">
            <div>
              <h4>Available for Bookings</h4>
              <p className="text-sm text-muted-foreground">
                Toggle to control availability
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      {/* Weekly Schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Schedule</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="space-y-4">
            {weekDays.map((day) => (
              <div
                key={day.day}
                className="flex flex-col gap-4 rounded-lg border p-4 sm:flex-row"
              >
                <div className="flex flex-1 items-center gap-3">
                  <Switch />
                  <Label className="w-24">{day.day}</Label>
                </div>

                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <Label className="text-sm text-muted-foreground">
                      From
                    </Label>
                    <input
                      type="time"
                      placeholder={day.start}
                      className="rounded-md border bg-background px-3 py-2"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <Label className="text-sm text-muted-foreground">To</Label>
                    <input
                      type="time"
                      placeholder={day.end}
                      className="rounded-md border bg-background px-3 py-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button className="mt-6">Save Schedule</Button>
        </CardContent>
      </Card>

      {/* Emergency */}
      <Card>
        <CardHeader>
          <CardTitle>Emergency Services</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="flex justify-between rounded-lg bg-muted p-4">
            <div>
              <h4>24/7 Emergency Availability</h4>
              <p className="text-sm text-muted-foreground">
                Accept emergency bookings anytime
              </p>
            </div>
            <Switch />
          </div>

          <div className="rounded-lg border p-4">
            <Label className="mb-2 block">Emergency Rate Multiplier</Label>
            <select className="w-full rounded-lg border bg-background px-4 py-2">
              <option>1.5x (Standard + 50%)</option>
              <option>2.0x (Standard + 100%)</option>
              <option>2.5x (Standard + 150%)</option>
            </select>
          </div>
        </CardContent>
      </Card>

      {/* Time Off */}
      <Card>
        <CardHeader>
          <CardTitle>Time Off</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label>Start Date</Label>
              <input
                type="date"
                className="mt-2 w-full rounded-lg border bg-background px-4 py-2"
              />
            </div>

            <div>
              <Label>End Date</Label>
              <input
                type="date"
                className="mt-2 w-full rounded-lg border bg-background px-4 py-2"
              />
            </div>
          </div>

          <Button variant="outline">Block Time Off</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export default Availability
