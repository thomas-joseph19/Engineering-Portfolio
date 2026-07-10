import React from "react";
import { Link } from "react-router-dom";

export default function RoboticArmPage() {
  // Finished Product (showcased at the top of the page)
  const finishedProduct = {
    title: "Finished Product",
    subtitle: "SolidWorks 5-Axis Robotic Arm Assembly",
    desc: "The complete robotic arm assembly integrates all structural link profiles, joints, and actuation linkages. Set up using strict concentric, coincident, and limit distance mates in SolidWorks. Limit mates constrain the rotational ranges of motion for each joint to simulate real-world servo travel bounds.",
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
      img: "assets/images/projects/robotic-arm-base-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-base-PLACEHOLDER.sldprt",
      cadLabel: "Download Base Part (.sldprt)"
    },
    {
      title: "2. Arm Link 1",
      subtitle: "The Primary Vertical Link",
      desc: "Mounts to the base rotary plate and supports the elbow pivot actuator.",
      img: "assets/images/projects/robotic-arm-link1-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-link1-PLACEHOLDER.sldprt",
      cadLabel: "Download Link 1 Part (.sldprt)"
    },
    {
      title: "3. Arm Link 2",
      subtitle: "The Forearm Extension",
      desc: "A structural link bridging the elbow joint to the wrist.",
      img: "assets/images/projects/robotic-arm-link2-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-link2-PLACEHOLDER.sldprt",
      cadLabel: "Download Link 2 Part (.sldprt)"
    },
    {
      title: "4. Arm Link 3",
      subtitle: "The Wrist Joint Connector",
      desc: "A compact coupler connecting the wrist joint and the end-effector base.",
      img: "assets/images/projects/robotic-arm-link3-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-link3-PLACEHOLDER.sldprt",
      cadLabel: "Download Link 3 Part (.sldprt)"
    },
    {
      title: "5. Gripper Link",
      subtitle: "The End-Effector Coupling Plate",
      desc: "Interfaces the wrist pitch mechanism to the claw structure. Features mounting slots for direct micro-servo attachment and sensor bracket integration.",
      img: "assets/images/projects/robotic-arm-gripper-link-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-gripper-link-PLACEHOLDER.sldprt",
      cadLabel: "Download Gripper Link Part (.sldprt)"
    },
    {
      title: "6. Gripper Support",
      subtitle: "The Claw Chassis Mount",
      desc: "Dual-sided mounting frame providing rigid anchor points for both gripper fingers. Supports lateral load transfer during material grasping.",
      img: "assets/images/projects/robotic-arm-gripper-support-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-gripper-support-PLACEHOLDER.sldprt",
      cadLabel: "Download Gripper Support Part (.sldprt)"
    },
    {
      title: "7. Gripper Arm",
      subtitle: "The Actuated Grasp Finger",
      desc: "The actuated claw finger used for gripping objects.",
      img: "assets/images/projects/robotic-arm-gripper-arm-PLACEHOLDER.jpg",
      cadPath: "assets/documents/projects/robotic-arm-gripper-arm-PLACEHOLDER.sldprt",
      cadLabel: "Download Gripper Arm Part (.sldprt)"
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
          // ROBOTIC_ARM_SYSTEM
        </h2>
        <p className="text-brand-text-muted text-xs font-mono mt-1">
          REF: [5-AXIS_ARTICULATED_CAD_ASSEMBLY]
        </p>
      </div>

      {/* SECTION 1: HERO ASSEMBLY (Visible first) */}
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
              src={finishedProduct.img}
              alt={finishedProduct.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description & Downloads */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-accent-primary font-mono">
                // ASSEMBLY_INTEGRATION
              </span>
              <h3 className="text-md font-bold font-mono text-brand-text-primary uppercase tracking-wider mt-1 mb-3">
                [01] {finishedProduct.title}
              </h3>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed mb-4">
                {finishedProduct.desc}
              </p>
            </div>

            {/* Download Link */}
            <div>
              <a
                href={finishedProduct.cadPath}
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
          // ASSEMBLY_COMPONENTS_LOG
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
                  className="w-full h-full object-cover"
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
