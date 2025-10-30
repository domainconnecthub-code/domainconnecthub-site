import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const AddDomainModal = ({ onClose, onAdd, userPlan }) => {
  const [domain, setDomain] = useState('');
  const [provider, setProvider] = useState('');
  const [autoDetect, setAutoDetect] = useState(true);

  const detectProvider = (domainName) => {
    const providers = {
      'cloudflare': ['cloudflare'],
      'namecheap': ['namecheap'],
      'godaddy': ['godaddy'],
      'google': ['google', 'domains.google']
    };

    for (const [key, keywords] of Object.entries(providers)) {
      if (keywords.some(keyword => domainName.toLowerCase().includes(keyword))) {
        return key;
      }
    }

    return 'other';
  };

  const handleDomainChange = (value) => {
    setDomain(value);
    if (autoDetect && userPlan !== 'free') {
      const detected = detectProvider(value);
      setProvider(detected);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!domain) {
      toast({
        title: "Domain required",
        description: "Please enter a domain name",
        variant: "destructive"
      });
      return;
    }

    const finalProvider = provider || 'other';
    
    onAdd({
      domain: domain.toLowerCase().trim(),
      provider: finalProvider
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
      >
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Add Domain</h2>
                <p className="text-blue-100 text-sm">Connect a new domain</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="text-white hover:bg-white/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="space-y-2">
            <Label htmlFor="domain">Domain Name</Label>
            <Input
              id="domain"
              type="text"
              placeholder="example.com"
              value={domain}
              onChange={(e) => handleDomainChange(e.target.value)}
              className="h-11"
            />
            <p className="text-xs text-gray-500">Enter your domain without http:// or www</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="provider">DNS Provider</Label>
            <Select value={provider} onValueChange={setProvider}>
              <SelectTrigger className="h-11">
                <SelectValue placeholder={userPlan === 'free' ? "Select provider" : "Auto-detected"} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cloudflare">Cloudflare</SelectItem>
                <SelectItem value="namecheap">Namecheap</SelectItem>
                <SelectItem value="godaddy">GoDaddy</SelectItem>
                <SelectItem value="google">Google Domains</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {userPlan !== 'free' && (
              <p className="text-xs text-blue-600">✨ Auto-detection enabled on your plan</p>
            )}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              {userPlan === 'free' 
                ? '📝 Free plan: Manual DNS setup required after adding domain'
                : '🚀 Automated DNS configuration will be available after adding domain'
              }
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
            >
              Add Domain
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default AddDomainModal;