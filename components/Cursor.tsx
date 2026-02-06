"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export default function Cursor() {
  const [mounted, setMounted] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  // Koordinat Mouse
  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)

  // Pengaturan Spring (Semakin rendah damping, semakin goyang/kenyal)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.6 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    setMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Deteksi jika mouse di atas elemen interaktif
      if (target.closest("a") || target.closest("button") || target.getAttribute("role") === "button") {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <>
      {/* 1. Main Dot (Titik Inti) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-600 rounded-full pointer-events-none z-[1000] mix-blend-difference hidden lg:block"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 2. The Interactive Ring (Lingkaran Utama) */}
      <motion.div
        className="fixed top-0 left-0 border border-blue-600 rounded-full pointer-events-none z-[999] hidden lg:block"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          backgroundColor: isHovered ? "rgba(37, 99, 235, 0.15)" : "transparent",
          borderColor: isHovered ? "rgba(37, 99, 235, 0.8)" : "rgba(37, 99, 235, 0.4)",
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
      />
      
      {/* 3. Outer Glow (Efek cahaya tipis) */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.5 }}
          className="fixed top-0 left-0 w-20 h-20 bg-blue-500/10 blur-xl rounded-full pointer-events-none z-[998] hidden lg:block"
          style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        />
      )}
    </>
  )
}