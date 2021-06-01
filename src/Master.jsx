import React, { useState, useEffect, useRef } from "react";
import Renderlandingsection from "./Components/Landing/Index";
import Renderimagegrid from "./Components/Landing/Image-grid";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderthirdsection from "./Components/Landing/Third-section";
import Axios from "axios";
import { baseUrl } from "./Components/Landing/Utils/Baseurl";
import { Rendertodolist } from "./Components/Landing/Fourth-section";

const Rendermastercomponent = () => {
  const [getCovidData, setGetCovidData] = useState([]);
  const [loading, setLoading] = useState();
  const [showError, setShowError] = useState(false);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [showStateNames, setShowStateNames] = useState({});
  const [Andhra, setAndhra] = useState("");
  const [Arunachal, setArunachal] = useState("");
  const [Assam, setAssam] = useState("");
  const [Bihar, setBihar] = useState("");
  const searchInput = useRef(null);
  const [modal, setModal] = useState(false);
  const [stateName, setStateName] = useState("");
  const [getTaskValue, setGetTaskValue] = useState("");
  const [getTaskValueOnClick, setGetTaskValueOnClick] = useState("");
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
    setTimeout(() => {
      searchInput.current.focus();
    }, 300);
    Axios.get(baseUrl + "data.json")
      .then((response) => {
        setGetCovidData(response.data.statewise);
        setLoading(false);
      })
      .catch(function () {
        console.log("error");
        setLoading(false);
        setShowError(true);
      });
    Axios.get(baseUrl + "state_district_wise.json")
      .then((response) => {
        setShowStateNames(response.data);
        const getAndhraPradeshDistrictData =
          response.data["Andhra Pradesh"].districtData;
        const getInnerDistrictData =
          response.data["Arunachal Pradesh"].districtData;
        const getAssamDistrictData = response.data["Assam"].districtData;
        const getBiharDistrictData = response.data["Bihar"].districtData;
        setAndhra(getAndhraPradeshDistrictData);
        setArunachal(getInnerDistrictData);
        setAssam(getAssamDistrictData);
        setBihar(getBiharDistrictData);
      })
      .catch((error) => {
        console.log("Error");
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

  const handleSearch = (e) => {
    const searchTerm = e.toLowerCase();
    Axios.get(baseUrl + "data.json")
      .then((response) => {
        response.data.statewise.filter((getFilteredData) => {
          if (getFilteredData.state.toLowerCase().includes(searchTerm)) {
            return console.log(getFilteredData);
          }
        });
      })
      .catch(function () {
        console.log("error");
      });
  };

  const handleModal = (getTableData) => {
    setStateName(getTableData);
    setModal(true);
  };
  const handleClose = () => {
    setModal(false);
    setShowSelectOptions(false);
  };

  // var runs = [1, 0, 2, 4, 3, 6, 0, 0, 0, 2, 6, 2, 6, 6, 6, 4, 1, 1];
  // var firstOver = 0;
  // var secondOver = 0;
  // var thirdOver = 0;
  // for (var i = 0; i <= 5; i++) {
  //   var result = (firstOver += runs[i]);
  // }
  // for (var i = 6; i <= 11; i++) {
  //   var result1 = (secondOver += runs[i]);
  // }
  // for (var i = 12; i <= 17; i++) {
  //   var result2 = (thirdOver += runs[i]);
  // }
  // var findSum = result + result1 + result2;
  // console.log("Total Score:", findSum);

  function handleStateChange(value) {
    const getSelectValue = value;
    console.log(getSelectValue);
    Axios.get(baseUrl + "state_district_wise.json")
      .then((response) => {
        const getStateWiseInnerData = response.data["Assam"].districtData;
        Object.values(getStateWiseInnerData).filter((innerData) => {
          console.log(innerData);
        });
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  function handleTaskValue(e) {
    const getInputValue = e.target.value;
    setGetTaskValue(getInputValue);
  }
  function handleInputClick() {
    // React.createElement("li", {
    //   attribute: `${setGetTaskValueOnClick(getTaskValue)}`,
    // });
    setGetTaskValueOnClick(getTaskValue);
  }

  return (
    <>
      <Renderlandingsection
        RenderTableHeading={RenderTableHeading}
        getCovidData={getCovidData}
        loading={loading}
        showError={showError}
        searchInput={searchInput}
        showStateNames={showStateNames}
        handleSearch={handleSearch}
        handleStateChange={handleStateChange}
        Andhra={Andhra}
        Arunachal={Arunachal}
        Assam={Assam}
        Bihar={Bihar}
        modal={modal}
        stateName={stateName}
        handleModal={handleModal}
        handleClose={handleClose}
      />
      <Renderimagegrid />
      <Renderthirdsection />
      <Rendertodolist
        handleTaskValue={handleTaskValue}
        getTaskValue={getTaskValue}
        handleInputClick={handleInputClick}
        getTaskValueOnClick={getTaskValueOnClick}
      />
    </>
  );
};

export default Rendermastercomponent;
