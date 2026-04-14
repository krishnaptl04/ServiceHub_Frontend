import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import { Edit, Plus, Trash2 } from "lucide-react"
import React from "react"

const CategoryManagement = () => {
  const categories = [
    {
      id: 1,
      name: "Plumbing",
      description: "All plumbing related services",
      serviceCount: 12,
      active: true,
    },
    {
      id: 2,
      name: "Electrical",
      description: "Electrical repair and installation",
      serviceCount: 8,
      active: false,
    },
    {
      id: 3,
      name: "Cleaning",
      description: "Home and office cleaning services",
      serviceCount: 15,
      active: true,
    },
  ]
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="mb-2">Service Categories</h2>
          <p className="text-muted-foreground">
            Manage all service categories available on the platform
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Category
        </Button>
      </div>

      {/* Category Cards */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Card key={category.id}>
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between">
                <div>
                  <h4>{category.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {category.serviceCount} services
                  </p>
                </div>
                <Badge variant={category.active ? "default" : "secondary"}>
                  {category.active ? "Active" : "Inactive"}
                </Badge>
              </div>

              {/* Switch (UI only) */}
              <div className="mb-4 flex items-center justify-between">
                <Label>Active Status</Label>
                <Switch checked={category.active} />
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="mr-2 h-3 w-3" />
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Category Statistics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <div>
                <p className="font-medium">{category.name}</p>
                <p className="text-sm text-muted-foreground">
                  {category.serviceCount} services available
                </p>
              </div>
              <Badge variant={category.active ? "default" : "secondary"}>
                {category.active ? "Active" : "Inactive"}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )

  {
    /* Add Category Dialog (Static Open UI) */
  }
  ;<Dialog open>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create New Category</DialogTitle>
        <DialogDescription>
          Add a new service category to the platform
        </DialogDescription>
      </DialogHeader>

      <div className="space-y-4">
        <div>
          <Label>Category Name *</Label>
          <Input placeholder="e.g., Landscaping" className="mt-2" />
        </div>

        <div>
          <Label>Description *</Label>
          <Textarea
            placeholder="Brief description of the category"
            className="mt-2"
          />
        </div>

        <div>
          <Label>Icon Name</Label>
          <Input placeholder="e.g., Wrench, Zap, Home" className="mt-2" />
        </div>
      </div>

      <DialogFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Create Category</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  {
    /* Delete Dialog (Static UI) */
  }
  ;<AlertDialog open>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This will permanently delete the "Plumbing" category.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction className="bg-destructive text-white">
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
}

export default CategoryManagement
