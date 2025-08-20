"use client"

import * as React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // Закрытие мобильного меню при клике вне его области
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      if (isMobileMenuOpen && !target.closest('header')) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-[#212121] backdrop-blur supports-[backdrop-filter]:bg-[#212121fb]">
      <div className="container flex h-16 items-center justify-around">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/BAI.png" alt="Belgian Art Institute" width={40} height={40} />
          <span className="text-lg font-semibold text-white">Belgian Art Institute</span>
        </Link>
        
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-[#282828] border border-gray-700 rounded-lg shadow-custom-inset">
                  <ListItem href="/about/manifesto" title="Web3 Manifesto">
                    Our mission statement and vision for preserving art through blockchain technology.
                  </ListItem>
                  <ListItem href="/about/institute" title="About the Institute">
                    Our mission, history, and approach to art scholarship.
                  </ListItem>
                  <ListItem href="/about/collection" title="The Impressionist Collection">
                    An overview of the significant collection under our stewardship.
                  </ListItem>
                  <ListItem href="/about/chairman" title="Message from the Chairman">
                    A word from our leadership on our vision and values.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            
            <NavigationMenuItem>
              <NavigationMenuTrigger>Security</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-1 lg:w-[600px] bg-[#282828] border border-gray-700 rounded-lg shadow-custom-inset">
                  <ListItem href="/security/ethics" title="Ethics & Confidentiality">
                    Our commitment to responsible research and engagement.
                  </ListItem>
                  <ListItem href="/security/legal" title="Legal & Institutional Framework">
                    Compliance with international and national regulations.
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/research" legacyBehavior passHref>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#282828] px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-700 data-[state=open]:bg-gray-700 text-white border border-gray-700">Analysis & Research</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/club" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#282828] px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-700 data-[state=open]:bg-gray-700 text-white border border-gray-700">
                  Club
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/secure" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#282828] px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-700 data-[state=open]:bg-gray-700 text-white border border-gray-700">
                  Reports
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link href="/faq" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#282828] px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-700 data-[state=open]:bg-gray-700 text-white border border-gray-700">
                  FAQ
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>



          </NavigationMenuList>

        </NavigationMenu>

        {/* Theme Toggle */}
        <ThemeToggle />
        
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-700 transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-white" />
          ) : (
            <Menu size={24} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-[#212121] text-white max-h-screen overflow-y-auto">
          <div className="container py-4 space-y-4">
            
            {/* About Us Section */}
            <div className="space-y-2">
              <h3 className="font-semibold px-4 py-2">About Us</h3>
              <div className="space-y-1">
                <MobileMenuItem href="/about/manifesto" onClick={closeMobileMenu}>
                  Web3 Manifesto
                </MobileMenuItem>
                <MobileMenuItem href="/about/institute" onClick={closeMobileMenu}>
                  About the Institute
                </MobileMenuItem>
                <MobileMenuItem href="/about/collection" onClick={closeMobileMenu}>
                  The Impressionist Collection
                </MobileMenuItem>
                <MobileMenuItem href="/about/chairman" onClick={closeMobileMenu}>
                  Message from the Chairman
                </MobileMenuItem>
              </div>
            </div>

            {/* Research Section */}
            <div className="space-y-2">
              <h3 className="font-semibold px-4 py-2">Research</h3>
              <div className="space-y-1">
                <MobileMenuItem href="/research" onClick={closeMobileMenu}>
                  Analysis & Research
                </MobileMenuItem>
                <MobileMenuItem href="/secure" onClick={closeMobileMenu}>
                  Reports Documents
                </MobileMenuItem>
              </div>
            </div>

            {/* Security Section */}
            <div className="space-y-2">
              <h3 className="font-semibold px-4 py-2">Security</h3>
              <div className="space-y-1">
                <MobileMenuItem href="/security/ethics" onClick={closeMobileMenu}>
                  Ethics & Confidentiality
                </MobileMenuItem>
                <MobileMenuItem href="/security/legal" onClick={closeMobileMenu}>
                  Legal & Institutional Framework
                </MobileMenuItem>
              </div>
            </div>

            {/* Community Section */}
            <div className="space-y-2">
              <h3 className="font-semibold px-4 py-2">Community</h3>
              <div className="space-y-1">
                <MobileMenuItem href="/club" onClick={closeMobileMenu}>
                  Friends of the Institute Club
                </MobileMenuItem>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="space-y-2">
              <h3 className="font-semibold px-4 py-2">Support</h3>
              <div className="space-y-1">
                <MobileMenuItem href="/faq" onClick={closeMobileMenu}>
                  FAQ
                </MobileMenuItem>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white text-white",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none text-white">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-gray-300">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)
ListItem.displayName = "ListItem"

const MobileMenuItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a"> & { onClick?: () => void }>(
  ({ className, children, onClick, href, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href || "#"}
        className={cn(
          "block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors rounded-md",
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    )
  },
)
MobileMenuItem.displayName = "MobileMenuItem"
