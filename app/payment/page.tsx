'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Import router
import { motion } from 'framer-motion';
import { CreditCard, Lock, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function PaymentPage() {
  const [step, setStep] = useState<'trial' | 'payment'>('trial');
  const router = useRouter(); // ✅ Initialize router

  const handleStartTrial = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Payment processed successfully! Welcome to ZyberHero!');

    // ✅ Redirect to login after short delay
    setTimeout(() => {
      router.push('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900 flex items-center justify-center p-4">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" className="hover:bg-cyan-50 hover:text-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-cyan-400" asChild>
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl"
      >
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            {step === 'trial' ? 'Start Your Free Trial' : 'Complete Your Subscription'}
          </h1>
          <p className="text-muted-foreground">
            {step === 'trial' ? '14 days free, no credit card required' : 'Secure payment powered by Stripe'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {step === 'trial' ? (
              <Card>
                <CardHeader>
                  <CardTitle>Create Your Account</CardTitle>
                  <CardDescription>Start protecting your family today</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleStartTrial} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" required />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" required />
                    </div>
                    <div>
                      <Label htmlFor="confirmPassword">Confirm Password</Label>
                      <Input id="confirmPassword" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="terms" required className="w-4 h-4" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white" size="lg">
                      Start 14-Day Free Trial
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Your trial will automatically expire after 14 days unless you subscribe
                    </p>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="w-5 h-5" />
                    Payment Information
                  </CardTitle>
                  <CardDescription>Your payment details are secure and encrypted</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment} className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" maxLength={3} required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="name">Cardholder Name</Label>
                      <Input id="name" required />
                    </div>
                    <div>
                      <Label htmlFor="billingAddress">Billing Address</Label>
                      <Input id="billingAddress" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" required />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 p-4 bg-muted rounded-lg">
                      <Lock className="w-5 h-5 text-green-500" />
                      <span className="text-sm">Secured by 256-bit SSL encryption</span>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white" size="lg">
                      Complete Subscription
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Plan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold">Family Plan</span>
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Popular</Badge>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Children</span>
                    <span className="font-semibold">Up to 3</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Devices</span>
                    <span className="font-semibold">Up to 10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Billing</span>
                    <span className="font-semibold">Monthly</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$19.99</span>
                  </div>
                  {step === 'trial' && (
                    <div className="flex justify-between items-center text-green-600 mb-2">
                      <span>Trial Discount</span>
                      <span>-$19.99</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center font-bold text-lg">
                    <span>Total Today</span>
                    <span>{step === 'trial' ? '$0.00' : '$19.99'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl border-0">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 text-white">What's Included:</h3>
                <ul className="space-y-2">
                  {[
                    'Content filtering & monitoring',
                    'Real-time location tracking',
                    'Geofencing alerts',
                    'Chat monitoring',
                    'Emergency SOS',
                    'Premium support',
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span className="text-sm text-white">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
