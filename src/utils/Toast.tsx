'use client'

import { Toaster } from 'sonner'
import { useEffect, useState } from 'react'

export default function ToastProvider() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark')
      setTheme(isDark ? 'dark' : 'light')
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Initial check
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light')

    return () => observer.disconnect()
  }, [])

  return (
    <Toaster
      position="top-right"
      theme={theme}
      richColors
      closeButton
      duration={3000}
    />
  )
}
