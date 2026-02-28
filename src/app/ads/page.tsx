"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function AdsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="/images/background/hero-bg.png"
          alt="Ads background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 md:bg-black/40 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/20 to-transparent" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 container mx-auto px-7 sm:px-6 lg:px-8 pt-3"
      >
        <div className="max-w-5xl mx-auto text-white">

            {/* Logo */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="flex justify-center mb-1"
>
  <img
  src="/images/logo/ethovia-logo.png"
  alt="Ethovia Logo"
  className="w-64 sm:w-80 md:w-[420px] h-auto drop-shadow-2xl"
/>
</motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 leading-tight tracking-tight"
            style={{
              fontFamily: "'Inter', 'Space Grotesk', sans-serif",
              textShadow: "0 4px 32px rgba(0,0,0,0.25)",
            }}
          >
            Stop Wasting Money on{" "}
            <span className="text-gradient">
              Facebook & Instagram Ads
            </span>{" "}
            Without Getting Results
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed"
          >
            Discover what’s killing your ad performance in less than 48 hours
            before you launch your next campaign.
          </motion.p>

          {/* Problem Points */}
          <motion.ul
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-white/90 text-lg mb-12"
          >
            <li>• Low-quality leads</li>
            <li>• Declining ROI</li>
            <li>• High engagement but weak conversions</li>
          </motion.ul>

          {/* Solution Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-white/80 max-w-3xl mb-12 leading-relaxed"
          >
            At <span className="font-semibold text-white">Ethovia</span>, we
            uncover hidden conversion leaks inside your ad account and landing
            pages. Misaligned messaging, weak offers, poor structure —
            everything that silently drains your ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 items-start"
          >
            <Link href="/contact" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-semibold text-lg overflow-hidden shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-shadow duration-300 border-2 border-white/60"
              >
                <span className="relative z-10 flex items-center gap-2">
                  🚀 Request My Free Audit
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </Link>

            <Link href="/work" className="group">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  See Real Results
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Microcopy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-white/60 pb-20"
          >
            No fees. No false promises. Just data-backed clarity in 48 hours.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}