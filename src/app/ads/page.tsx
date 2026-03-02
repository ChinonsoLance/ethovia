"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  AlertTriangle, 
  Target, 
  Zap, 
  Search, 
  Quote 
} from "lucide-react";
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
    <div className="bg-black min-h-screen selection:bg-accent/30 selection:text-white">
      {/* HERO SECTION – Bold & Aggressive */}
      <section
        ref={ref}
        className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/background/hero-bg.png"
            alt="Ads background"
            fill
            className="object-cover opacity-80 mix-blend-luminosity"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/10 md:bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-black/30 to-black" />
          
          {/* Creative Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[100px] -z-10" />
        </motion.div>

        {/* Hero Content (Load Animations Kept) */}
        <motion.div
          style={{ opacity }}
          className="relative z-10 container mx-auto px-6 sm:px-8 pt-10"
        >
          <div className="max-w-5xl mx-auto text-white flex flex-col items-center text-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="mb-8"
            >
              <img
                src="/images/logo/ethovia-logo-1.png"
                alt="Ethovia Logo"
                className="w-56 sm:w-72 md:w-[380px] h-auto drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium tracking-wide text-white/90 uppercase">Scale Without Guesswork</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight"
            >
              Stop Wasting Money On <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-accent to-secondary animate-gradient-x">
                Facebook & Instagram Ads
              </span>{" "}
              <br className="hidden md:block" />
              Without Getting Results
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl sm:text-2xl text-white/80 max-w-3xl leading-relaxed font-light"
            >
              Discover what’s killing your ad performance in less than 48 hours
              before you launch your next campaign.
            </motion.p>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest text-gradient-to-b from-white/20 to-transparent">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      {/* SECTION 2 – The Question & Symptoms */}
      <section className="relative bg-black py-28 px-6 sm:px-8 border-t border-white/5">
        <div className="container mx-auto max-w-4xl text-white relative">
          <Quote className="absolute -top-10 -left-10 w-32 h-32 text-white/5 rotate-180 -z-0" />
          
          <div className="relative z-10 space-y-10">
            <div className="border-l-4 border-accent pl-8 py-2">
              <p className="text-3xl md:text-4xl font-light italic text-white/90 leading-snug">
                “Have you ever wondered why your advert is getting lots of
                comments, shares and clicks but you are not making any sales?”
              </p>
            </div>
            
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-xl text-white/80 mb-6 font-medium">
                You have changed objectives, tested new creatives, adjusted your
                audience… yet you’re still seeing:
              </p>
              <ul className="grid sm:grid-cols-3 gap-6">
                {[
                  "Low-quality leads",
                  "Declining ROI",
                  "Weak conversions"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/5">
                    <Target className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span className="font-semibold text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 – Personal Story & The Real Problem (MADE LIGHTER) */}
      <section className="relative bg-gray-50 py-28 px-6 sm:px-8">
        <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-gray-900">
          <div className="space-y-8 text-xl leading-relaxed">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-bold tracking-widest uppercase">
              The Reality
            </span>
            <p className="font-semibold text-3xl md:text-4xl text-gray-900">
              You’re not alone.
            </p>
            <p className="text-gray-700">
              This was me a few years ago and I know how frustrating it can be
              dashing Mark money without sales. And I will tell you with
              certainty: Most brands lose money long before their prospects even
              click “Add to Cart” or “Submit form”. 
            </p>
            <p className="text-gray-700">
              They pour good money into
              campaigns without realizing their ad structure or landing page is
              quietly killing conversions.
            </p>
            <div className="bg-white shadow-lg p-6 rounded-2xl border-l-4 border-accent mt-8">
              <p className="text-2xl md:text-3xl font-bold text-gray-900">
                And Yes, The problem isn’t your product.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 – Hidden Leaks (MADE LIGHTER) */}
      <section className="relative bg-white py-32 px-6 sm:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-accent/5 rounded-full blur-[150px] -z-10" />
        
        <div className="container mx-auto max-w-5xl text-gray-900">
          <div className="space-y-12">
            <p className="text-2xl font-semibold text-gray-900">It could be hidden leaks such as:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { text: "Misaligned ad message & landing page", icon: AlertTriangle },
                { text: "A weak or unclear offer", icon: Target },
                { text: "Slow or confusing landing experience", icon: Zap },
                { text: "Audience overlaps & poor structure", icon: Search },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-5 bg-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-accent/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-600 max-w-3xl border-t border-gray-200 pt-8 mt-8">
              These leaks distort your data and eat your ad spend, making every
              “fix” merely guesswork.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5 – The Offer & What If */}
      <section className="relative bg-black py-32 px-6 sm:px-8 border-y border-white/5">
        <div className="container mx-auto max-w-5xl text-white">
          <div className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-3xl md:text-4xl font-bold leading-tight">
                But, What if you could uncover those leaks and get practical,
                actionable recommendations to improve your results?
              </p>
              <p className="text-xl md:text-2xl text-accent font-medium">
                Would you take the opportunity?
              </p>
            </div>
            
            <p className="text-xl text-center text-white/60 uppercase tracking-widest font-bold">
              This is exactly what we are offering.
            </p>
            
            {/* The Offer Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-black/80 p-10 md:p-12 rounded-3xl border border-white/10 backdrop-blur-xl">
                <p className="text-xl leading-relaxed text-white/90">
                  At Ethovia, we help you uncover those leaks through a{" "}
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                    Free Ad Account & CRO Audit
                  </span>.
                  <br /><br />
                  Our expert review dives into your campaign setup, audience
                  structure, creative logic, and landing experience giving you a
                  clear, data-backed picture of where performance breaks down and
                  how to fix it.
                </p>
                <div className="mt-8 pt-8 border-t border-white/10">
                  <p className="text-2xl font-bold text-white flex items-center gap-3">
                    <CheckCircle className="text-secondary w-8 h-8" />
                    Imagine knowing exactly what’s draining your ROI and how to plug
                    every gap.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 – Eligibility (Not for Everyone) */}
      <section className="relative bg-zinc-950 py-32 px-6 sm:px-8 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/10 rounded-full blur-[150px] -z-10" />
        
        <div className="container mx-auto max-w-6xl text-white">
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                However, this Free Audit <br className="hidden md:block" />
                <span className="text-white/50">Isn’t for Everyone.</span>
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto pt-4">
                Ethovia’s Ad Account & CRO Audit is exclusively for:
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Brands spending ₦500,000+ on Meta ads.",
                "Businesses with a functional landing page.",
                "Founders ready to move from guessing to data-backed growth.",
              ].map((criteria, i) => (
                <div
                  key={i}
                  className="relative group bg-black/60 p-8 rounded-3xl border border-white/10 backdrop-blur-sm text-center hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-accent/30 transition-colors">
                    <CheckCircle className="w-8 h-8 text-accent" />
                  </div>
                  <p className="text-lg font-medium text-white/90 leading-relaxed relative z-10">{criteria}</p>
                </div>
              ))}
            </div>
            
            <p className="text-3xl text-center font-semibold text-white/90 max-w-3xl mx-auto border-t border-white/10 pt-10">
              If that’s you, this audit will give you the clarity to scale with
              confidence.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 – Final CTA */}
      <section className="relative bg-black py-40 px-6 sm:px-8 flex items-center justify-center border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/20 via-black to-black opacity-60" />
        
        <div className="container mx-auto max-w-4xl text-white text-center relative z-10">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight">
              Your Next Breakthrough Starts With Insight{" "}
              <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/100 to-white/70">
                — Not Another Experiment.
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
              Request your Free Ad Account & CRO Audit now and receive your
              personalised report in 48 hours.
            </p>
            
            <div className="flex justify-center pt-8">
              <Link href="/contact" className="group relative inline-block">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-md opacity-70 group-hover:opacity-100 transition duration-500 animate-pulse" />
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full font-bold text-xl overflow-hidden border border-white/20 hover:border-white/40 transition-colors"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-2xl">🚀</span> Request My Free Audit
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300 text-accent" />
                  </span>
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                </motion.button>
              </Link>
            </div>
            
            <p className="text-sm font-medium tracking-widest uppercase text-white/50 pt-6">
              No fees. No false promises. Just data-backed clarity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}