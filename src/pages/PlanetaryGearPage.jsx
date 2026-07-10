import React from "react";
import { Link } from "react-router-dom";

export default function PlanetaryGearPage() {
  // Final Assembly (showcased at the top of the page)
  const finalAssembly = {
    title: "Final Assembly",
    subtitle: "SolidWorks Kinetic Simulation & Mate System",
    desc: "The final planetary gear system assembly is created by aligning part components using strict mechanical constraints. Concentric mates position the sun gear, planet gears, and rotary carrier, while coincident mates align the planar faces. Finally, physical gear mates are configured between the sun-planet and planet-ring meshes to model true kinematic motion.",
    note: "SolidWorks Motion Study is used to analyze torque transfer rates and verify that the calculated gear ratio of 4:1 operates without interference or teeth collision under loading.",
    // PLACEHOLDER: final-product-PLACEHOLDER.jpg must exist in public/assets/images/projects/
    img: "assets/images/projects/final-product-PLACEHOLDER.jpg",
    cadPath: "assets/documents/projects/final-assembly-PLACEHOLDER.sldasm",
    cadLabel: "Download Assembly File (.sldasm)"
  };

  // Individual parts (shown sequentially as the user scrolls)
  const parts = [
    {
      title: "1. Sun Gear",
      subtitle: "The Central Power Input",
      desc: "Designed using parametric equations to link the diametral pitch and number of teeth directly to design variables. Extruded with a central bore and keyway cut to accommodate a high-torque electric motor shaft interface.",
      note: "Standard 20° pressure angle was used to minimize sliding friction and maximize load-carrying capacity across the teeth profiles.",
      // PLACEHOLDER: sun-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/sun-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/sun-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Sun Gear Part (.sldprt)"
    },
    {
      title: "2. Planet Gears",
      subtitle: "The Translating Torque Nodes",
      desc: "Three planetary gears are distributed at equal 120° intervals around the central axis. These gears rotate on carrier pins while meshing simultaneously with the stationary outer ring gear and the rotating central sun gear.",
      note: "Central clearance tolerances were configured on the mounting pins to allow smooth rotational slip while preventing axial wobble.",
      // PLACEHOLDER: planet-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/planet-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/planet-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Planet Gear Part (.sldprt)"
    },
    {
      title: "3. Ring Gear",
      subtitle: "The Stationary Internal Ring",
      desc: "Features internal teeth profile cutting. Configured as the rigid external boundary of the gearbox. Added external indexing mounting holes to secure the assembly housing onto the testing chassis.",
      note: "Draft angles and fillet radii were integrated to optimize the part model for cast machining and injection molding feasibility studies.",
      // PLACEHOLDER: ring-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/ring-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/ring-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Ring Gear Part (.sldprt)"
    },
    {
      title: "4. Rotary Carrier",
      subtitle: "The Combined Torque Output Linkage",
      desc: "Constructed as a rigid plate holding three offset planet pins. Serves to collect the orbital translation of the planet gears and transmit it as a unified, speed-reduced rotational output on the main drive axle.",
      note: "Structural FEA (Finite Element Analysis) simulation was run on the carrier plate to identify stress concentrations around the pin joints.",
      // PLACEHOLDER: rotary-gear-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/rotary-gear-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/rotary-gear-PLACEHOLDER.sldprt",
      cadLabel: "Download Carrier Part (.sldprt)"
    }
  ];

  return (
    <div className="animate-page-enter max-w-5xl mx-auto flex flex-col gap-16 pb-12">
      {/* Header and Back Link */}
      <div>
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent-primary hover:text-brand-accent-secondary mb-3 transition-colors"
        >
          <svg className="w-4 h-4 fill-current rotate-180" viewBox="0 0 24 24">
            <path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z" />
          </svg>
          Back to Projects
        </Link>
        <h2 className="text-4xl font-bold font-heading text-brand-text-primary tracking-tight">
          Planetary Gear Design
        </h2>
        <p className="text-brand-text-muted text-sm mt-1">
          SolidWorks CAD Modeling, Kinematic Mate Simulation, & FEA Studies
        </p>
      </div>

      {/* SECTION 1: HERO FINAL ASSEMBLY (Visible first) */}
      <section className="bg-brand-bg-card border border-brand-bg-card/50 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-7 aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[400px] bg-brand-bg-dark rounded-2xl border border-brand-bg-card overflow-hidden relative flex items-center justify-center">
            {/* PLACEHOLDER: final product image path: /public{finalAssembly.img} */}
            <img
              src={finalAssembly.img}
              alt={finalAssembly.title}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Description & Downloads */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                Overview & Kinematics
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary mt-1 mb-3">
                {finalAssembly.title}
              </h3>
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-4">
                {finalAssembly.desc}
              </p>
            </div>

            {/* Note to the side */}
            <div className="bg-brand-bg-dark/40 border-l-4 border-brand-accent-primary p-4 rounded-r-xl">
              <span className="text-xs font-bold text-brand-text-primary uppercase tracking-wide block mb-1">
                Kinematic Note
              </span>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed">
                {finalAssembly.note}
              </p>
            </div>

            {/* Download Link */}
            <div>
              {/* PLACEHOLDER: assembly file path: /public{finalAssembly.cadPath} */}
              <a
                href={finalAssembly.cadPath}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
                </svg>
                {finalAssembly.cadLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Separator / Header for Parts */}
      <div className="border-t border-brand-bg-card/45 pt-8">
        <h3 className="text-2xl font-bold text-brand-text-primary font-heading">
          Individual System Components
        </h3>
        <p className="text-brand-text-muted text-sm mt-1">
          Scroll down to explore the model build steps and CAD part configurations.
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
              <div className="w-full md:w-1/2 aspect-[4/3] bg-brand-bg-dark border border-brand-bg-card rounded-2xl overflow-hidden relative flex items-center justify-center">
                {/* PLACEHOLDER: part image path: /public{part.img} */}
                <img
                  src={part.img}
                  alt={part.title}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              {/* Part Details & Note */}
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div>
                  <span className="text-xs font-bold text-brand-accent-secondary uppercase tracking-wider block mb-1">
                    {part.subtitle}
                  </span>
                  <h4 className="text-xl md:text-2xl font-bold text-brand-text-primary font-heading">
                    {part.title}
                  </h4>
                  <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mt-3">
                    {part.desc}
                  </p>
                </div>

                {/* Quick note to the side */}
                <div className="bg-brand-bg-card/40 border border-brand-bg-card/80 p-4 rounded-xl">
                  <span className="text-xs font-bold text-brand-text-primary uppercase tracking-wide block mb-1">
                    Design Note
                  </span>
                  <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed">
                    {part.note}
                  </p>
                </div>

                {/* CAD File Download */}
                <div>
                  {/* PLACEHOLDER: part file path: /public{part.cadPath} */}
                  <a
                    href={part.cadPath}
                    download
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-accent-secondary hover:text-brand-accent-primary transition-colors"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
                    </svg>
                    {part.cadLabel}
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
