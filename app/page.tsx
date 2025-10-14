'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Search, AlertTriangle, Smartphone, Star, Check, Lock, Zap, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LandingPage() {
  const features = [
    {
      icon: Search,
      title: 'Real-Time Monitoring',
      description: 'Advanced AI-powered monitoring watches over all digital interactions in real-time.',
    },
    {
      icon: AlertTriangle,
      title: 'AI Threat Detection',
      description: 'Intelligent algorithms detect potential threats, predators, and dangerous content automatically.',
    },
    {
      icon: Smartphone,
      title: 'Multi-Platform Protection',
      description: 'Comprehensive coverage across all devices, apps, and social media platforms.',
    },
    {
      icon: Shield,
      title: 'Instant Alerts',
      description: 'Immediate notifications when concerning behavior or content is detected.',
    },
    {
      icon: Users,
      title: 'School Safety',
      description: 'Specialized monitoring for educational institutions and school networks.',
    },
    {
      icon: Award,
      title: 'CyberSafe One',
      description: 'Premium protection with advanced threat intelligence and priority support.',
    },
  ];

  const stats = [
    { value: '50,000+', label: 'Children Protected' },
    { value: '99.9%', label: 'Threat Detection Rate' },
    { value: '24/7', label: 'Real-Time Monitoring' },
    { value: '4.9/5', label: 'Parent Rating' },
  ];

  const plans = [
    {
      name: 'Family Basic',
      price: '$9.99',
      period: '/month',
      features: [
        'Up to 3 devices',
        'Basic web filtering',
        'Screen time controls',
        'Weekly reports',
        '24/7 tech support',
      ],
    },
    {
      name: 'Family Plus',
      price: '$19.99',
      period: '/month',
      popular: true,
      features: [
        'Up to 10 devices',
        'Advanced AI monitoring',
        'Advanced parental controls',
        'Real-time alerts',
        'Social media monitoring',
        'Priority support',
        'Analytics dashboard',
        'Geolocation tracking',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      features: [
        'Unlimited devices',
        'Custom integration',
        'Advanced user management',
        'Compliance reporting',
        'Dedicated account manager',
        'Technical support',
        'White-label options',
        'Priority onboarding',
      ],
    },
  ];

  const testimonials = [
    {
      quote: 'ZyberHero gave me peace of mind. I can finally sleep at night knowing my children are safe online.',
      author: 'Sarah M.',
      role: 'Parent of two',
      rating: 5,
    },
    {
      quote: 'The real-time alerts are incredible. We discovered an online predator trying to contact our daughter.',
      author: 'Patricia and James, Washington',
      role: 'Parents',
      rating: 5,
    },
    {
      quote: 'I recommend ZyberHero to all parents. The interface is intuitive and the protection is comprehensive.',
      author: 'Dr. Emily Chen',
      role: 'Child Psychologist',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="/zyber-logo.png"
                alt="ZyberHero"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">ZyberHero</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Features</Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">How It Works</Link>
            <Link href="#about" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">About Us</Link>
            <Link href="#pricing" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Pricing</Link>
            <Link href="#testimonials" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">Testimonials</Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all" asChild>
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gray-950 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-cyan-500/[0.05] bg-[size:20px_20px]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-6 border border-cyan-500/30">
                🛡️ Trusted by 50,000+ Families
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                Your Child's Digital Guardian
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-400 leading-relaxed">
                Advanced AI-powered monitoring to protect your children and empower families to navigate the digital world safely.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/70 px-8 transition-all" asChild>
                  <Link href="/login">Start Free Trial</Link>
                </Button>
                <Button size="lg" className="border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all">
                  Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm font-medium">COPPA Certified</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                    <Lock className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium">256-bit Encryption</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
                    <Zap className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-sm font-medium">Real-Time AI</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-2xl border border-green-500/30 hover:border-green-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Safe Browsing Active</div>
                      <div className="text-sm text-gray-400">All devices protected</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-2xl border border-orange-500/30 hover:border-orange-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Alert Detected</div>
                      <div className="text-sm text-gray-400">Inappropriate content blocked</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Real-Time Monitoring</div>
                      <div className="text-sm text-gray-400">24/7 protection active</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              ✨ Features
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Comprehensive Digital Protection</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced AI-powered monitoring that keeps your children safe across all digital platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-2xl hover:shadow-cyan-500/30 transition-all hover:-translate-y-1 border-2 border-cyan-500/20 hover:border-cyan-500/50 bg-gray-800">
                    <CardHeader>
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-white">{feature.title}</CardTitle>
                      <CardDescription className="text-base text-gray-400">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              🔍 How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">How Our Monitoring Works</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A safe, structured approach to monitoring digital activities without invasion of privacy and with support
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Assessment', desc: 'We analyze digital footprints and identify potential risks across all platforms' },
              { step: '2', title: 'Monitoring', desc: 'AI monitors activity 24/7, analyzing content, interactions and behavioral patterns' },
              { step: '3', title: 'Analysis', desc: 'Smart algorithms detect threats, inappropriate content and suspicious behavior' },
              { step: '4', title: 'Response', desc: 'Instant notifications and automated protection when threats are detected' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mx-auto mb-4 text-3xl font-black text-white shadow-xl shadow-cyan-500/50">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/70 px-8 transition-all" asChild>
              <Link href="/login">Start Protecting Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              💙 About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">About ZyberHero</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Protecting innocence in the digital age through advanced AI technology and compassionate monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {[
              {
                title: 'Our Mission',
                desc: 'To create a safer digital world for children by combining cutting-edge AI technology with human compassion. Every child deserves protection, and every parent deserves peace of mind.',
                icon: Shield
              },
              {
                title: 'Our Vision',
                desc: 'A world where children can explore, learn, and grow online without fear. We envision digital spaces that nurture curiosity while maintaining safety and security.',
                icon: Star
              },
              {
                title: 'Our Values',
                desc: 'Privacy, transparency, and trust. We protect children while respecting their dignity, empower parents with knowledge, and maintain the highest ethical standards.',
                icon: Award
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-3xl p-8 border-2 border-cyan-500/20 hover:border-cyan-500/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-gray-800 rounded-3xl p-8 md:p-12 border-2 border-cyan-500/20 shadow-xl">
            <h3 className="text-3xl md:text-4xl font-black mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Why ZyberHero?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-cyan-500/30">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <strong className="text-white text-lg">Founded by Parents:</strong> Created by parents who understand the challenges of raising children in a digital world
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-cyan-500/30">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <strong className="text-white text-lg">AI-Powered Protection:</strong> Advanced machine learning algorithms that detect threats before they cause harm
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-cyan-500/30">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <strong className="text-white text-lg">Trusted by Thousands:</strong> Over 50,000 families trust us to protect their children online
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-md shadow-cyan-500/30">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <div>
                  <strong className="text-white text-lg">24/7 Monitoring:</strong> Round-the-clock protection ensuring your child is always safe
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 backdrop-blur rounded-2xl p-8 shadow-lg border-2 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">{stat.value}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              💬 Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Trusted by Families Worldwide</h2>
            <p className="text-xl text-gray-400">
              Real stories from parents who transformed their children's safety
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gray-900 border-2 border-cyan-500/20 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/20">
                  <CardHeader>
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
                      ))}
                    </div>
                    <CardDescription className="text-base text-gray-300 italic">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-400 mb-2">
            <Shield className="w-6 h-6" />
            <span className="text-xl font-bold">30-Day Money-Back Guarantee</span>
          </div>
          <p className="text-muted-foreground">
            We're confident in our platform. Try risk-free for 30 days or get a full refund.
          </p>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              💎 Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">Choose Your Protection Plan</h2>
            <p className="text-xl text-gray-400">
              Get started in minutes and start protecting your family today
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full relative bg-gray-900 border-2 ${plan.popular ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/30' : 'border-gray-800 hover:border-cyan-500/30'} transition-all`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/50">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-4 text-white">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-cyan-400" />
                          </div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full transition-all ${plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/70'
                        : 'bg-gray-800 text-white border-2 border-cyan-500/30 hover:border-cyan-500 hover:bg-gray-800 hover:shadow-2xl hover:shadow-cyan-500/70'}`}
                      asChild
                    >
                      <Link href="/login">Select Plan</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              ❓ FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">Have Questions?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive FAQ page or contact our support team
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/70 transition-all">
                View FAQ
              </Button>
              <Button size="lg" className="bg-gray-900 text-white border-2 border-cyan-500/30 hover:border-cyan-500 hover:bg-gray-900 hover:shadow-2xl hover:shadow-cyan-500/70 transition-all">
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/logo.png"
                    alt="ZyberHero"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-bold text-lg">ZyberHero</span>
              </div>
              <p className="text-sm">
                Protecting children in the digital world with advanced AI-powered monitoring.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Enterprise</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>support@zyberhero.com</li>
                <li>(555) HERO-HELP</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 ZyberHero. All rights reserved. Innocence Deserves Protection.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
