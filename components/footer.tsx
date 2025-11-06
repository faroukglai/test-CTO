"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Github, 
  Instagram,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Use Cases", href: "#use-cases" },
      { name: "Integrations", href: "#integrations" },
      { name: "Pricing", href: "#" },
      { name: "API Docs", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Press", href: "#" },
      { name: "Partners", href: "#" },
    ],
    resources: [
      { name: "Documentation", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Community", href: "#" },
      { name: "Status", href: "#" },
      { name: "Support", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Security", href: "#" },
      { name: "Compliance", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-black/50 backdrop-blur-xl">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                C17 AI
              </span>
            </motion.div>
            
            <p className="text-gray-400 leading-relaxed mb-8 max-w-md">
              Transform your business with cutting-edge AI solutions that deliver unprecedented efficiency, insights, and competitive advantage.
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@c17.ai</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">
                {category === 'product' ? 'Product' : 
                 category === 'company' ? 'Company' :
                 category === 'resources' ? 'Resources' : 'Legal'}
              </h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ delay: linkIndex * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter section */}
        <motion.div
          className="border-t border-white/10 pt-12 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Ahead with AI Insights
            </h3>
            <p className="text-gray-400 mb-8">
              Get the latest updates, tips, and industry trends delivered to your inbox.
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all"
              />
              <motion.button
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-purple-500/25 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="border-t border-white/10 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2024 C17 AI. All rights reserved.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}