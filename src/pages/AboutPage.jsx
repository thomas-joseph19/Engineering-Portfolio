import React from "react";
import { profileData } from "../data/profile";

export default function AboutPage() {
  return (
    <div className="animate-page-enter grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left Sidebar: Profile Details */}
      <aside className="lg:col-span-1 flex flex-col gap-6">
        <div className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
          {/* Subtle top decoration */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary" />
          
          {/* PROFILE IMAGE WITH COMMENTS RIGHT ABOVE IT */}
          {/* PLACEHOLDER: profile-photo-PLACEHOLDER.jpg must exist in public/assets/images/ */}
          <img
            src={profileData.profileImagePlaceholder}
            alt={profileData.name}
            className="w-36 h-36 rounded-full object-cover border-4 border-brand-accent-primary/20 mx-auto mb-4 mt-2 shadow-md hover:border-brand-accent-primary transition-all duration-300"
          />
          
          <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-1">
            {profileData.name}
          </h2>
          <p className="text-brand-accent-primary font-medium text-sm tracking-wide mb-6">
            {profileData.tagline}
          </p>

          <div className="border-t border-brand-bg-dark/50 pt-6 text-left flex flex-col gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent-secondary mb-2">
                Education
              </h4>
              {profileData.education.map((edu, idx) => (
                <div key={idx} className="text-sm">
                  <p className="text-brand-text-primary font-semibold">{edu.degree}</p>
                  <p className="text-brand-text-muted text-xs mt-0.5">{edu.school}</p>
                  <p className="text-brand-accent-primary font-medium text-xs mt-1">{edu.gpa} GPA</p>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-bg-dark/50 pt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-accent-secondary mb-3">
                Interests & Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {profileData.interests.map((interest, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1.5 bg-brand-bg-dark text-brand-text-secondary border border-brand-bg-card rounded-full font-medium hover:border-brand-accent-primary/50 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Main Panel: Biography, Experience, and Goals */}
      <main className="lg:col-span-2 flex flex-col gap-8">
        {/* Biography */}
        <section className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-4 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-accent-primary rounded-full inline-block" />
            Biography
          </h2>
          <p className="text-brand-text-secondary leading-relaxed text-base">
            {profileData.bio}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-brand-accent-primary rounded-full inline-block" />
            Professional Experience
          </h2>
          
          <div className="relative border-l border-brand-bg-dark pl-6 ml-2 flex flex-col gap-8">
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-brand-bg-dark border-2 border-brand-accent-secondary group-hover:border-brand-accent-primary transition-colors duration-300" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                  <h3 className="text-lg font-bold text-brand-text-primary">
                    {exp.role}
                  </h3>
                  <span className="text-xs font-semibold text-brand-accent-primary uppercase tracking-wider bg-brand-bg-dark px-2.5 py-1 rounded">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm font-medium text-brand-text-muted mb-3">
                  {exp.company} &bull; {exp.location}
                </p>
                <ul className="list-disc list-outside pl-4 text-sm text-brand-text-secondary space-y-2">
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
