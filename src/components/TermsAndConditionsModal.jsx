import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const TermsAndConditionsModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Helmet>
        <title>Terms and Conditions - Domain Connect Hub</title>
        <meta name="description" content="Read the Terms and Conditions for Domain Connect Hub to understand your rights and responsibilities when using our service." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Terms and Conditions</h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          <p className="text-blue-100 text-sm mt-1">Effective Date: 10-8-2025 | Last Updated: 10-8-2025</p>
        </div>

        <div className="flex-1 overflow-y-auto p-6 text-gray-800">
          <p className="mb-4">
            Welcome to DomainConnectHub.com (“we,” “our,” “us”). These Terms and Conditions (“Terms”) govern your access to and use of the Domain Connect Hub website, services, and tools (collectively, the “Service”). By accessing or using our Service, you agree to be bound by these Terms. If you do not agree, please do not use our Service.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">1. Use of the Service</h2>
          <p className="mb-2">You may use Domain Connect Hub only for lawful purposes. By using our Service, you represent that:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>You are at least 18 years old.</li>
            <li>You have the authority to enter into this agreement.</li>
            <li>You will not use the Service to harm or disrupt any network or system.</li>
          </ul>
          <p className="mb-4">We reserve the right to suspend or terminate accounts that violate these Terms.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">2. Account Registration</h2>
          <p className="mb-2">To use certain features, you must create an account with accurate and current information. You are responsible for:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Keeping your login credentials secure.</li>
            <li>All activity that occurs under your account.</li>
          </ul>
          <p className="mb-4">We are not liable for any loss or damage arising from unauthorized access to your account.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">3. Domain Connection Services</h2>
          <p className="mb-2">Our platform allows users to manage DNS records and connect domains to third-party services. By using this feature, you understand that:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>We act only as a technical intermediary between you and your registrar or hosting provider.</li>
            <li>You are solely responsible for any DNS, email, or website changes made through the platform.</li>
            <li>We do not guarantee uninterrupted operation or successful verification with third-party services.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">4. Payments and Subscriptions</h2>
          <p className="mb-2">Some features of Domain Connect Hub may require a paid subscription.</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>All prices are displayed before purchase and may change with notice.</li>
            <li>Payments are processed securely through trusted third-party providers (e.g., Stripe, PayPal).</li>
            <li>You may cancel at any time; however, no refunds are provided for unused periods.</li>
          </ul>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">5. Intellectual Property</h2>
          <p className="mb-4">All content, code, design, and branding on DomainConnectHub.com are the property of Domain Connect Hub and protected under applicable copyright and trademark laws. You may not copy, distribute, modify, or resell any part of the Service without written permission.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">6. Limitation of Liability</h2>
          <p className="mb-2">To the maximum extent permitted by law, Domain Connect Hub shall not be liable for:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Any indirect, incidental, or consequential damages,</li>
            <li>Loss of profits, data, or access interruptions,</li>
            <li>Errors or misconfigurations resulting from DNS or hosting changes.</li>
          </ul>
          <p className="mb-4">Our total liability for any claim shall not exceed the amount paid by you (if any) within the previous 12 months.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">7. Termination</h2>
          <p className="mb-4">We may suspend or terminate your account at any time, with or without cause, including if you violate these Terms. Upon termination, your access to the Service and data stored may be immediately revoked.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">8. Privacy Policy</h2>
          <p className="mb-4">Your use of the Service is also governed by our <a href="#" className="text-blue-600 hover:underline" onClick={(e) => { e.preventDefault(); toast({ title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀", variant: "default" }); }}>Privacy Policy</a>, which explains how we collect and use data.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">9. Changes to These Terms</h2>
          <p className="mb-4">We may update these Terms at any time. The updated version will be posted on our website with a new “Effective Date.” Continued use of the Service after changes means you accept the revised Terms.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">10. Contact Information</h2>
          <p className="mb-2">If you have questions or concerns about these Terms, contact us at:</p>
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

export default TermsAndConditionsModal;