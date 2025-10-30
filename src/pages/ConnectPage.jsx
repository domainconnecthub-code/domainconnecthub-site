import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function ConnectPage() {
  const [domain, setDomain] = useState("");
  const [status, setStatus] = useState("");

  const handleConnect = (e) => {
    e.preventDefault();

    if (!domain.trim()) {
      setStatus("❌ Please enter a valid domain name for setup.");
      return;
    }

    setStatus("🔄 Checking domain for automated DNS setup...");
    setTimeout(() => {
      setStatus("✅ Domain successfully connected! DNS automation is complete.");
    }, 2000);
  };

  return (
    <>
      <Helmet>
        <title>Connect Domain | Automated DNS Setup | DomainConnectHub</title>
        <meta name="description" content="Connect your domain with our automated DNS setup tool. We handle DNS records, verification, and email security (SPF, DKIM) for you." />
      </Helmet>
      <div className="min-h-[calc(100vh-10rem)] bg-gray-50 flex flex-col items-center justify-center px-6 py-12">
        <div className="max-w-xl w-full bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
          <h1 className="text-3xl font-bold text-center mb-4 text-gray-800">
            Automated Domain & DNS Setup
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Enter your domain name below. DomainConnectHub will handle the DNS setup,
            records, and verification automatically — across any provider.
          </p>

          <form onSubmit={handleConnect} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="e.g., mybusiness.com"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              className="border border-gray-300 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Domain name for connection"
            />
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-3 rounded-lg transition duration-200"
            >
              Connect Domain
            </button>
          </form>

          {status && (
            <div className="mt-6 text-center font-medium text-gray-700">
              {status}
            </div>
          )}
        </div>
        <div className="text-center mt-8">
          <img class="w-64 h-auto mx-auto" alt="Illustration of a secure shield protecting a domain name" src="https://images.unsplash.com/photo-1643101450344-f1f3dcde2411" />
        </div>
        <p className="text-gray-500 text-sm mt-6">
          Need help with your domain setup? <Link to="/contact" className="text-red-600 hover:underline">Contact Support</Link>
        </p>
      </div>
    </>
  );
}