import React from 'react';
import { Helmet } from 'react-helmet';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const tiers = [
  {
    name: 'Free',
    price: '$0',
    description: 'For personal projects & getting started.',
    features: [
      '1 Domain Connection',
      'Manual DNS Setup Guide',
      'Email Support',
      'Real-time Verification',
    ],
    cta: 'Get Started Free',
    isMostPopular: false,
    planId: 'free',
  },
  {
    name: 'Starter',
    price: '$9',
    description: 'For entrepreneurs and small businesses.',
    features: [
      '3 Domain Connections',
      'Automated DNS Setup',
      'Automated Email & SPF/DKIM/DMARC',
      'Priority Email Support',
      'Instant DNS Propagation',
    ],
    cta: 'Choose Starter',
    isMostPopular: true,
    planId: 'starter',
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For agencies and power users.',
    features: [
      '10 Domain Connections',
      'Everything in Starter',
      'API Access (Coming Soon)',
      'Team Member Access (Coming Soon)',
      'Dedicated Support Channel',
    ],
    cta: 'Choose Pro',
    isMostPopular: false,
    planId: 'pro',
  },
];

const PricingPage = ({ onUpgrade }) => {
  const handleCtaClick = (planId) => {
    onUpgrade(planId);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Domain Connect Hub Pricing Plans",
    "itemListElement": tiers.map((tier, index) => ({
      "@type": "Offer",
      "name": tier.name,
      "description": tier.description,
      "price": tier.price.replace('$', ''),
      "priceCurrency": "USD",
      "position": index + 1
    }))
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans | DomainConnectHub</title>
        <meta
          name="description"
          content="Choose the perfect plan for your needs. From a free plan for manual DNS setup to automated connections for professionals and agencies."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Find the Right Plan for You
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent pricing. No hidden fees. Upgrade or cancel anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative border rounded-2xl p-8 flex flex-col h-full ${
                  tier.isMostPopular
                    ? 'border-blue-600 border-2 shadow-2xl bg-white'
                    : 'border-gray-200 bg-white shadow-lg'
                }`}
              >
                {tier.isMostPopular && (
                  <div className="absolute top-0 -translate-y-1/2 w-full flex justify-center">
                    <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-2">
                      <Star className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  <p className="mt-4 text-gray-600">{tier.description}</p>
                  
                  <div className="mt-6">
                    <span className="text-5xl font-extrabold text-gray-900">{tier.price}</span>
                    {tier.price !== '$0' && <span className="text-lg font-medium text-gray-500">/month</span>}
                  </div>
                  
                  <ul className="mt-8 space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <Check className="flex-shrink-0 w-6 h-6 text-blue-500 mr-2 mt-1" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-10">
                  <Button
                    onClick={() => handleCtaClick(tier.planId)}
                    size="lg"
                    className={`w-full ${
                      tier.isMostPopular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 text-center bg-white p-12 rounded-2xl border border-gray-200 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900">Need a Custom Solution?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              If you're managing more than 10 domains or have specific enterprise needs, contact us for a custom-tailored plan.
            </p>
            <Button asChild size="lg" className="mt-8">
              <NavLink to="/contact">Contact Sales</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;