import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { LayoutDashboard, LogIn, Menu, Sun, User } from "lucide-react"
import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "How it Works", href: "/#how-it-works" },
    { name: "Become Provider", href: "/dashboard" },
  ]
  return (
    <div>
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-semibold">ServiceHub</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Theme Icon (UI only) */}
            <Button variant="ghost" size="icon">
              <Sun className="h-5 w-5" />
            </Button>

            {/* Profile Dropdown (Static) */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden md:flex">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <div className="px-2 py-1.5 text-sm font-medium">John Doe</div>
                <div className="px-2 py-1.5 text-xs text-muted-foreground">
                  john@example.com
                </div>

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                  <Link to="/dashboard">
                    <LayoutDashboard className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Auth Buttons (Static) */}
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link to="/login">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>

            <Button asChild className="hidden md:flex">
              <Link to="/signup">Sign Up</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent className="p-5">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Main navigation
                </SheetDescription>

                <div className="mt-8 flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link key={link.href} to={link.href}>
                      {link.name}
                    </Link>
                  ))}

                  <Link to="/dashboard">Dashboard</Link>
                  <Link to="/login">
                    <Button variant="outline" className="w-full">
                      Login
                    </Button>
                  </Link>

                  <Link to="/signup">
                    <Button className="w-full">Sign Up</Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
