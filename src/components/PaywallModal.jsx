import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, Crown, Zap, Shield, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const PaywallModal = ({ user, onClose, onUpgrade }) => {
  const [selectedPlan, setSelectedPlan] = useState('starter');

  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '$0',
      period: 'forever',
      icon: Shield,
      color: 'from-gray-500 to-gray-600',
      features: [
        '1 domain',
        'Manual DNS setup',
        'Manual verification',
        'Basic support',
        'Limited features'
      ],
      limits: ['No automation', 'No provider detection']
    },
    {
      id: 'starter',
      name: 'Starter',
      price: '$9',
      period: 'per month',
      icon: Zap,
      color: 'from-blue-500 to-blue-600',
      popular: true,
      features: [
        'Up to 3 domains',
        'Automated DNS setup',
        'Provider auto-detection',
        'Real-time verification',
        'Email support',
        'All DNS record types'
      ]
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '$19',
      period: 'per month',
      icon: Crown,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Up to 10 domains',
        'All Starter features',
        'Priority support',
        'Advanced analytics',
        'Custom DNS templates',
        'API access'
      ]
    },
    {
      id: 'business',
      name: 'Business',
      price: '$39',
      period: 'per month',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      features: [
        'Unlimited domains',
        'All Pro features',
        'Team collaboration',
        'Advanced integrations',
        'Dedicated support',
        'Custom SLA'
      ]
    }
  ];

  const handleUpgrade = (planId) => {
    if (planId === 'free') {
      toast({
        title: "Already on Free plan",
        description: "You're currently using the free plan"
      });
      return;
    }

    toast({
      title: "🚧 Payment integration coming soon!",
      description: "Stripe checkout will be available shortly. For now, enjoy exploring the features!"
    });

    setTimeout(() => {
      onUpgrade(planId);
      toast({
        title: `Upgraded to ${planId}! 🎉`,
        description: "Your plan has been updated successfully"
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full my-8"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-3xl font-bold">Choose Your Plan</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
            <p className="text-blue-100">Unlock powerful features and scale your domain management</p>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => {
              const Icon = plan.icon;
              const isCurrentPlan = user.plan === plan.id;
              
              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`relative rounded-2xl border-2 p-6 transition-all ${
                    plan.popular 
                      ? 'border-blue-500 shadow-xl scale-105' 
                      : 'border-gray-200 hover:border-blue-300'
                  } ${isCurrentPlan ? 'ring-2 ring-green-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </div>
                    </div>
                  )}

                  {isCurrentPlan && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        Current Plan
                      </div>
                    </div>
                  )}

                  <div className={`w-12 h-12 bg-gradient-to-br ${plan.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">/{plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                    {plan.limits?.map((limit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500">{limit}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleUpgrade(plan.id)}
                    disabled={isCurrentPlan}
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                        : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {isCurrentPlan ? 'Current Plan' : plan.id === 'free' ? 'Downgrade' : 'Upgrade'}
                  </Button>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              All plans include secure authentication, real-time updates, and regular feature improvements
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PaywallModal;