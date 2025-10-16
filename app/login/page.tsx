'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Users, Search, Sparkles, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { signIn, type UserRole, getDashboardPath } from '@/lib/auth';
import usersData from '@/lib/mock/users.json';
import { ThemeToggle } from '@/components/ui/theme-toggle';

const roles = [
  {
    id: 'child' as UserRole,
    title: 'Child',
    description: 'Learn how to stay safe online',
    icon: Sparkles,
    color: 'from-blue-400 to-cyan-400',
    bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950',
  },
  {
    id: 'parent' as UserRole,
    title: 'Parent',
    description: 'Monitor and protect your children',
    icon: Users,
    color: 'from-emerald-400 to-teal-400',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950 dark:to-teal-950',
  },
  {
    id: 'investigator' as UserRole,
    title: 'Investigator',
    description: 'Investigate threats and cases',
    icon: Search,
    color: 'from-amber-400 to-orange-400',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950',
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<string>('');

  const usersForRole = usersData.filter(u => u.role === selectedRole);

  const handleLogin = (isNewUser: boolean = false) => {
    if (!selectedRole || !selectedUserId) return;

    const user = signIn(selectedRole, selectedUserId);
    if (user) {
      if (isNewUser) {
        router.push('/payment');
      } else if (selectedRole === 'parent') {
        router.push('/dashboard/parent');
      } else {
        router.push(getDashboardPath(selectedRole));
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="absolute top-4 left-4">
        <Button variant="ghost" className="hover:bg-cyan-50 hover:text-cyan-600 dark:hover:bg-cyan-950 dark:hover:text-cyan-400" asChild>
          <Link href="/">
            <Home className="w-4 h-4 mr-2" />
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
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-6"
          >
            <div className="relative w-48 h-48 rounded-2xl overflow-hidden">
              <Image
                src="/zyber-logo.png"
                alt="ZyberHero Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
          >
            ZyberHero
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2"
          >          
            Innocence Deserves Protection
          </motion.p>
        </div>

        {!selectedRole ? (
          <div className="grid md:grid-cols-3 gap-6">
            {roles.map((role, index) => {
              const Icon = role.icon;
              return (
                <motion.div
                  key={role.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card
                    className={`cursor-pointer transition-all hover:scale-105 hover:shadow-xl ${role.bgColor} border-2 border-transparent hover:border-cyan-500`}
                    onClick={() => setSelectedRole(role.id)}
                  >
                    <CardHeader className="text-center">
                      <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${role.color} flex items-center justify-center mb-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl">{role.title}</CardTitle>
                      <CardDescription className="text-base">
                        {role.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle>Select User</CardTitle>
                <CardDescription>
                  Choose a user to sign in as {selectedRole}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {usersForRole.map(user => (
                    <Button
                      key={user.id}
                      variant={selectedUserId === user.id ? 'default' : 'outline'}
                      className={`w-full justify-start ${selectedUserId !== user.id ? 'hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-950' : ''}`}
                      onClick={() => setSelectedUserId(user.id)}
                    >
                      <span className="mr-2 text-2xl">
                        {user.avatar || (user.role === 'child' ? '👤' : user.role === 'parent' ? '👨‍👩‍👧' : '🔍')}
                      </span>
                      {user.name}
                    </Button>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1 border-2 border-cyan-500/50 bg-transparent text-cyan-400 hover:bg-cyan-500 hover:text-white hover:shadow-2xl hover:shadow-cyan-500/70 transition-all"
                    onClick={() => {
                      setSelectedRole(null);
                      setSelectedUserId('');
                    }}
                  >
                    Back
                  </Button>
                  <Button
                    className="flex-1 bg-blue-600 hover:bg-blue-700 hover:shadow-lg hover:shadow-cyan-500/50"
                    disabled={!selectedUserId}
                    onClick={() => handleLogin(false)}
                  >
                    Sign In
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
