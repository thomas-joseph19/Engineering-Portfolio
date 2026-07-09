import React from "react";
import { profileData } from "../data/profile";

export default function ContactPage() {
  return (
    <div className="animate-page-enter max-w-xl mx-auto text-center flex flex-col gap-8">
      {/* Contact Section Intro */}
      <div>
        <h2 className="text-3xl font-bold font-heading text-brand-text-primary mb-3">
          Get in Touch
        </h2>
        <p className="text-brand-text-secondary leading-relaxed max-w-md mx-auto">
          Whether you want to discuss potential internship opportunities, collaborate on a project, or just say hello, feel free to reach out!
        </p>
      </div>

      {/* Main Contact Card */}
      <div className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl p-8 shadow-lg flex flex-col gap-6 relative overflow-hidden">
        {/* Subtle accent border */}
        <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary" />

        {/* Email Contact Method */}
        <div className="flex flex-col items-center gap-2 mt-2">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary mb-1">
            Primary Channel
          </span>
          <a
            href={`mailto:${profileData.contact.email}`}
            className="text-lg md:text-xl font-bold text-brand-text-primary hover:text-brand-accent-primary transition-colors flex items-center gap-2.5 break-all px-4 py-2 bg-brand-bg-dark border border-brand-bg-card rounded-xl"
          >
            <svg
              className="w-5 h-5 fill-current flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            {profileData.contact.email}
          </a>
        </div>

        {/* Static Address & University Details */}
        <div className="border-t border-brand-bg-dark pt-6 flex flex-col gap-1 text-sm text-brand-text-secondary">
          <p className="font-semibold text-brand-text-primary">{profileData.university}</p>
          <p className="text-brand-text-muted">Mechanical Engineering Department</p>
          <p className="text-brand-text-muted">Orlando, Florida</p>
        </div>

        {/* Social Connection Channels */}
        <div className="border-t border-brand-bg-dark pt-6">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-secondary block mb-4">
            Professional Networks
          </span>
          
          <div className="flex justify-center gap-4">
            {/* LinkedIn */}
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-bg-dark hover:bg-brand-accent-secondary/10 border border-brand-bg-card rounded-lg text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn Profile
            </a>

            {/* GitHub */}
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-brand-bg-dark hover:bg-brand-accent-primary/10 border border-brand-bg-card rounded-lg text-sm font-semibold text-brand-text-secondary hover:text-brand-text-primary transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub Profile
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
