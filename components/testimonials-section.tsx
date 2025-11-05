"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO at TechCorp",
      company: "Fortune 500",
      content: "C17 AI has transformed our entire operations. We've seen a 300% increase in efficiency and our team can now focus on strategic initiatives instead of repetitive tasks.",
      rating: 5,
      avatar: "SC",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      company: "StartupHub",
      content: "The best AI platform we've ever used. The integration was seamless, the performance is outstanding, and the support team is incredibly responsive.",
      rating: 5,
      avatar: "MR",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily Johnson",
      role: "Head of Data Science",
      company: "FinanceFlow",
      content: "We've reduced our model training time by 85% and improved accuracy by 40%. C17 AI is a game-changer for financial services.",
      rating: 5,
      avatar: "EJ",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "David Kim",
      role: "CEO",
      company: "HealthTech Pro",
      content: "The HIPAA compliance and security features gave us complete confidence. Our patients' data is safe while we leverage cutting-edge AI.",
      rating: 5,
      avatar: "DK",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Lisa Wang",
      role: "Director of Innovation",
      company: "RetailMax",
      content: "Our recommendation engine now drives 45% more conversions. The ROI has been phenomenal - we paid for the platform in just 3 months.",
      rating: 5,
      avatar: "LW",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "James Taylor",
      role: "Chief Architect",
      company: "CloudScale Inc",
      content: "The scalability and performance are unmatched. We handle millions of requests daily without any degradation in speed or accuracy.",
      rating: 5,
      avatar: "JT",
      gradient: "from-pink-500 to-rose-500",
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
    hidden: { opacity: 0, y: 50, rotateY: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-pink-900/10 to-blue-900/10" />
      
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4 mr-2 text-pink-400" />
            <span className="text-sm text-pink-300">Client Success Stories</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Loved by Industry Leaders
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            See what our customers have to say about their experience with C17 AI
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.03,
                rotateX: 5,
              }}
              className="perspective-1000"
            >
              <Card className="h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border-white/20 hover:border-white/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-8">
                  {/* Quote icon */}
                  <motion.div
                    className="mb-6"
                    animate={{
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <Quote className="w-8 h-8 text-purple-400" />
                  </motion.div>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Content */}
                  <p className="text-gray-300 leading-relaxed mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-12 h-12 rounded-full bg-gradient-to-r ${testimonial.gradient} flex items-center justify-center text-white font-bold`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-purple-400 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { stat: "4.9/5", label: "Average Rating", sublabel: "Based on 2,000+ reviews" },
              { stat: "98%", label: "Customer Satisfaction", sublabel: "Would recommend to others" },
              { stat: "24/7", label: "Premium Support", sublabel: "Dedicated success managers" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {item.stat}
                </div>
                <div className="text-white font-semibold mb-1">{item.label}</div>
                <div className="text-gray-400 text-sm">{item.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}