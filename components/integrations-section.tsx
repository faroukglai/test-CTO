"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Database, 
  GitBranch, 
  Slack, 
  MessageSquare, 
  Calendar,
  Mail,
  Shield,
  Cpu,
  Globe,
  BarChart3,
  Settings
} from "lucide-react";

export function IntegrationsSection() {
  const integrations = [
    { name: "AWS", icon: Cloud, category: "Cloud" },
    { name: "Google Cloud", icon: Cloud, category: "Cloud" },
    { name: "Azure", icon: Cloud, category: "Cloud" },
    { name: "Salesforce", icon: Database, category: "CRM" },
    { name: "HubSpot", icon: Database, category: "CRM" },
    { name: "Slack", icon: Slack, category: "Communication" },
    { name: "Microsoft Teams", icon: MessageSquare, category: "Communication" },
    { name: "Zoom", icon: MessageSquare, category: "Communication" },
    { name: "GitHub", icon: GitBranch, category: "Development" },
    { name: "GitLab", icon: GitBranch, category: "Development" },
    { name: "Jira", icon: Settings, category: "Project Management" },
    { name: "Asana", icon: Calendar, category: "Project Management" },
    { name: "Mailchimp", icon: Mail, category: "Marketing" },
    { name: "HubSpot Marketing", icon: Mail, category: "Marketing" },
    { name: "Okta", icon: Shield, category: "Security" },
    { name: "Auth0", icon: Shield, category: "Security" },
    { name: "Datadog", icon: BarChart3, category: "Monitoring" },
    { name: "New Relic", icon: BarChart3, category: "Monitoring" },
    { name: "Kubernetes", icon: Cpu, category: "Infrastructure" },
    { name: "Docker", icon: Cpu, category: "Infrastructure" },
    { name: "Stripe", icon: Globe, category: "Payments" },
    { name: "PayPal", icon: Globe, category: "Payments" },
    { name: "Twilio", icon: MessageSquare, category: "Communication" },
    { name: "SendGrid", icon: Mail, category: "Communication" },
  ];

  // Create multiple rows for continuous scroll effect
  const scrollRows = [
    [...integrations.slice(0, 12), ...integrations.slice(0, 12)],
    [...integrations.slice(12, 24), ...integrations.slice(12, 24)],
    [...integrations.slice(0, 8), ...integrations.slice(0, 8), ...integrations.slice(0, 8)],
  ];

  return (
    <section id="integrations" className="py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Settings className="w-4 h-4 mr-2 text-green-400" />
            <span className="text-sm text-green-300">Seamless Connectivity</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Integrates With Everything
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Connect with your favorite tools and platforms. Native integrations with 100+ services to streamline your workflow.
          </p>
        </motion.div>

        {/* Scrolling logos */}
        <div className="space-y-12">
          {scrollRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              {/* Gradient fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
              
              <motion.div
                className="flex gap-8"
                animate={{
                  x: rowIndex % 2 === 0 ? [0, -50] : [0, 50],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30 + rowIndex * 5,
                    ease: "linear",
                  },
                }}
              >
                {row.map((integration, index) => (
                  <motion.div
                    key={`${integration.name}-${index}`}
                    className="flex-shrink-0 group cursor-pointer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 hover:border-white/40 hover:shadow-xl hover:shadow-purple-500/20">
                      <integration.icon className="w-10 h-10 text-white group-hover:text-purple-300 transition-colors" />
                    </div>
                    <p className="text-center mt-3 text-sm text-gray-400 group-hover:text-white transition-colors">
                      {integration.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            {
              title: "Native Integrations",
              description: "Pre-built connectors for all major platforms with zero configuration required",
              icon: Cloud,
            },
            {
              title: "Custom APIs",
              description: "Flexible REST and GraphQL APIs for custom integrations and workflows",
              icon: Settings,
            },
            {
              title: "Webhooks Support",
              description: "Real-time event streaming to keep your systems in perfect sync",
              icon: GitBranch,
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-2xl shadow-purple-500/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Integrations
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}