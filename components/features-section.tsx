"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  Cloud,
  BarChart3,
  Lock,
  Rocket,
  Settings,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Brain,
      title: "Neural Networks",
      description: "Advanced deep learning models that understand context and nuance",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Lightning-fast inference with sub-second response times",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and compliance with global standards",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Globe,
      title: "Global Scale",
      description: "Deploy across regions with built-in redundancy and failover",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: Cpu,
      title: "Edge Computing",
      description: "Process data locally for maximum speed and privacy",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamlessly connect with your existing data infrastructure",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for modern cloud architectures and microservices",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Deep insights and predictive analytics at your fingertips",
      gradient: "from-emerald-500 to-green-500",
    },
    {
      icon: Lock,
      title: "Privacy First",
      description: "GDPR and CCPA compliant with data anonymization",
      gradient: "from-violet-500 to-purple-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="features" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Settings className="w-4 h-4 mr-2 text-purple-400" />
            <span className="text-sm text-purple-300">Core Capabilities</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Everything you need to build, deploy, and scale AI solutions that transform your business
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:shadow-2xl hover:shadow-purple-500/10">
                <CardContent className="p-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors cursor-pointer"
            whileHover={{ x: 5 }}
          >
            <Rocket className="w-5 h-5" />
            <span className="text-lg font-semibold">Explore all features</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}