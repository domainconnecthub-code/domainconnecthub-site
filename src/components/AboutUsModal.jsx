import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Helmet>
        <title>About Us - Domain Connect Hub</title>
        <meta name="description" content="Learn about Domain Connect Hub's mission to simplify domain connection and management for everyone." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">About Us</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 text-gray-800">
          <p className="mb-4">
            At Domain Connect Hub, we believe connecting your domain to the web should be simple, fast, and frustration-free. For years, creators, entrepreneurs, and small businesses have wasted hours wrestling with DNS settings, authentication errors, and confusing tech jargon just to get a website or email running.
          </p>
          <p className="mb-4">
            We’ve lived that pain firsthand — and we decided to fix it.
          </p>
          <p className="mb-4">
            Our platform was built to remove the technical barriers between you and your online business. Whether you’re launching a funnel, setting up a store, or verifying an email domain, Domain Connect Hub automates the hard parts behind the scenes so you can focus on what really matters: growing your brand and making money online.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">Our Mission</h2>
          <p className="mb-2">To make domain setup and management effortless for everyone — no tech degree required.</p>
          <p className="mb-2">We’re on a mission to:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>🧩 Simplify every step of domain connection with clean, guided automation.</li>
            <li>⚙️ Integrate with the world’s most popular platforms — from Systeme.io to Shopify and beyond.</li>
            <li>🔒 Protect your data and ensure your domains stay secure, authenticated, and verified.</li>
            <li>🚀 Empower creators, marketers, and business owners to launch online with confidence.</li>
          </ul>
          <p className="mb-4">We don’t just want to make connecting domains easier — we want to make it automatic.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">Our Story</h2>
          <p className="mb-4">
            Domain Connect Hub started with one simple idea: no one should lose sleep over DNS settings. What began as a personal frustration turned into a mission to build a tool that even a complete beginner could use. Our team of independent creators and developers combined experience in automation, web hosting, and digital marketing to design a solution that does the work for you.
          </p>
          <p className="mb-4">
            We know what it’s like to be up late, watching tutorials, wondering why your email still won’t verify. That’s why we’re building a system that does in seconds what used to take hours.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">Our Promise</h2>
          <p className="mb-2">No tech headaches.</p>
          <p className="mb-2">No endless support tickets.</p>
          <p className="mb-4">Just fast, reliable domain connections that work the first time.</p>
          <p className="mb-4">We stand behind our product and our users — every update, every feature, and every improvement is built around making your life easier.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">Get in Touch</h2>
          <p className="mb-2">Have a question, idea, or partnership inquiry?</p>
          <p className="mb-4">Reach out anytime — we’d love to hear from you.</p>
          <ul className="list-none pl-0 mb-4 space-y-1">
            <li>📧 <a href="mailto:domainconnecthub@gmail.com" className="text-blue-600 hover:underline">domainconnecthub@gmail.com</a></li>
            <li>🌐 <a href="https://DomainConnectHub.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">DomainConnectHub.com</a></li>
          </ul>
        </div>

        <div className="border-t border-gray-200 p-6 bg-gray-50">
          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
          >
            Close
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsModal;