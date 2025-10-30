import React from "react";
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BookOpen, ShieldCheck, Zap, MailCheck, Lock, Eye, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | Automated DNS & Domain Setup | DomainConnectHub</title>
        <meta name="description" content="Learn about DomainConnectHub's mission to simplify domain setup and DNS automation. We make email security (SPF, DKIM) and domain connections easy." />
      </Helmet>

      <div className="bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 py-24 md:py-32">
        <div className="max-w-4xl w-full bg-white shadow-2xl rounded-3xl p-8 sm:p-12 border border-gray-100">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              About Our Mission to Simplify Domain Setup
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Our mission is to simplify the complex world of DNS automation and online security, making domain connections accessible for everyone.
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <div className="flex items-center mb-6">
                <BookOpen className="w-8 h-8 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Story: Solving DNS Headaches
                </h2>
              </div>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base md:text-lg">
                <p>
                  DomainConnectHub was founded to eliminate the headaches of connecting domains, configuring DNS records, and securing online identities. We saw that these crucial steps were a major hurdle for individuals and businesses.
                </p>
                <p>
                  We built a platform for DNS automation that ensures seamless integration and enhanced security. From simplifying email security with SPF, DKIM, and DMARC settings to one-click CNAME configurations, we empower users to focus on their business. Learn more about our <Link to="/security" className="text-red-600 hover:underline font-semibold">security policies</Link>.
                </p>
              </div>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Zap className="w-8 h-8 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  What We Offer: Automated Domain Tools
                </h2>
              </div>
              <ul className="space-y-4 text-gray-700 text-base md:text-lg">
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Effortless Domain Connection:</strong> Connect your domains to any platform with our one-click <Link to="/connect" className="text-red-600 hover:underline font-semibold">domain setup tool</Link>.</span>
                </li>
                <li className="flex items-start">
                  <Zap className="w-6 h-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Automated DNS Configuration:</strong> Say goodbye to manual DNS record setup. Our DNS automation handles it for you.</span>
                </li>
                <li className="flex items-start">
                  <MailCheck className="w-6 h-6 text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Enhanced Email Security:</strong> Automated SPF, DKIM, and DMARC settings to boost email deliverability and prevent phishing.</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                  <span><strong>Robust Security:</strong> Our platform is built with security at its core, protecting your data and domains.</span>
                </li>
              </ul>
            </section>

            <section>
              <div className="flex items-center mb-6">
                <Eye className="w-8 h-8 text-red-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Vision for an Accessible Web
                </h2>
              </div>
              <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                We envision a world where anyone can effortlessly manage their online presence. DomainConnectHub is committed to innovating solutions that make the internet safer and more connected. If you have questions, feel free to <Link to="/contact" className="text-red-600 hover:underline font-semibold">contact us</Link>.
              </p>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <p className="text-lg text-gray-600">
              Ready to simplify your domain management?
            </p>
            <Link to="/connect" className="mt-4 inline-flex items-center bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-transform transform hover:scale-105">
              Connect Your Domain Now <Rocket className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}