import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Zap, Shield, Mail, FileText, ChevronRight } from 'lucide-react';

const docsSections = [
  {
    icon: <Zap className="w-8 h-8 text-blue-600" />,
    title: 'Getting Started',
    description: 'Learn the basics of Domain Connect Hub and connect your first domain in minutes.',
    link: '#getting-started',
  },
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: 'Email Authentication',
    description: 'A step-by-step guide to setting up SPF, DKIM, and DMARC for better email deliverability.',
    link: '#email-auth',
  },
  {
    icon: <Mail className="w-8 h-8 text-red-600" />,
    title: 'Connecting to Platforms',
    description: 'Specific guides for connecting your domain to popular services like Shopify, Systeme.io, and Gmail.',
    link: '#platforms',
  },
  {
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    title: 'Troubleshooting',
    description: 'Find solutions to common issues like propagation delays and record verification failures.',
    link: '#troubleshooting',
  },
];

const DocsPage = () => {
  return (
    <>
      <Helmet>
        <title>Documentation | DomainConnectHub</title>
        <meta
          name="description"
          content="Find guides, tutorials, and technical information on how to use DomainConnectHub to automate your DNS and domain setups."
        />
      </Helmet>

      <div className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <BookOpen className="mx-auto h-16 w-16 text-blue-600" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900"
            >
              Documentation
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Everything you need to know to get the most out of Domain Connect Hub.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {docsSections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group block p-8 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4 mb-4">
                    {section.icon}
                    <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                <p className="text-gray-600">{section.description}</p>
              </motion.a>
            ))}
          </div>

          <div className="space-y-20">
            <motion.section
              id="getting-started"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-8">Getting Started</h2>
              <div className="prose prose-lg max-w-none">
                <p>Welcome to Domain Connect Hub! Here’s how to connect your first domain:</p>
                <ol>
                  <li><strong>Create an Account:</strong> If you haven't already, <NavLink to="/" className="text-blue-600 hover:underline">sign up for a free account</NavLink>.</li>
                  <li><strong>Add Your Domain:</strong> From your dashboard, click "Add Domain" and enter the domain name you want to connect (e.g., `yourwebsite.com`).</li>
                  <li><strong>Select Your Platform:</strong> Choose the service you are connecting to (e.g., Shopify, Systeme.io). Our system will identify the required DNS records.</li>
                  <li><strong>Authenticate with Your Registrar:</strong> We will automatically detect your domain registrar (like GoDaddy or Namecheap). You'll be prompted to log in to authorize the changes. This is only available on paid plans.</li>
                  <li><strong>Connect & Verify:</strong> With one click, we will add all necessary records. Our system will then verify them in real-time. That's it!</li>
                </ol>
              </div>
            </motion.section>
            
            <motion.section
              id="email-auth"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-8">Email Authentication (SPF, DKIM, DMARC)</h2>
               <div className="prose prose-lg max-w-none">
                <p>Securing your email is crucial for deliverability and preventing spoofing. We automate this process on our paid plans.</p>
                <ul>
                  <li><strong>SPF (Sender Policy Framework):</strong> We create a TXT record that lists authorized servers allowed to send email from your domain, preventing spammers from using your domain.</li>
                  <li><strong>DKIM (DomainKeys Identified Mail):</strong> We generate a cryptographic signature for your emails, ensuring the content hasn't been tampered with in transit.</li>
                  <li><strong>DMARC (Domain-based Message Authentication, Reporting & Conformance):</strong> We set up a policy that tells receiving servers what to do with emails that fail SPF or DKIM checks (reject, quarantine, or monitor).</li>
                </ul>
                <p>On our Starter and Pro plans, this is done automatically when you connect a domain for email services.</p>
              </div>
            </motion.section>
            
            <motion.section
              id="platforms"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-8">Connecting to Platforms</h2>
              <div className="prose prose-lg max-w-none">
                <p>While our automated process is universal, here are a few things to note for popular platforms:</p>
                <ul>
                    <li><strong>Shopify:</strong> We add the required A record pointing to Shopify's IP address and the CNAME record for `www` pointing to `shops.myshopify.com`.</li>
                    <li><strong>Systeme.io:</strong> We configure the necessary CNAME records for your custom domain to point to Systeme.io's servers for your funnels and blog.</li>
                    <li><strong>Google Workspace (Gmail):</strong> We automatically add the required MX records to direct your domain's email to Google's servers, along with SPF and DKIM for security.</li>
                </ul>
              </div>
            </motion.section>

            <motion.section
              id="troubleshooting"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 border-b pb-4 mb-8">Troubleshooting</h2>
              <div className="prose prose-lg max-w-none">
                <p>Encountering an issue? Here are some common solutions:</p>
                <ul>
                    <li><strong>Verification Pending:</strong> DNS changes can sometimes take a few hours to propagate globally. If a record is still pending after 4 hours, click "Re-verify" on your dashboard. If it persists, <NavLink to="/support" className="text-blue-600 hover:underline">contact support</NavLink>.</li>
                    <li><strong>Authentication Failed:</strong> Ensure you are using the correct login credentials for your domain registrar. Some registrars also require two-factor authentication.</li>
                    <li><strong>Record Conflict:</strong> If you have existing DNS records that conflict with the ones we need to add (e.g., multiple A records), our system will notify you. You may need to manually delete the old record at your registrar before proceeding.</li>
                </ul>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocsPage;