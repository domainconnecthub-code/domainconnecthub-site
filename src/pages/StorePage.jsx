import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Zap, ShieldCheck, MailCheck, Rocket, Briefcase, FileText, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import useCartStore from '@/store/cartStore';

const services = [
  {
    id: 'dns-setup',
    icon: <Zap className="h-10 w-10 text-blue-500" />,
    title: 'Automated DNS Setup',
    description: 'Connect your domain instantly. We automatically configure all necessary DNS records (A, CNAME, MX) for you.',
    price: 10,
    priceTerm: 'per domain',
  },
  {
    id: 'email-security',
    icon: <ShieldCheck className="h-10 w-10 text-green-500" />,
    title: 'Email Security Suite',
    description: 'Protect your brand with automated SPF, DKIM, and DMARC setup to prevent email spoofing and improve deliverability.',
    price: 25,
    priceTerm: 'per domain',
  },
  {
    id: 'email-forwarding',
    icon: <MailCheck className="h-10 w-10 text-purple-500" />,
    title: 'Email Forwarding',
    description: 'Create custom email addresses for your domain and forward incoming emails to your existing inbox. Simple and effective.',
    price: 5,
    priceTerm: 'per month',
  },
  {
    id: 'dns-audit',
    icon: <FileText className="h-10 w-10 text-yellow-500" />,
    title: 'Full DNS Audit',
    description: 'A comprehensive review of your current DNS setup to identify issues, optimize performance, and improve security.',
    price: 150,
    priceTerm: 'one-time',
  },
  {
    id: 'business-package',
    icon: <Briefcase className="h-10 w-10 text-orange-500" />,
    title: 'Business Package',
    description: 'Complete solution for businesses including DNS setup, email security, and priority support for up to 5 domains.',
    price: 99,
    priceTerm: 'per month',
  },
  {
    id: 'managed-dns',
    icon: <Rocket className="h-10 w-10 text-red-500" />,
    title: 'Managed DNS Service',
    description: 'Let our experts handle everything. We manage all your DNS changes, updates, and security monitoring for total peace of mind.',
    price: 'Custom',
    priceTerm: 'contact us',
  },
];

const StorePage = () => {
  const { toast } = useToast();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (service) => {
    if (service.price === 'Custom') {
      toast({
        title: 'Contact Us for Custom Pricing',
        description: 'This service requires a custom quote. Please get in touch with our sales team.',
      });
      // maybe redirect to contact page
      return;
    }
    addToCart(service);
    toast({
      title: `${service.title} added to cart!`,
      description: 'You can proceed to checkout or continue shopping.',
      action: <Button onClick={() => window.location.href='/checkout'}>Checkout</Button>,
    });
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Domain Connect Hub Services",
    "itemListElement": services.map((service, index) => ({
      "@type": "Product",
      "name": service.title,
      "description": service.description,
      "offers": {
        "@type": "Offer",
        "price": service.price === 'Custom' ? "0" : service.price.toString(),
        "priceCurrency": "USD"
      },
      "position": index + 1
    }))
  };

  return (
    <>
      <Helmet>
        <title>Store | DNS & Email Security Services | DomainConnectHub</title>
        <meta
          name="description"
          content="Purchase one-time services and subscriptions like Automated DNS Setup, Email Security, and DNS Audits to supercharge your domain management."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Store
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              One-time services and subscriptions to supercharge your domain management.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <div className="flex items-baseline text-gray-900 mb-8">
                  <span className="text-4xl font-extrabold tracking-tight">
                    {typeof service.price === 'number' ? `$${service.price}` : service.price}
                  </span>
                  {service.priceTerm && <span className="ml-1 text-xl font-semibold text-gray-500">{service.priceTerm}</span>}
                </div>
                <Button onClick={() => handleAddToCart(service)} size="lg" className="w-full">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  {service.price === 'Custom' ? 'Contact Us' : 'Add to Cart'}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StorePage;