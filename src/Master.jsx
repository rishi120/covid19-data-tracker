import React, { useState, useEffect } from "react";
import Renderlandingsection from "./Components/Landing/Index";
// import Scrollgif from "./assets/images/scroll-down.gif";
import Renderimagegrid from "./Components/Landing/Image-grid";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderthirdsection from "./Components/Landing/Third-section";
import Axios from "axios";
import { baseUrl } from "./Components/Landing/Utils/Baseurl";

const Rendermastercomponent = () => {
  const [getCovidData, setGetCovidData] = useState([]);
  const [loading, setLoading] = useState();
  const [showError, setShowError] = useState(false);
  const RenderTableHeading = [
    {
      tableHeading: "State/UT",
    },
    {
      tableHeading: "Confirmed",
    },
    {
      tableHeading: "Active",
    },
    {
      tableHeading: "Recovered",
    },
    {
      tableHeading: "Deceased",
    },
    {
      tableHeading: "Last Updated Time",
    },
  ];
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    setLoading(true);
    Axios.get(baseUrl + "data.json")
      .then((response) => {
        setGetCovidData(response.data.statewise);
        setLoading(false);
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
      <Renderlandingsection
        RenderTableHeading={RenderTableHeading}
        getCovidData={getCovidData}
        loading={loading}
        showError={showError}
      />
      <Renderimagegrid />
      <Renderthirdsection />
    </>
  );
};

export default Rendermastercomponent;
