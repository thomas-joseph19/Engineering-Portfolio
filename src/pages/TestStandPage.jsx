import React from "react";
import { Link } from "react-router-dom";

export default function TestStandPage() {
  const steps = [
    {
      num: "01",
      title: "Define the Design Requirements",
      subtitle: "Envelope & Constraints Formulation",
      desc: "To establish a realistic design envelope without focusing on a single proprietary engine, I researched publicly available specifications for 15 kN-class rocket engines. This allowed me to approximate core physical parameters, overall dimensions, plumbing space requirements, and mounting constraints. The resulting boundary conditions defined the size and mechanical interfaces of the test stand.",
      img: null,
      highlight: "DESIGN BOUNDARY: ~15 kN thrust vector, standard bolt mounting interface, open aft-section for exhaust gas expansion."
    },
    {
      num: "02",
      title: "Recreate the Load Cell",
      subtitle: "CAD Recreation of Sensor Geometry",
      desc: "Thrust measurement accuracy depends on a direct, unconstrained load path. I selected a representative commercial S-type tension/compression load cell rated for the expected forces. Using manufacturer datasheets, I modeled the sensor in SolidWorks to ensure all mounting threads and clearances were exact. This allowed the load cell to be integrated directly into the structural assembly and FEA contacts.",
      img: "assets/images/projects/test-stand/test-stand-load-cell.png",
      highlight: "SENSOR SPECS: S-Type load cell, high-capacity rating, dual-thread engagement for inline force transmission."
    },
    {
      num: "03",
      title: "Material Selection",
      subtitle: "Structural Alloy Evaluation",
      desc: "I selected Alloy Stainless Steel for all structural members and weldments. In outdoor rocket engine test environments, the stand is subjected to cryogenic thermal shock, corrosive combustion products, and high vibration. Stainless steel provides high yield strength, excellent weldability, and resistance to environmental stress cracking compared to carbon steel or aluminum.",
      img: null,
      highlight: "MATERIAL DECISION: Alloy Stainless Steel (Yield Strength ~250-300 MPa, high corrosion resistance)."
    },
    {
      num: "04",
      title: "Initial Structural Design",
      subtitle: "Weldment Framework & Load Path Layout",
      desc: "The first iteration focused on a modular welded frame. I designed a space-frame truss structure to hold the engine vertically, routing the primary thrust vector through the top clamp, down the load cell, and into the surrounding chassis. Every frame tube and plate was custom modeled, aiming to balance overall weight with structural stiffness.",
      img: "assets/images/projects/test-stand/test-stand-initial-frame.png",
      highlight: "CONFIGURATION: Vertical test orientation, overhead load cell mount, four-legged stable base."
    },
    {
      num: "05",
      title: "Initial Structural Analysis",
      subtitle: "Baseline Static FEA (20 kN Applied Load)",
      desc: "I conducted a static Finite Element Analysis in SolidWorks Simulation. To embed a safety factor, I applied a 20 kN static load—intentionally exceeding the 15 kN engine thrust rating by 33%. The results revealed excessive displacement and stress concentrations, particularly around the upper portion of the frame where bending moments were highest.",
      img: "assets/images/projects/test-stand/test-stand-initial-fea.png",
      highlight: "FEA OUTCOME: Heavy deformation (red zone) detected at upper joints. Rigid support required."
    },
    {
      num: "06",
      title: "First Design Revision",
      subtitle: "Reinforcing the Upper Structure",
      desc: "To combat the upper frame bending, I revised the model by adding heavy triangular corner gussets and lateral cross-bracing to the upper members. The goal was to convert bending loads into axial loads, distributing the force down the vertical support columns.",
      img: "assets/images/projects/test-stand/test-stand-second-frame.png",
      highlight: "MODIFICATIONS: Dual-gusset upper plates, angled truss reinforcement, thickened top plate."
    },
    {
      num: "07",
      title: "Second Structural Analysis",
      subtitle: "Post-Reinforcement FEA Verification",
      desc: "I ran the static simulation again under the identical 20 kN load case to verify the change. While the upper frame showed slightly improved stiffness, the overall displacement remained unacceptably high. The simulation indicated that reinforcing the top was only masking a deeper structural weakness.",
      img: "assets/images/projects/test-stand/test-stand-second-fea.png",
      highlight: "FEA OUTCOME: Deformation persisted. Stress contour mapping showed a major pivot point at the base."
    },
    {
      num: "08",
      title: "Root Cause Investigation",
      subtitle: "Subassembly Isolation & Bounded FEA",
      desc: "To locate the true bottleneck, I isolated the lower mounting assembly and analyzed it independently. By removing the main frame from the equation and applying boundary fixtures directly to the mounting plate, I discovered that the mounting plate was flexing significantly. This flexing acted as a leverage point, magnifying the deformation through the upper assembly.",
      img: "assets/images/projects/test-stand/test-stand-lower-assembly-fea.png",
      highlight: "DIAGNOSTIC: The lower mounting plate was acting as a cantilever spring. Root cause isolated."
    },
    {
      num: "09",
      title: "Redesign the Mounting System",
      subtitle: "Thickened Plate & High-Stiffness Engine Clamp",
      desc: "I redesigned the lower engine clamp and mounting plate. I increased the mounting plate thickness and added gusseted webs to prevent plate warping. Additionally, I redesigned the engine clamp to wrap more securely around the engine collar, distributing the thrust load more uniformly over a larger surface area.",
      img: "assets/images/projects/test-stand/test-stand-redesigned-clamp.png",
      highlight: "DESIGN REVISION: Heavy-duty clamp profile, double-thickness mounting flange, direct load-cell integration."
    },
    {
      num: "10",
      title: "Validate the New Mounting Assembly",
      subtitle: "Isolated Assembly FEA Verification",
      desc: "I ran a static FEA on the newly redesigned lower assembly. The displacement plots showed that the thick plate and robust clamp successfully eliminated the localized flexing, reducing displacement in this subassembly to negligible values. The load path was now structurally sound.",
      img: "assets/images/projects/test-stand/test-stand-redesigned-clamp-fea.png",
      highlight: "FEA OUTCOME: Displacement reduced by over 80% in the mounting zone. Design validated."
    },
    {
      num: "11",
      title: "Final Assembly",
      subtitle: "Full Test Stand Integration",
      desc: "I merged the validated mounting assembly back into the complete structure. The final assembly contains all custom-designed components, including the frame, bracing, gussets, isolated mounting clamp, and the recreated load cell model, representing a complete conceptual engineering test rig.",
      img: "assets/images/projects/test-stand/test-stand-final-assembly.png",
      highlight: "ASSEMBLY COMPLETED: Full integration of structural weldment, sensor, and engine interface."
    },
    {
      num: "12",
      title: "Final Structural Validation",
      subtitle: "Full Assembly Static FEA",
      desc: "I ran a final full-assembly static structural simulation using the 20 kN design load. The displacement plot showed excellent stiffness, with minimal, safe deformation throughout the entire structure. The iterative analysis proved that targeted structural changes resolved the root issues far more effectively than blind over-design.",
      img: "assets/images/projects/test-stand/test-stand-final-fea.png",
      highlight: "FINAL FEA OUTCOME: Structurally sound, minimal deformation, factor of safety verified under 20 kN."
    }
  ];

  const engineeringDecisions = [
    {
      title: "Engine-Agnostic Envelope",
      desc: "Designed around the general envelope of a conceptual 15 kN-class engine to create a versatile test rig rather than restricting the utility to a single engine manufacturer."
    },
    {
      title: "20 kN Conservative Design Load",
      desc: "Applied a 33% safety margin on the thrust load during simulation to account for dynamic starting transience and potential engine off-nominal combustion spikes."
    },
    {
      title: "Direct Sensor Path Integration",
      desc: "Recreated the S-type load cell in CAD and integrated it directly into assembly constraints to ensure FEA contact definitions accurately modeled the thrust load path."
    },
    {
      title: "Iterative Analysis Over Blind Overdesign",
      desc: "Used FEA to guide modifications instead of simply thickening the entire frame, saving material cost, overall weight, and keeping fabrication simple."
    },
    {
      title: "Subassembly Stress Isolation",
      desc: "Isolated the lower mounting assembly under independent fixtures to pinpoint the root cause of the bending, avoiding unnecessary changes to the upper frame."
    },
    {
      title: "Custom Component Fabrication",
      desc: "Designed and modeled every single bracket, gusset, plate, and weldment member from scratch, ensuring a complete and custom CAD repository."
    }
  ];

  const skills = [
    "SolidWorks Part Modeling",
    "SolidWorks Assembly Design",
    "Weldment Design & Weld Specs",
    "Structural Fixture Design",
    "Mechanical Design",
    "Finite Element Analysis (FEA)",
    "Static Structural Simulation",
    "CAD-Based Design Optimization",
    "Engineering Problem Solving",
    "Iterative Design Methodology",
    "Engineering Documentation"
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
          // ROCKET_TEST_STAND_DESIGN
        </h2>
        <p className="text-brand-text-muted text-xs font-mono mt-1">
          REF: [15_KN_ENGINE_TEST_STAND_STRUCTURAL_ANALYSIS]
        </p>
      </div>

      {/* Case Study Intro / Hero Section */}
      <section className="bg-brand-bg-card border border-brand-border p-6 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-7 aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[360px] bg-brand-bg-dark border border-brand-border p-1.5 overflow-hidden relative flex items-center justify-center">
            {/* Corner cropmarks */}
            <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-brand-accent-primary" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 border-t border-r border-brand-accent-primary" />
            <span className="absolute bottom-0 left-0 w-2.5 h-2.5 border-b border-l border-brand-accent-primary" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-brand-accent-primary" />
            
            <img
              src="assets/images/projects/test-stand/test-stand-final-assembly.png"
              alt="Final Test Stand Assembly"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary font-mono">
                // PROJECT_OVERVIEW
              </span>
              <h3 className="text-md font-bold font-mono text-brand-text-primary uppercase tracking-wider mt-1 mb-3">
                15 kN Engine Test Stand & FEA
              </h3>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed font-sans mb-4">
                This project covers the design and optimization of a conceptual structural test stand intended to support and measure the thrust of a 15 kN-class rocket engine. The core objective was to create a rigid structure capable of transmitting engine thrust through a load cell while minimizing structural deformation.
              </p>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed font-sans mb-4">
                Developed entirely in SolidWorks, the frame was optimized using iterative Finite Element Analysis (FEA) under a conservative 20 kN static load to ensure safety margins and high rig stiffness.
              </p>
              <div className="text-xs font-mono text-brand-text-muted border-t border-brand-border pt-3">
                STATUS: [VALIDATED_CAD] <br/>
                DESIGN LOAD: [20 kN STATIC] <br/>
                CHASSIS MATERIAL: [ALLOY STAINLESS STEEL]
              </div>
              <div className="mt-5">
                <a
                  href="assets/documents/projects/test-stand/test-stand-assembly.sldasm"
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
        </div>
      </section>

      {/* Engineering Design Process Timeline */}
      <div className="border-t border-brand-border pt-8">
        <h3 className="text-md font-bold text-brand-text-primary font-mono uppercase tracking-widest mb-2">
          // ENGINEERING_DESIGN_PROCESS
        </h3>
        <p className="text-brand-text-muted text-xs font-mono mb-8">
          Chronological project log tracking the structural design and analysis loop.
        </p>
        
        <div className="flex flex-col gap-12 font-mono">
          {steps.map((step, idx) => {
            const hasImage = !!step.img;
            return (
              <div 
                key={idx} 
                className="bg-brand-bg-card border border-brand-border p-6 flex flex-col gap-6"
              >
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-brand-border/50 pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-brand-accent-primary text-xs font-bold font-mono border border-brand-accent-primary/30 px-2 py-0.5 bg-brand-bg-dark">
                      PHASE_{step.num}
                    </span>
                    <h4 className="text-sm font-bold text-brand-text-primary uppercase tracking-wider">
                      {step.title}
                    </h4>
                  </div>
                  <span className="text-brand-text-muted text-xs font-mono">
                    {step.subtitle.toUpperCase()}
                  </span>
                </div>

                {/* Content layout (Split if image exists) */}
                <div className={hasImage ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "flex flex-col gap-4"}>
                  {/* Left Column: text */}
                  <div className={hasImage ? "lg:col-span-6 flex flex-col gap-4" : "w-full flex flex-col gap-4"}>
                    <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed font-sans whitespace-pre-line">
                      {step.desc}
                    </p>
                    <div className="border-l-2 border-brand-accent-primary pl-3 py-1 bg-brand-bg-dark/40">
                      <p className="text-brand-text-secondary text-[11px] font-mono leading-relaxed">
                        <span className="text-brand-accent-primary font-bold">LOG:</span> {step.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Image */}
                  {hasImage && (
                    <div className="lg:col-span-6 aspect-[4/3] bg-brand-bg-dark border border-brand-border p-1 overflow-hidden relative flex items-center justify-center">
                      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand-accent-primary" />
                      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand-accent-primary" />
                      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand-accent-primary" />
                      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand-accent-primary" />
                      <img
                        src={step.img}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Engineering Decisions Summary */}
      <div className="border-t border-brand-border pt-8">
        <h3 className="text-md font-bold text-brand-text-primary font-mono uppercase tracking-widest mb-2">
          // KEY_ENGINEERING_DECISIONS
        </h3>
        <p className="text-brand-text-muted text-xs font-mono mb-6">
          Critical design calls and analytical strategies that shaped the final test stand.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
          {engineeringDecisions.map((decision, idx) => (
            <div key={idx} className="bg-brand-bg-card border border-brand-border p-5 flex flex-col gap-2">
              <span className="text-brand-accent-primary text-[10px] font-bold">
                [DECISION_{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}]
              </span>
              <h4 className="text-xs font-bold text-brand-text-primary uppercase tracking-wider">
                {decision.title}
              </h4>
              <p className="text-brand-text-secondary text-xs leading-relaxed font-sans">
                {decision.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Highlight Section */}
      <div className="border-t border-brand-border pt-8">
        <h3 className="text-md font-bold text-brand-text-primary font-mono uppercase tracking-widest mb-2">
          // TECHNICAL_SKILLS_DEMONSTRATED
        </h3>
        <p className="text-brand-text-muted text-xs font-mono mb-6">
          Core areas of domain expertise applied during this engineering study.
        </p>

        <div className="flex flex-wrap gap-2.5 font-mono">
          {skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs px-3 py-1.5 bg-brand-bg-card text-brand-text-secondary border border-brand-border uppercase hover:border-brand-accent-primary hover:text-brand-accent-primary transition-all duration-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
