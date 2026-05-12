"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CryptoCard } from "./crypto-card"
import { VisaLogo } from "./visa-logo"
import { MastercardLogo } from "./mastercard-logo"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-blue-50/30">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6"
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Powered by Trust Wallet</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight tracking-tight text-balance">
              The Crypto Card That{" "}
              <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Moves With You
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty">
              Spend directly from your Trust Wallet with 0% fees and 2% cashback on all purchases.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8 mt-8">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">0%</p>
                <p className="text-sm text-slate-500 mt-1">Joining Fees</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">0%</p>
                <p className="text-sm text-slate-500 mt-1">Transaction Fees</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">2%</p>
                <p className="text-sm text-slate-500 mt-1">Cashback Rewards</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-blue-600">180+</p>
                <p className="text-sm text-slate-500 mt-1">Countries Supported</p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-6 text-lg font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all"
              >
                Get Your Card
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Trust Badges with proper logos */}
            <div className="flex items-center gap-4 justify-center lg:justify-start mt-8 text-slate-400">
              <span className="text-sm">Accepted worldwide</span>
              <div className="flex items-center gap-3">
                <div className="bg-white border border-slate-200 rounded-md px-2 py-1">
                  <VisaLogo className="w-12 h-7" />
                </div>
                <div className="bg-white border border-slate-200 rounded-md px-2 py-1">
                  <MastercardLogo className="w-10 h-7" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-lg p-4 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Payment Complete</p>
                    <p className="text-xs text-slate-500">-0.05 ETH</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-lg">💰</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Cashback Earned</p>
                    <p className="text-xs text-green-600">+$12.50</p>
                  </div>
                </div>
              </motion.div>

              <CryptoCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
