import { Card, CardContent } from "@/components/ui/card"
import { Badge, Shield } from "lucide-react"
import React from "react"

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, including:
      
• Personal Information: Name, email address, phone number, postal address, and payment information when you create an account or book a service.

• Profile Information: For service providers, we collect additional information such as professional certifications, business licenses, insurance information, and work history.

• Usage Information: We automatically collect information about your interaction with our platform, including pages visited, search queries, and booking history.

• Device Information: IP address, browser type, operating system, and device identifiers.

• Location Information: With your permission, we collect precise location data to match you with nearby service providers.`,
    },
    {
      title: "2. How We Use Your Information",
      content: `We use the information we collect to:

• Provide, maintain, and improve our services
• Process transactions and send related information
• Send technical notices, updates, and support messages
• Respond to your comments and questions
• Match customers with appropriate service providers
• Verify the identity and qualifications of service providers
• Monitor and analyze trends and usage
• Detect, prevent, and address fraud and security issues
• Personalize your experience on our platform
• Send marketing communications (with your consent)`,
    },
    {
      title: "3. Information Sharing and Disclosure",
      content: `We may share your information in the following circumstances:

• With Service Providers: When you book a service, we share relevant information with the service provider to complete the job.

• With Business Partners: We may share information with trusted partners who help us operate our platform and conduct our business.

• For Legal Reasons: We may disclose information if required by law or in response to legal process.

• Business Transfers: In connection with any merger, sale of company assets, or acquisition.

• With Your Consent: We may share information for any other purpose with your consent.

We do not sell your personal information to third parties for their marketing purposes.`,
    },
    {
      title: "4. Data Security",
      content: `We take reasonable measures to protect your information from unauthorized access, use, or disclosure. These measures include:

• Encryption of sensitive data in transit and at rest
• Regular security audits and vulnerability assessments
• Access controls and authentication requirements
• Secure server infrastructure and backup systems
• Employee training on data protection and privacy

However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
      title: "5. Your Rights and Choices",
      content: `You have the following rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you.

• Correction: Request correction of inaccurate or incomplete information.

• Deletion: Request deletion of your personal information, subject to certain exceptions.

• Opt-Out: Unsubscribe from marketing communications at any time.

• Data Portability: Request a copy of your data in a machine-readable format.

• Restriction: Request restriction of processing of your personal information.

To exercise these rights, please contact us at privacy@servicehub.com.`,
    },
    {
      title: "6. Cookies and Tracking Technologies",
      content: `We use cookies and similar tracking technologies to:

• Keep you signed in
• Remember your preferences
• Understand how you use our platform
• Improve our services
• Provide personalized content and advertising

You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our platform.

For more information, please see our Cookie Policy.`,
    },
    {
      title: "7. Third-Party Services",
      content: `Our platform may contain links to third-party websites and services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information.

We use third-party services including:
• Payment processors (Stripe, PayPal)
• Analytics providers (Google Analytics)
• Cloud storage providers (AWS)
• Communication tools (Twilio, SendGrid)`,
    },
    {
      title: "8. Children's Privacy",
      content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us immediately.`,
    },
    {
      title: "9. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that are different from the laws of your country.

When we transfer your information internationally, we ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.`,
    },
    {
      title: "10. Data Retention",
      content: `We retain your personal information for as long as necessary to:

• Provide our services
• Comply with legal obligations
• Resolve disputes
• Enforce our agreements

When we no longer need your information, we will securely delete or anonymize it.`,
    },
    {
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time. We will notify you of any material changes by:

• Posting the new policy on our website
• Sending you an email notification
• Displaying a prominent notice on our platform

Your continued use of our services after any changes indicates your acceptance of the updated policy.`,
    },
    {
      title: "12. Contact Us",
      content: `If you have any questions about this Privacy Policy or our privacy practices, please contact us:

Email: privacy@servicehub.com
Phone: +1 (555) 123-4567
Address: 123 Market Street, San Francisco, CA 94103

For users in the European Union, you may also contact our Data Protection Officer at dpo@servicehub.com.`,
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
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <Badge>Privacy Policy</Badge>
              </div>
              <h1 className="mb-6">Your Privacy Matters to Us</h1>
              <p className="mb-4 text-lg text-muted-foreground">
                Last updated: March 21, 2026
              </p>
              <p className="text-muted-foreground">
                At ServiceHub, we're committed to protecting your privacy and
                being transparent about how we collect, use, and share your
                information. This Privacy Policy explains our practices in
                detail.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* Introduction */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">Introduction</h3>
                  <p className="mb-4 text-muted-foreground">
                    ServiceHub, Inc. ("ServiceHub," "we," "us," or "our")
                    operates the ServiceHub platform that connects customers
                    with local service providers. This Privacy Policy describes
                    how we collect, use, disclose, and protect information that
                    applies to our website, mobile application, and related
                    services (collectively, the "Services").
                  </p>
                  <p className="text-muted-foreground">
                    By using our Services, you agree to the collection and use
                    of information in accordance with this policy. If you do not
                    agree with our policies and practices, please do not use our
                    Services.
                  </p>
                </CardContent>
              </Card>

              {/* Policy Sections */}
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

              {/* Important Notice */}
              <Card className="mt-8 border-primary/50 bg-primary/5">
                <CardContent className="p-8">
                  <h4 className="mb-3">
                    Important Notice for California Residents
                  </h4>
                  <p className="text-muted-foreground">
                    If you are a California resident, you have additional rights
                    under the California Consumer Privacy Act (CCPA). For more
                    information about your California privacy rights, please
                    contact us at privacy@servicehub.com.
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

export default PrivacyPolicy
