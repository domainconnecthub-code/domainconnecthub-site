import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RefundPolicyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Helmet>
        <title>Refund and Disclaimer Policy - Domain Connect Hub</title>
        <meta name="description" content="Read our Refund and Disclaimer Policy to understand how we handle refunds, payments, and the limitations of our services." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Refund and Disclaimer Policy</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-1">Effective Date: 2025-10-09 | Last Updated: 2025-10-09</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 text-gray-800">
          <p className="mb-4">
            Thank you for choosing Domain Connect Hub (“we,” “our,” or “us”). This Refund and Disclaimer Policy explains how we handle refunds, payments, and the limitations of our services.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">1. General Policy</h2>
          <p className="mb-4">Our products and services — including domain management tools, connection automation, and related software — are provided on a subscription or one-time purchase basis. Before purchasing, please read and understand the following refund and service conditions.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">2. Refund Policy</h2>
          <h3 className="font-semibold text-gray-800 mb-2 mt-4">a. Digital Services</h3>
          <p className="mb-2">Because our services involve instant access to digital tools and automated integrations, all sales are final once your account or service is activated.</p>
          <p className="mb-2">We do not offer refunds for:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Subscription renewals</li>
            <li>Completed or active integrations</li>
            <li>User errors or misconfiguration on third-party platforms</li>
            <li>Dissatisfaction arising from misunderstanding service capabilities</li>
          </ul>
          <p className="mb-2">However, exceptions may be granted at our sole discretion if:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>A major technical issue prevents the service from functioning as described, and</li>
            <li>You have contacted support within 7 days of purchase to request assistance.</li>
          </ul>
           <p className="mb-2">If we cannot resolve your issue, a partial or full refund may be issued depending on the situation. To request review, contact domainconnecthub@gmail.com with:</p>
            <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
                <li>Your full name</li>
                <li>Email address used for purchase</li>
                <li>Date and order ID</li>
                <li>Reason for request</li>
            </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">3. Subscription Cancellations</h2>
          <p className="mb-2">You may cancel your subscription at any time from your account dashboard. Cancellations stop future billing but do not generate automatic refunds for past payments.</p>
          <p>Access to premium features remains active until the end of your current billing cycle.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">4. Service Disclaimer</h2>
          <p className="mb-2">Domain Connect Hub provides software and automation tools that assist users in connecting domains, managing DNS records, and integrating third-party services. We do not control or guarantee:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>DNS propagation times</li>
            <li>Third-party service behavior (e.g., Systeme.io, GoDaddy, Cloudflare, etc.)</li>
            <li>Uptime or performance of external APIs</li>
            <li>The success or outcome of integrations</li>
          </ul>
          <p className="mt-2">Our platform acts only as a facilitator to help automate technical configurations. All DNS or domain changes are ultimately the responsibility of the domain owner.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">5. No Warranties</h2>
          <p className="mb-2">The Service is provided on an “as is” and “as available” basis. We make no warranties, expressed or implied, about:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Accuracy, reliability, or completeness of results</li>
            <li>Compatibility with third-party systems</li>
            <li>Uninterrupted or error-free operation</li>
          </ul>
          <p className="mt-2">By using the Service, you agree that you assume full responsibility for all actions performed using your account.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">6. Limitation of Liability</h2>
          <p className="mb-2">To the fullest extent permitted by law, Domain Connect Hub and its affiliates shall not be liable for any:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Loss of data, income, or profits</li>
            <li>Business interruption</li>
            <li>Damage arising from misconfiguration or failed integrations</li>
            <li>Indirect or consequential damages</li>
          </ul>
          <p className="mt-2">Our total liability, in any case, will not exceed the total amount paid by you in the previous 12 months.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">7. Contact Us</h2>
          <p className="mb-2">If you have questions or concerns about this policy, contact us at:</p>
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

export default RefundPolicyModal;