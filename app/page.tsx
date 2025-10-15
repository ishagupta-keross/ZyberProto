
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Search,
  AlertTriangle,
  Smartphone,
  Star,
  Check,
  Lock,
  Zap,
  Users,
  Award,
  ArrowRight,
  Trophy,Target, Gift 
  
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  const features = [
    {
      icon: Search,
      title: "Real-Time Monitoring",
      description:
        "Advanced AI-powered monitoring watches over all digital interactions in real-time.",
    },
    {
      icon: AlertTriangle,
      title: "AI Threat Detection",
      description:
        "Intelligent algorithms detect potential threats, predators, and dangerous content automatically.",
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Protection",
      description:
        "Comprehensive coverage across all devices, apps, and social media platforms.",
    },
    {
      icon: Shield,
      title: "Instant Alerts",
      description:
        "Immediate notifications when concerning behavior or content is detected.",
    },
    {
      icon: Users,
      title: "School Safety",
      description:
        "Specialized monitoring for educational institutions and school networks.",
    },
    {
      icon: Award,
      title: "CyberSafe One",
      description:
        "Premium protection with advanced threat intelligence and priority support.",
    },
  ];

  const stats = [
    { value: "50,000+", label: "Children Protected" },
    { value: "99.9%", label: "Threat Detection Rate" },
    { value: "24/7", label: "Real-Time Monitoring" },
    { value: "4.9/5", label: "Parent Rating" },
  ];

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small families",
      price: "$9.99",
      period: "/month",
      children: 1,
      devices: 3,
      features: [
        "Monitor 1 child",
        "Up to 3 devices",
        "Content filtering",
        "Real-time alerts",
        "Location tracking",
        "Educational games access",
      ],
    },
    {
      name: "Family",
      description: "Best for growing families",
      price: "$19.99",
      period: "/month",
      popular: true,
      children: 3,
      devices: 10,
      features: [
        "Monitor up to 3 children",
        "Up to 10 devices",
        "Advanced content filtering",
        "Priority alerts",
        "Geofencing",
        "Chat monitoring",
        "Audio/Video review",
        "Premium support",
      ],
    },
    {
      name: "Premium",
      description: "For larger families",
      price: "$34.99",
      period: "/month",
      children: "Unlimited",
      devices: "Unlimited",
      features: [
        "Unlimited children",
        "Unlimited devices",
        "AI-powered threat detection",
        "Instant emergency alerts",
        "Advanced geofencing",
        "Full media monitoring",
        "Investigator escalation",
        "24/7 Priority support",
        "Dedicated account manager",
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        "ZyberHero gave me peace of mind. I can finally sleep at night knowing my children are safe online.",
      author: "Sarah M.",
      role: "Parent of two",
      rating: 5,
    },
    {
      quote:
        "The real-time alerts are incredible. We discovered an online predator trying to contact our daughter.",
      author: "Patricia and James, Washington",
      role: "Parents",
      rating: 5,
    },
    {
      quote:
        "I recommend ZyberHero to all parents. The interface is intuitive and the protection is comprehensive.",
      author: "Dr. Emily Chen",
      role: "Child Psychologist",
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
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">ZyberHero</span>
              <span className="text-xs text-gray-400">
                Innocence Deserves Protection
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#about"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="#features"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#founding-team"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Team
            </Link>
            <Link
              href="#pricing"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-sm text-gray-300 hover:text-cyan-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
              asChild
            >
              <Link href="/login">Login</Link>
            </Button>
            <Button
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
              asChild
            >
              <Link href="/payment">Register</Link>
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
                Advanced AI-powered monitoring to protect your children and
                empower families to navigate the digital world safely.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/70 px-8 transition-all"
                  asChild
                >
                  <Link href="/payment">Register Now</Link>
                </Button>
                {/* <Button
                  size="lg"
                  className="border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
                >
                  Watch Demo
                </Button> */}
              </div>
              <div className="flex items-center gap-8 flex-wrap">
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30">
                    <Shield className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-sm font-medium">
                    ISO 27001-2022 Certified
                  </span>
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
                      <div className="font-bold text-white">
                        Safe Browsing Active
                      </div>
                      <div className="text-sm text-gray-400">
                        All devices protected
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-2xl border border-orange-500/30 hover:border-orange-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                      <AlertTriangle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">Alert Detected</div>
                      <div className="text-sm text-gray-400">
                        Inappropriate content blocked
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-5 bg-gray-800/50 rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg shadow-cyan-500/30">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        Real-Time Monitoring
                      </div>
                      <div className="text-sm text-gray-400">
                        24/7 protection active
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ZyberHero
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Protecting innocence in the digital age through advanced AI
              technology and compassionate monitoring
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8 max-w-3xl mx-auto mb-12">
            {[
              {
                title: "Our Mission",
                desc: `At ZyberHero, we believe every child deserves to explore the digital world safely. Our mission is to provide parents with the most advanced, yet easy-to-use tools to protect their children from online threats while fostering healthy digital habits.

We combine cutting-edge AI technology with child psychology expertise to create solutions that protect without invading privacy, educate without overwhelming, and empower families to thrive in our connected world.`,
                icon: Shield,
              },
//               {
//                 title: "Our Vision",
//                 desc: `We aim to be recognized as the preferred technology enabler, empowering businesses across industries to unlock the full potential of data orchestration.

// We partner with organizations in Finance, Telecom, Retail, Manufacturing, Engineering, Construction, Travel, Government, and other sectors to deliver advanced AI-driven solutions. Our solutions are dynamic, decentralized, data-focused, automated, and self-learning, designed for seamless application internally or in B2B environments, whether on cloud, on-premise, or in real-time.

// We focus on solving challenges and creating innovative, AI-powered solutions in collaboration with our partners.`,
//                 icon: Star,
//               },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center bg-gray-800 rounded-3xl p-8 border-2 border-cyan-500/20 hover:border-cyan-500/50 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
  {/* Outer container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Header section */}
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Core Values</h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        The principles that guide everything we do at ZyberHero
      </p>
    </div>

    {/* Values grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* === Card 1: Child Safety First === */}
      <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
        {/* Card header */}
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
          {/* Icon container */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-shield h-8 w-8 text-cyan-400"
            >
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
          <h3 className="tracking-tight text-xl font-bold text-white">Child Safety First</h3>
        </div>
        {/* Card content */}
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            Every decision we make prioritizes the safety and wellbeing of children above all else.
          </p>
        </div>
      </div>

      {/* === Card 2: Privacy & Trust === */}
      <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-red-500/20 transition-all duration-300">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-heart h-8 w-8 text-red-400"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <h3 className="tracking-tight text-xl font-bold text-white">Privacy &amp; Trust</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            We maintain the highest standards of privacy while providing transparent protection.
          </p>
        </div>
      </div>

      {/* === Card 3: Family Empowerment === */}
      <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-green-500/20 transition-all duration-300">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users h-8 w-8 text-green-400"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
          <h3 className="tracking-tight text-xl font-bold text-white">Family Empowerment</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            We empower families with tools and knowledge to navigate the digital world safely.
          </p>
        </div>
      </div>

      {/* === Card 4: Innovation === */}
      <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/10 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-lightbulb h-8 w-8 text-purple-400"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
          </div>
          <h3 className="tracking-tight text-xl font-bold text-white">Innovation</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            We continuously innovate to stay ahead of emerging digital threats and challenges.
          </p>
        </div>
      </div>

      {/* === Card 5: Precision === */}
      <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-orange-500/20 transition-all duration-300">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-500/10 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-target h-8 w-8 text-orange-400"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h3 className="tracking-tight text-xl font-bold text-white">Precision</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            Our AI delivers precise threat detection with minimal false positives.
          </p>
        </div>
      </div>

      {/* === Card 6: Excellence === */}
      <div className="rounded-lg bg-gray-900 border border-gray-800 shadow-lg hover:shadow-indigo-500/20 transition-all duration-300">
        <div className="flex flex-col space-y-1.5 p-6 text-center pb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 mb-4 mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-award h-8 w-8 text-indigo-400"
            >
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
          </div>
          <h3 className="tracking-tight text-xl font-bold text-white">Excellence</h3>
        </div>
        <div className="p-6 pt-0">
          <p className="text-sm text-gray-400 text-center leading-relaxed">
            We strive for excellence in everything we do, from product quality to customer support.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-20 bg-gray-950">
  {/* Outer container */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Header section */}
    <div className="text-center space-y-4 mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-white">Our Roadmap</h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto">
        From research and development to becoming a global leader in child digital safety
      </p>
    </div>

    {/* Timeline container */}
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-700"></div>

      {/* Timeline events */}
      <div className="space-y-12">

        {/* === Event 1: R&D Phase Initiated === */}
        <div className="relative flex items-center justify-start">
          <div className="w-5/12 pr-8 text-right">
            <div className="rounded-lg bg-green-900 border border-green-700 text-white shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="tracking-tight text-lg font-bold">R&D Phase Initiated</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-700 text-green-100">2024</span>
                    <span className="text-green-400">✓</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Started research and development of AI-powered child protection technology with a team of experts.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950 shadow bg-green-400"></div>
        </div>

        {/* === Event 2: Investor Partnership === */}
        <div className="relative flex items-center justify-end">
          <div className="w-5/12 pl-8 text-left">
            <div className="rounded-lg bg-blue-900 border border-blue-700 text-white shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="tracking-tight text-lg font-bold">Investor Partnership</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-700 text-blue-100">Nov 2025</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Secure strategic investor partnership to fund development and accelerate product launch.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950 shadow bg-blue-400"></div>
        </div>

        {/* === Event 3: Company Establishment === */}
        <div className="relative flex items-center justify-start">
          <div className="w-5/12 pr-8 text-right">
            <div className="rounded-lg bg-blue-900 border border-blue-700 text-white shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="tracking-tight text-lg font-bold">Company Establishment</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-700 text-blue-100">Dec 2025</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Official company incorporation and team expansion with dedicated development resources.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950 shadow bg-blue-400"></div>
        </div>

        {/* === Event 4: B2C Beta Launch === */}
        <div className="relative flex items-center justify-end">
          <div className="w-5/12 pl-8 text-left">
            <div className="rounded-lg bg-blue-900 border border-blue-700 text-white shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="tracking-tight text-lg font-bold">B2C Beta Launch</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-700 text-blue-100">Jan 2026</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Release beta version of ZyberHero for families and individual consumers.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950 shadow bg-blue-400"></div>
        </div>

        {/* === Event 5: B2B Platform Launch === */}
        <div className="relative flex items-center justify-start">
          <div className="w-5/12 pr-8 text-right">
            <div className="rounded-lg bg-blue-900 border border-blue-700 text-white shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="tracking-tight text-lg font-bold">B2B Platform Launch</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-700 text-blue-100">Feb 2026</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Launch enterprise solution for schools, organizations, and educational institutions.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950 shadow bg-blue-400"></div>
        </div>

        {/* === Event 6: Global Expansion === */}
        <div className="relative flex items-center justify-end">
          <div className="w-5/12 pl-8 text-left">
            <div className="rounded-lg bg-gray-900 border border-gray-700 text-white shadow-lg">
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-between">
                  <h3 className="tracking-tight text-lg font-bold">Global Expansion</h3>
                  <div className="flex items-center space-x-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-700 text-gray-100">2026+</span>
                  </div>
                </div>
              </div>
              <div className="p-6 pt-0">
                <p className="text-sm text-gray-300 leading-relaxed">
                  Scale internationally with partnerships in education, law enforcement, and child safety organizations.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-gray-950 shadow bg-gray-400"></div>
        </div>

      </div>
    </div>
  </div>
</section>


      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Comprehensive Digital Protection
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced AI-powered monitoring that keeps your children safe
              across all digital platforms
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
                      <CardTitle className="text-xl font-bold text-white">
                        {feature.title}
                      </CardTitle>
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
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              How Our Monitoring Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A safe, structured approach to monitoring digital activities
              without invasion of privacy and with support
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Assessment",
                desc: "We analyze digital footprints and identify potential risks across all platforms",
              },
              {
                step: "2",
                title: "Monitoring",
                desc: "AI monitors activity 24/7, analyzing content, interactions and behavioral patterns",
              },
              {
                step: "3",
                title: "Analysis",
                desc: "Smart algorithms detect threats, inappropriate content and suspicious behavior",
              },
              {
                step: "4",
                title: "Response",
                desc: "Instant notifications and automated protection when threats are detected",
              },
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
                <h3 className="text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
              asChild
            >
              <Link href="/login">Start Protecting Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Learning Through Play
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform digital safety education into an engaging adventure with
              gamification, mentoring, and interactive learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              {
                iconColor: "text-yellow-400",
                icon: Trophy,
                title: "Safety Achievements",
                desc: "Children earn badges and trophies for making smart digital choices and completing safety lessons.",
              },
              {
                iconColor: "text-purple-400",
                icon: Star,
                title: "Learning Streaks",
                desc: "Build daily learning streaks by completing interactive safety modules and quizzes.",
              },
              {
                iconColor: "text-green-400",
                icon: Target,
                title: "Safety Challenges",
                desc: "Weekly challenges that teach children about online safety through fun, age-appropriate activities.",
              },
              {
                iconColor: "text-blue-400",
                icon: Gift,
                title: "Reward System",
                desc: "Earn points for safe behavior that can be redeemed for real-world rewards approved by parents.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-gray-900/60 border border-cyan-500/20 p-6 shadow-xl hover:shadow-cyan-500/40 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-500/10 mb-4 mx-auto">
                  {/* <i
                    className={`${card.icon} ${card.iconColor} h-8 w-8 stroke-[1.5]`}
                  ></i> */}
                   <card.icon className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-bold text-white">
                Interactive Safety Education
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Our gamified learning platform makes digital safety education fun and memorable. Children progress through age-appropriate lessons, earn rewards, and build lasting safety habits through interactive experiences.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Digital Citizenship Course", progress: "8/12 lessons", bar: "w-2/3" },
                  { title: "Stranger Danger Online", progress: "5/8 lessons", bar: "w-3/5" },
                  { title: "Password Security", progress: "3/5 lessons", bar: "w-3/5" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-medium text-gray-200">{item.title}</span>
                      <span className="text-sm text-gray-500">{item.progress}</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className={`bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full ${item.bar}`}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { color: "bg-yellow-500/10 text-yellow-400 border border-yellow-400/30", label: "Safety Champion", icon: "lucide-trophy" },
                  { color: "bg-purple-500/10 text-purple-400 border border-purple-400/30", label: "7-Day Streak", icon: "lucide-star" },
                  { color: "bg-green-500/10 text-green-400 border border-green-400/30", label: "Quiz Master", icon: "lucide-target" },
                ].map((badge, i) => (
                  <div
                    key={i}
                    className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 ${badge.color}`}
                  >
                    <i className={`${badge.icon} h-4 w-4`} />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900/80 border border-cyan-500/20 rounded-2xl shadow-2xl p-8 text-white">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎮</div>
                  <h4 className="text-xl font-bold mb-2 text-white">
                    Safety Adventure Game
                  </h4>
                  <p className="text-gray-400">Level 12 - Cyber Detective</p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-4 text-white shadow-lg shadow-cyan-500/40">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Current Mission</span>
                      <span className="text-sm opacity-90">2/3 Complete</span>
                    </div>
                    <p className="text-sm opacity-90">
                      Identify suspicious messages in your inbox.
                    </p>
                    <div className="w-full bg-white/20 rounded-full h-2 mt-3">
                      <div className="bg-white h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-2xl mb-1">🏆</div>
                      <div className="text-sm font-medium text-cyan-400">15</div>
                      <div className="text-xs text-gray-400">Badges</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-2xl mb-1">⭐</div>
                      <div className="text-sm font-medium text-cyan-400">
                        2,450
                      </div>
                      <div className="text-xs text-gray-400">Points</div>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <div className="text-2xl mb-1">🎯</div>
                      <div className="text-sm font-medium text-cyan-400">
                        Level 12
                      </div>
                      <div className="text-xs text-gray-400">Rank</div>
                    </div>
                  </div>
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
                <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="founding-team" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              Founding Team
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Meet the visionary behind ZyberHero
            </h2>
          </div>

          <div className="max-w-2xl mx-auto bg-gray-800 rounded-3xl p-8 md:p-12 border-2 border-cyan-500/20 shadow-xl">
            <div className="flex flex-col md:flex-col gap-8 items-center">
              <div className="flex-shrink-2">
                <Image
                  src="/Farouk_Said.jpg"
                  alt="Farouk Said"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              <div className="text-gray-300 items-center flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black mb-2 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Farouk Said
                </h3>
                <p className="text-cyan-400 font-semibold mb-4">
                  Founder & CEO
                </p>
                <div className="space-y-4 text-sm md:text-base leading-relaxed">
                  <p className="flex flex-col text-center">
                    Child Safety Technology Pioneer
                    <br></br>
                    Dedicated to digital child protection
                    <br></br>
                    <br></br>
                    Visionary leader driving innovation in AI-powered child safety solutions and digital protection technologies.
                  </p>

                  {/* <p>
                    Known for his commitment to delivery, it was ten years
                    before Farouk joined Abu Dhabi-based The National Investor,
                    where he ensured a solid IT foundation was in place before
                    unleashing his own entrepreneurial ambitions.
                  </p>
                  <p>
                    Farouk launched Keross in the UAE in 2007 to provide
                    future-sensing, result-driven consultancy and technology
                    services across all markets and all sectors. Today Keross is
                    65+ strong. The team's multi-disciplinary innovative IT
                    skills built and now drive Ikon by Keross – the
                    Oracle-acclaimed robust and agile technology framework that
                    engages a variety of lenses to present real time
                    information.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="testimonials" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Trusted by Families Worldwide
            </h2>
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
                        <Star
                          key={i}
                          className="w-5 h-5 fill-cyan-400 text-cyan-400"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-base text-gray-300 italic">
                      "{testimonial.quote}"
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="py-12 bg-green-50 dark:bg-green-950/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 text-green-700 dark:text-green-400 mb-2">
            <Shield className="w-6 h-6" />
            <span className="text-xl font-bold">
              30-Day Money-Back Guarantee
            </span>
          </div>
          <p className="text-muted-foreground">
            We're confident in our platform. Try risk-free for 30 days or get a
            full refund.
          </p>
        </div>
      </section> */}

      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold mb-4 border border-cyan-500/30">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Choose Your Protection Plan
            </h2>
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
                <Card
                  className={`h-full relative bg-gray-900 border-2 ${plan.popular
                    ? "border-cyan-500/50 shadow-2xl shadow-cyan-500/30"
                    : "border-gray-800 hover:border-cyan-500/30"
                    } transition-all flex flex-col`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-cyan-500/50">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl mb-2 text-white">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-gray-400 mb-4">
                      {plan.description}
                    </CardDescription>
                    <div className="mb-4">
                      <span className="text-4xl font-black text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-400">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">
                          <strong className="text-white">
                            {plan.children}
                          </strong>{" "}
                          {typeof plan.children === "number"
                            ? "child"
                            : "children"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Zap className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">
                          <strong className="text-white">{plan.devices}</strong>{" "}
                          {typeof plan.devices === "number"
                            ? "devices"
                            : "device support"}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-3 mb-6 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className={`w-full transition-all ${plan.popular
                        ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg hover:shadow-2xl hover:shadow-cyan-500/70"
                        : "border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
                        }`}
                      size="lg"
                      asChild
                    >
                      <Link href="/login">
                        Start Free Trial
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <p className="text-xs text-center text-gray-400 mt-3">
                      No credit card required for trial
                    </p>
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
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Check out our comprehensive FAQ page or contact our support team
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
              >
                View FAQ
              </Button>
              <Button
                size="lg"
                className="border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
              >
                Contact Support
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/zyber-logo.png"
                    alt="ZyberHero"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-bold text-lg">ZyberHero</span>
              </div>
              <p className="text-sm">
                Protecting children in the digital world with advanced
                AI-powered monitoring.
              </p>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>zyberHeroSupport@keross.com</li>
                <li>24/7 Support Available</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>
              &copy; 2025 ZyberHero. All rights reserved. Innocence Deserves
              Protection.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
