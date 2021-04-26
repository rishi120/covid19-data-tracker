import React, { useState, useEffect } from "react";
import Renderlandingsection from "./Components/Landing/Index";
import Scrollgif from "./assets/images/scroll-down.gif";
import Renderimagegrid from "./Components/Landing/Image-grid";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderthirdsection from "./Components/Landing/Third-section";
import Axios from "axios";

const Rendermastercomponent = () => {
  const [getCovidData, setGetCovidData] = useState([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    Axios.get("https://api.covid19india.org/state_district_wise.json")
      .then((response) => {
        console.log(response.data.Assam.districtData.Kamrup);
        setGetCovidData(response.data.Assam.districtData.Kamrup);
      })
      .catch(function () {
        console.log("error");
      });
    const ST = ScrollTrigger;
    const targetPanels = ".panel";
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
      <Renderlandingsection Scrollgif={Scrollgif} getCovidData={getCovidData} />
      <Renderimagegrid />
      <Renderthirdsection />
    </>
  );
};

export default Rendermastercomponent;
