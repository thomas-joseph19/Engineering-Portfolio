import React from "react";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="animate-page-enter flex flex-col items-center justify-center min-h-[450px] text-center px-6 font-mono">
      <div className="border border-brand-border p-8 bg-brand-bg-card relative mb-6">
        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-brand-accent-primary" />
        <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-brand-accent-primary" />
        <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-brand-accent-primary" />
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-brand-accent-primary" />
        
        <h1 className="text-6xl md:text-8xl font-bold text-brand-accent-primary tracking-widest">
          404_ERR
        </h1>
      </div>
      
      <h2 className="text-md font-bold text-brand-text-primary uppercase tracking-wider mb-3">
        // SYSTEM_PATH_NOT_RESOLVED
      </h2>
      <p className="text-brand-text-muted text-xs max-w-sm mx-auto mb-8 leading-relaxed font-sans">
        The link you followed may be broken, or the page does not exist in this repository. Let's get you back on track.
      </p>

      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-none transition-all duration-200"
      >
        <svg
          className="w-4 h-4 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        return_to_base
      </Link>
    </div>
  );
}
