import React from "react";
import { profileData } from "../data/profile";

export default function ResumePage() {
  return (
    <div className="animate-page-enter max-w-4xl mx-auto flex flex-col gap-8">
      {/* Resume Header & Download Call-to-Action */}
      <div className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 shadow-lg">
        <div>
          <h2 className="text-2xl font-bold font-heading text-brand-text-primary mb-1">
            Curriculum Vitae
          </h2>
          <p className="text-brand-text-muted text-sm">
            Last Updated: {profileData.resume.lastUpdated}
          </p>
        </div>

        {/* RESUME DOWNLOAD LINK WITH INLINE COMMENT ABOVE */}
        {/* PLACEHOLDER: resume-PLACEHOLDER.pdf must exist in public/assets/documents/ */}
        <a
          href={profileData.resume.pathPlaceholder}
          download="Thomas_Joseph_Resume.pdf"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-6 py-3 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
        >
          <svg
            className="w-5 h-5 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
          </svg>
          Download PDF Resume
        </a>
      </div>

      {/* Main Resume Content Card */}
      <div className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl p-8 shadow-lg flex flex-col gap-8">
        
        {/* Section: Education */}
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider text-brand-accent-primary mb-4 border-b border-brand-bg-dark pb-2">
            Education
          </h3>
          {profileData.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline">
                <h4 className="text-base font-bold text-brand-text-primary">
                  {edu.degree}
                </h4>
                <span className="text-sm font-semibold text-brand-accent-secondary">
                  {edu.date}
                </span>
              </div>
              <p className="text-sm text-brand-text-muted">
                {edu.school} &bull; GPA: <span className="text-brand-text-primary">{edu.gpa}</span>
              </p>
              <p className="text-sm text-brand-text-secondary leading-relaxed mt-2 bg-brand-bg-dark/50 p-4 rounded-xl border border-brand-bg-card/30">
                {edu.details}
              </p>
            </div>
          ))}
        </section>

        {/* Section: Experience */}
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider text-brand-accent-primary mb-6 border-b border-brand-bg-dark pb-2">
            Professional Experience
          </h3>
          <div className="flex flex-col gap-6">
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline">
                  <h4 className="text-base font-bold text-brand-text-primary">
                    {exp.role}
                  </h4>
                  <span className="text-sm font-semibold text-brand-accent-secondary">
                    {exp.date}
                  </span>
                </div>
                <p className="text-sm text-brand-text-muted">
                  {exp.company} &bull; {exp.location}
                </p>
                <ul className="list-disc pl-5 mt-2 text-sm text-brand-text-secondary space-y-2 leading-relaxed">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Projects */}
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider text-brand-accent-primary mb-6 border-b border-brand-bg-dark pb-2">
            Engineering & Software Projects
          </h3>
          <div className="flex flex-col gap-6">
            {profileData.resumeProjects.map((proj, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline">
                  <h4 className="text-base font-bold text-brand-text-primary">
                    {proj.title}
                  </h4>
                  <span className="text-xs font-semibold text-brand-accent-secondary uppercase tracking-wider bg-brand-bg-dark px-2.5 py-1 rounded">
                    {proj.organization}
                  </span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-sm text-brand-text-secondary space-y-2 leading-relaxed">
                  {proj.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Technical & Engineering Skills */}
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider text-brand-accent-primary mb-4 border-b border-brand-bg-dark pb-2">
            Technical & Engineering Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-brand-bg-dark/40 p-4 rounded-xl border border-brand-bg-card/30">
              <h4 className="text-sm font-bold text-brand-text-primary mb-2">Programming Languages</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {profileData.skills.programming.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-brand-bg-card px-2.5 py-1 rounded border border-brand-bg-card/60 text-brand-text-secondary font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-bg-dark/40 p-4 rounded-xl border border-brand-bg-card/30">
              <h4 className="text-sm font-bold text-brand-text-primary mb-2">Engineering & Methods</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {profileData.skills.engineering.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-brand-bg-card px-2.5 py-1 rounded border border-brand-bg-card/60 text-brand-text-secondary font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-brand-bg-dark/40 p-4 rounded-xl border border-brand-bg-card/30">
              <h4 className="text-sm font-bold text-brand-text-primary mb-2">Software Tools</h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {profileData.skills.tools.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-brand-bg-card px-2.5 py-1 rounded border border-brand-bg-card/60 text-brand-text-secondary font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Certifications */}
        <section>
          <h3 className="text-lg font-bold uppercase tracking-wider text-brand-accent-primary mb-4 border-b border-brand-bg-dark pb-2">
            Certifications & Industry Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {profileData.certifications.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-center bg-brand-bg-dark/40 px-4 py-3 rounded-xl border border-brand-bg-card/30 text-xs md:text-sm">
                <span className="font-semibold text-brand-text-primary">{cert.name}</span>
                <span className="text-brand-accent-secondary font-medium whitespace-nowrap ml-3">{cert.date}</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
