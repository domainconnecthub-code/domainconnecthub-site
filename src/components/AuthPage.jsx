import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Globe, Shield, Zap, CheckCircle, Brain, Settings2, Check, Clock, Puzzle, Lock, Bot, MessageSquare, Briefcase, ShoppingCart, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import TermsAndConditionsModal from '@/components/TermsAndConditionsModal';
import PrivacyPolicyModal from '@/components/PrivacyPolicyModal';
import RefundPolicyModal from '@/components/RefundPolicyModal';
import AboutUsModal from '@/components/AboutUsModal';

const AuthPage = () => {
  const { signUp, signIn } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [showAboutUsModal, setShowAboutUsModal] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password || (!isLogin && !name)) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);

    if (isLogin) {
      const { error } = await signIn(email, password);
      if (!error) {
        toast({
          title: "Welcome back! 🎉",
          description: "You're now logged in"
        });
      }
    } else {
      const { error } = await signUp(email, password, { data: { name } });
      if (!error) {
        toast({
          title: "Account created! 🚀",
          description: "Check your email for a confirmation link."
        });
      }
    }

    setIsLoading(false);
  };

  const scrollToAuth = () => {
    const authSection = document.getElementById('auth-section');
    if (authSection) {
      authSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const howItWorksSteps = [
    { icon: Brain, title: "Enter Your Domain", description: "We instantly detect where it’s hosted — Namecheap, GoDaddy, Hostinger, etc." },
    { icon: Settings2, title: "Choose Your Platform", description: "Pick what you’re connecting to — Systeme.io, Gmail, Shopify, or your funnel builder." },
    { icon: Check, title: "Auto-Connect & Verify", description: "We add all the right DNS and authentication records for you. No more copy-paste mistakes or failed verifications." }
  ];

  const whyChooseUsPoints = [
    { icon: Clock, title: "Save Hours", description: "no more manual DNS setup." },
    { icon: Puzzle, title: "Works Everywhere", description: "compatible with 50+ platforms." },
    { icon: Lock, title: "Secure & Private", description: "we never store your credentials." },
    { icon: Bot, title: "Smart Automation", description: "built with API-level accuracy." },
    { icon: MessageSquare, title: "Real Support", description: "talk to a real person if you need help." }
  ];

  const whoItsFor = [
    { icon: Target, text: "Entrepreneurs launching funnels" },
    { icon: Briefcase, text: "Affiliate marketers setting up Systeme.io" },
    { icon: ShoppingCart, text: "Shopify and eCommerce store owners" },
    { icon: Users, text: "Agencies managing client domains" },
    { icon: Zap, text: "Anyone tired of DNS headaches" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Domain Connect Hub",
    "applicationCategory": "DeveloperApplication",
    "operatingSystem": "Web",
    "description": "Domain Connect Hub automates DNS setup, record management, and verification across all platforms, making domain connections simple and fast.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "150"
    }
  };

  return (
    <>
      <Helmet>
        <title>Domain Connect Hub | Automate DNS & Domain Setup Instantly</title>
        <meta name="description" content="Tired of DNS headaches? Domain Connect Hub automates domain setup, DNS records, and verification for you — across every platform, in seconds." />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="bg-gray-50 text-gray-800">
        <section id="auth-section" className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-800 to-indigo-900 transition-opacity duration-1000 ${isLogin ? 'opacity-100' : 'opacity-0'}`}></div>
          <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 transition-opacity duration-1000 ${!isLogin ? 'opacity-100' : 'opacity-0'}`}></div>

          <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-blob"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-white">Domain Connect Hub</h1>
              </div>
              
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Connecting a domain shouldn’t require a tech degree.
              </h2>
              
              <p className="text-blue-100 text-lg mb-12">
                Domain Connect Hub automates the setup, DNS records, and verification for you — across every platform, in seconds.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Zap, text: "Automatic DNS provider detection" },
                  { icon: Shield, text: "One-click SPF, DKIM, DMARC setup" },
                  { icon: CheckCircle, text: "Real-time verification & monitoring" }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + idx * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white text-lg">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <div className="relative z-10 text-blue-200 text-sm">
              © {new Date().getFullYear()} Domain Connect Hub. Making DNS simple for everyone.
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <div className="lg:hidden my-8 text-center text-white">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h1 className="text-2xl font-bold">Domain Connect Hub</h1>
                </div>
                <p className="text-blue-100">The easiest way to connect your domain.</p>
              </div>

              <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {isLogin ? 'Welcome back' : 'Create your account'}
                  </h2>
                  <p className="text-gray-600">
                    {isLogin ? 'Sign in to manage your domains' : 'Start connecting domains today'}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {!isLogin && (
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" type="text" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} className="h-11" disabled={isLoading} required />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="h-11" disabled={isLoading} required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="h-11" disabled={isLoading} required />
                  </div>

                  <Button type="submit" className="w-full h-11 text-base font-semibold" disabled={isLoading}>
                    {isLoading ? 'Processing...' : (isLogin ? 'Sign In' : 'Create Account')}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <button onClick={() => setIsLogin(!isLogin)} className="text-blue-600 hover:text-blue-700 font-medium transition-colors" disabled={isLoading}>
                    {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
                  </button>
                </div>
              </div>

              <p className="text-center text-sm text-gray-400 lg:text-gray-500 mt-6 leading-relaxed">
                By continuing, you agree to our{' '}
                <button onClick={() => setShowTermsModal(true)} className="text-blue-500 lg:text-blue-600 hover:underline">Terms of Service</button>,{' '}
                <button onClick={() => setShowPrivacyModal(true)} className="text-blue-500 lg:text-blue-600 hover:underline">Privacy Policy</button>, and{' '}
                <button onClick={() => setShowRefundModal(true)} className="text-blue-500 lg:text-blue-600 hover:underline">Refund Policy</button>.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works in 3 Simple Steps</h2>
              <p className="max-w-2xl mx-auto text-gray-600 text-lg mb-16">Connecting your domain has never been this easy.</p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button onClick={scrollToAuth} size="lg" className="mt-16 text-lg font-semibold px-8 py-6">
                Try Domain Connect Hub Now
              </Button>
            </motion.div>
          </div>
        </section>
        
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Domain Connect Hub?</h2>
                </motion.div>
                <div className="space-y-6">
                  {whyChooseUsPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex-shrink-0 flex items-center justify-center">
                        <point.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{point.title}</h3>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="mt-12 lg:mt-0">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">Who It’s For</h2>
                </motion.div>
                <div className="space-y-4">
                  {whoItsFor.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-100 hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <p className="text-gray-800 font-medium">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {showTermsModal && <TermsAndConditionsModal onClose={() => setShowTermsModal(false)} />}
        {showPrivacyModal && <PrivacyPolicyModal onClose={() => setShowPrivacyModal(false)} />}
        {showRefundModal && <RefundPolicyModal onClose={() => setShowRefundModal(false)} />}
        {showAboutUsModal && <AboutUsModal onClose={() => setShowAboutUsModal(false)} />}
      </div>
    </>
  );
};

export default AuthPage;