import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useCartStore from '@/store/cartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCartStore((state) => state.cart);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/store', text: 'Store' },
    { to: '/docs', text: 'Docs' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/support', text: 'Support' },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <NavLink to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Go to Homepage">
            <img src="https://horizons-cdn.hostinger.com/81f13bcc-572e-417f-8e84-c20d5622e17d/200b54cec9c8212b9345e2cca8683996.jpg" alt="Domain Connect Hub Logo" className="h-12 w-auto" />
          </NavLink>

          <nav className="hidden md:flex md:items-center md:space-x-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 rounded-md relative ${isActive ? 'text-blue-600' : ''}`
                }
              >
                {link.text}
                {({isActive}) => isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600"
                    layoutId="underline"
                  />
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/checkout" className="relative p-2 hover:bg-gray-100 rounded-full" aria-label={`View shopping cart with ${cart.length} items`}>
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 block h-5 w-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center" aria-hidden="true">
                  {cart.length}
                </span>
              )}
            </NavLink>
            <Button asChild>
                <NavLink to="/">
                    Get Started
                </NavLink>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu" aria-expanded={isOpen}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `block w-full text-center px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100 hover:text-blue-600 ${isActive ? 'text-blue-600 bg-gray-50' : 'text-gray-700'}`
                }
              >
                {link.text}
              </NavLink>
            ))}
            <NavLink to="/checkout" className="block w-full text-center px-3 py-3 rounded-md text-base font-medium hover:bg-gray-100 text-gray-700 flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5"/> Cart {cart.length > 0 && `(${cart.length})`}
            </NavLink>
             <Button asChild className="mt-4 w-full text-center py-3">
                <NavLink to="/">
                    Get Started
                </NavLink>
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;