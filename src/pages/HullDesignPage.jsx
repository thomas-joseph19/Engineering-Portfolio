import React from "react";
import { Link } from "react-router-dom";

export default function HullDesignPage() {
  const sections = [
    {
      title: "01 / Hull Design & Architecture",
      desc: "We evaluated two primary design options: a speedboat hull and a pontoon raft. To maximize buoyancy and minimize water ingress, we selected a plastic pontoon configuration using recycled soda bottles as stabilizers. The core electronics were housed in a 4x4-inch lidded Tupperware container, sealed with concentrated silicone sealant. To optimize hydrodynamics, we evolved the hull from a flat cuboid to a material-efficient triangular prism, lowering mass while integrating the bottles directly beneath the chassis."
    },
    {
      title: "02 / Propulsion & Weight Distribution",
      desc: "We utilized stock drivetrain components (motor, ESC, and servo) to guarantee electrical compatibility. Originally, we planned to mount all electronics at the stern. However, physical mockups revealed severe rear-heavy trim issues. We solved this by relocating the Tupperware to the front-left and installing a front-right counterweight. This achieved level buoyancy, reduced hydrodynamic drag, and isolated the motor/shaft alignment at the rear."
    },
    {
      title: "03 / Closed-Loop Guidance System",
      desc: "To navigate the course autonomously, we implemented a closed-loop control system. Using a TI MSP microcontroller equipped with an onboard gyroscope (secured from the TI Lab), the system actively corrected the rudder in response to water ripples and external boat collisions. We calibrated the rudder limits to prevent aggressive steering oscillations."
    },
    {
      title: "04 / Race Day Results",
      desc: "During the first official heat, our boat performed exceptionally well, successfully navigating to 2 checkpoints. However, a sudden power failure occurred; post-run inspections revealed the battery had completely discharged. After swapping batteries, we conducted a second run in the final minutes of the heat. The project validated our structural balancing, but highlighted the critical need for pre-flight battery state checks."
    }
  ];

  return (
    <div className="animate-page-enter max-w-5xl mx-auto flex flex-col gap-16 pb-12">
      {/* Header and Back Link */}
      <div className="border-b border-brand-border pb-6">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-brand-accent-primary hover:text-brand-accent-primary/80 mb-4 transition-colors"
        >
          &lt;-- RETURN_TO_PROJECTS
        </Link>
        <h2 className="text-xl font-bold font-mono text-brand-text-primary tracking-widest uppercase">
          // HULL_DESIGN_AND_PROPULSION
        </h2>
        <p className="text-brand-text-muted text-xs font-mono mt-1">
          REF: [AUTONOMOUS_PONTOON_VESSEL_S36T01]
        </p>
      </div>

      {/* Showcase Images (CAD vs Final Product) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CAD Model Image */}
        <div className="bg-brand-bg-card border border-brand-border p-4 flex flex-col gap-4">
          <div className="aspect-[4/3] bg-brand-bg-dark border border-brand-border p-1 overflow-hidden relative flex items-center justify-center">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent-primary" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent-primary" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent-primary" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent-primary" />
            <img
              src="assets/images/projects/hull-design/boat-cad-PLACEHOLDER.png"
              alt="3D CAD Design in Onshape"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-mono text-xs text-brand-text-primary uppercase">
            // ONSHAPE_CAD_MODEL
          </div>
        </div>

        {/* Final Product Image */}
        <div className="bg-brand-bg-card border border-brand-border p-4 flex flex-col gap-4">
          <div className="aspect-[4/3] bg-brand-bg-dark border border-brand-border p-1 overflow-hidden relative flex items-center justify-center">
            <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent-primary" />
            <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent-primary" />
            <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent-primary" />
            <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent-primary" />
            <img
              src="assets/images/projects/hull-design/boat-final-PLACEHOLDER.png"
              alt="Final Built Pontoon Boat"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="font-mono text-xs text-brand-text-primary uppercase">
            // PHYSICAL_BUILD_ON_WATER
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <section className="bg-brand-bg-card border border-brand-border p-6 md:p-8">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary font-mono">
              // DESIGN_OVERVIEW
            </span>
            <h3 className="text-md font-bold font-mono text-brand-text-primary uppercase tracking-wider mt-1 mb-4">
              [PROJECT_LOG] AUTONOMOUS HULL & CLOSED-LOOP CONTROL
            </h3>
            <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed font-sans mb-6">
              This project focused on the design, structural optimization, and control integration of an autonomous pontoon vessel. Our primary objectives were to balance buoyancy margins, secure waterproof containment, and establish reliable closed-loop steering corrections to handle external drift.
            </p>
          </div>

          {/* Details breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-brand-border pt-8">
            {sections.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h4 className="text-xs font-bold font-mono text-brand-text-primary uppercase tracking-wider">
                  {section.title}
                </h4>
                <p className="text-brand-text-secondary text-xs leading-relaxed font-sans">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
