import React from "react"
import { Link } from "react-router-dom"
import { FaInstagramSquare } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaTwitterSquare } from "react-icons/fa"

const Footer = () => {
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

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="footer-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="footer-link">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="footer-link">
                  Browse Services
                </Link>
              </li>
              <li>
                <Link to="/provider/dashboard" className="footer-link">
                  Become a Provider
                </Link>
              </li>
              <li>
                <Link to="/" className="footer-link">
                  How it Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="footer-link">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="footer-link">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
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
