import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const OrderConfirmationPage = () => {
  const [order, setOrder] = useState(null);
  const { toast } = useToast();

  useEffect(() => {
    const lastOrder = localStorage.getItem('lastOrder');
    if (lastOrder) {
      setOrder(JSON.parse(lastOrder));
    }
  }, []);

  const handleDownloadInvoice = () => {
    toast({
      title: "🚧 Feature in progress!",
      description: "Invoice generation is coming soon. Thanks for your patience!",
    });
  };

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <Helmet>
          <title>No Order Found | DomainConnectHub</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 className="text-2xl font-bold text-gray-800">No order found.</h1>
        <p className="text-gray-600 mt-2">Looks like you haven't placed an order yet.</p>
        <Button asChild className="mt-6">
          <NavLink to="/store">Go to Store</NavLink>
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Order Confirmed! | DomainConnectHub</title>
        <meta name="description" content="Your order has been successfully placed. Thank you for your purchase from Domain Connect Hub." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 text-center"
          >
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-extrabold text-gray-900">Thank You for Your Order!</h1>
            <p className="mt-3 text-lg text-gray-600">Your order has been confirmed. A receipt has been sent to <span className="font-semibold text-blue-600">{order.customer.email}</span>.</p>
            <p className="mt-1 text-sm text-gray-500">Order ID: {order.orderId}</p>

            <div className="text-left bg-gray-50 p-6 rounded-lg my-8 border border-gray-200">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <ul className="space-y-3">
                {order.items.map(item => (
                  <li key={item.id} className="flex justify-between">
                    <span className="text-gray-700">{item.title}</span>
                    <span className="font-semibold text-gray-800">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t my-4"></div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total Paid</span>
                <span>${order.total}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleDownloadInvoice} variant="outline" size="lg">
                <Download className="mr-2 h-5 w-5" />
                Download Invoice
              </Button>
              <Button asChild size="lg">
                <NavLink to="/store">Continue Shopping</NavLink>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationPage;