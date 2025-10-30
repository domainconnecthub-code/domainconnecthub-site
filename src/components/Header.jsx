import React from 'react';
import { motion } from 'framer-motion';
import { Globe, User, LogIn, Crown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Header = ({ onLoginClick, onSignupClick, onUpgradeClick }) => {
  const { toast } = useToast();

  const handleNavClick = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
              onClick={handleNavClick}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Domain Connect Hub</span>
            </motion.div>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Features
            </a>
            <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#" onClick={handleNavClick} className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              onClick={onLoginClick || handleNavClick}
              variant="ghost"
              className="text-blue-600 hover:bg-blue-50"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Sign In
            </Button>
            <Button
              onClick={onSignupClick || handleNavClick}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-md"
            >
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
            {onUpgradeClick && (
              <Button
                onClick={onUpgradeClick}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-md hidden lg:flex"
              >
                <Crown className="w-4 h-4 mr-2" />
                Upgrade
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden" onClick={handleNavClick}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;