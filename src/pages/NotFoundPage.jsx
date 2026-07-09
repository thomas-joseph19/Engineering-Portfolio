import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="animate-page-enter flex flex-col items-center justify-center min-h-[450px] text-center px-6">
      <div className="relative mb-6">
        <h1 className="text-8xl md:text-9xl font-extrabold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary tracking-tighter">
          404
        </h1>
        {/* Decorative backdrop glow */}
        <div className="absolute inset-0 bg-brand-accent-primary/10 blur-2xl -z-10 rounded-full" />
      </div>
      
      <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-3">
        Page Not Found
      </h2>
      <p className="text-brand-text-muted text-sm max-w-sm mx-auto mb-8 leading-relaxed">
        The link you followed may be broken, or the page may have been removed. Let's get you back on track!
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
      >
        <svg
          className="w-5 h-5 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        Back to About Me
      </Link>
    </div>
  );
}
