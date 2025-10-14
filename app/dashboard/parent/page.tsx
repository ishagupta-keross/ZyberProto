'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, TrendingUp, Trophy, Clock, Ban, Send, User, AlertOctagon, Gamepad2, Video, BookOpen, Activity, MapPin } from 'lucide-react';
import { getUser } from '@/lib/auth';
import { Header } from '@/components/shared/Header';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { GeofencingMap } from '@/components/parent/GeofencingMap';
import { MediaMonitoring } from '@/components/parent/MediaMonitoring';
import alertsData from '@/lib/mock/alerts.json';
import usersData from '@/lib/mock/users.json';
import { toast } from 'sonner';

export default function ParentDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [selectedChild, setSelectedChild] = useState<any>(null);
  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [showAlertDetail, setShowAlertDetail] = useState(false);

  useEffect(() => {
    const currentUser = getUser();
    if (!currentUser || currentUser.role !== 'parent') {
      router.push('/login');
      return;
    }
    setUser(currentUser);

    const children = usersData.filter((u: any) => u.role === 'child' && currentUser.children?.includes(u.id));
    if (children.length > 0) {
      setSelectedChild(children[0]);
    }
  }, [router]);

  if (!user || !selectedChild) return null;

  const myChildren = usersData.filter((u: any) => u.role === 'child' && user.children?.includes(u.id));
  const childAlerts = alertsData.filter(a => a.childId === selectedChild.id);
  const newAlerts = childAlerts.filter(a => a.status === 'new');

  const threatSenders = childAlerts
    .filter(a => a.severity === 'critical' || a.severity === 'high')
    .reduce((acc: any[], alert) => {
      const existing = acc.find(s => s.sender === alert.sender);
      if (existing) {
        existing.count++;
        existing.lastSeen = alert.timestamp;
        if (alert.severity === 'critical') existing.critical++;
      } else {
        acc.push({
          sender: alert.sender,
          platform: alert.platform,
          count: 1,
          critical: alert.severity === 'critical' ? 1 : 0,
          lastSeen: alert.timestamp,
          contentTypes: [alert.contentType],
        });
      }
      return acc;
    }, [])
    .sort((a: any, b: any) => b.count - a.count);

  const recentActivities = [
    { type: 'game', title: 'Password Power-Up completed', time: '10 minutes ago', icon: Gamepad2, color: 'text-green-500' },
    { type: 'content', title: 'Inappropriate content blocked', time: '25 minutes ago', icon: Shield, color: 'text-red-500' },
    { type: 'video', title: 'Watched "Online Safety Tips"', time: '1 hour ago', icon: Video, color: 'text-blue-500' },
    { type: 'lesson', title: 'Started "Stranger Danger Detective"', time: '2 hours ago', icon: BookOpen, color: 'text-purple-500' },
    { type: 'content', title: 'Suspicious message blocked', time: '3 hours ago', icon: AlertTriangle, color: 'text-orange-500' },
  ];

  const learningProgress = [
    { game: 'Stranger Danger Detective', progress: 80, status: 'in-progress' },
    { game: 'Password Power-Up', progress: 100, status: 'completed' },
    { game: 'Share Smart Challenge', progress: 45, status: 'in-progress' },
    { game: 'Cyber Bully Blocker', progress: 30, status: 'in-progress' },
  ];

  const blockedContent = [
    { type: 'Inappropriate Image', reason: 'Contains adult content', sender: 'unknown_user', time: '25 min ago', severity: 'critical' },
    { type: 'Suspicious Message', reason: 'Requesting personal information', sender: 'stranger_2847', time: '3 hours ago', severity: 'high' },
    { type: 'Unsafe Link', reason: 'Phishing attempt detected', sender: 'promo_deals', time: '5 hours ago', severity: 'high' },
    { type: 'Inappropriate Text', reason: 'Contains profanity and bullying language', sender: 'school_anonymous', time: '1 day ago', severity: 'medium' },
  ];

  const gamesPlayed = [
    { name: 'Stranger Danger Detective', sessions: 5, timeSpent: '45 min', lastPlayed: 'Today' },
    { name: 'Password Power-Up', sessions: 8, timeSpent: '1h 20min', lastPlayed: 'Today' },
    { name: 'Share Smart Challenge', sessions: 3, timeSpent: '30 min', lastPlayed: 'Yesterday' },
  ];

  const severityColors = {
    low: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    high: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200',
    critical: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
  };

  const handleBlockSender = (sender: string) => {
    toast.success(`Sender "${sender}" has been permanently blocked`);
  };

  const handleEscalate = (alert: any) => {
    toast.success('Alert escalated to investigator team');
    setShowAlertDetail(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header title="Parent Dashboard" userName={user.name} />

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Children</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {myChildren.map((child: any) => (
              <motion.div
                key={child.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Card
                  className={`cursor-pointer transition-all ${
                    selectedChild?.id === child.id ? 'ring-2 ring-primary shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedChild(child)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-5xl">{child.avatar}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold">{child.name}</h3>
                        <p className="text-sm text-muted-foreground">Age {child.age} • Level {child.level}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge variant="secondary">{child.points} points</Badge>
                          <Badge variant={alertsData.filter(a => a.childId === child.id && a.status === 'new').length > 0 ? 'destructive' : 'secondary'}>
                            {alertsData.filter(a => a.childId === child.id && a.status === 'new').length} alerts
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
            <TabsTrigger value="location">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </TabsTrigger>
            <TabsTrigger value="media">
              <Video className="w-4 h-4 mr-2" />
              Media
            </TabsTrigger>
            <TabsTrigger value="blocked">Blocked</TabsTrigger>
            <TabsTrigger value="threats">Threats</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">New Alerts</CardTitle>
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{newAlerts.length}</div>
                  <p className="text-xs text-muted-foreground">Requires attention</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Level Progress</CardTitle>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{selectedChild.level}</div>
                  <p className="text-xs text-muted-foreground">{selectedChild.points} total points</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
                  <Trophy className="w-4 h-4 text-yellow-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{selectedChild.badges.length}</div>
                  <p className="text-xs text-muted-foreground">Safety achievements</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Content Blocked</CardTitle>
                  <Shield className="w-4 h-4 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{blockedContent.length}</div>
                  <p className="text-xs text-muted-foreground">In the last 24 hours</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Learning Summary</CardTitle>
                  <CardDescription>Current progress across all games</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {learningProgress.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{item.game}</span>
                        <span className="text-sm text-muted-foreground">{item.progress}%</span>
                      </div>
                      <Progress value={item.progress} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Safety Achievements</CardTitle>
                  <CardDescription>Badges earned by {selectedChild.name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    {['⭐', '🎯', '🦸', '🛡️', '🎮', '📺'].map((emoji, index) => (
                      <div
                        key={index}
                        className={`p-4 rounded-lg text-center ${
                          index < selectedChild.badges.length
                            ? 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900 dark:to-orange-900'
                            : 'bg-gray-100 dark:bg-gray-800 opacity-40'
                        }`}
                      >
                        <div className="text-4xl">{emoji}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Activity className="w-6 h-6" />
                  <div>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Last activities from {selectedChild.name}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => {
                    const Icon = activity.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className={`p-2 rounded-full bg-muted ${activity.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {activity.time}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="learning" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Gamepad2 className="w-6 h-6" />
                    <div>
                      <CardTitle>Learning Progress</CardTitle>
                      <CardDescription>Educational games completion status</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {learningProgress.map((item, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium">{item.game}</span>
                        <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                          {item.status === 'completed' ? 'Completed' : 'In Progress'}
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{item.progress}%</span>
                        </div>
                        <Progress value={item.progress} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6" />
                    <div>
                      <CardTitle>Games Played</CardTitle>
                      <CardDescription>Session history and time spent</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {gamesPlayed.map((game, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-3">{game.name}</h4>
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-muted-foreground">Sessions</p>
                          <p className="font-semibold">{game.sessions}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Time</p>
                          <p className="font-semibold">{game.timeSpent}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Last Played</p>
                          <p className="font-semibold">{game.lastPlayed}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="blocked" className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-red-500" />
                  <div>
                    <CardTitle>Blocked Content</CardTitle>
                    <CardDescription>Content that was automatically blocked by ZyberHero</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {blockedContent.map((content, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold flex items-center gap-2">
                            <Shield className="w-4 h-4 text-red-500" />
                            {content.type}
                          </h4>
                          <p className="text-sm text-muted-foreground mt-1">From: {content.sender}</p>
                        </div>
                        <Badge className={severityColors[content.severity as keyof typeof severityColors]}>
                          {content.severity}
                        </Badge>
                      </div>
                      <div className="bg-muted p-3 rounded-lg mb-3">
                        <p className="text-sm"><strong>Reason:</strong> {content.reason}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {content.time}
                        </span>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleBlockSender(content.sender)}
                        >
                          <Ban className="w-3 h-3 mr-1" />
                          Block Sender
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="threats" className="space-y-4">
            <Card className="border-red-200 dark:border-red-900">
              <CardHeader className="bg-red-50 dark:bg-red-950/30">
                <div className="flex items-center gap-3">
                  <AlertOctagon className="w-6 h-6 text-red-500" />
                  <div>
                    <CardTitle className="text-red-700 dark:text-red-400">High-Risk Threat Senders</CardTitle>
                    <CardDescription>Accounts sending dangerous or inappropriate content to {selectedChild.name}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                {threatSenders.length === 0 ? (
                  <div className="text-center py-8">
                    <Shield className="w-12 h-12 mx-auto mb-2 text-green-500" />
                    <p className="text-muted-foreground">No threat senders detected. Great job staying safe!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {threatSenders.map((sender: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="border-2 border-red-200 dark:border-red-900 rounded-lg p-4 bg-red-50/50 dark:bg-red-950/20"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-start gap-3">
                            <div className="p-2 bg-red-100 dark:bg-red-900 rounded-full">
                              <User className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <h4 className="font-bold text-lg">{sender.sender}</h4>
                              <p className="text-sm text-muted-foreground">Platform: {sender.platform}</p>
                            </div>
                          </div>
                          <Badge variant="destructive" className="text-lg px-3 py-1">
                            {sender.count} threats
                          </Badge>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
                          <div>
                            <p className="text-xs text-muted-foreground">Total Messages</p>
                            <p className="text-lg font-bold">{sender.count}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Critical Threats</p>
                            <p className="text-lg font-bold text-red-600">{sender.critical}</p>
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground">Last Activity</p>
                            <p className="text-sm font-semibold">{new Date(sender.lastSeen).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button
                            variant="destructive"
                            className="flex-1"
                            onClick={() => handleBlockSender(sender.sender)}
                          >
                            <Ban className="w-4 h-4 mr-2" />
                            Block Permanently
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => {
                              toast.success('Sender reported to authorities');
                            }}
                          >
                            <Send className="w-4 h-4 mr-2" />
                            Report to Authorities
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location">
            <GeofencingMap childName={selectedChild.name} />
          </TabsContent>

          <TabsContent value="media">
            <MediaMonitoring />
          </TabsContent>
        </Tabs>
      </div>

      <Dialog open={showAlertDetail} onOpenChange={setShowAlertDetail}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Alert Details
            </DialogTitle>
          </DialogHeader>
          {selectedAlert && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Severity</label>
                  <Badge className={`mt-1 ${severityColors[selectedAlert.severity as keyof typeof severityColors]}`}>
                    {selectedAlert.severity}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Platform</label>
                  <p className="font-medium">{selectedAlert.platform}</p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-muted-foreground">Reason for Flag</label>
                <p className="mt-1 p-3 bg-muted rounded-lg">{selectedAlert.reason}</p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="destructive"
                  className="flex-1"
                  onClick={() => handleBlockSender(selectedAlert.sender)}
                >
                  <Ban className="w-4 h-4 mr-2" />
                  Block Sender
                </Button>
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => handleEscalate(selectedAlert)}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Escalate to Investigator
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
