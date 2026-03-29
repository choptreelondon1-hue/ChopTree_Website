"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle, MessageCircle } from "lucide-react";
import { buildWhatsAppHref } from "@/lib/whatsapp";

const services = [
  "Tree Surgery",
  "Tree Removal",
  "Stump Removal",
  "Crown Lifting",
  "Other / Not Sure",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      // Replace this URL with your actual form endpoint (e.g. Formspree, Resend, or a Next.js API route)
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-green-500" />
        </div>
        <h3 className="text-xl font-bold text-brand-dark mb-2">Message Sent!</h3>
        <p className="text-brand-mid max-w-sm leading-relaxed">
          Thanks for getting in touch. We&apos;ll review your enquiry and get back to you as soon as possible.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 border border-brand-border rounded-lg text-brand-dark text-sm focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all placeholder:text-gray-400 bg-white";
  const labelClass = "block text-xs font-bold uppercase tracking-wider text-brand-mid mb-1.5";
  const whatsappHref = buildWhatsAppHref(
    `Hi Chop Tree London, I'd like a quote. Name: ${formData.name || "N/A"}. Service: ${formData.service || "Not sure yet"}. Message: ${formData.message || "I will share details here."}`
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="07xxx xxxxxx"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="service" className={labelClass}>Service Required</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the work you need — location, tree size, access, or anything else that's helpful..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {formState === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-600">
          Something went wrong. Please try again or call us directly on 07826 151347.
        </div>
      )}

      <button
        type="submit"
        disabled={formState === "submitting"}
        className="btn-primary w-full justify-center py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={18} />
            Send Message
          </>
        )}
      </button>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white font-semibold py-4 text-base hover:brightness-95 transition-all"
      >
        <MessageCircle size={18} />
        Get Quote on WhatsApp
      </a>
      <p className="text-xs text-center text-brand-mid">
        We typically respond within 2–4 hours during business hours. For fastest quotes, send photos on WhatsApp.
      </p>
    </form>
  );
}
