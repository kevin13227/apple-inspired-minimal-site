import React from 'react';
import { useAuth } from '@/components/AuthProvider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, User, Shield, Settings, CheckSquare, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import TodoList from '@/components/TodoList';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/login');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Enhanced Header with Glassmorphism */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-lg blur opacity-20"></div>
                <Shield className="relative h-8 w-8 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  Apple Zen Mode
                </h1>
                <p className="text-xs text-muted-foreground -mt-1">Secure Dashboard</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 px-3 py-1.5 rounded-full bg-secondary/50 border border-border/50">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Connected</span>
              </div>
              <span className="text-sm text-muted-foreground hidden md:block">
                Welcome back, <span className="font-medium text-foreground">{user.email}</span>
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="flex items-center space-x-2 hover:bg-destructive/10 hover:text-destructive hover:border-destructive/20 transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content with Enhanced Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-8">
          {/* Hero Welcome Section */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles className="h-4 w-4" />
              <span>Welcome to your secure workspace</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent tracking-tight">
              Dashboard Overview
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your Apple-inspired minimal workspace with secure authentication and task management
            </p>
          </div>

          {/* Enhanced Stats Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Authentication Status</CardTitle>
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20 group-hover:scale-110 transition-transform duration-200">
                  <Shield className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">Active</div>
                <p className="text-xs text-muted-foreground mt-1">
                  JWT token valid
                </p>
                <div className="w-full bg-secondary rounded-full h-1 mt-2">
                  <div className="bg-green-500 h-1 rounded-full w-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">User Role</CardTitle>
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 group-hover:scale-110 transition-transform duration-200">
                  <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">Admin</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Full access granted
                </p>
                <div className="w-full bg-secondary rounded-full h-1 mt-2">
                  <div className="bg-blue-500 h-1 rounded-full w-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Security Level</CardTitle>
                <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/20 group-hover:scale-110 transition-transform duration-200">
                  <Zap className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">Maximum</div>
                <p className="text-xs text-muted-foreground mt-1">
                  Environment variables
                </p>
                <div className="w-full bg-secondary rounded-full h-1 mt-2">
                  <div className="bg-purple-500 h-1 rounded-full w-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card/50 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Performance</CardTitle>
                <div className="p-2 rounded-lg bg-orange-100 dark:bg-orange-900/20 group-hover:scale-110 transition-transform duration-200">
                  <TrendingUp className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">Optimal</div>
                <p className="text-xs text-muted-foreground mt-1">
                  MongoDB connected
                </p>
                <div className="w-full bg-secondary rounded-full h-1 mt-2">
                  <div className="bg-orange-500 h-1 rounded-full w-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Authentication Success Card */}
          <Card className="border-border/50 bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/20">
                  <Target className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <CardTitle className="text-xl">Authentication Success</CardTitle>
                  <CardDescription className="text-base">
                    Secure connection established with environment variable credentials
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-green-100/50 dark:bg-green-900/30 border border-green-200/50 dark:border-green-800/50 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200 font-medium">
                    Secure Connection Established
                  </span>
                </div>
                <p className="text-green-700 dark:text-green-300 text-sm mt-2">
                  Your credentials have been verified against the environment variables and a secure JWT session has been created.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div>
                  <p className="font-medium text-foreground mb-2">Security Features:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>JWT token-based authentication</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Environment variable credentials</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                      <span>Protected route access</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Technology Stack:</p>
                  <ul className="space-y-1">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>React + TypeScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>Express.js backend</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>MongoDB integration</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Enhanced Todo List Section */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <CheckSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl">Task Management</CardTitle>
                  <CardDescription className="text-base">
                    Organize your tasks with our integrated to-do list system powered by MongoDB
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <TodoList />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
