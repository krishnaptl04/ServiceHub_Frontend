import React from "react"
import { Link } from "react-router-dom"
import { FaInstagramSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Browse Services", href: "/services" },
        { label: "Become a Provider", href: "/provider/dashboard" },
        { label: "How it Works", href: "/" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Cookie Policy", href: "/cookies" },
      ],
    },
  ]
  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo + Description */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg text-primary-foreground">S</span>
              </div>
              <span className="text-xl font-semibold">ServiceHub</span>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              Book trusted local services instantly. Your one-stop platform for
              all home services.
            </p>
          </div>
          {footerSections.map((section) => {
            console.log("section", section.links)

            return (
              <div>
                <h4 className="mb-4 font-semibold">{section?.title}</h4>

                <ul className="space-y-2">
                  {section.links.map((item) => {
                    return (
                      <li>
                        <Link
                          to={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {item?.label}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2026 ServiceHub. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {[
              FaInstagramSquare,
              FaFacebookSquare,
              FaLinkedin,
              FaTwitterSquare,
            ].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
