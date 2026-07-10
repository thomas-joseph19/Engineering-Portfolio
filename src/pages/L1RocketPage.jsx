import React from "react";
import { Link } from "react-router-dom";

export default function L1RocketPage() {
  const steps = [
    {
      num: "01",
      title: "Fixing your Nosecone in Place",
      desc: "Place the side of the shoulder without the crossbar approximately one inch into your nosecone. With your shoulder and nosecone together, mark 3 evenly spaced spots to drill holes into your nosecone and shoulder. Find a drill bit that is the correct size for the bolts we are using and drill your holes. After your holes are drilled, screw the 3 bolts into them to hold your nosecone in place."
    },
    {
      num: "02",
      title: "Placing the Centering Rings and Fins",
      desc: "Place the aft centering ring (bottom) at the bottom of the motor tube with its ends flushed. Use the length of the fin tabs to measure the distance between the aft centering ring and forward centering ring (top). Mark these locations and routinely check their placement when gluing.\n\n*Note: You should be using TWO forward centering rings instead of the ONE in typical diagrams."
    },
    {
      num: "03",
      title: "Gluing Motor Tube and Centering Rings",
      desc: "Use superglue to set the centering rings in place and then apply liberal amounts of wood glue to fill the cracks and strengthen the joints. Continue onto the next step while the glue dries, repeating for at least two layers of glue. Strength in the motor cage is extremely critical."
    },
    {
      num: "04",
      title: "Marking Fin Slots Length",
      desc: "Use the fin jigs to mark where to cut your fin slots, ensuring you use the appropriate jig for your target number of fins. Apply a metal angle or the door frame alignment technique to draw perfectly straight vertical lines along the tube."
    },
    {
      num: "05",
      title: "Marking Fin Slot Height",
      desc: "Mark the top and bottoms of your fin slots precisely according to your OpenRocket simulation measurements."
    },
    {
      num: "06",
      title: "Marking Rail Buttons",
      desc: "Mark the aft rail button close to the bottom. Since rail buttons guide the rocket off the launch rails, the aft button guides it longer if it is placed lower. Mark the forward rail button about 1 caliber (the diameter of your rocket) above the estimated Center of Gravity (C.G.) from OpenRocket. Apply the metal angle technique to ensure they are perfectly aligned along the airframe."
    },
    {
      num: "07",
      title: "Cutting the Fin Slots",
      desc: "Use a sharp X-Acto knife for the fin slots. This requires smooth, patient cutting. Apply thoughtful slicing strategies and do not brute-force this process. We recommend using a saw-like motion directed away from yourself."
    },
    {
      num: "08",
      title: "Cutting Shock Cord",
      desc: "Cut <= 12 ft of shock cord. Ensure the cut is clean and heat-sealed to prevent fraying."
    },
    {
      num: "09",
      title: "Installing Eyebolt",
      desc: "Tie the shock cord around the eyebolt using a bowline knot. Insert the eyebolt into the small hole on the forward centering ring. Use a standard nut on the top and a locknut on the bottom. Use pliers to tighten the nuts while keeping the eyebolt properly aligned, then apply superglue to the threads to prevent loosening."
    },
    {
      num: "10",
      title: "Assembling Motor Tube into Airframe",
      desc: "Cover the top of the motor tube with masking tape to protect the interior from stray glue. You will remove this tape later by poking it from the bottom. Place the motor tube assembly into the body tube and pull the shock cord all the way through the airframe."
    },
    {
      num: "11",
      title: "Gluing Motor Tube into Airframe",
      desc: "Use the fins to double-check the alignment of the motor tube. Apply a small amount of superglue to lock the motor tube into position. Remove the fins and apply generous amounts of wood glue in all cracks and crevices. Apply wood glue from the top of the airframe as well, building up several thin layers."
    },
    {
      num: "12",
      title: "Gluing Fins into Airframe",
      desc: "Apply a large amount of wood glue onto all contact surfaces on the fin tab and inside the airframe slot. Insert the fins and apply glue on the outer joints between the airframe and fin. Use fin jigs to ensure alignment. Lock them in place with a drop of superglue, then build up strong wood glue fillets on the exterior joints."
    },
    {
      num: "13",
      title: "Screwing Rail Buttons to Airframe",
      desc: "Apply superglue into the pre-drilled hole for the rail button, insert the #4 1/2\" screw, add more superglue to the bottom of the button, and screw the assembly into the airframe. If the screw tip pokes through and could snag the parachute, cover it with a few layers of electrical tape."
    },
    {
      num: "14",
      title: "Adding Ballast Weight to Nose Cone",
      desc: "Weigh out the appropriate amount of clay ballast based on OpenRocket to achieve a target stability of 1.5 - 2.0 calibers. Use a rod or popsicle stick to compact the clay into the tip of the nosecone. Apply masking tape to the nosecone shoulder if necessary to ensure a snug, slide-free friction fit."
    },
    {
      num: "15",
      title: "Selecting Attachment Point for Parachute",
      desc: "Tie the free end of the shock cord to the nosecone loop. Select the parachute attachment point along the cord so that the nosecone remains above the airframe and cannot collide with it during descent. Tie a simple loop for the quick link."
    },
    {
      num: "16",
      title: "Attaching Screamer to Shock Cord",
      desc: "Secure the loud screamer locator to the shock cord using heavy electrical tape (do not rely on weak key chains). On the launch pad, you can pull the pin manually or devise a line system to pull it passively when the parachute deploys."
    },
    {
      num: "17",
      title: "Attaching Motor Retainer",
      desc: "Drill a pilot hole in the aft centering ring matching the minor diameter of the retainer screw. Align the Z-clip and insert the screw. Keep it slightly loose so you can rotate the retainer out of the way to slide in the motor on launch day."
    },
    {
      num: "18",
      title: "Congratulations you are done!",
      desc: "On launch day, attach the parachute and protector assembly to your quick link. Remember that parachute components (quick link, protector, and parachute) are returned to KXR, while the rocket is yours to keep!"
    },
    {
      num: "19",
      title: "Paint your Rocket",
      desc: "Paint your rocket in your own custom style. Take pride in this step and make it stand out. Be sure to mask off the rail buttons beforehand so they remain unpainted."
    },
    {
      num: "20",
      title: "Purchasing membership from NAR or TRA",
      desc: "You must pay membership dues prior to launch. We recommend doing this a few weeks in advance:\n- TRA ($20): Tripoli Rocketry Association. Cheaper, but certification depends on regional availability.\n- NAR ($40): National Association of Rocketry. Slightly more expensive, but any NAR L1 member can certify you."
    },
    {
      num: "21",
      title: "Flight Readiness Review",
      desc: "Before launching, verify your checklist:\n1. Fill out the SRA Launch Card and NAR Cert Form.\n2. Complete delay drilling on the motor.\n3. Safety briefing (stay behind launch tables, wire ignition last).\n4. Ignition wiring (expose 3/4\" copper, tape igniter, check continuity beep).\n5. Structural check (fins secure, rail buttons tight, nosecone snug, motor fits cleanly)."
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
              className="w-full h-full object-cover filter grayscale contrast-115 hover:grayscale-0 transition-all duration-300"
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
