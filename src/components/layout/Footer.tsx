import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  { label: "Tree Surgery", href: "/services#tree-surgery" },
  { label: "Tree Removal", href: "/services#tree-removal" },
  { label: "Stump Removal", href: "/services#stump-removal" },
  { label: "Crown Lifting", href: "/services#crown-lifting" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Free Quote", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer */}
      <div className="container-site px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo-brand-cutout.png"
                alt="Chop Tree London logo"
                width={56}
                height={56}
                className="w-14 h-14 object-contain flex-shrink-0"
              />
              <div>
                <span className="text-lg font-bold leading-none block">Chop Tree</span>
                <span className="text-xs font-medium text-brand-orange leading-none">LONDON</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Professional arborist services across London since 2019. Trusted by hundreds of homeowners and businesses.
            </p>
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <a href="tel:+447398978210" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Phone size={14} className="text-brand-orange flex-shrink-0" />
                07398 978210
              </a>
              <a href="mailto:choptreelondon1@gmail.com" className="flex items-center gap-2 hover:text-brand-orange transition-colors">
                <Mail size={14} className="text-brand-orange flex-shrink-0" />
                choptreelondon1@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} className="text-brand-orange flex-shrink-0" />
                Ealing, London
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} className="text-brand-orange flex-shrink-0" />
                Mon–Sat: 7am – 6pm
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4">
              Get a Free Quote
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Ready to get started? Contact us today for a free, no-obligation quotation.
            </p>
            <Link href="/contact" className="btn-primary text-sm">
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © {currentYear} Choptree London LTD. All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Registered in England & Wales
          </p>
        </div>
      </div>
    </footer>
  );
}
