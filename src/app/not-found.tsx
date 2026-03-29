import Link from "next/link";
import { TreePine, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 pt-20">
      <div className="w-16 h-16 rounded-2xl bg-brand-orange-pale flex items-center justify-center mb-6">
        <TreePine size={32} className="text-brand-orange" />
      </div>
      <h1 className="text-4xl font-extrabold text-brand-dark mb-3">404</h1>
      <h2 className="text-xl font-bold text-brand-dark mb-3">Page Not Found</h2>
      <p className="text-brand-mid text-center max-w-sm mb-8 leading-relaxed">
        Looks like this branch doesn&apos;t exist. Let&apos;s get you back on solid ground.
      </p>
      <Link href="/" className="btn-primary">
        <Home size={16} />
        Back to Home
      </Link>
    </div>
  );
}
