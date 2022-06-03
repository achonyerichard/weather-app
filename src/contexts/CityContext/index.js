import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const CityContext = createContext({
  manData: "",
  setManData: () => "",
});

export const CityProvider = ({ children }) => {
  const [manData, setManData] = useState("");
  const [manWeather, setManWeather] = useState("");
  const [manCloud, setManCloud] = useState("");

  const [parisData, setParisData] = useState("");
  const [parisWeather, setParisWeather] = useState("");
  const [parisCloud, setParisCloud] = useState("");

  const [nyData, setNyData] = useState("");
  const [nyWeather, setNyWeather] = useState("");
  const [nyCloud, setNyCloud] = useState("");

  const [lagosData, setLagosData] = useState("");
  const [lagosWeather, setLagosWeather] = useState("");
  const [lagosCloud, setLagosCloud] = useState("");

  const [lisbonData, setLisbonData] = useState("");
  const [lisbonWeather, setLisbonWeather] = useState("");
  const [lisbonCloud, setLisbonCloud] = useState("");

  const [chinaData, setChinaData] = useState("");
  const [chinaWeather, setChinaWeather] = useState("");
  const [chinaCloud, setChinaCloud] = useState("");
  const value = {
    manData,
    manWeather,
    manCloud,
    parisData,
    parisWeather,
    parisCloud,
    nyData,
    nyCloud,
    nyWeather,
    lagosData,
    lagosCloud,
    lagosWeather,
    lisbonData,
    lisbonWeather,
    lisbonCloud,
    chinaData,
    chinaCloud,
    chinaWeather
  };

  const endpoints = [
    "https://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=64ecdec57d8058822462e8b9b44efa69&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=64ecdec57d8058822462e8b9b44efa69&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?q=Washington&appid=64ecdec57d8058822462e8b9b44efa69&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=64ecdec57d8058822462e8b9b44efa69&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=64ecdec57d8058822462e8b9b44efa69&units=metric",
    "https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=64ecdec57d8058822462e8b9b44efa69&units=metric",
  ];

  useEffect(() => {
    // console.log("hi");
    axios.all(endpoints.map((promise) => axios.get(promise))).then(
      axios.spread((manchester, paris, washington, lagos, lisbon, china) => {
        const manLoc = manchester.data;
        const manMain = manchester.data.main;
        const manIndex = manchester.data.weather[0];

        const parisLoc = paris.data;
        const parisMain = paris.data.main;
        const parisIndex = paris.data.weather[0];

        const washingtonLoc = washington.data;
        const washingtonMain = washington.data.main;
        const washingtonIndex = washington.data.weather[0];

        const lagosLoc = lagos.data;
        const lagosMain = lagos.data.main;
        const lagosIndex = lagos.data.weather[0];

        const lisbonLoc = lisbon.data;
        const lisbonMain = lisbon.data.main;
        const lisbonIndex = lisbon.data.weather[0];

        const chinaLoc = china.data;
        const chinaMain = china.data.main;
        const chinaIndex = china.data.weather[0];

        setParisData(parisLoc);
        setParisWeather(parisMain);
        setParisCloud(parisIndex);

        setManData(manLoc);
        setManWeather(manMain);
        setManCloud(manIndex);

        setNyData(washingtonLoc);
        setNyWeather(washingtonMain);
        setNyCloud(washingtonIndex);

        setLagosData(lagosLoc)
        setLagosWeather(lagosMain)
        setLagosCloud(lagosIndex)

        setLisbonData(lisbonLoc)
        setLisbonWeather(lisbonMain)
        setLisbonCloud(lisbonIndex)

        setChinaData(chinaLoc)
        setChinaWeather(chinaMain)
        setChinaCloud(chinaIndex)


      })
    );
  }, []);

  return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
};

export default CityContext;
