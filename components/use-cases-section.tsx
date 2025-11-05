"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  Shield, 
  BarChart3, 
  Bot, 
  FileText,
  ShoppingCart,
  Heart,
  Factory,
  GraduationCap,
  Stethoscope,
  Building
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function UseCasesSection() {
  const useCases = [
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Algorithmic trading, fraud detection, and risk assessment with real-time market analysis",
      metrics: ["99.9% Accuracy", "Sub-second Processing", "$2B+ Protected"],
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: "Customer Experience",
      description: "Personalized interactions, sentiment analysis, and predictive customer service",
      metrics: ["85% CSAT Increase", "24/7 Support", "10M+ Interactions"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Threat detection, anomaly identification, and automated security response",
      metrics: ["Zero False Positives", "Real-time Defense", "Enterprise Grade"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Predictive analytics, forecasting, and data-driven decision making",
      metrics: ["40% Faster Insights", "95% Accuracy", "AI-Powered Dashboards"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Recommendation engines, inventory optimization, and dynamic pricing",
      metrics: ["30% Conversion Lift", "Real-time Personalization", "A/B Testing"],
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Stethoscope,
      title: "Healthcare",
      description: "Medical imaging, diagnosis assistance, and treatment optimization",
      metrics: ["FDA Compliant", "95% Diagnostic Accuracy", "Patient Privacy"],
      gradient: "from-cyan-500 to-blue-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="use-cases" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <FileText className="w-4 h-4 mr-2 text-blue-400" />
            <span className="text-sm text-blue-300">Industry Solutions</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Real-World Applications
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover how leading organizations are using our AI to transform their operations and drive innovation
          </p>
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.03,
                rotateX: 5,
                rotateY: 5,
              }}
              className="group perspective-1000"
            >
              <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden">
                <CardContent className="p-8 relative">
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${useCase.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <useCase.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-blue-300 transition-all duration-300">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {useCase.description}
                    </p>
                    
                    {/* Metrics */}
                    <div className="space-y-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <motion.div
                          key={metricIndex}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: metricIndex * 0.1 }}
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${useCase.gradient}`} />
                          <span className="text-sm text-gray-400">{metric}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { number: "500+", label: "Enterprise Clients" },
            { number: "10M+", label: "Daily Predictions" },
            { number: "99.9%", label: "Uptime SLA" },
            { number: "24/7", label: "Premium Support" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}