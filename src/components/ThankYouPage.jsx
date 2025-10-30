import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';

const ThankYouPage = ({ onContinue }) => {
  return (
    <>
      <Helmet>
        <title>Thank You! - Domain Connect Hub</title>
        <meta name="description" content="Thank you for signing up for Domain Connect Hub! Get ready to connect your domains effortlessly." />
      </Helmet>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-700 p-4"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-lg w-full border border-blue-200"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
            className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
          >
            <CheckCircle className="w-12 h-12 text-white" />
          </motion.div>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Welcome to Domain Connect Hub!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your account has been successfully created. Get ready to simplify your domain management!
          </p>
          <Button
            onClick={onContinue}
            className="w-full md:w-auto px-8 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            Go to Dashboard
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
};

export default ThankYouPage;