import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PrivacyPolicyModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <Helmet>
        <title>Privacy Policy - Domain Connect Hub</title>
        <meta name="description" content="Learn how Domain Connect Hub collects, uses, and protects your personal information." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full my-8 max-h-[90vh] overflow-hidden flex flex-col"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Privacy Policy</h1>
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
            At Domain Connect Hub (“we,” “our,” or “us”), your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website DomainConnectHub.com and use our services (collectively, the “Service”). By using our website or services, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">1. Information We Collect</h2>
          <p className="mb-2">We may collect the following types of information:</p>
          <h3 className="font-semibold text-gray-800 mb-2 mt-4">a. Information You Provide</h3>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and password.</li>
            <li><strong>Billing Information:</strong> When you purchase a subscription or service, we collect payment details (handled securely by third-party processors such as Stripe or PayPal).</li>
            <li><strong>Support Requests:</strong> When you contact us, we collect the information you provide (e.g., your email and message content).</li>
          </ul>
          <h3 className="font-semibold text-gray-800 mb-2 mt-4">b. Information We Automatically Collect</h3>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li><strong>Log Data:</strong> Your IP address, browser type, device information, and operating system.</li>
            <li><strong>Cookies:</strong> Small text files used to remember preferences and improve your experience. You can disable cookies in your browser settings, but some features may not work properly.</li>
          </ul>
          <h3 className="font-semibold text-gray-800 mb-2 mt-4">c. Third-Party Integrations</h3>
          <p className="mb-4">If you connect a domain registrar or hosting provider through our platform, we may temporarily store connection tokens or credentials required to complete DNS updates. These are encrypted and never shared outside the system.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">2. How We Use Your Information</h2>
          <p className="mb-2">We use your data to:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Provide, maintain, and improve our Service.</li>
            <li>Process your transactions and manage billing.</li>
            <li>Respond to support requests and communicate updates.</li>
            <li>Send marketing or product-related emails (only if you opt in).</li>
            <li>Ensure account security and detect fraudulent activity.</li>
          </ul>
          <p className="mt-2">We do not sell, rent, or trade your personal information to third parties.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">3. How We Share Information</h2>
          <p className="mb-2">We may share your information with:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li><strong>Service Providers:</strong> (e.g., payment processors, hosting providers, or email services) who help us operate the platform.</li>
            <li><strong>Legal Authorities:</strong> if required by law or to protect our legal rights.</li>
            <li><strong>Business Transfers:</strong> If we merge, sell, or restructure the company, your information may be transferred to the new owner.</li>
          </ul>
          <p className="mt-2">All third parties are bound by strict confidentiality agreements.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">4. Data Security</h2>
          <p className="mb-2">We take reasonable precautions to protect your data from unauthorized access, alteration, or disclosure. Data is encrypted in transit (SSL/HTTPS) and at rest where applicable.</p>
          <p>However, no online service can guarantee 100% security — you use our platform at your own risk.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">5. Your Rights</h2>
          <p className="mb-2">Depending on your location, you may have the following rights:</p>
          <ul className="list-disc list-inside pl-4 mb-4 space-y-1">
            <li>Access a copy of your personal data.</li>
            <li>Request correction or deletion of your data.</li>
            <li>Withdraw consent to receive marketing emails.</li>
            <li>Request data portability (export of your information).</li>
          </ul>
          <p className="mt-2">You can exercise these rights by contacting us at domainconnecthub@gmail.com.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">6. Data Retention</h2>
          <p className="mb-2">We retain your information only as long as necessary to provide services, comply with legal obligations, or resolve disputes.</p>
          <p>When your account is deleted, all associated personal data will be removed or anonymized.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">7. Third-Party Links</h2>
          <p className="mb-2">Our website may include links to third-party sites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies separately.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">8. Children’s Privacy</h2>
          <p className="mb-2">Our Service is not intended for children under 13 (or 16 in the EU). We do not knowingly collect data from children. If we learn a child’s data has been collected, we will delete it promptly.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">9. Changes to This Policy</h2>
          <p className="mb-4">We may update this Privacy Policy from time to time. The latest version will always be available on DomainConnectHub.com, with the date updated at the top.</p>

          <h2 className="text-xl font-bold text-gray-900 mb-3 mt-6">10. Contact Us</h2>
          <p className="mb-2">If you have any questions, requests, or complaints regarding this Privacy Policy, please contact:</p>
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

export default PrivacyPolicyModal;