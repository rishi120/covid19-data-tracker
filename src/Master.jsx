import React, { useEffect } from "react";
import Renderlandingsection from "./Components/Landing/Index";
import Scrollgif from "./assets/images/scroll-down.gif";
import Renderimagegrid from "./Components/Landing/Image-grid";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Rendermastercomponent = () => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const ST = ScrollTrigger;
    const targetPanels = ".panel";
    console.log(targetPanels);
    /* using the gsap utils menthod to loop through each of the sections and apply the layered pinning animation */
    gsap.utils.toArray(targetPanels).map((panel) => {
      ST.create({
        trigger: panel,
        start: "top top",
        pin: true,
        pinSpacing: false,
        scrub: 3,
        /* use snapping to snap the sections to the closet point */
        snap: {
          snapTo: 1,
          duration: { min: 0.3, max: 0.7 },
          ease: "power2.inOut",
          anticipatePin: 0.2,
          delay: 0,
        },
      });
    });
  }, []);
  return (
    <>
      <Renderlandingsection Scrollgif={Scrollgif} />
      <Renderimagegrid />
    </>
  );
};

export default Rendermastercomponent;
