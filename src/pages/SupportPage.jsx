import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { LifeBuoy, ChevronDown, BookOpen, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'What is DNS and why is it complicated?',
    answer: 'DNS (Domain Name System) is the phonebook of the internet, translating human-readable domain names (like `google.com`) into IP addresses that computers use. It gets complicated because different platforms require specific "records" (A, CNAME, MX, TXT) to be configured perfectly at your domain registrar. A single typo can break your website or email.',
  },
  {
    question: 'How does Domain Connect Hub automate this?',
    answer: 'We use secure API connections with major domain registrars (like GoDaddy, Namecheap) and platforms (like Shopify, Google Workspace). When you tell us your domain and where you want to connect it, we automatically add the correct DNS records for you on our paid plans. No more copying and pasting complex values!',
  },
  {
    question: 'Is it secure to give you access to my domain registrar?',
    answer: 'Yes. We use an industry-standard protocol called OAuth to gain temporary, limited access to your DNS settings. We never see or store your password, and our permissions are restricted to only managing DNS records. You can revoke access at any time from your registrar’s dashboard.',
  },
  {
    question: 'What happens if I use the Free plan?',
    answer: 'Our Free plan helps you by identifying the exact records you need. Instead of automating the process, we provide you with a clear, step-by-step guide and the exact values to copy and paste into your registrar’s DNS settings yourself. It removes the guesswork, but still requires manual work.',
  },
  {
    question: 'How long does DNS propagation take with your service?',
    answer: 'Normally, DNS propagation can take up to 48 hours. With our paid plans, we use techniques to accelerate this process significantly, often to just a few minutes. We do this by lowering TTL (Time To Live) values and actively pushing updates to major DNS resolvers.',
  },
  {
    question: 'What if my registrar or platform is not supported?',
    answer: 'We are constantly adding new integrations. If your provider is not on our list, please <a href="/contact" class="text-blue-600 hover:underline">contact us</a>! In the meantime, our system can still provide you with the correct records for manual setup.',
  },
];

const FaqItem = ({ q, a, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-6">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800"
      aria-expanded={isOpen}
    >
      <span>{q}</span>
      <ChevronDown
        className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true"
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden"
    >
      <div className="pt-4 text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
    </motion.div>
  </div>
);

const SupportPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]*>?/gm, '')
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Support & FAQ | DomainConnectHub</title>
        <meta
          name="description"
          content="Get help with your DomainConnectHub account. Find answers to frequently asked questions about DNS automation, security, and our supported platforms."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <LifeBuoy className="mx-auto h-16 w-16 text-blue-600" />
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
              Support Center
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help. Find answers to common questions below or get in touch with our team.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <div>
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  q={faq.question}
                  a={faq.answer}
                  isOpen={openFaq === index}
                  onClick={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
            >
              <BookOpen className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Check our Docs</h3>
              <p className="mt-2 text-gray-600">
                For detailed guides and technical information, explore our documentation.
              </p>
              <Button asChild variant="link" className="mt-4 text-blue-600 font-semibold">
                <NavLink to="/docs">
                  Read Documentation &rarr;
                </NavLink>
              </Button>
            </motion.div>
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-200"
            >
              <MessageSquare className="mx-auto h-12 w-12 text-blue-600" />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Contact Support</h3>
              <p className="mt-2 text-gray-600">
                Can't find an answer? Our support team is ready to assist you.
              </p>
              <Button asChild variant="link" className="mt-4 text-blue-600 font-semibold">
                <NavLink to="/contact">
                  Get in Touch &rarr;
                </NavLink>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportPage;