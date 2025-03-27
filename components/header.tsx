'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from '@/components/language-switcher'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = useTranslations()
  const pathname = usePathname()
  const isHomePage = pathname.split('/').length === 2

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const getLocalePath = (path: string) => {
    const segments = pathname.split('/')
    return `/${segments[1]}${path}`
  }

  const scrollToSection = (sectionId: string) => {
    closeMenu()
    if (isHomePage) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = getLocalePath('/#' + sectionId)
    }
  }

  const navItems = [
    { id: 'hero', label: t('Navigation.home') },
    { id: 'services', label: t('Navigation.services') },
    { id: 'about', label: t('Navigation.about') },
    { id: 'contact', label: t('Navigation.contact') },
    { id: 'professional-memberships', label: t('Navigation.memberships') }
  ]

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-blue-900/10">
      <div className="container flex h-20 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        {isHomePage ? (
          <button 
            onClick={() => scrollToSection('hero')} 
            className="flex items-center gap-1 font-heading font-semibold text-xl md:text-2xl border-0 bg-transparent cursor-pointer"
          >
            <span className="inline font-light text-blue-400 tracking-tight">Schweizer</span> 
            <span className="text-white tracking-tight">Psychology</span>
          </button>
        ) : (
          <Link 
            href={getLocalePath('/')}
            className="flex items-center gap-1 font-heading font-semibold text-xl md:text-2xl"
          >
            <span className="inline font-light text-blue-400 tracking-tight">Schweizer</span> 
            <span className="text-white tracking-tight">Psychology</span>
          </Link>
        )}

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            isHomePage ? (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-base md:text-lg font-medium tracking-tight transition-colors hover:text-blue-400 border-0 bg-transparent cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.id}
                href={getLocalePath('/#' + item.id)}
                className="text-base md:text-lg font-medium tracking-tight transition-colors hover:text-blue-400"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button + Language Switcher */}
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="inline-flex md:hidden items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container flex flex-col space-y-4 py-4 px-4">
            {navItems.map((item) => (
              isHomePage ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-medium transition-colors hover:text-blue-400 text-left border-0 bg-transparent cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.id}
                  href={getLocalePath('/#' + item.id)}
                  className="text-lg font-medium transition-colors hover:text-blue-400 text-left"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  )
} 