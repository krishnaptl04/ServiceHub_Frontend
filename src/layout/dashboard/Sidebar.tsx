import { Button } from "@/components/ui/button"
import {
  Calendar,
  CheckSquare,
  ClipboardList,
  Clock,
  DollarSign,
  FileText,
  LayoutDashboard,
  Mail,
  MessageSquare,
  Shield,
  User,
  Users,
} from "lucide-react"
import React from "react"
import { Link, useLocation } from "react-router-dom"
const getNavItems = (role: "customer" | "provider" | "admin") => {
  switch (role) {
    case "customer":
      return [
        {
          name: "Dashboard",
          href: "/customer/dashboard",
          icon: LayoutDashboard,
        },
        { name: "My Bookings", href: "/customer/bookings", icon: Calendar },
        { name: "My Reviews", href: "/customer/reviews", icon: Star },
        { name: "Profile", href: "/customer/profile", icon: User },
      ]
    case "provider":
      return [
        {
          name: "Dashboard",
          href: "/provider/dashboard",
          icon: LayoutDashboard,
        },
        {
          name: "Booking Requests",
          href: "/provider/requests",
          icon: ClipboardList,
        },
        { name: "Active Jobs", href: "/provider/jobs", icon: CheckSquare },
        { name: "Availability", href: "/provider/availability", icon: Clock },
        { name: "Earnings", href: "/provider/earnings", icon: DollarSign },
        { name: "Profile", href: "/provider/profile", icon: User },
      ]
    case "admin":
      return [
        { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
        { name: "User Management", href: "/admin/users", icon: Users },
        { name: "Provider Approval", href: "/admin/providers", icon: Shield },
        { name: "Categories", href: "/admin/categories", icon: FileText },
        { name: "Bookings", href: "/admin/bookings", icon: Calendar },
        { name: "Reviews", href: "/admin/reviews", icon: MessageSquare },
        { name: "Contact Submissions", href: "/admin/contact", icon: Mail },
      ]
  }
}

const Sidebar = () => {
  const location = useLocation()
  const isActive = (href: string) => location.pathname === href
  const navItems = getNavItems("admin")
  return (
    <div className="space-y-4">
      <div className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-semibold">ServiceHub</span>
        </Link>
      </div>

      <nav className="space-y-1 px-2">
        {navItems.map((item) => (
          <Link key={item.href} to={item.href}>
            <Button
              variant={isActive(item.href) ? "default" : "ghost"}
              className="w-full justify-start"
            >
              <item.icon className="mr-3 h-4 w-4" />
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
