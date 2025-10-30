import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Twitter, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { NavLink } from 'react-router-dom';

const Footer = ({ onAboutClick, onTermsClick, onPrivacyClick, onRefundClick }) => {
  const { toast } = useToast();

  const socialLinks = [
    { icon: Twitter, name: 'Twitter', href: '#' },
    { icon: Github, name: 'GitHub', href: '#' },
    { icon: Linkedin, name: 'LinkedIn', href: '#' },
  ];
  
  const footerLinks = [
      { title: 'Product', links: [
          { text: 'Pricing', to: '/pricing' },
          { text: 'Store', to: '/store' },
          { text: 'Docs', to: '/docs' },
      ]},
      { title: 'Company', links: [
          { text: 'About Us', action: onAboutClick, isButton: true },
          { text: 'Contact', to: '/contact' },
          { text: 'Blog', href: '#' },
      ]},
      { title: 'Legal', links: [
          { text: 'Terms of Service', action: onTermsClick, isButton: true },
          { text: 'Privacy Policy', action: onPrivacyClick, isButton: true },
          { text: 'Refund Policy', action: onRefundClick, isButton: true },
      ]},
  ];

  const handleSocialClick = (e, href) => {
    e.preventDefault();
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <NavLink to="/" className="flex items-center gap-3 mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">Domain Connect Hub</span>
            </NavLink>
            <p className="text-gray-400 text-sm max-w-xs">
              Making domain setup effortless for everyone.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  onClick={(e) => handleSocialClick(e, social.href)}
                  whileHover={{ scale: 1.1, color: '#3b82f6' }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-blue-500 transition-colors rounded-md"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {footerLinks.map((section) => (
              <div key={section.title}>
                  <p className="font-semibold text-gray-200 mb-4">{section.title}</p>
                  <ul className="space-y-3">
                      {section.links.map(link => (
                          <li key={link.text}>
                              {link.isButton ? (
                                  <button onClick={link.action} className="text-gray-400 hover:text-white transition-colors rounded-md">{link.text}</button>
                              ) : link.to ? (
                                  <NavLink to={link.to} className="text-gray-400 hover:text-white transition-colors rounded-md">{link.text}</NavLink>
                              ) : (
                                  <a href={link.href} onClick={(e) => handleSocialClick(e, link.href)} className="text-gray-400 hover:text-white transition-colors rounded-md">{link.text}</a>
                              )}
                          </li>
                      ))}
                  </ul>
              </div>
          ))}

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Domain Connect Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;