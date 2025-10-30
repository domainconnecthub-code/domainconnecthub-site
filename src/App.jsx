import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutUsModal from '@/components/AboutUsModal';
import TermsAndConditionsModal from '@/components/TermsAndConditionsModal';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import RefundPolicyModal from '@/components/RefundPolicyModal';
import useCartStore from '@/store/cartStore';
import { supabase } from '@/lib/customSupabaseClient';

const AuthPage = lazy(() => import('@/components/AuthPage'));
const PaywallModal = lazy(() => import('@/components/PaywallModal'));
const StorePage = lazy(() => import('@/pages/StorePage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const SupportPage = lazy(() => import('@/pages/SupportPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const PricingPage = lazy(() => import('@/pages/PricingPage'));
const OrderConfirmationPage = lazy(() => import('@/pages/OrderConfirmationPage'));
const Dashboard = lazy(() => import('@/components/Dashboard'));
const AdminDashboard = lazy(() => import('@/components/AdminDashboard'));
const DocsPage = lazy(() => import('@/pages/DocsPage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50" aria-label="Loading page">
    <div className="text-xl font-medium text-gray-700">Loading...</div>
  </div>
);

const App = () => {
  const { user, profile, loading, signOut } = useAuth();
  const [showPaywall, setShowPaywall] = useState(false);
  const [showAboutUsModal, setShowAboutUsModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const cart = useCartStore((state) => state.cart);

  const { toast } = useToast();
  
  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  const handleLogout = async () => {
    await signOut();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out."
    });
  };
  
  const handleUpgrade = async (plan) => {
    if (user) {
      const { error } = await supabase
        .from('profiles')
        .update({ plan })
        .eq('id', user.id);

      if (error) {
        toast({ title: "Upgrade failed", description: error.message, variant: "destructive" });
      } else {
        setShowPaywall(false);
        toast({
          title: `Upgraded to ${plan}! 🎉`,
          description: "You now have access to premium features."
        });
      }
    } else {
        setShowPaywall(true);
    }
  };

  if (loading) {
    return <LoadingFallback />;
  }
  
  const commonFooterProps = {
    onAboutClick: () => setShowAboutUsModal(true),
    onTermsClick: () => setShowTermsModal(true),
    onPrivacyClick: () => setShowPrivacyModal(true),
    onRefundClick: () => setShowRefundModal(true),
  };

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  const AdminRoute = ({ children }) => {
    if (!user || profile?.role !== 'admin') {
      return <Navigate to="/dashboard" replace />;
    }
    return children;
  };

  const CheckoutProtection = () => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please log in or sign up to proceed to checkout.",
        variant: "destructive",
      });
      return <Navigate to="/" replace />;
    }
    if (cart.length === 0) {
      toast({
        title: "Your Cart is Empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return <Navigate to="/store" replace />;
    }
    return <Outlet />;
  };
  
  const AppUser = user && profile ? { ...user, name: user.user_metadata?.name || user.email, ...profile } : null;

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Toaster />
        <Suspense fallback={null}>
            {showPaywall && <PaywallModal user={AppUser} onClose={() => setShowPaywall(false)} onUpgrade={handleUpgrade} />}
        </Suspense>
        {showAboutUsModal && <AboutUsModal onClose={() => setShowAboutUsModal(false)} />}
        {showTermsModal && <TermsAndConditionsModal onClose={() => setShowTermsModal(false)} />}
        {showPrivacyModal && <PrivacyPolicyModal onClose={() => setShowPrivacyModal(false)} />}
        {showRefundModal && <RefundPolicyModal onClose={() => setShowRefundModal(false)} />}

        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route
              path="/*"
              element={
                <div className="flex flex-col min-h-screen">
                  <Navbar />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={user ? <Navigate to="/dashboard" /> : <AuthPage />} />
                      <Route path="/store" element={<StorePage />} />
                      <Route path="/pricing" element={<PricingPage onUpgrade={handleUpgrade} />} />
                      <Route path="/docs" element={<DocsPage />} />
                      <Route path="/support" element={<SupportPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
                      
                      <Route element={<CheckoutProtection />}>
                        <Route path="/checkout" element={<CheckoutPage />} />
                      </Route>

                      <Route path="/dashboard" element={<ProtectedRoute><Dashboard user={AppUser} onLogout={handleLogout} onUpgrade={() => setShowPaywall(true)} /></ProtectedRoute>} />
                      <Route path="/admin" element={<AdminRoute><AdminDashboard user={AppUser} onLogout={handleLogout} /></AdminRoute>} />
                      
                      <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} replace />} />
                    </Routes>
                  </main>
                  <Footer {...commonFooterProps} />
                </div>
              }
            />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;