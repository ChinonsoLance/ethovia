"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
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

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* HERO SECTION – Bold & Aggressive */}
      <section
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Parallax Background */}
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

        {/* Hero Content */}
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

            {/* Main Headline – aggressive and bold */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight"
              style={{
                fontFamily: "'Inter', 'Space Grotesk', sans-serif",
                textShadow: "0 4px 32px rgba(0,0,0,0.25)",
              }}
            >
              Stop Wasting Money On{" "}
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
              className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl leading-relaxed"
            >
              Discover what’s killing your ad performance in less than 48 hours
              before you launch your next campaign.
            </motion.p>

            {/* No other content in hero – we immediately move to the story */}
          </div>
        </motion.div>
      </section>

      {/* SECTION 2 – The Question & Symptoms */}
      <section className="relative bg-black/90 py-24 px-7 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-white">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-lg leading-relaxed"
          >
            <p className="text-2xl font-light italic text-white/80">
              “Have you ever wondered why your advert is getting lots of
              comments, shares and clicks but you are not making any sales?”
            </p>
            <p>
              You have changed objectives, tested new creatives, adjusted your
              audience… yet you’re still seeing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/90">
              <li>Low-quality leads.</li>
              <li>Declining ROI.</li>
              <li>High engagement but weak conversions.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3 – Personal Story & The Real Problem */}
      <section className="relative bg-gradient-to-b from-black to-gray-900 py-24 px-7 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-white">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8 text-lg leading-relaxed"
          >
            <p className="font-semibold text-xl">You’re not alone.</p>
            <p>
              This was me a few years ago and I know how frustrating it can be
              dashing Mark money without sales, And I will tell you with
              certainty: Most brands lose money long before their prospects even
              click “Add to Cart.” Or “Submit form”. They pour good money into
              campaigns without realizing their ad structure or landing page is
              quietly killing conversions.
            </p>
            <p className="text-2xl font-bold text-secondary">
              And Yes, The problem isn’t your product.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 – Hidden Leaks */}
      <section className="relative bg-black/90 py-24 px-7 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-white">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <p className="text-lg text-white/80">It could be hidden leaks such as:</p>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Misaligned ad message and landing page.",
                "A weak or unclear offer.",
                "Slow or confusing landing experience.",
                "Audience overlaps or poor campaign structure.",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 bg-white/5 p-5 rounded-xl backdrop-blur-sm border border-white/10"
                >
                  <AlertCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-lg">{item}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-lg text-white/80 max-w-3xl">
              These leaks distort your data and eat your ad spend, making every
              “fix” merely guesswork.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 5 – The Offer & What If */}
      <section className="relative bg-gradient-to-b from-gray-900 to-black py-24 px-7 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-white">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <p className="text-2xl font-bold text-center">
              But, What if you could uncover those leaks and get practical,
              actionable recommendations to improve your results? Would you take
              the opportunity?
            </p>
            <p className="text-xl text-center text-white/90">
              This is exactly what we are offering.
            </p>
            <div className="bg-gradient-to-r from-primary/20 to-accent/20 p-8 rounded-3xl border border-white/20 backdrop-blur-sm">
              <p className="text-lg leading-relaxed">
                At Ethovia, we help you uncover those leaks through a{" "}
                <span className="font-bold text-accent">Free Ad Account & CRO Audit</span>.
                Our expert review dives into your campaign setup, audience
                structure, creative logic, and landing experience giving you a
                clear, data-backed picture of where performance breaks down and
                how to fix it.
              </p>
              <p className="text-xl font-semibold mt-6">
                Imagine knowing exactly what’s draining your ROI and how to plug
                every gap.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6 – Eligibility (Not for Everyone) */}
      <section className="relative bg-black/90 py-24 px-7 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-white">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center">
              However, this Free Audit Isn’t for Everyone.
            </h2>
            <p className="text-xl text-center text-white/80 max-w-2xl mx-auto">
              Ethovia’s Ad Account & CRO Audit is exclusively for:
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">
              {[
                "Brands spending ₦500,000+ on Meta ads.",
                "Businesses with a functional landing page.",
                "Founders ready to move from guessing to data-backed growth.",
              ].map((criteria, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className="flex-1 bg-white/10 p-8 rounded-2xl border border-white/20 backdrop-blur-sm text-center"
                >
                  <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <p className="text-lg font-medium">{criteria}</p>
                </motion.div>
              ))}
            </div>
            <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
              If that’s you, this audit will give you the clarity to scale with
              confidence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7 – Final CTA */}
      <section className="relative bg-black py-24 px-7 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl text-white text-center">
          <motion.div
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-10"
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Your Next Breakthrough Starts With Insight{" "}
              <span className="text-gradient">— Not Another Experiment.</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Request your Free Ad Account & CRO Audit now and receive your
              personalised report in 48 hours.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="group">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-10 py-5 bg-gradient-to-r from-secondary to-accent text-white rounded-full font-semibold text-xl overflow-hidden shadow-2xl shadow-accent/50 hover:shadow-accent/70 transition-shadow duration-300 border-2 border-white/60"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    🚀 Request My Free Audit
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </Link>
            </div>
            <p className="text-sm text-white/60">
              No fees. No false promises. Just data-backed clarity.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}