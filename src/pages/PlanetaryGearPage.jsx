import React from "react";
import { Link } from "react-router-dom";

export default function PlanetaryGearPage() {
  // Final Assembly (showcased at the top of the page)
  const finalAssembly = {
    title: "Final Assembly",
    subtitle: "SolidWorks Kinetic Simulation & Mate System",
    desc: "The final planetary gear system assembly is created by aligning part components using strict mechanical constraints. Concentric mates position the sun gear, planet gears, and rotary carrier, while coincident mates align the planar faces. Finally, physical gear mates are configured between the sun-planet and planet-ring meshes to model true kinematic motion.",
    img: "assets/images/projects/final-product-PLACEHOLDER.jpg",
    cadPath: "assets/documents/projects/final-assembly-PLACEHOLDER.sldasm",
    cadLabel: "Download Assembly File (.sldasm)"
  };

  // Individual parts (shown sequentially as the user scrolls)
  const parts = [
    {
      title: "1. Sun Gear",
      subtitle: "The Central Power Input",
      desc: "Designed using parametric equations to link the diametral pitch and number of teeth directly to design variables.",
      img: "assets/images/projects/sun-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/sun-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Sun Gear Part (.sldprt)"
    },
    {
      title: "2. Planet Gears",
      subtitle: "The Translating Torque Nodes",
      desc: "Three planetary gears are distributed at equal 120° intervals around the central axis. These gears rotate on carrier pins while meshing simultaneously with the stationary outer ring gear and the rotating central sun gear.",
      img: "assets/images/projects/planet-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/planet-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Planet Gear Part (.sldprt)"
    },
    {
      title: "3. Ring Gear",
      subtitle: "The Stationary Internal Ring",
      desc: "Features internal teeth profile cutting. Configured as the rigid external boundary of the gearbox.",
      img: "assets/images/projects/ring-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/ring-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Ring Gear Part (.sldprt)"
    },
    {
      title: "4. Rotary Carrier",
      subtitle: "The Combined Torque Output Linkage",
      desc: "Constructed as a rigid plate holding three offset planet pins.",
      img: "assets/images/projects/rotary-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/rotary-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Carrier Part (.sldprt)"
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
          // PLANETARY_GEAR_SYSTEM
        </h2>
        <p className="text-brand-text-muted text-xs font-mono mt-1">
          REF: [CAD_MODELING_&_KINEMATIC_MATES]
        </p>
      </div>

      {/* SECTION 1: HERO FINAL ASSEMBLY (Visible first) */}
      <section className="bg-brand-bg-card border border-brand-border rounded-none p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-7 aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[320px] bg-brand-bg-dark border border-brand-border p-1.5 overflow-hidden relative flex items-center justify-center">
            {/* Corner cropmarks */}
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-brand-accent-primary" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-brand-accent-primary" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-brand-accent-primary" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-brand-accent-primary" />
            
            <img
              src={finalAssembly.img}
              alt={finalAssembly.title}
              className="w-full h-full object-cover filter grayscale contrast-110"
            />
          </div>

          {/* Description & Downloads */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-primary font-mono">
                // SYSTEM_OVERVIEW
              </span>
              <h3 className="text-md font-bold font-mono text-brand-text-primary uppercase tracking-wider mt-1 mb-3">
                [01] {finalAssembly.title}
              </h3>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-4">
                {finalAssembly.desc}
              </p>
            </div>

            {/* Download Link */}
            <div>
              <a
                href={finalAssembly.cadPath}
                download
                className="inline-flex items-center gap-2 bg-brand-accent-primary hover:bg-brand-accent-primary/80 text-brand-bg-dark font-mono font-bold text-xs uppercase tracking-widest px-5 py-2.5 rounded-none transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
                </svg>
                download_assembly_file
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Separator / Header for Parts */}
      <div className="border-t border-brand-border pt-8">
        <h3 className="text-md font-bold text-brand-text-primary font-mono uppercase tracking-widest">
          // SYSTEM_COMPONENTS_BREAKDOWN
        </h3>
        <p className="text-brand-text-muted text-xs font-mono mt-1">
          Explore the individual build steps and CAD part configurations below.
        </p>
      </div>

      {/* SECTION 2: SCROLLABLE PARTS LIST (Alternating layout, side-by-side) */}
      <div className="flex flex-col gap-16">
        {parts.map((part, idx) => {
          // Alternate image left/right on medium screens
          const isImageLeft = idx % 2 === 0;

          return (
            <section
              key={idx}
              className={`flex flex-col md:items-center gap-8 md:gap-12 py-4 ${
                isImageLeft ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Part Image */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-brand-bg-dark border border-brand-border p-1.5 overflow-hidden relative flex items-center justify-center">
                {/* Corner cropmarks */}
                <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent-primary" />
                <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent-primary" />
                <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent-primary" />
                <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent-primary" />
                
                <img
                  src={part.img}
                  alt={part.title}
                  className="w-full h-full object-cover filter grayscale contrast-110"
                />
              </div>

              {/* Part Details */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div>
                  <span className="text-xs font-bold text-brand-accent-primary uppercase tracking-widest font-mono block mb-1">
                    // {part.subtitle.toUpperCase()}
                  </span>
                  <h4 className="text-md font-bold text-brand-text-primary font-mono uppercase tracking-wider">
                    [PART_0{idx+1}] {part.title}
                  </h4>
                  <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mt-3 font-sans">
                    {part.desc}
                  </p>
                </div>

                {/* CAD File Download */}
                <div>
                  <a
                    href={part.cadPath}
                    download
                    className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-brand-accent-primary hover:text-brand-accent-primary/80 transition-colors uppercase tracking-wider"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
                    </svg>
                    download_source_file
                  </a>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
