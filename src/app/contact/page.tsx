import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Chop Tree London for a free, no-obligation quote. Call 07826 151347 or fill in our contact form. Based in Ealing, serving all of London.",
  alternates: { canonical: "https://choptreelondon.com/contact" },
};

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "07826 151347",
    href: "tel:+447826151347",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat for quick quotes",
    href: "https://wa.me/447826151347",
  },
  {
    icon: Mail,
    label: "Email",
    value: "choptreelondon1@gmail.com",
    href: "mailto:choptreelondon1@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Ealing, London, United Kingdom",
    href: "https://maps.google.com/?q=Ealing,London",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Monday – Saturday: 7am – 6pm",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-20" />
        <div className="container-site px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <p className="section-label mb-3 text-brand-orange">Get In Touch</p>
          <h1 className="text-display-lg font-extrabold text-white mb-4">
            Request a Free Quote
          </h1>
          <p className="text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
            Fill in the form below or call us directly. We&apos;ll get back to you fast with a no-obligation quote.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-brand-dark mb-6">Contact Details</h2>
              <div className="space-y-5 mb-8">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-orange-pale flex items-center justify-center flex-shrink-0">
                      <Icon size={17} className="text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-brand-mid mb-0.5">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-brand-dark font-semibold hover:text-brand-orange transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-brand-dark font-semibold">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Service area note */}
              <div className="bg-brand-orange-pale rounded-2xl p-5 border border-brand-orange-light">
                <p className="text-sm font-bold text-brand-dark mb-1">Service Area</p>
                <p className="text-sm text-brand-mid leading-relaxed">
                  We cover all London boroughs. Whether you&apos;re in Ealing, Hammersmith, Kingston,
                  Croydon, or anywhere else in the city — we can help.
                </p>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-brand-border rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-xl font-bold text-brand-dark mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
