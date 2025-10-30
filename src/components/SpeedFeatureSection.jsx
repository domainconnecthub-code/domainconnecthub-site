import React from 'react';
import { useToast } from '@/components/ui/use-toast';

const SpeedFeatureSection = () => {
  const { toast } = useToast();

  const handleTryConnection = () => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="bg-white py-16 px-8 text-center rounded-2xl shadow-lg mt-12 border border-gray-200 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-[#E63946] mb-4">
        Connect Domains in Minutes, Not Days
      </h2>
      <p className="text-[#333333] text-lg max-w-2xl mx-auto mb-6">
        Tired of waiting 24–48 hours for your domain to go live? 
        <strong>Domain Connect Hub</strong> eliminates the painful DNS delay by automating propagation, lowering TTL values, 
        and syncing your domain across global nameservers in record time.
      </p>
      <p className="text-[#333333] text-lg max-w-2xl mx-auto mb-8">
        No more guessing, no more waiting — just plug in your domain and watch it connect in minutes. 
        Whether you’re launching a new business, SaaS app, or website, Domain Connect Hub makes the process instant, 
        automatic, and frustration-free.
      </p>
      <a 
        href="#" 
        onClick={handleTryConnection}
        className="inline-block bg-[#E63946] text-white font-semibold py-3 px-8 rounded-xl hover:bg-[#C72C41] transition"
      >
        Try Instant Connection →
      </a>
    </section>
  );
};

export default SpeedFeatureSection;