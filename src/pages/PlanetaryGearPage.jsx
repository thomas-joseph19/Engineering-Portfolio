import React from "react";
import { Link } from "react-router-dom";

export default function PlanetaryGearPage() {
  const steps = [
    {
      title: "1. Sun Gear",
      desc: "Designed the central driver of the assembly. Used SolidWorks equations to define standard diametral pitch, pressure angle, and teeth counts, then extruded the profile with keyway configurations for motor shaft coupling.",
      // PLACEHOLDER: sun-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "/assets/images/projects/sun-gear-PLACEHOLDER.jpg",
      cadPath: "/assets/documents/projects/sun-gear-PLACEHOLDER.sldprt"
    },
    {
      title: "2. Planet Gears",
      desc: "Modeled three matching planet gears designed to mesh perfectly with the sun gear. Established teeth specifications to support torque transmission and reduce backlash during orbit.",
      // PLACEHOLDER: planet-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "/assets/images/projects/planet-gear-PLACEHOLDER.jpg",
      cadPath: "/assets/documents/projects/planet-gear-PLACEHOLDER.sldprt"
    },
    {
      title: "3. Ring Gear",
      desc: "Created the outer ring gear featuring internal teeth. Added mounting holes for chassis integration and configured clearance pockets for fluid lubrication.",
      // PLACEHOLDER: ring-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "/assets/images/projects/ring-gear-PLACEHOLDER.jpg",
      cadPath: "/assets/documents/projects/ring-gear-PLACEHOLDER.sldprt"
    },
    {
      title: "4. Rotary Carrier",
      desc: "Engineered the carrier plate containing precise spacing pins for the planet gears. Designed to maintain alignment and balance during high-velocity rotation.",
      // PLACEHOLDER: rotary-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "/assets/images/projects/rotary-gear-PLACEHOLDER.jpg",
      cadPath: "/assets/documents/projects/rotary-gear-PLACEHOLDER.sldprt"
    },
    {
      title: "5. Final Assembly",
      desc: "Completed assembly modeling by establishing concentric mating linkages and adding gear-meshing relationships. Verified kinetic motions using SolidWorks Motion Analysis.",
      // PLACEHOLDER: final-product-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "/assets/images/projects/final-product-PLACEHOLDER.jpg",
      cadPath: "/assets/documents/projects/final-assembly-PLACEHOLDER.sldasm"
    }
  ];

  return (
    <div className="animate-page-enter max-w-5xl mx-auto flex flex-col gap-8">
      {/* Header and Back Link */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-primary hover:text-brand-accent-secondary mb-2 transition-colors"
          >
            <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 24 24">
              <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
            </svg>
            Back to Projects
          </Link>
          <h2 className="text-3xl font-bold font-heading text-brand-text-primary">
            Planetary Gear Design
          </h2>
          <p className="text-brand-text-muted text-sm mt-1">
            SolidWorks CAD Modeling & Kinematics Study
          </p>
        </div>

        {/* PLACEHOLDER: final-assembly-PLACEHOLDER.sldasm must exist in public/assets/documents/projects/ */}
        <a
          href="/assets/documents/projects/final-assembly-PLACEHOLDER.sldasm"
          download="Planetary_Gear_Assembly.sldasm"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
          </svg>
          Download Assembly File (.sldasm)
        </a>
      </div>

      {/* Main Grid for Parts/Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-brand-bg-card border border-brand-bg-card/50 rounded-2xl overflow-hidden shadow-md flex flex-col hover:border-brand-accent-primary/30 transition-all duration-300"
          >
            {/* Image Box */}
            <div className="h-48 bg-brand-bg-dark border-b border-brand-bg-dark relative flex items-center justify-center overflow-hidden">
              {/* PLACEHOLDER COMMENTS PLACE DIRECTLY ABOVE THE RENDERED IMAGE REFERENCES */}
              {/* PLACEHOLDER: step image placeholder path: /public{step.img} */}
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* Details Box */}
            <div className="p-5 flex-grow flex flex-col justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-brand-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* PLACEHOLDER: CAD file path: /public{step.cadPath} */}
              <a
                href={step.cadPath}
                download
                className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-accent-secondary hover:text-brand-accent-primary transition-colors border-t border-brand-bg-dark/50 pt-3"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
                </svg>
                Download CAD File ({step.cadPath.split(".").pop().toUpperCase()})
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
