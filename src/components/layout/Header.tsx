"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md border-b border-brand-border"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container-site px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/images/logo-brand-cutout.png"
              alt="Chop Tree London logo"
              width={56}
              height={56}
              className="w-14 h-14 object-contain flex-shrink-0"
              priority
            />
            <div>
              <span className="text-lg font-bold text-brand-dark leading-none block">
                Chop Tree
              </span>
              <span className="text-xs font-medium text-brand-orange leading-none">
                LONDON
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-brand-orange bg-brand-orange-pale"
                    : "text-brand-dark hover:text-brand-orange hover:bg-brand-orange-pale"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+447826151347"
              className="hidden sm:flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors"
            >
              <Phone size={16} />
              <span>07826 151347</span>
            </a>
            <Link href="/contact" className="hidden md:inline-flex btn-primary text-sm py-2.5">
              Free Quote
            </Link>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-orange-pale transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-brand-border shadow-lg">
          <nav className="container-site px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-orange bg-brand-orange-pale"
                    : "text-brand-dark hover:text-brand-orange hover:bg-brand-orange-pale"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+447826151347"
              className="mt-2 btn-primary justify-center"
            >
              <Phone size={16} />
              Call 07826 151347
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
