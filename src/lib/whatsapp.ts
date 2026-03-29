const DEFAULT_WHATSAPP_NUMBER = "447398978210";

export function getWhatsAppNumber(): string {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER;
  const digits = raw.replace(/\D/g, "");

  if (digits.startsWith("44")) return digits;
  if (digits.startsWith("0")) return `44${digits.slice(1)}`;
  return digits;
}

export function buildWhatsAppHref(message: string): string {
  const number = getWhatsAppNumber();
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
