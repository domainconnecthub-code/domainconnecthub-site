import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export default function SecurityPage() {
  useEffect(() => {
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Security & Trust | DNS Automation & Data Protection</title>
        <meta name="description" content="Learn how DomainConnectHub ensures secure DNS automation and data protection. Our policies cover SSL, data privacy, and secure infrastructure for domain connections." />
      </Helmet>

      <section className="bg-gray-50 border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-red-600 text-white font-bold rounded-full px-3 py-1 text-sm mb-4">Security</span>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-2">Our Security & Trust Policy for Domain Connections</h1>
          <p className="text-gray-600 text-lg mb-6">Last updated: October 2025</p>
          <p className="text-gray-700 text-lg">Security is built into our DNS automation platform. When you use our <Link to="/connect" className="text-red-600 hover:underline font-semibold">domain setup tool</Link>, you trust us with your online identity. Here’s how we protect you.</p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <img class="w-full max-w-md h-auto mx-auto rounded-lg shadow-lg" alt="A diagram showing secure data flow through DomainConnectHub's system" src="https://images.unsplash.com/photo-1654588830920-92085849e384" />
        </div>
        <section className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200" id="ssl">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🔒 Encrypted Connections for Secure DNS Automation</h2>
          <p className="text-gray-700">All traffic is protected with <strong className="font-semibold">HTTPS (TLS&nbsp;1.3)</strong>. Every interaction, from domain checks to DNS setup, is encrypted.</p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200" id="data-min">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧠 Minimal & Secure Data Handling</h2>
          <p className="text-gray-700">We do <strong className="font-semibold">not</strong> store registrar passwords. We use temporary tokens for read-only access during the automated DNS setup.</p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200" id="privacy">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">🧾 Data Privacy & Compliance for Your Domain</h2>
          <p className="text-gray-700">We comply with <strong className="font-semibold">GDPR</strong> & <strong className="font-semibold">CCPA</strong>. For questions, <Link to="/contact" className="text-red-600 hover:underline font-semibold">contact our privacy team</Link>.</p>
        </section>

        <section className="bg-white shadow-lg rounded-xl p-6 mb-8 border border-gray-200" id="dns-security">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">⚙️ Secure DNS & Domain Setup</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Domain ownership confirmed via secure DNS tokens.</li>
            <li>Automatic warnings for risky DNS configurations.</li>
            <li>Secure propagation tracking for your domain connection.</li>
          </ul>
        </section>

        <p className="text-center mt-8">
          <Link className="inline-block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 font-semibold transition duration-200" to="/">← Back to Home</Link>
        </p>
      </main>

      <footer className="border-t border-gray-200 bg-gray-50 text-gray-600 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-semibold text-gray-800">DomainConnectHub — Simplifying domain connections with security at the core.</p>
          <p className="text-sm mt-2">© <span id="year"></span> DomainConnectHub. Read our <Link to="/about" className="text-red-600 hover:underline">about page</Link> to learn more.</p>
        </div>
      </footer>
    </>
  );
}