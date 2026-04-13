import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"
import React from "react"

const TermsOfService = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using ServiceHub, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our Services.

These Terms constitute a legally binding agreement between you and ServiceHub, Inc. We reserve the right to update these Terms at any time, and your continued use of our Services constitutes acceptance of any changes.`,
    },
    {
      title: "2. Description of Service",
      content: `ServiceHub operates an online marketplace platform that connects customers seeking home services with qualified service providers. We facilitate:

• Service discovery and booking
• Communication between customers and providers
• Payment processing
• Reviews and ratings
• Dispute resolution support

ServiceHub acts as a marketplace platform and is not directly responsible for the services provided by independent service providers.`,
    },
    {
      title: "3. User Accounts",
      content: `To use certain features of our Services, you must create an account. You agree to:

• Provide accurate, current, and complete information
• Maintain the security of your password and account
• Promptly update account information as needed
• Accept responsibility for all activities under your account
• Notify us immediately of any unauthorized use

You may not:
• Use another person's account without permission
• Share your account credentials
• Create multiple accounts for fraudulent purposes
• Impersonate any person or entity`,
    },
    {
      title: "4. User Conduct and Responsibilities",
      content: `You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree NOT to:

• Violate any applicable laws or regulations
• Infringe on intellectual property rights
• Transmit harmful or malicious code
• Attempt to gain unauthorized access to our systems
• Harass, abuse, or harm other users
• Post false, misleading, or fraudulent content
• Use automated systems to access our Services
• Engage in any activity that interferes with our Services
• Collect user information without consent
• Use our Services for commercial purposes without authorization`,
    },
    {
      title: "5. Service Provider Terms",
      content: `Service providers using our platform agree to:

• Maintain appropriate licenses, insurance, and certifications
• Provide accurate information about services offered
• Complete booked services professionally and on time
• Comply with all applicable laws and regulations
• Maintain professional conduct with customers
• Honor pricing and service terms agreed upon
• Respond to customer inquiries promptly

Service providers are independent contractors, not employees of ServiceHub. You are responsible for:
• Your own taxes and insurance
• Compliance with employment laws for any employees
• All aspects of service delivery
• Maintaining necessary business licenses`,
    },
    {
      title: "6. Customer Terms",
      content: `Customers using our platform agree to:

• Provide accurate service requirements
• Be present and available for scheduled services
• Provide safe working conditions for service providers
• Pay for services as agreed
• Treat service providers with respect
• Cancel bookings in accordance with cancellation policies
• Provide honest and accurate reviews`,
    },
    {
      title: "7. Booking and Payments",
      content: `Booking Terms:
• All bookings are subject to provider availability and acceptance
• Prices are determined by service providers and displayed before booking
• Platform fees are clearly disclosed during checkout
• Bookings may be cancelled according to our cancellation policy

Payment Terms:
• We use third-party payment processors (Stripe, PayPal)
• Payment is typically processed after service completion
• You authorize us to charge your payment method
• All fees are non-refundable except as required by law
• Disputes must be reported within 48 hours of service completion`,
    },
    {
      title: "8. Cancellation and Refund Policy",
      content: `Cancellations:
• Customers may cancel bookings according to provider policies
• Late cancellations may incur fees
• Providers may cancel due to emergency or safety concerns

Refunds:
• Refunds are issued at our discretion based on circumstances
• Service quality issues must be reported within 48 hours
• We may require documentation for refund requests
• Platform fees are generally non-refundable
• Refunds are processed within 5-10 business days`,
    },
    {
      title: "9. Reviews and Ratings",
      content: `Our platform includes a review system:

• Reviews must be based on actual experiences
• Reviews must be honest, fair, and not misleading
• Prohibited content includes profanity, hate speech, and personal information
• We reserve the right to remove reviews that violate our policies
• Service providers may not offer incentives for positive reviews
• Fake or fraudulent reviews are strictly prohibited`,
    },
    {
      title: "10. Intellectual Property",
      content: `ServiceHub Platform:
• All content, features, and functionality are owned by ServiceHub
• You may not copy, modify, or distribute our platform
• Our trademarks and logos may not be used without permission

User Content:
• You retain ownership of content you post
• You grant us a license to use, display, and distribute your content
• You represent that you have rights to any content you post
• We may remove content that violates these Terms`,
    },
    {
      title: "11. Disclaimers and Limitations",
      content: `DISCLAIMER OF WARRANTIES:
• Services are provided "as is" and "as available"
• We make no warranties about service quality, reliability, or availability
• We do not guarantee specific results from using our Services
• Service providers are independent contractors

LIMITATION OF LIABILITY:
• ServiceHub is not liable for actions of service providers
• Our liability is limited to fees paid in the past 12 months
• We are not liable for indirect, incidental, or consequential damages
• Some jurisdictions do not allow liability limitations`,
    },
    {
      title: "12. Indemnification",
      content: `You agree to indemnify and hold ServiceHub harmless from any claims, damages, losses, or expenses (including legal fees) arising from:

• Your use of our Services
• Your violation of these Terms
• Your violation of any rights of third parties
• Your content or conduct on our platform

This indemnification obligation survives termination of these Terms.`,
    },
    {
      title: "13. Dispute Resolution",
      content: `Informal Resolution:
• Contact us first to resolve disputes informally
• We'll work with you in good faith to find a solution

Arbitration:
• Disputes will be resolved through binding arbitration
• You waive the right to a jury trial
• You waive the right to participate in class actions
• Arbitration will be conducted under AAA rules

Exceptions:
• Small claims court disputes
• Intellectual property disputes
• Injunctive relief matters`,
    },
    {
      title: "14. Termination",
      content: `We may terminate or suspend your account immediately if you:

• Violate these Terms
• Engage in fraudulent activity
• Pose a safety risk to others
• Fail to pay fees owed

Upon termination:
• Your right to use our Services ceases immediately
• We may delete your account and content
• Outstanding fees remain due
• Certain provisions survive termination`,
    },
    {
      title: "15. General Provisions",
      content: `Governing Law:
• These Terms are governed by California law
• Disputes are subject to California jurisdiction

Entire Agreement:
• These Terms constitute the entire agreement
• Supersedes all prior agreements

Severability:
• If any provision is invalid, other provisions remain in effect

Waiver:
• Our failure to enforce a right doesn't waive that right

Assignment:
• You may not assign these Terms
• We may assign these Terms without notice`,
    },
    {
      title: "16. Contact Information",
      content: `For questions about these Terms, contact us:

Email: legal@servicehub.com
Phone: +1 (555) 123-4567
Address: 123 Market Street, San Francisco, CA 94103

For legal notices, send to:
ServiceHub, Inc.
Attn: Legal Department
123 Market Street
San Francisco, CA 94103`,
    },
  ]
  return (
    <div>
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-primary/10 to-background py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <Badge>Terms of Service</Badge>
              </div>
              <h1 className="mb-6">Terms of Service</h1>
              <p className="mb-4 text-lg text-muted-foreground">
                Last updated: March 21, 2026
              </p>
              <p className="text-muted-foreground">
                Please read these Terms of Service carefully before using
                ServiceHub. By using our Services, you agree to be bound by
                these terms.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Important Notice */}
              <Card className="mb-8 border-destructive/50 bg-destructive/5">
                <CardContent className="p-8">
                  <h4 className="mb-3">Important Notice</h4>
                  <p className="text-muted-foreground">
                    These Terms contain an arbitration clause and class action
                    waiver. By agreeing to these Terms, you agree to resolve
                    disputes through binding individual arbitration, which means
                    that you waive any right to have those disputes decided by a
                    judge or jury, and waive your right to participate in class
                    actions, class arbitrations, or representative actions.
                  </p>
                </CardContent>
              </Card>

              {/* Terms Sections */}
              <div className="space-y-6">
                {sections.map((section, index) => (
                  <Card key={index}>
                    <CardContent className="p-8">
                      <h3 className="mb-4">{section.title}</h3>
                      <div className="whitespace-pre-line text-muted-foreground">
                        {section.content}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Acknowledgment */}
              <Card className="mt-8 border-primary/50 bg-primary/5">
                <CardContent className="p-8">
                  <h4 className="mb-3">Acknowledgment</h4>
                  <p className="text-muted-foreground">
                    By using ServiceHub, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms of Service
                    and our Privacy Policy. If you have any questions about
                    these Terms, please contact us at legal@servicehub.com.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
