import React from "react";
import { profileData } from "../data/profile";

export default function AboutPage() {
  return (
    <div className="animate-page-enter grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Sidebar: Profile Details */}
      <aside className="lg:col-span-1 flex flex-col gap-6">
        <div className="bg-brand-bg-card border border-brand-border rounded-none p-6 text-center relative overflow-hidden">
          {/* Subtle top decoration - Safety Orange Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-brand-accent-primary" />
          
          {/* PROFILE IMAGE - Rectangular technical frame */}
          <div className="w-40 h-40 border border-brand-border p-1.5 mx-auto mb-5 mt-4 relative bg-brand-bg-dark">
            {/* Corner cropmarks */}
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent-primary" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent-primary" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent-primary" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent-primary" />
            
            <img
              src={profileData.profileImagePlaceholder}
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-xl font-bold font-mono text-brand-text-primary tracking-widest uppercase mb-1">
            {profileData.name}
          </h2>
          <p className="text-brand-accent-primary font-mono text-xs tracking-wider mb-6">
            // {profileData.tagline.toUpperCase()}
          </p>

          <div className="border-t border-brand-border pt-6 text-left flex flex-col gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary font-mono mb-3">
                [01] EDUCATION_DATA
              </h4>
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="text-xs font-mono flex flex-col gap-1">
                  <p className="text-brand-text-primary font-bold">{edu.degree.toUpperCase()}</p>
                  <p className="text-brand-text-muted">{edu.school.toUpperCase()}</p>
                  <p className="text-brand-accent-secondary font-bold">GPA: {edu.gpa}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-border pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary font-mono mb-3">
                [02] INTERACTIVE_FIELDS
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-border font-mono rounded-none hover:border-brand-accent-primary/50 transition-colors"
                  >
                    {interest.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Main Panel: Biography, Experience */}
      <main className="lg:col-span-2 flex flex-col gap-8">
        {/* Biography */}
        <section className="bg-brand-bg-card border border-brand-border rounded-none p-6 md:p-8">
          <h2 className="text-lg font-bold font-mono text-brand-text-primary mb-4 flex items-center gap-3">
            <span className="text-brand-accent-primary">//</span> BIOGRAPHY
          </h2>
          <p className="text-brand-text-secondary leading-relaxed text-sm md:text-base">
            {profileData.bio}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="bg-brand-bg-card border border-brand-border rounded-none p-6 md:p-8">
          <h2 className="text-lg font-bold font-mono text-brand-text-primary mb-6 flex items-center gap-3">
            <span className="text-brand-accent-primary">//</span> EXPERIENCE_LOG
          </h2>
          
          <div className="relative border-l border-brand-border pl-6 ml-2 flex flex-col gap-8">
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 bg-brand-bg-dark border border-brand-accent-primary transition-colors duration-300" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-md font-bold font-mono text-brand-text-primary">
                    {exp.role.toUpperCase()}
                  </h3>
                  <span className="text-xs font-bold font-mono text-brand-accent-primary tracking-wider">
                    {exp.date}
                  </span>
                </div>
                <p className="text-xs font-mono text-brand-text-muted mb-3">
                  {exp.company.toUpperCase()} &bull; {exp.location.toUpperCase()}
                </p>
                <ul className="list-disc list-outside pl-4 text-xs md:text-sm text-brand-text-secondary space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
