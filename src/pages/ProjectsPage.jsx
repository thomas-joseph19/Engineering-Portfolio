import React from "react";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  return (
    <div className="animate-page-enter flex flex-col gap-8">
      {/* Page Header */}
      <div>
        <h2 className="text-3xl font-bold font-heading text-brand-text-primary mb-2">
          Projects
        </h2>
        <p className="text-brand-text-muted text-sm">
          A showcase of my mechanical engineering designs, simulation analyses, and robotics prototypes.
        </p>
      </div>

      {/* Projects Container Grid */}
      <div className="grid grid-cols-1 gap-8">
        
        {/* Project Card: Planetary Gear (SolidWorks) */}
        <div className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl overflow-hidden shadow-lg hover:border-brand-accent-primary/25 transition-all duration-300 grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-bg-dark relative flex items-center justify-center overflow-hidden">
            {/* PLACEHOLDER: final-product-PLACEHOLDER.jpg must exist in public/assets/images/projects/ */}
            <img
              src="assets/images/projects/final-product-PLACEHOLDER.jpg"
              alt="Planetary Gear Assembly"
              className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary mb-3">
                Planetary Gear Design
              </h3>
              
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-4">
                A high-precision planetary gear system designed in SolidWorks. The project demonstrates advanced CAD techniques, complex constraint mappings, and rigid body kinematic simulations to evaluate load transfer properties.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-secondary">
                  Design Skills Showcase
                </span>
                <div className="flex flex-wrap gap-2">
                  {["SOLIDWORKS CAD", "Kinematic Analysis", "Mechanical Linkages", "Parametric Equations"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-bg-card rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/planetary-gear"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                View Detailed Steps
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Project Card: Robotic Arm (SolidWorks) */}
        <div className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl overflow-hidden shadow-lg hover:border-brand-accent-primary/25 transition-all duration-300 grid grid-cols-1 md:grid-cols-3">
          
          {/* Project Image Container */}
          <div className="md:col-span-1 h-56 md:h-auto bg-brand-bg-dark border-r border-brand-bg-dark relative flex items-center justify-center overflow-hidden">
            {/* PLACEHOLDER: robotic-arm-final-PLACEHOLDER.jpg must exist in public/assets/images/projects/ */}
            <img
              src="assets/images/projects/robotic-arm-final-PLACEHOLDER.jpg"
              alt="5-Axis Robotic Arm Assembly"
              className="w-full h-full object-cover opacity-85 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Project Details */}
          <div className="md:col-span-2 p-6 md:p-8 flex flex-col justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary mb-3">
                5-Axis Robotic Arm
              </h3>
              
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-4">
                A multi-axis articulated robotic arm engineered in SolidWorks. The design showcases high-precision servo bracket linkages, structural stress optimization via FEA simulations, and kinematic constraint boundaries.
              </p>

              {/* Showcase Design Skills */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-secondary">
                  Design Skills Showcase
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Robotics CAD", "FEA Stress Analysis", "Kinematic Mates", "Servo Actuation"].map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 bg-brand-bg-dark text-brand-text-secondary border border-brand-bg-card rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Button */}
            <div>
              <Link
                to="/projects/robotic-arm"
                className="inline-flex items-center gap-1.5 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                View Detailed Steps
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
