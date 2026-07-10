import React from "react";
import { Link } from "react-router-dom";

export default function L1RocketPage() {
  const steps = [
    {
      num: "01",
      title: "Fixing the Nosecone in Place",
      desc: "I placed the shoulder (without the crossbar) approximately one inch into the nosecone. With both pieces together, I marked three evenly spaced spots, drilled the holes matching our bolt sizes, and secured the nosecone in place using three bolts to prevent any in-flight shift."
    },
    {
      num: "02",
      title: "Placing the Centering Rings and Fins",
      desc: "I positioned the aft centering ring flush at the bottom of the motor tube. Using the length of the fin tabs, I measured the exact distance needed between the aft ring and the forward centering rings. I marked these locations and double-checked their placement to prepare for gluing. I opted to use two forward centering rings for enhanced structural redundancy."
    },
    {
      num: "03",
      title: "Gluing Motor Tube and Centering Rings",
      desc: "I tacked the centering rings in place using superglue and then applied wood glue to fill the seams and reinforce the joints. I allowed each layer to dry and applied multiple layers to ensure maximum strength in the motor cage, which takes the brunt of the motor's thrust."
    },
    {
      num: "04",
      title: "Marking Fin Slots Length",
      desc: "I used the fin jigs to mark the cutting lines for the fin slots on the airframe. I applied a metal angle guide along the length of the tube to draw straight, vertical lines."
    },
    {
      num: "05",
      title: "Marking Fin Slot Height",
      desc: "I marked the precise top and bottom edges of each fin slot on the body tube based on the dimensions from my OpenRocket simulation."
    },
    {
      num: "06",
      title: "Marking Rail Buttons",
      desc: "I marked the aft rail button location near the bottom of the airframe to maximize launch rail guidance length. For the forward rail button, I measured 1 caliber (airframe diameter) above the Center of Gravity (C.G.) estimate from OpenRocket. I used a metal angle to ensure the markings aligned perfectly along the body tube."
    },
    {
      num: "07",
      title: "Cutting the Fin Slots",
      desc: "I carefully cut the fin slots using a sharp X-Acto knife. I used a patient, controlled saw-like motion cutting away from myself to avoid tearing the body tube cardboard."
    },
    {
      num: "08",
      title: "Cutting Shock Cord",
      desc: "I measured and cut a 12-foot length of heavy-duty shock cord, ensuring I had enough length to allow safe separation under ejection forces."
    },
    {
      num: "09",
      title: "Installing Eyebolt",
      desc: "I tied the shock cord to the eyebolt using a bowline knot. I then inserted the eyebolt into the pre-drilled hole in the forward centering ring, securing it with a standard nut on top, a locknut on the bottom, and superglued the threads to prevent loosening under flight vibrations."
    },
    {
      num: "10",
      title: "Assembling Motor Tube into Airframe",
      desc: "I covered the top of the motor tube with masking tape to keep glue out of the motor cavity. I then inserted the motor tube assembly into the airframe and pulled the shock cord through the entire length of the body tube."
    },
    {
      num: "11",
      title: "Gluing Motor Tube into Airframe",
      desc: "I used the fins as alignment guides to hold the motor tube true, tacking it with a small drop of superglue. After removing the fins, I poured wood glue into the seams around the centering rings from both ends of the airframe to build up secure joints."
    },
    {
      num: "12",
      title: "Gluing Fins into Airframe",
      desc: "I applied wood glue to the contact faces of the fin tabs and the internal slots. I slid the fins into position, secured them with a small drop of superglue, and aligned them using the fin jigs. I built up strong wood glue fillets along the external fin-body tube joints over several applications."
    },
    {
      num: "13",
      title: "Screwing Rail Buttons to Airframe",
      desc: "I applied superglue into the pre-drilled holes, added glue to the base of the rail buttons, and secured them using #4 1/2\" screws. To prevent the internal screw tips from snagging my parachute, I covered them with protective layers of electrical tape."
    },
    {
      num: "14",
      title: "Adding Ballast Weight to Nose Cone",
      desc: "I weighed out the exact amount of clay ballast specified by my OpenRocket design to achieve a flight stability of 1.5 - 2.0 calibers. I packed and compacted the clay into the tip of the nosecone. I also added masking tape to the shoulder for a snug friction fit."
    },
    {
      num: "15",
      title: "Selecting Attachment Point for Parachute",
      desc: "I tied the free end of the shock cord to the nosecone loop. I set the parachute attachment point along the cord at a distance that prevents the nosecone from colliding with the airframe during descent, tying a secure loop for the quick link."
    },
    {
      num: "16",
      title: "Attaching Screamer to Shock Cord",
      desc: "I secured the screamer locator to the upper section of the shock cord using heavy electrical tape for a reliable attachment. I set it up so I could pull the pin on the launch pad, or trigger it passively during deployment."
    },
    {
      num: "17",
      title: "Attaching Motor Retainer",
      desc: "I drilled a pilot hole in the aft centering ring, aligned the Z-clip retainer, and inserted the mounting screw. I kept the screw slightly loose so I could rotate the retainer clip for easy motor installation on launch day."
    },
    {
      num: "18",
      title: "Congratulations you are done!",
      desc: "I completed the physical build of the rocket! For the launch, I prepared my parachute and protector assembly to connect to the shock cord quick link."
    },
    {
      num: "19",
      title: "Paint your Rocket",
      desc: "I sanded, primed, and painted the rocket in my own style. I masked off the rail buttons to keep them clean and paint-free for smooth travel along the launch rail."
    },
    {
      num: "20",
      title: "Purchasing membership from NAR or TRA",
      desc: "I purchased my national rocketry membership dues in advance of launch day, selecting NAR to allow UCF KXR certifiers to evaluate and sign off on my flight."
    },
    {
      num: "21",
      title: "Flight Readiness Review",
      desc: "I completed the pre-flight checklist: filled out the SRA Launch Card, prepared the motor delay drilling, safely wired the igniter tips checking continuity, and verified all structural parts (fins, rail buttons, nosecone fit, shock cords) were secure."
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
          // L1_HPR_ROCKET_BUILD_MANUAL
        </h2>
        <p className="text-brand-text-muted text-xs font-mono mt-1">
          REF: [KXR_UCF_LEVEL_1_CERTIFICATION_GUIDE]
        </p>
      </div>

      {/* Hero Section */}
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
              src="assets/images/projects/l1-rocket-final-PLACEHOLDER.jpg"
              alt="L1 HPR Rocket Final Build"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Description */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-accent-primary font-mono">
                // CERTIFICATION_OVERVIEW
              </span>
              <h3 className="text-md font-bold font-mono text-brand-text-primary uppercase tracking-wider mt-1 mb-3">
                [PROJECT_LOG] LEVEL 1 HIGH POWER ROCKET
              </h3>
              <p className="text-brand-text-secondary text-xs md:text-sm leading-relaxed font-sans mb-4">
                This project documents the complete construction and verification process of a Level 1 High Power Rocket (HPR). Intended for the use of Knightly Experimental Rocketry (KXR) at the University of Central Florida, this guide details every step required to build a flight-ready certification vehicle from raw component fitting to the final Flight Readiness Review.
              </p>
              <div className="text-xs font-mono text-brand-text-muted border-t border-brand-border pt-3">
                STATUS: [FLIGHT_READY] <br/>
                LAUNCH SYSTEM: [RAIL_GUIDED] <br/>
                STABILITY TARGET: [1.5_-_2.0_CALIBER]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Build Timeline Section */}
      <div className="border-t border-brand-border pt-8">
        <h3 className="text-md font-bold text-brand-text-primary font-mono uppercase tracking-widest mb-6">
          // STANDARD_OPERATING_PROCEDURE
        </h3>
        
        {/* Timeline Grid */}
        <div className="flex flex-col gap-4 font-mono">
          {steps.map((step, idx) => (
            <div key={idx} className="bg-brand-bg-card border border-brand-border p-5 flex flex-col md:flex-row gap-4 md:gap-6">
              {/* Step number and marker */}
              <div className="flex-shrink-0 flex items-center md:items-start gap-3">
                <span className="text-brand-accent-primary text-xs font-bold font-mono border border-brand-accent-primary/30 px-2 py-0.5 bg-brand-bg-dark">
                  STEP_{step.num}
                </span>
              </div>
              
              {/* Step details */}
              <div className="flex-grow">
                <h4 className="text-xs font-bold text-brand-text-primary uppercase tracking-wider mb-2">
                  {step.title}
                </h4>
                <p className="text-brand-text-secondary text-xs leading-relaxed font-sans whitespace-pre-line">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
