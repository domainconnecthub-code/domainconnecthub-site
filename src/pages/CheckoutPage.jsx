import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Trash2, CreditCard, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import useCartStore from '@/store/cartStore';

const CheckoutPage = () => {
  const { cart, removeFromCart, clearCart } = useCartStore();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '' });
  const [cardInfo, setCardInfo] = useState({ number: '', expiry: '', cvc: '' });
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCustomerInfoChange = (e) => {
    setCustomerInfo({ ...customerInfo, [e.target.id]: e.target.value });
  };
  
  const handleCardInfoChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.id]: e.target.value });
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;
  
  const sendConfirmationEmail = (orderDetails) => {
    console.log("--- SIMULATING EMAIL ---");
    console.log("To: Customer", orderDetails.customer.email);
    console.log("Subject: Your DomainConnectHub Order is Confirmed!");
    console.log("Body: Thank you for your purchase! Order details:", orderDetails);
    console.log("---");
    console.log("To: Admin (youremail@example.com)");
    console.log("Subject: New Order Received!");
    console.log("Body: A new order has been placed. Order details:", orderDetails);
    console.log("--- END SIMULATION ---");

    toast({
        title: "✅ Confirmation Emails Sent!",
        description: `Order receipt sent to ${orderDetails.customer.email} and a notification to the admin.`,
        duration: 5000,
    });
  };

  const sendSmsNotification = (orderDetails) => {
    console.log("--- SIMULATING SMS ---");
    console.log("To: Customer", orderDetails.customer.phone);
    console.log(`Body: Thank you for your order DCH-${orderDetails.orderId}! Total: $${orderDetails.total}.`);
    console.log("---");
    console.log("To: Admin (your phone number)");
    console.log(`Body: New order received! DCH-${orderDetails.orderId}, Total: $${orderDetails.total}.`);
    console.log("--- END SIMULATION ---");

    toast({
        title: "📱 SMS Notifications Sent!",
        description: `Order updates sent to ${orderDetails.customer.phone} and the admin.`,
        duration: 5000,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!customerInfo.name || !customerInfo.email || !customerInfo.phone) {
      toast({ title: 'Please fill in all your details', variant: 'destructive' });
      return;
    }

    if (isProcessing) return;
    setIsProcessing(true);
    
    toast({
      title: 'Heads up! 🚧',
      description: "Simulating successful order and sending email/SMS confirmations.",
      duration: 5000
    });

    setTimeout(() => {
      const orderDetails = {
          items: cart,
          total: total.toFixed(2),
          customer: customerInfo,
          orderId: `DCH-${Date.now()}`
      };
      
      localStorage.setItem('lastOrder', JSON.stringify(orderDetails));
      sendConfirmationEmail(orderDetails);
      sendSmsNotification(orderDetails);
      
      clearCart();
      setIsProcessing(false);
      navigate('/order-confirmation');
    }, 3000);
  };

  return (
    <>
      <Helmet>
        <title>Secure Checkout | DomainConnectHub</title>
        <meta name="description" content="Complete your purchase of Domain Connect Hub services securely. Enter your payment details to finalize your order." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-12">Secure Checkout</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">1. Your Information</h2>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" type="text" placeholder="John Doe" onChange={handleCustomerInfoChange} value={customerInfo.name} disabled={isProcessing} required />
                </div>
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" onChange={handleCustomerInfoChange} value={customerInfo.email} disabled={isProcessing} required />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" onChange={handleCustomerInfoChange} value={customerInfo.phone} className="pl-10" disabled={isProcessing} required />
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-800 mt-12 mb-6">2. Payment Details</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="number">Card Number</Label>
                    <div className="relative">
                      <Input id="number" type="text" placeholder="•••• •••• •••• ••••" onChange={handleCardInfoChange} value={cardInfo.number} className="pl-10" disabled={isProcessing} required />
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" type="text" placeholder="MM / YY" onChange={handleCardInfoChange} value={cardInfo.expiry} disabled={isProcessing} required />
                    </div>
                    <div>
                      <Label htmlFor="cvc">CVC</Label>
                      <Input id="cvc" type="text" placeholder="123" onChange={handleCardInfoChange} value={cardInfo.cvc} disabled={isProcessing} required />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                {cart.length === 0 ? (
                  <p className="text-gray-600 text-center">Your cart is empty.</p>
                ) : (
                  <>
                    <ul className="space-y-4">
                      {cart.map(item => (
                        <li key={item.id} className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-gray-800">{item.title}</p>
                            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                          </div>
                          <Button type="button" variant="ghost" size="icon" onClick={() => !isProcessing && removeFromCart(item.id)} disabled={isProcessing} aria-label={`Remove ${item.title} from cart`}>
                            <Trash2 className="h-4 w-4 text-red-500" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                    <div className="border-t border-gray-200 my-6"></div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="font-semibold">${subtotal.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between">
                        <p className="text-gray-600">Taxes (8%)</p>
                        <p className="font-semibold">${tax.toFixed(2)}</p>
                      </div>
                      <div className="flex justify-between text-lg font-bold">
                        <p>Total</p>
                        <p>${total.toFixed(2)}</p>
                      </div>
                    </div>
                    <Button type="submit" size="lg" className="w-full mt-8" disabled={isProcessing || cart.length === 0}>
                      {isProcessing ? (
                        <>
                          <motion.div
                            className="mr-2 h-5 w-5 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          />
                          Processing...
                        </>
                      ) : (
                        <>
                          <Lock className="mr-2 h-5 w-5" />
                          Pay ${total.toFixed(2)}
                        </>
                      )}
                    </Button>
                  </>
                )}
              </div>
            </motion.div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;