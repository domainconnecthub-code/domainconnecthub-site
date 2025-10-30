import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Globe, Plus, LogOut, Crown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DomainCard from '@/components/DomainCard';
import AddDomainModal from '@/components/AddDomainModal';
import { useToast } from '@/components/ui/use-toast';
import WelcomeMessage from '@/components/WelcomeMessage';
import { supabase } from '@/lib/customSupabaseClient';
import { useAuth } from '@/contexts/SupabaseAuthContext';

const PLAN_LIMITS = {
  free: 1,
  starter: 3,
  pro: 10,
  business: 999
};

const Dashboard = ({ user, onLogout, onUpgrade }) => {
  const { session } = useAuth();
  const [domains, setDomains] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchDomains = async () => {
      if (!session) return;
      const { data, error } = await supabase
        .from('domains')
        .select('*')
        .eq('user_id', session.user.id);

      if (error) {
        toast({
          title: "Error fetching domains",
          description: error.message,
          variant: "destructive",
        });
      } else {
        setDomains(data);
      }
    };
    fetchDomains();
  }, [session, toast]);

  const handleAddDomain = async (domainData) => {
    const limit = PLAN_LIMITS[user.plan];
    
    if (domains.length >= limit) {
      toast({
        title: "Domain limit reached",
        description: `Your ${user.plan} plan allows ${limit} domain${limit > 1 ? 's' : ''}. Upgrade to add more!`,
        variant: "destructive"
      });
      onUpgrade();
      return;
    }

    const { data: newDomain, error } = await supabase
      .from('domains')
      .insert({
        domain: domainData.domain,
        provider: domainData.provider,
        user_id: session.user.id
      })
      .select()
      .single();

    if (error) {
      toast({
        title: "Error adding domain",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setDomains([...domains, newDomain]);
      setShowAddModal(false);
      toast({
        title: "Domain added! 🎉",
        description: `${domainData.domain} is ready for configuration`
      });
    }
  };

  const handleDeleteDomain = async (domainId) => {
    const { error } = await supabase
      .from('domains')
      .delete()
      .eq('id', domainId);
    
    if (error) {
      toast({
        title: "Error removing domain",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setDomains(domains.filter(d => d.id !== domainId));
      toast({
        title: "Domain removed",
        description: "Domain has been deleted successfully"
      });
    }
  };

  const handleVerifyDomain = (domainId) => {
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleSetupDomain = (domainId) => {
     if (user.plan === 'free') {
      toast({
        title: "Manual setup required",
        description: "Free plan requires manual DNS configuration. Upgrade for automated setup!",
        variant: "destructive"
      });
      onUpgrade();
      return;
    }
    toast({
      title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Dashboard | Domain Connect Hub</title>
        <meta name="description" content="Manage your connected domains, add new ones, and monitor their DNS status all in one place." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-lg bg-white/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">Domain Connect Hub</h1>
                  <p className="text-xs text-gray-500">Welcome, {user.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                  <Crown className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-700 capitalize">{user.plan} Plan</span>
                </div>
                
                {user.plan !== 'pro' && user.plan !== 'business' && (
                  <Button onClick={onUpgrade} className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade
                  </Button>
                )}
                
                <Button variant="ghost" size="icon" onClick={onLogout} aria-label="Log out">
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WelcomeMessage userName={user.name} />

          <section aria-labelledby="domain-management-heading" className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 id="domain-management-heading" className="text-3xl font-bold text-gray-900 mb-2">Your Domains</h2>
                <p className="text-gray-600">
                  {domains.length} of {PLAN_LIMITS[user.plan]} domain{PLAN_LIMITS[user.plan] > 1 ? 's' : ''} used
                </p>
              </div>
              
              <Button 
                onClick={() => setShowAddModal(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Domain
              </Button>
            </div>
          </section>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md p-6 mt-6 mb-8 flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-blue-600"/>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                ⚡ Instant DNS Acceleration
              </h3>
              <p className="text-gray-600">
                Our system automatically reduces DNS propagation times from hours to minutes by optimizing TTL and syncing with global resolvers.
              </p>
            </div>
          </motion.div>

          {domains.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No domains yet</h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Add your first domain to start configuring DNS records and email authentication
              </p>
              <Button 
                onClick={() => setShowAddModal(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Your First Domain
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domains.map((domain, index) => (
                <DomainCard
                  key={domain.id}
                  domain={domain}
                  index={index}
                  userPlan={user.plan}
                  onDelete={handleDeleteDomain}
                  onVerify={handleVerifyDomain}
                  onSetup={handleSetupDomain}
                />
              ))}
            </div>
          )}
        </main>

        {showAddModal && (
          <AddDomainModal
            onClose={() => setShowAddModal(false)}
            onAdd={handleAddDomain}
            userPlan={user.plan}
          />
        )}
      </div>
    </>
  );
};

export default Dashboard;