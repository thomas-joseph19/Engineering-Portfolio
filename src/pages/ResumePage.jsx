import React from "react";
import { profileData } from "../data/profile";

export default function ResumePage() {
  return (
    <div className="animate-page-enter max-w-4xl mx-auto flex flex-col gap-8">
      {/* Resume Header & Download Call-to-Action */}
      <div className="bg-brand-bg-card border border-brand-border rounded-none p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent-primary" />
        
        <div>
          <h2 className="text-xl font-bold font-mono text-brand-text-primary tracking-widest uppercase mb-1">
            CURRICULUM_VITAE
          </h2>
          <p className="text-brand-text-muted text-xs font-mono">
            FILE_REF: [UPDATED_{profileData.resume.lastUpdated.toUpperCase().replace(" ", "_")}]
          </p>
        </div>

        <a
          href={profileData.resume.pathPlaceholder}
          download="Thomas_Joseph_Resume.pdf"
          className="inline-flex items-center gap-2 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-6 py-3 rounded-none transition-all duration-200"
        >
          <svg
            className="w-4 h-4 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
          </svg>
          DOWNLOAD_PDF_FILE
        </a>
      </div>

      {/* Main Resume Content Card */}
      <div className="bg-brand-bg-card border border-brand-border rounded-none p-6 md:p-8 flex flex-col gap-8">
        
        {/* Section: Education */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent-primary mb-4 border-b border-brand-border pb-2 font-mono">
            [01] EDUCATION
          </h3>
          {profileData.education.map((edu, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline">
                <h4 className="text-base font-bold font-mono text-brand-text-primary uppercase">
                  {edu.degree}
                </h4>
                <span className="text-xs font-bold font-mono text-brand-accent-primary tracking-wider whitespace-nowrap">
                  {edu.date}
                </span>
              </div>
              <p className="text-xs font-mono text-brand-text-muted">
                {edu.school.toUpperCase()} &bull; GPA: <span className="text-brand-accent-secondary font-bold">{edu.gpa}</span>
              </p>
              <p className="text-xs md:text-sm text-brand-text-secondary leading-relaxed mt-2 bg-brand-bg-dark/40 p-4 rounded-none border border-brand-border font-sans">
                {edu.details}
              </p>
            </div>
          ))}
        </section>

        {/* Section: Experience */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent-primary mb-6 border-b border-brand-border pb-2 font-mono">
            [02] PROFESSIONAL_EXPERIENCE
          </h3>
          <div className="flex flex-col gap-8">
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline">
                  <h4 className="text-base font-bold font-mono text-brand-text-primary uppercase">
                    {exp.role}
                  </h4>
                  <span className="text-xs font-bold font-mono text-brand-accent-primary tracking-wider whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <p className="text-xs font-mono text-brand-text-muted">
                  {exp.company.toUpperCase()} &bull; {exp.location.toUpperCase()}
                </p>
                <ul className="list-disc pl-5 mt-2 text-xs md:text-sm text-brand-text-secondary space-y-2 leading-relaxed">
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
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent-primary mb-6 border-b border-brand-border pb-2 font-mono">
            [03] PROJECTS_LOG
          </h3>
          <div className="flex flex-col gap-8">
            {profileData.resumeProjects.map((proj, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <div className="flex flex-col md:flex-row md:justify-between items-start md:items-baseline">
                  <h4 className="text-base font-bold font-mono text-brand-text-primary uppercase">
                    {proj.title}
                  </h4>
                  <span className="text-xs font-bold font-mono text-brand-accent-secondary uppercase tracking-widest bg-brand-bg-dark/50 border border-brand-border px-2.5 py-1">
                    {proj.organization}
                  </span>
                </div>
                <ul className="list-disc pl-5 mt-1 text-xs md:text-sm text-brand-text-secondary space-y-2 leading-relaxed">
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
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent-primary mb-4 border-b border-brand-border pb-2 font-mono">
            [04] TECHNICAL_SKILLS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            <div className="bg-brand-bg-dark/40 p-4 rounded-none border border-brand-border">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-brand-text-primary mb-3">
                // Languages
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {profileData.skills.programming.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-brand-bg-card px-2.5 py-1.5 border border-brand-border text-brand-text-secondary font-mono">
                    {skill.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-bg-dark/40 p-4 rounded-none border border-brand-border">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-brand-text-primary mb-3">
                // Engineering & Methods
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {profileData.skills.engineering.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-brand-bg-card px-2.5 py-1.5 border border-brand-border text-brand-text-secondary font-mono">
                    {skill.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-brand-bg-dark/40 p-4 rounded-none border border-brand-border">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-brand-text-primary mb-3">
                // Software Tools
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {profileData.skills.tools.map((skill, sIdx) => (
                  <span key={sIdx} className="text-xs bg-brand-bg-card px-2.5 py-1.5 border border-brand-border text-brand-text-secondary font-mono">
                    {skill.toLowerCase()}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Certifications */}
        <section>
          <h3 className="text-sm font-bold uppercase tracking-widest text-brand-accent-primary mb-4 border-b border-brand-border pb-2 font-mono">
            [05] CERTIFICATIONS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
            {profileData.certifications.map((cert, idx) => (
              <div key={idx} className="flex justify-between items-center bg-brand-bg-dark/40 px-4 py-3 border border-brand-border text-xs md:text-sm font-mono">
                <span className="font-bold text-brand-text-primary uppercase text-xs">{cert.name}</span>
                <span className="text-brand-accent-secondary font-bold text-xs whitespace-nowrap ml-3">[{cert.date.toUpperCase().replace("GRANTED ", "")}]</span>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
