import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div className="animate-page-enter flex flex-col gap-8">
      {/* Page Header */}
      <div className="border-b border-brand-border pb-6">
        <h2 className="text-xl font-bold font-mono text-brand-text-primary uppercase tracking-widest mb-2">
          // PROJECTS_REPOSITORY
        </h2>
        <p className="text-brand-text-muted text-xs font-mono">
          REF: [MECHANICAL_DESIGNS_&_ROBOTICS_PROTOTYPES]
        </p>
      </div>

      {/* Projects Container Grid */}
      <div className="grid grid-cols-1 gap-8">
        
        {/* Project Card: Planetary Gear (SolidWorks) */}
        <div className="bg-brand-bg-card border border-brand-border rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-border relative flex items-center justify-center overflow-hidden p-2">
            <img
              src="assets/images/projects/planetary-gear/final-product-PLACEHOLDER.jpg"
              alt="Planetary Gear Assembly"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-md font-bold font-mono text-brand-text-primary mb-3 uppercase tracking-wider">
                [PROJECT_01] Planetary Gear Design
              </h3>
              
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-6 font-sans">
                High precision planetary gear system designed in SolidWorks.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                  // Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SOLIDWORKS CAD", "Mechanical Linkages", "Parametric Equations"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-border font-mono"
                    >
                      {skill.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/planetary-gear"
                className="inline-flex items-center gap-1.5 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none transition-all duration-200"
              >
                view_detailed_steps
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Card: Robotic Arm (SolidWorks) */}
        <div className="bg-brand-bg-card border border-brand-border rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-border relative flex items-center justify-center overflow-hidden p-2">
            <img
              src="assets/images/projects/robotic-arm/robotic-arm-final-PLACEHOLDER.jpg"
              alt="Robotic Arm Assembly"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-md font-bold font-mono text-brand-text-primary mb-3 uppercase tracking-wider">
                [PROJECT_02] Robotic Arm
              </h3>
              
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-6 font-sans">
                A multi-axis articulated robotic arm engineered in SolidWorks.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                  // Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Robotics CAD", "Kinematic Mates"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-border font-mono"
                    >
                      {skill.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/robotic-arm"
                className="inline-flex items-center gap-1.5 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none transition-all duration-200"
              >
                view_detailed_steps
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Card: L1 Rocket */}
        <div className="bg-brand-bg-card border border-brand-border rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-border relative flex items-center justify-center overflow-hidden p-2">
            <img
              src="assets/images/projects/l1-rocket/l1-rocket-final-PLACEHOLDER.jpg"
              alt="L1 HPR Certification Rocket"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-md font-bold font-mono text-brand-text-primary mb-3 uppercase tracking-wider">
                [PROJECT_03] L1 Rocket Build
              </h3>
              
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-6 font-sans">
                A high power certification rocket constructed and flown with KXR UCF.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                  // Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {["High Power Rocketry", "Aerospace Systems", "Flight Operations"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-border font-mono"
                    >
                      {skill.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/l1-rocket"
                className="inline-flex items-center gap-1.5 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none transition-all duration-200"
              >
                view_detailed_steps
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Card: Hull Design & Propulsion */}
        <div className="bg-brand-bg-card border border-brand-border rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-border relative flex items-center justify-center overflow-hidden p-2">
            <img
              src="assets/images/projects/hull-design/boat-final-PLACEHOLDER.png"
              alt="Autonomous Pontoon Boat"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-md font-bold font-mono text-brand-text-primary mb-3 uppercase tracking-wider">
                [PROJECT_04] Hull Design & Propulsion
              </h3>
              
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-6 font-sans">
                An autonomous pontoon boat design utilizing closed-loop feedback controls and optimized hulls.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                  // Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Hull Design", "Feedback Control", "MSP Microcontroller"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-border font-mono"
                    >
                      {skill.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/hull-design"
                className="inline-flex items-center gap-1.5 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none transition-all duration-200"
              >
                view_detailed_steps
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Card: Rocket Engine Test Stand Design & FEA */}
        <div className="bg-brand-bg-card border border-brand-border rounded-none overflow-hidden grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-border relative flex items-center justify-center overflow-hidden p-2">
            <img
              src="assets/images/projects/test-stand/test-stand-final-assembly.png"
              alt="Rocket Engine Test Stand Final Assembly"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-md font-bold font-mono text-brand-text-primary mb-3 uppercase tracking-wider">
                [PROJECT_05] 15 kN Rocket Engine Test Stand
              </h3>
              
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-6 font-sans">
                Conceptual design and iterative structural finite element analysis (FEA) of a 15 kN rocket engine test stand under a 20 kN conservative design load.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2 font-mono">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                  // Specifications
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SolidWorks FEA", "Weldments", "Structural Simulation", "Static Analysis"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-border font-mono"
                    >
                      {skill.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/test-stand"
                className="inline-flex items-center gap-1.5 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none transition-all duration-200"
              >
                view_detailed_steps
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

