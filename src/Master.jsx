import React, { useState, useEffect, useRef } from "react";
import Renderlandingsection from "./Components/Landing/Index";
import Renderimagegrid from "./Components/Landing/Image-grid";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Renderthirdsection from "./Components/Landing/Third-section";
import Axios from "axios";
import { baseUrl } from "./Components/Landing/Utils/Baseurl";
import { countryWiseUrl } from "./Components/Landing/Utils/Baseurl";
import { Rendertodolist } from "./Components/Landing/Fourth-section";

const Rendermastercomponent = () => {
  const [getCovidData, setGetCovidData] = useState([]);
  const [loading, setLoading] = useState();
  const [showError, setShowError] = useState(false);
  const [showSelectOptions, setShowSelectOptions] = useState(false);
  const [showStateNames, setShowStateNames] = useState({});
  const [Andaman, setAndaman] = useState("");
  const [Andhra, setAndhra] = useState("");
  const [Arunachal, setArunachal] = useState("");
  const [Assam, setAssam] = useState("");
  const [Bihar, setBihar] = useState("");
  const searchInput = useRef(null);
  const [modal, setModal] = useState(false);
  const [stateName, setStateName] = useState("");
  const [getTaskValue, setGetTaskValue] = useState("");
  const [getTaskValueOnClick, setGetTaskValueOnClick] = useState("");
  const [getDistrictNames, setGetDistrictNames] = useState("");
  const [activeData, setActiveData] = useState();
  const [recoveredData, setRecoveredData] = useState();
  const [confirmedData, setConfirmedData] = useState();
  const [deathData, setDeathData] = useState();
  const [countries, setCountries] = useState([]);
  const [getConfirmedCases, setGetConfirmedCases] = useState(0);
  const [getActiveCases, setGetActiveCases] = useState(0);
  const [getRecoveredCases, setGetRecoveredCases] = useState(0);
  const [getDeathCases, setGetDeathCases] = useState(0);
  const [countryName, setCountryName] = useState("");
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
        const getAndamanDistrictData =
          response.data["Andaman and Nicobar Islands"].districtData;
        const getAndhraPradeshDistrictData =
          response.data["Andhra Pradesh"].districtData;
        const getInnerDistrictData =
          response.data["Arunachal Pradesh"].districtData;
        const getAssamDistrictData = response.data["Assam"].districtData;
        const getBiharDistrictData = response.data["Bihar"].districtData;
        setAndaman(getAndamanDistrictData);
        setAndhra(getAndhraPradeshDistrictData);
        setArunachal(getInnerDistrictData);
        setAssam(getAssamDistrictData);
        setBihar(getBiharDistrictData);
      })
      .catch((error) => {
        console.log("Error");
      });

    Axios.get(countryWiseUrl + "countries?yesterday=&sort=")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
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
    let resultoFFilteredArray = [];
    Axios.get(baseUrl + "data.json")
      .then((response) => {
        resultoFFilteredArray = response.data.statewise.filter(
          (getFilteredData) => {
            return getFilteredData.state.toLowerCase().includes(searchTerm);
          }
        );
        setGetCovidData(resultoFFilteredArray);
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
    setGetDistrictNames(false);
    setActiveData(false);
    setRecoveredData(false);
    setConfirmedData(false);
    setDeathData(false);
  };

  function handleStateChange(value) {
    const getSelectValue = value;
    const getStateName = stateName;
    setLoading(true);
    Axios.get(baseUrl + "state_district_wise.json")
      .then((response) => {
        const nameOfDistrict = response.data[`${getStateName}`].districtData;
        Object.keys(nameOfDistrict).filter((districtNames) => {
          if (districtNames === getSelectValue) {
            setGetDistrictNames(districtNames);
          }
        });
        setLoading(false);
        const getStateWiseInnerData =
          response.data[`${getStateName}`].districtData[`${getSelectValue}`];
        setActiveData(getStateWiseInnerData.active);
        setRecoveredData(getStateWiseInnerData.recovered);
        setConfirmedData(getStateWiseInnerData.confirmed);
        setDeathData(getStateWiseInnerData.deceased);
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
  function handleCountries(getCountriesName) {
    setLoading(true);
    Axios.get(countryWiseUrl + "countries?yesterday=&sort=")
      .then((response) => {
        setLoading(false);
        response.data.map((getFilteredCountryData) => {
          if (getFilteredCountryData.country == getCountriesName) {
            setCountryName(getCountriesName);
            setGetConfirmedCases(getFilteredCountryData.cases);
            setGetActiveCases(getFilteredCountryData.active);
            setGetRecoveredCases(getFilteredCountryData.recovered);
            setGetDeathCases(getFilteredCountryData.deaths);
          }
          return null;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleCountrySearch(getCountryNames) {
    const setGetCountryName = getCountryNames.toLowerCase();
    let result = [];
    Axios.get(countryWiseUrl + "countries?yesterday=&sort=")
      .then((response) => {
        result = response.data.filter((getFilteredCountryNames) => {
          return getFilteredCountryNames.country
            .toLowerCase()
            .includes(setGetCountryName);
        });
        setCountries(result);
      })
      .catch((error) => {
        console.log(error);
      });
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
        Andaman={Andaman}
        Andhra={Andhra}
        Arunachal={Arunachal}
        Assam={Assam}
        Bihar={Bihar}
        modal={modal}
        stateName={stateName}
        handleModal={handleModal}
        handleClose={handleClose}
        getDistrictNames={getDistrictNames}
        activeData={activeData}
        recoveredData={recoveredData}
        confirmedData={confirmedData}
        deathData={deathData}
      />
      <Renderimagegrid
        countries={countries}
        handleCountries={handleCountries}
        getConfirmedCases={getConfirmedCases}
        getActiveCases={getActiveCases}
        getRecoveredCases={getRecoveredCases}
        getDeathCases={getDeathCases}
        countryName={countryName}
        loading={loading}
        handleCountrySearch={handleCountrySearch}
      />
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
