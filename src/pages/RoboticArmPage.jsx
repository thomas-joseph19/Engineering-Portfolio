import React from "react";
import { Link } from "react-router-dom";

export default function RoboticArmPage() {
  // Finished Product (showcased at the top of the page)
  const finishedProduct = {
    title: "Finished Product",
    subtitle: "SolidWorks 5-Axis Robotic Arm Assembly",
    desc: "The complete robotic arm assembly integrates all structural link profiles, joints, and actuation linkages. Set up using strict concentric, coincident, and limit distance mates in SolidWorks. Limit mates constrain the rotational ranges of motion for each joint to simulate real-world servo travel bounds.",
    note: "Static FEA simulation tests and dynamic collision check features in SolidWorks were used to analyze stress distribution across joints under maximum end-effector load conditions.",
    // PLACEHOLDER: robotic-arm-final-PLACEHOLDER.jpg must exist in public/assets/images/projects/
    img: "assets/images/projects/robotic-arm-final-PLACEHOLDER.jpg",
    cadPath: "assets/documents/projects/robotic-arm-final-PLACEHOLDER.sldasm",
    cadLabel: "Download Assembly File (.sldasm)"
  };

  // Individual parts (shown sequentially as the user scrolls)
  const parts = [
    {
      title: "1. Base",
      subtitle: "The Structural Foundation",
      desc: "Designed as the heavy foundation mount containing structural ribs for stability and a large central recess. Housing for the main rotation servo and slip-ring cabling system.",
      note: "Draft angles were added along vertical faces to ensure tool clearance for potential sand-casting manufacturing workflows.",
      // PLACEHOLDER: robotic-arm-base-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-base-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-base-PLACEHOLDER.sldprt",
      cadLabel: "Download Base Part (.sldprt)"
    },
    {
      title: "2. Arm Link 1",
      subtitle: "The Primary Vertical Link",
      desc: "An extruded C-channel design optimizing structural stiffness-to-weight ratio. Mounts to the base rotary plate and supports the elbow pivot actuator.",
      note: "Fillets were configured on internal corners to reduce high stress concentrations under heavy vertical torque loading.",
      // PLACEHOLDER: robotic-arm-link1-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-link1-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-link1-PLACEHOLDER.sldprt",
      cadLabel: "Download Link 1 Part (.sldprt)"
    },
    {
      title: "3. Arm Link 2",
      subtitle: "The Forearm Extension",
      desc: "Modeled with integrated servo brackets and dual support rib flanges. Bridges the elbow joint to the wrist yaw axis to provide forward outreach capabilities.",
      note: "Lightweighting pockets were cleared out from the central web structure to minimize rotational inertia without sacrificing bending resistance.",
      // PLACEHOLDER: robotic-arm-link2-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-link2-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-link2-PLACEHOLDER.sldprt",
      cadLabel: "Download Link 2 Part (.sldprt)"
    },
    {
      title: "4. Arm Link 3",
      subtitle: "The Wrist Joint Connector",
      desc: "A compact coupler component housing wrist pitching gears and routing feedback potentiometer wiring. Interfaces directly with the end-effector base.",
      note: "High-precision bore tolerances (+0.015mm / -0.000mm) were assigned to the pin holes to avoid alignment backlash.",
      // PLACEHOLDER: robotic-arm-link3-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-link3-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-link3-PLACEHOLDER.sldprt",
      cadLabel: "Download Link 3 Part (.sldprt)"
    },
    {
      title: "5. Gripper Link",
      subtitle: "The End-Effector Coupling Plate",
      desc: "Interfaces the wrist pitch mechanism to the claw structure. Features mounting slots for direct micro-servo attachment and sensor bracket integration.",
      note: "Includes structural guide tracks to restrict linear slider motion to a single degree of freedom.",
      // PLACEHOLDER: robotic-arm-gripper-link-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-gripper-link-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-gripper-link-PLACEHOLDER.sldprt",
      cadLabel: "Download Gripper Link Part (.sldprt)"
    },
    {
      title: "6. Gripper Support",
      subtitle: "The Claw Chassis Mount",
      desc: "Dual-sided mounting frame providing rigid anchor points for both gripper fingers. Supports lateral load transfer during material grasping.",
      note: "Optimized utilizing SolidWorks Simulation topology constraints to maximize rigidity while decreasing raw material volume.",
      // PLACEHOLDER: robotic-arm-gripper-support-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-gripper-support-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-gripper-support-PLACEHOLDER.sldprt",
      cadLabel: "Download Gripper Support Part (.sldprt)"
    },
    {
      title: "7. Gripper Arm",
      subtitle: "The Actuated Grasp Finger",
      desc: "Designed with specialized high-friction tread geometry along clamping faces. Actuated via a gear pinion or linkage bar setup to grip irregular object geometries.",
      note: "Structural FEA tests were run to check for maximum bending deformation along the finger tip under peak clamping torque.",
      // PLACEHOLDER: robotic-arm-gripper-arm-PLACEHOLDER.jpg must exist in public/assets/images/projects/
      img: "assets/images/projects/robotic-arm-gripper-arm-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-gripper-arm-PLACEHOLDER.sldprt",
      cadLabel: "Download Gripper Arm Part (.sldprt)"
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
          5-Axis Robotic Arm
        </h2>
        <p className="text-brand-text-muted text-sm mt-1">
          SolidWorks Multi-Body CAD Modeling, Linkage Mates, & Joint FEA Analysis
        </p>
      </div>

      {/* SECTION 1: HERO ASSEMBLY (Visible first) */}
      <section className="bg-brand-bg-card border border-brand-bg-card/50 rounded-3xl p-6 md:p-8 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image */}
          <div className="lg:col-span-7 aspect-[4/3] md:aspect-[16/9] lg:aspect-auto lg:h-[400px] bg-brand-bg-dark rounded-2xl border border-brand-bg-card overflow-hidden relative flex items-center justify-center">
            {/* PLACEHOLDER: final product image path: /public{finishedProduct.img} */}
            <img
              src={finishedProduct.img}
              alt={finishedProduct.title}
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>

          {/* Description & Downloads */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary">
                System Integration & Mates
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-text-primary mt-1 mb-3">
                {finishedProduct.title}
              </h3>
              <p className="text-brand-text-secondary text-sm md:text-base leading-relaxed mb-4">
                {finishedProduct.desc}
              </p>
            </div>

            {/* Note to the side */}
            <div className="bg-brand-bg-dark/40 border-l-4 border-brand-accent-primary p-4 rounded-r-xl">
              <span className="text-xs font-bold text-brand-text-primary uppercase tracking-wide block mb-1">
                Kinematic Note
              </span>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed">
                {finishedProduct.note}
              </p>
            </div>

            {/* Download Link */}
            <div>
              {/* PLACEHOLDER: assembly file path: /public{finishedProduct.cadPath} */}
              <a
                href={finishedProduct.cadPath}
                download
                className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-accent-primary to-brand-accent-secondary hover:from-brand-accent-secondary hover:to-brand-accent-primary text-brand-text-primary font-bold px-5 py-2.5 rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5 text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M5 20h14v-2H5v2zm7-18L5.33 11h4V16h5.34v-5h4L12 2z" />
                </svg>
                {finishedProduct.cadLabel}
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
