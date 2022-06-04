import { createContext, useState, useEffect } from "react";
import React from "react";
import axios from "axios";

const WeatherContext = createContext({
  lat: null,
  setLat: () => null,
  lng: null,
  setng: () => null,
  location: "",
  setLocation: "",
});

export const WeatherProvider = ({ children }) => {
    const API_Key = process.env.REACT_APP_API_KEY
  const [pos, setPos] = useState({ lat: null, lng: null });
  const [status, setStatus] = useState(false);
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState("");
  const [cloud,setCloud] = useState("")
  const { lat, lng } = pos;

  const value = { status, location, weather ,cloud};



  
  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setPos(newPos);
       
        },
      );
    }
  }, []);

  useEffect(() => {
    
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_Key}`
      )
      
      .then((response) => {
        if (response) {
          setStatus(true);
        }
        const userLoc = response.data;
        console.log(response.data);
      
        const userWeather = response.data.main;
        const userCloud = response.data.weather[0];
        setLocation(userLoc);
        setWeather(userWeather);
        setCloud(userCloud);
      });
  }, [lat, lng,]);

  
  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};

export default WeatherContext;
