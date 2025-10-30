import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Zap, ShieldCheck, MailCheck, Rocket, Briefcase, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const services = [
  {
    icon: <Zap className="h-10 w-10 text-red-500" />,
    title: 'Automated DNS Setup',
    description: 'Connect your domain instantly. We automatically configure all necessary DNS records (A, CNAME, MX) for you.',
    price: '$10',
    priceTerm: 'per domain',
    value: 'dns-setup',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
    title: 'Email Security Suite',
    description: 'Protect your brand with automated SPF, DKIM, and DMARC setup to prevent email spoofing and improve deliverability.',
    price: '$25',
    priceTerm: 'per domain',
    value: 'email-security',
  },
  {
    icon: <MailCheck className="h-10 w-10 text-blue-500" />,
    title: 'Email Forwarding',
    description: 'Create custom email addresses for your domain and forward incoming emails to your existing inbox. Simple and effective.',
    price: '$5',
    priceTerm: 'per month',
    value: 'email-forwarding',
  },
  {
    icon: <FileText className="h-10 w-10 text-purple-500" />,
    title: 'Full DNS Audit',
    description: 'A comprehensive review of your current DNS setup to identify issues, optimize performance, and improve security.',
    price: '$150',
    priceTerm: 'one-time',
    value: 'dns-audit',
  },
  {
    icon: <Briefcase className="h-10 w-10 text-yellow-500" />,
    title: 'Business Package',
    description: 'Complete solution for businesses including DNS setup, email security, and priority support for up to 5 domains.',
    price: '$99',
    priceTerm: 'per month',
    value: 'business-package',
  },
  {
    icon: <Rocket className="h-10 w-10 text-orange-500" />,
    title: 'Managed DNS Service',
    description: 'Let our experts handle everything. We manage all your DNS changes, updates, and security monitoring for total peace of mind.',
    price: 'Custom',
    priceTerm: 'contact us',
    value: 'managed-dns',
  },
];

const ServiceCard = ({ icon, title, description, price, priceTerm }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
    <div className="mb-6">{icon}</div>
    <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{description}</p>
    <div className="flex items-baseline text-gray-900">
      <span className="text-4xl font-extrabold tracking-tight">{price}</span>
      {priceTerm && <span className="ml-1 text-xl font-semibold text-gray-500">{priceTerm}</span>}
    </div>
  </div>
);

export default function ServicesPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '' });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };


  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.service) {
        toast({
            title: "Hold Up! 🚧",
            description: "Please fill out all fields before submitting.",
            variant: "destructive",
        });
        return;
    }
    toast({
      title: "🚀 Request Submitted!",
      description: "Thanks! We've received your service request and will be in touch shortly.",
    });
    setFormData({ name: '', email: '', service: '' });
  };

  return (
    <>
      <Helmet>
        <title>Our Services | Automated DNS & Email Security | DomainConnectHub</title>
        <meta name="description" content="Explore our services, including automated DNS setup, email security (SPF, DKIM, DMARC), and managed DNS solutions. Simplify your domain management today." />
      </Helmet>
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Automated solutions to simplify your domain management and enhance your online security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          <div className="mt-24 bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-100" id="request-form">
             <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Request a Service</h2>
                <p className="mt-3 text-lg text-gray-600">Interested in one of our services? Fill out the form below to get started.</p>
            </div>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <div>
                    <Label htmlFor="name" className="text-gray-800 font-semibold">Your Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" value={formData.name} onChange={handleInputChange} className="mt-2" />
                </div>
                 <div>
                    <Label htmlFor="email" className="text-gray-800 font-semibold">Your Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={formData.email} onChange={handleInputChange} className="mt-2" />
                </div>
                <div>
                    <Label htmlFor="service" className="text-gray-800 font-semibold">Service of Interest</Label>
                     <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger className="w-full mt-2">
                            <SelectValue placeholder="Select a service..." />
                        </SelectTrigger>
                        <SelectContent>
                            {services.map(s => (
                                <SelectItem key={s.value} value={s.value}>{s.title}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                 <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">Submit Request</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}