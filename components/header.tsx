"use client"

import { TrustWalletIcon } from "./trust-wallet-icon"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <TrustWalletIcon className="w-8 h-8 md:w-10 md:h-10" />
            <span className="font-semibold text-lg md:text-xl text-slate-900">
              TrustCard
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Features
            </a>
            <a href="#security" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Security
            </a>
            <a href="#crypto" className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium">
              Crypto
            </a>
            <button 
              onClick={scrollToAbout}
              className="text-slate-600 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              About Us
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Get Your Card
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-slate-600"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-slate-100 px-4 py-6"
        >
          <nav className="flex flex-col gap-4">
            <a href="#features" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#security" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Security
            </a>
            <a href="#crypto" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
              Crypto
            </a>
            <button 
              onClick={scrollToAbout}
              className="text-slate-600 hover:text-blue-600 transition-colors font-medium text-left"
            >
              About Us
            </button>
            <div className="flex flex-col gap-2 pt-4 border-t border-slate-100">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                Get Your Card
              </Button>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  )
}
