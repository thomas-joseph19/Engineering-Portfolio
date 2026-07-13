import React from "react";
import { profileData } from "../data/profile";

export default function ContactPage() {
  return (
    <div className="animate-page-enter max-w-xl mx-auto text-center flex flex-col gap-8">
      {/* Contact Section Intro */}
      <div className="border-b border-brand-border pb-6">
        <h2 className="text-xl font-bold font-mono text-brand-text-primary uppercase tracking-widest mb-2">
          // CONNECT_TERMINAL
        </h2>
        <p className="text-brand-text-muted text-xs font-mono">
          REF: [DIRECT_CHANNELS_TO_THOMAS_JOSEPH]
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="bg-brand-bg-card border border-brand-border rounded-none p-8 flex flex-col gap-6 relative overflow-hidden">
        {/* Subtle accent border */}
        <div className="absolute top-0 inset-x-0 h-1 bg-brand-accent-primary" />

        {/* Email Contact Method */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-primary font-mono mb-2">
            // Primary Channel
          </span>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="text-sm md:text-base font-bold font-mono text-brand-text-primary hover:text-brand-accent-primary transition-colors flex items-center gap-2.5 break-all px-5 py-3 bg-brand-bg-dark border border-brand-border rounded-none"
          >
            <svg
              className="w-4 h-4 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {profileData.contact.email}
          </a>
        </div>

        {/* Static Address & University Details */}
        <div className="border-t border-brand-border pt-6 flex flex-col gap-1 text-xs font-mono text-brand-text-secondary uppercase">
          <p className="font-bold text-brand-text-primary">{profileData.university}</p>
          <p className="text-brand-text-muted">Mechanical Engineering Department</p>
          <p className="text-brand-text-muted">Orlando, Florida</p>
        </div>

        {/* Social Connection Channels */}
        <div className="border-t border-brand-border pt-6">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-primary block mb-4 font-mono">
            // Professional Networks
          </span>
          
          <div className="flex justify-center">
            {/* LinkedIn */}
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-bg-dark hover:bg-brand-accent-primary/10 border border-brand-border rounded-none text-xs font-bold font-mono text-brand-text-secondary hover:text-brand-text-primary transition-all duration-200"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              linkedin_profile
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
