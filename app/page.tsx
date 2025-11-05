"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  Cpu, 
  Database, 
  Cloud,
  ArrowRight,
  Menu,
  X,
  Sun,
  Moon,
  Star,
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { UseCasesSection } from "@/components/use-cases-section";
import { IntegrationsSection } from "@/components/integrations-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Theme toggle */}
      <motion.button
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-colors"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </motion.button>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        
        <main>
          <HeroSection />
          <FeaturesSection />
          <UseCasesSection />
          <IntegrationsSection />
          <TestimonialsSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}