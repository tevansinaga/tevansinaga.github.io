"use client"

import { useTheme } from "next-themes"
import { Moon, Sun, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, useScroll } from "framer-motion"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll()

  // Mencegah hydration mismatch error
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full z-[100] border-b border-slate-200/50 dark:border-white/5 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-xl transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-sm">T</span>
          </div>
          <span className="font-black text-xl tracking-tighter uppercase italic">
            Tevan<span className="text-blue-600 not-italic">.</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-10">
          <div className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              01. About
            </a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              02. Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              03. Contact
            </a>
          </div>

          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-white/10 pl-8">
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="group p-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 shadow-sm"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun size={18} className="transition-transform group-hover:rotate-45" />
              ) : (
                <Moon size={18} className="transition-transform group-hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button (Hanya muncul di HP) */}
            <button className="md:hidden p-2.5 rounded-2xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Progress Bar - Menambah kesan premium */}
      <motion.div 
        className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-blue-600 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
    </nav>
  )
}