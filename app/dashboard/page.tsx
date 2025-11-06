"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, BarChart3, Brain, Zap, TrendingUp, Users, Settings, Bell, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-xl"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </motion.button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-xs text-gray-500">AI Control Center</p>
              </div>
            </div>
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
                <LogOut className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Welcome Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mb-12"
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <h2 className="text-4xl font-bold mb-2">Welcome Back!</h2>
              <p className="text-gray-400">Monitor your AI models and performance metrics in real-time</p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 md:grid-cols-4 gap-4"
            >
              {[
                { label: "Active Models", value: "24", icon: Brain, trend: "+12%" },
                { label: "API Calls", value: "1.2M", icon: Zap, trend: "+23%" },
                { label: "Accuracy", value: "98.7%", icon: TrendingUp, trend: "+4.2%" },
                { label: "Users", value: "5.3K", icon: Users, trend: "+8%" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/10 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm text-gray-400 mb-1">{metric.label}</p>
                          <p className="text-3xl font-bold">{metric.value}</p>
                        </div>
                        <motion.div
                          whileHover={{ rotate: 10 }}
                          className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20"
                        >
                          <metric.icon className="w-6 h-6 text-purple-400" />
                        </motion.div>
                      </div>
                      <p className="text-xs text-green-400">{metric.trend} from last month</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Main Dashboard Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {/* Chart Section */}
            <motion.div
              variants={fadeInUp}
              className="lg:col-span-2"
              whileHover={{ scale: 1.01 }}
            >
              <Card className="bg-white/5 border-white/10 h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Performance Analytics</h3>
                  <div className="h-64 bg-gradient-to-b from-purple-500/10 to-blue-500/10 rounded-lg flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 text-gray-600" />
                      <p className="text-gray-500">Real-time analytics visualization</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              variants={fadeInUp}
              className="space-y-4"
            >
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    {[
                      { label: "Deploy Model", icon: "🚀" },
                      { label: "View Logs", icon: "📋" },
                      { label: "API Settings", icon: "⚙️" },
                      { label: "Documentation", icon: "📚" },
                    ].map((action, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ x: 5 }}
                        className="w-full text-left px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <span className="mr-3">{action.icon}</span>
                        {action.label}
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-8"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
                  <div className="space-y-4">
                    {[
                      { action: "Model deployed", time: "2 minutes ago", status: "success" },
                      { action: "API endpoint updated", time: "15 minutes ago", status: "success" },
                      { action: "New dataset imported", time: "1 hour ago", status: "success" },
                      { action: "System maintenance", time: "2 hours ago", status: "info" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <span className="text-sm">{item.action}</span>
                        <span className="text-xs text-gray-500">{item.time}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mt-12 text-center"
          >
            <p className="text-gray-400 mb-4">Need help? Visit our documentation</p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 px-8 py-3">
                Go to Docs
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
