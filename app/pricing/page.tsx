'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Users, Shield, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ui/theme-toggle';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small families',
      price: { monthly: 9.99, annual: 99.99 },
      children: 1,
      devices: 3,
      features: [
        'Monitor 1 child',
        'Up to 3 devices',
        'Content filtering',
        'Real-time alerts',
        'Location tracking',
        'Educational games access',
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Family',
      description: 'Best for growing families',
      price: { monthly: 19.99, annual: 199.99 },
      children: 3,
      devices: 10,
      features: [
        'Monitor up to 3 children',
        'Up to 10 devices',
        'Advanced content filtering',
        'Priority alerts',
        'Geofencing',
        'Chat monitoring',
        'Audio/Video review',
        'Premium support',
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      name: 'Premium',
      description: 'For larger families',
      price: { monthly: 34.99, annual: 349.99 },
      children: 'Unlimited',
      devices: 'Unlimited',
      features: [
        'Unlimited children',
        'Unlimited devices',
        'AI-powered threat detection',
        'Instant emergency alerts',
        'Advanced geofencing',
        'Full media monitoring',
        'Investigator escalation',
        '24/7 Priority support',
        'Dedicated account manager',
      ],
      popular: false,
      color: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-950 dark:via-blue-950 dark:to-gray-900">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" className="hover:bg-cyan-50 hover:text-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-cyan-400" asChild>
          <Link href="/">
            ← Back to Home
          </Link>
        </Button>
      </div>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">Pricing Plans</Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Choose Your Protection Plan
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Select the perfect plan for your family. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-12">
          <Button
            variant={billingCycle === 'monthly' ? 'default' : 'outline'}
            onClick={() => setBillingCycle('monthly')}
            className={billingCycle === 'monthly' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : ''}
          >
            Monthly
          </Button>
          <Button
            variant={billingCycle === 'annual' ? 'default' : 'outline'}
            onClick={() => setBillingCycle('annual')}
            className={billingCycle === 'annual' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : ''}
          >
            Annual
            <Badge variant="secondary" className="ml-2 bg-green-100 text-green-800">Save 20%</Badge>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm px-4 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-cyan-500 border-2 shadow-xl shadow-cyan-500/30' : ''}`}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mb-4`}>
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold">
                        ${billingCycle === 'monthly' ? plan.price.monthly : plan.price.annual}
                      </span>
                      <span className="text-muted-foreground">
                        /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span><strong>{plan.children}</strong> {typeof plan.children === 'number' ? 'child' : 'children'}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="w-4 h-4 text-primary" />
                      <span><strong>{plan.devices}</strong> {typeof plan.devices === 'number' ? 'devices' : 'device support'}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' : ''}`}
                    size="lg"
                    asChild
                  >
                    <Link href={`/payment?plan=${plan.name.toLowerCase()}&cycle=${billingCycle}`}>
                      Start Free Trial
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    No credit card required for trial
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Card className="max-w-3xl mx-auto gradient-blue-purple text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Enterprise Solution</h3>
              <p className="mb-6">
                Need a custom solution for schools, organizations, or large families?
                We offer tailored plans with advanced features and dedicated support.
              </p>
              <Button size="lg" variant="secondary">
                Contact Sales
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
