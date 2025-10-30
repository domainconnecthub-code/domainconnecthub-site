import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      description: "Your message has been received, but not sent (yet!).",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Domain Connect Hub Support",
    "description": "Get in touch with our team for questions about DNS automation, domain setup, or our services.",
    "url": "https://domainconnecthub.com/contact"
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | DomainConnectHub Support</title>
        <meta name="description" content="Get in touch with the DomainConnectHub team for support with DNS automation, domain setup, pricing, or any other questions." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
            Contact Our Support Team
          </h1>
          <p className="text-center text-gray-700 text-lg mb-8">
            Have questions about DNS automation or domain setup? Fill out the form, and we'll get back to you as soon as possible!
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <Label htmlFor="name">
                Your Name
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div>
              <Label htmlFor="email">
                Your Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <div>
              <Label htmlFor="message">
                Your Message
              </Label>
              <Textarea
                id="message"
                placeholder="How can we help with your domain connection?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                aria-required="true"
              />
            </div>
            <Button
              type="submit"
              size="lg"
            >
              Send Message
            </Button>
          </form>

          <div className="mt-8 text-center text-gray-600">
            <p className="mb-2">For direct inquiries about domain setup or security:</p>
            <p className="font-semibold">Email: <a href="mailto:support@domainconnecthub.com" className="text-blue-600 hover:underline">support@domainconnecthub.com</a></p>
          </div>
        </div>
      </main>
    </>
  );
}