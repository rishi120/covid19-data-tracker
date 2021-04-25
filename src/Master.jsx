import React, { useEffect } from "react";
import Renderlandingsection from "./Components/Landing/Index";
import Scrollgif from "./assets/images/scroll-down.gif";
import Renderimagegrid from "./Components/Landing/Image-grid";

const Rendermastercomponent = () => {
  return (
    <>
      <Renderlandingsection Scrollgif={Scrollgif} />
      <Renderimagegrid />
    </>
  );
};

export default Rendermastercomponent;
