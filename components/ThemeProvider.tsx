"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
// Hapus baris import yang error tadi, dan gunakan cara ini:
import { type ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}