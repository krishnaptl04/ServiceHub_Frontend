import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge, Cookie } from "lucide-react"
import React from "react"

const CookiePolicy = () => {
  const cookieTypes = [
    {
      type: "Strictly Necessary Cookies",
      purpose: "Essential for the website to function properly",
      examples: [
        "Authentication cookies to keep you logged in",
        "Security cookies to prevent fraud",
        "Session cookies to maintain your preferences",
      ],
      canDisable: false,
    },
    {
      type: "Performance Cookies",
      purpose: "Help us understand how visitors use our website",
      examples: [
        "Google Analytics to track page views",
        "Error tracking to identify and fix issues",
        "Load time monitoring for performance optimization",
      ],
      canDisable: true,
    },
    {
      type: "Functionality Cookies",
      purpose: "Remember your preferences and choices",
      examples: [
        "Language preferences",
        "Location settings",
        "Dark/light mode selection",
        "Search history and filters",
      ],
      canDisable: true,
    },
    {
      type: "Targeting/Advertising Cookies",
      purpose: "Deliver personalized content and measure ad effectiveness",
      examples: [
        "Track which pages you visit",
        "Measure advertising campaign performance",
        "Show relevant ads based on your interests",
      ],
      canDisable: true,
    },
  ]

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      link: "https://policies.google.com/privacy",
    },
    {
      name: "Stripe",
      purpose: "Payment processing",
      link: "https://stripe.com/privacy",
    },
    {
      name: "Facebook Pixel",
      purpose: "Advertising and conversion tracking",
      link: "https://www.facebook.com/privacy/explanation",
    },
    {
      name: "Intercom",
      purpose: "Customer support and communication",
      link: "https://www.intercom.com/legal/privacy",
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
                  <Cookie className="h-6 w-6 text-primary" />
                </div>
                <Badge>Cookie Policy</Badge>
              </div>
              <h1 className="mb-6">Cookie Policy</h1>
              <p className="mb-4 text-lg text-muted-foreground">
                Last updated: March 21, 2026
              </p>
              <p className="text-muted-foreground">
                This Cookie Policy explains how ServiceHub uses cookies and
                similar technologies to recognize you when you visit our website
                and mobile applications.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              {/* What Are Cookies */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">What Are Cookies?</h3>
                  <p className="mb-4 text-muted-foreground">
                    Cookies are small text files that are placed on your device
                    (computer, smartphone, or tablet) when you visit a website.
                    They are widely used to make websites work more efficiently
                    and provide information to website owners.
                  </p>
                  <p className="mb-4 text-muted-foreground">
                    Cookies can be "session cookies" (which are deleted when you
                    close your browser) or "persistent cookies" (which remain on
                    your device until deleted or expired).
                  </p>
                  <p className="text-muted-foreground">
                    Similar technologies include web beacons, pixels, and local
                    storage, which we collectively refer to as "cookies" in this
                    policy.
                  </p>
                </CardContent>
              </Card>

              {/* Why We Use Cookies */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">Why We Use Cookies</h3>
                  <p className="mb-4 text-muted-foreground">
                    We use cookies for several important reasons:
                  </p>
                  <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                    <li>To keep you signed in and remember your preferences</li>
                    <li>
                      To understand how you use our platform and improve it
                    </li>
                    <li>To personalize your experience</li>
                    <li>To deliver relevant advertising</li>
                    <li>To protect against fraud and enhance security</li>
                    <li>To analyze traffic and usage patterns</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Types of Cookies */}
              <div className="mb-8">
                <h2 className="mb-6">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  {cookieTypes.map((cookie, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-start justify-between">
                          <h4>{cookie.type}</h4>
                          {cookie.canDisable ? (
                            <Badge fontVariant="secondary">Optional</Badge>
                          ) : (
                            <Badge fontVariant="destructive">Required</Badge>
                          )}
                        </div>
                        <p className="mb-4 text-muted-foreground">
                          <strong>Purpose:</strong> {cookie.purpose}
                        </p>
                        <div>
                          <p className="mb-2 text-sm font-medium">Examples:</p>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            {cookie.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1 text-primary">•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Third-Party Cookies */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">Third-Party Cookies</h3>
                  <p className="mb-6 text-muted-foreground">
                    We use services from trusted third-party companies that may
                    also set cookies on your device. These companies have their
                    own privacy policies:
                  </p>
                  <div className="space-y-4">
                    {thirdPartyServices.map((service, index) => (
                      <div
                        key={index}
                        className="flex items-start justify-between rounded-lg border p-4"
                      >
                        <div>
                          <h4 className="mb-1 text-sm">{service.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {service.purpose}
                          </p>
                        </div>
                        <a
                          href={service.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-primary hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Managing Cookies */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">How to Manage Cookies</h3>
                  <p className="mb-4 text-muted-foreground">
                    You have several options to manage cookies:
                  </p>

                  <div className="mb-6 space-y-4">
                    <div>
                      <h4 className="mb-2 text-sm">Browser Settings</h4>
                      <p className="mb-2 text-sm text-muted-foreground">
                        Most browsers allow you to control cookies through their
                        settings. You can:
                      </p>
                      <ul className="ml-4 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                        <li>Block all cookies</li>
                        <li>Block third-party cookies only</li>
                        <li>Delete cookies when you close your browser</li>
                        <li>Make exceptions for certain websites</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm">
                        Browser-Specific Instructions
                      </h4>
                      <div className="space-y-2 text-sm">
                        <p className="text-muted-foreground">
                          <strong>Chrome:</strong> Settings → Privacy and
                          security → Cookies
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Firefox:</strong> Settings → Privacy &
                          Security → Cookies
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Safari:</strong> Preferences → Privacy →
                          Cookies
                        </p>
                        <p className="text-muted-foreground">
                          <strong>Edge:</strong> Settings → Privacy → Cookies
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm">Opt-Out Tools</h4>
                      <p className="mb-2 text-sm text-muted-foreground">
                        You can opt out of targeted advertising:
                      </p>
                      <ul className="ml-4 list-inside list-disc space-y-1 text-sm">
                        <li>
                          <a
                            href="http://www.aboutads.info/choices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Digital Advertising Alliance
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.networkadvertising.org/choices"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Network Advertising Initiative
                          </a>
                        </li>
                        <li>
                          <a
                            href="http://www.youronlinechoices.eu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            Your Online Choices (EU)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900 dark:bg-amber-950">
                    <p className="text-sm text-amber-900 dark:text-amber-100">
                      <strong>Note:</strong> Disabling cookies may affect your
                      ability to use certain features of our platform. Some
                      functionality may not work properly without cookies
                      enabled.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cookie Consent */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">Cookie Consent</h3>
                  <p className="mb-4 text-muted-foreground">
                    When you first visit our website, we will ask for your
                    consent to use non-essential cookies. You can change your
                    preferences at any time using our cookie settings panel.
                  </p>
                  <Button>Manage Cookie Preferences</Button>
                </CardContent>
              </Card>

              {/* Updates */}
              <Card className="mb-8">
                <CardContent className="p-8">
                  <h3 className="mb-4">Changes to This Policy</h3>
                  <p className="mb-4 text-muted-foreground">
                    We may update this Cookie Policy from time to time to
                    reflect changes in our practices or for legal, regulatory,
                    or operational reasons. The updated policy will be posted on
                    this page with a new "Last updated" date.
                  </p>
                  <p className="text-muted-foreground">
                    We encourage you to review this Cookie Policy periodically
                    to stay informed about how we use cookies.
                  </p>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card className="border-primary/50 bg-primary/5">
                <CardContent className="p-8">
                  <h4 className="mb-3">Questions About Cookies?</h4>
                  <p className="mb-4 text-muted-foreground">
                    If you have any questions about our use of cookies, please
                    contact us:
                  </p>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Email: privacy@servicehub.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                    <p>Address: 123 Market Street, San Francisco, CA 94103</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookiePolicy
