import React from "react";
import { useContext } from "react";
import WeatherContext from "../../contexts/WeatherContext";
import CityContext from "../../contexts/CityContext";
import Footer from "../../components/footer";
import Nav from "../../components/nav";

const Home = () => {
  const { status,location, weather, cloud } = useContext(WeatherContext);

  const {
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
    chinaWeather,
  } = useContext(CityContext);

  return (
    <>
      <Nav/>
      <div className="mt-4 lg:mr-20 lg:ml-20 mr-2 ml-2 ">
        <a
          shadow-xl
          href="#1"
          className="flex flex-col  bg-[color:#111827]  rounded-lg border shadow-md md:flex-row md:max-w-full hover:bg-gray-100 dark:border-gray-700  dark:hover:bg-gray-700"
        >
          <img
            className="object-cover h-[22rem]  w-full md:h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={require(weather.temp < 27
              ? "../../assets/weather-1.avif"
              : "../../assets/weather-2.jpg")}
            alt=""
          />

          {status ? (
            <div className="flex flex-col flex-wrap md:flex-row pt-10 p-4   leading-normal text-[color:white] ">
              {cloud.main !== "Clouds" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12  mr-10"
                  viewBox="0 0 20 20"
                  fill="#EBED5A"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12  mr-10"
                  viewBox="0 0 20 20"
                  fill="#706C6F"
                >
                  <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                </svg>
              )}
              <h5 className="mb-2 text-4xl md:text-5xl font-bold md:mr-20  tracking-tight text-gray-900 dark:text-white">
                {location.name}
              </h5>
              <h5 className="mb-3 text-3xl md:text-3xl font-bold md:ml-30 text-gray-700 dark:text-gray-400">
                {`Temperature: ${weather.temp} \u00B0C`}
              </h5>
              <p className="mb-3 text-xl  md:text-2xl md:ml-10 font-normal text-gray-700 dark:text-gray-400 capitalize">
                {`Weather : ${cloud.description}`}
              </p>
              {weather.temp > 29 ? (
                <h3 className="md:ml-40 text-5xl font-bold d-none hidden md:flex text-center">
                  Wear something light, it's gonna be Sunny!
                </h3>
              ) : (
                <h3 className="md:ml-40 text-5xl font-bold d-none hidden md:flex text-center">
                  Its probably gonna rain, Umbrella?
                </h3>
              )}
            </div>
          ) : (
            <div className="flex flex-col text-[color:white] md:pl-10 p-5  justify-center">
              <h1 className="font-bold  md:text-3xl">
                Can't display your location...
              </h1>
              <p className="text-sm md:text-xl">
                Please refresh and allow location access
              </p>
            </div>
          )}
        </a>
        <div>
          <h1 className="text-5xl mt-20 font-bold">Top Cities</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-10 mb-10">
          <div className="max-w-sm w-full lg:max-w-full shadow-2xl shadow-inner  lg:flex mt-5  ">
            <img
              className="object-cover h-[22rem]  w-full md:h-60 rounded-t-lg md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
              src={
                "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
              alt=""
            />
            <div className="border-r border-b border-l border-gray-400 bg-[color:#111827] text-[color:white] lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="md:mb-8">
                {parisWeather.temp < 27 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#EBED5A"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#706C6F"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                <h5 className="text-2xl font-bold text-gray-600 flex items-center">
                  {parisData.name}
                </h5>
                <div className="text-gray-900  text-sm mt-3 mb-2">
                  <p>{`Temperature: ${parisWeather.temp} \u00B0C `}</p>
                </div>
                <div className="text-gray-900  text-sm capitalize ">
                  <p>{`Weather: ${parisCloud.description} `}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full shadow-2xl  lg:flex mt-5  ">
            <img
              className="object-cover h-[22rem]  w-full md:h-60 rounded-t-lg md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
              src={
                "https://images.unsplash.com/photo-1597740049284-388659a41286?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              }
              alt=""
            />
            <div className="border-r border-b border-l border-gray-400 bg-[color:#111827] text-[color:white] lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="md:mb-8">
                {manCloud.temp < 27 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#EBED5A"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#706C6F"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                <h5 className="text-2xl font-bold text-gray-600 flex items-center">
                  {manData.name}
                </h5>
                <div className="text-gray-900 text-sm mt-3 mb-2">
                  <p>{`Temperature: ${manWeather.temp} \u00B0C`}</p>
                </div>
                <div className="text-gray-900 text-sm   capitalize">
                  <p>{`Weather: ${manCloud.description}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full shadow-2xl shadow-inner lg:flex mt-5  ">
            <img
              className="object-cover h-[22rem]  w-full md:h-60 rounded-t-lg md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
              src={
                "https://images.unsplash.com/photo-1552337125-0c43e12efec0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
              }
              alt=""
            />
            <div className="border-r border-b border-l border-gray-400 bg-[color:#111827] text-[color:white] lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {nyWeather.temp < 27 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#EBED5A"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#706C6F"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                <h5 className="text-2xl font-bold text-gray-600 flex items-center">
                  {nyData.name}
                </h5>
                <div className="text-gray-900 text-sm mt-3 mb-2">
                  <p>{`Temperature: ${nyWeather.temp} \u00B0C`}</p>
                </div>
                <div className="text-gray-900 text-sm   capitalize">
                  <p>{`Weather: ${nyCloud.description}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full shadow-2xl shadow-inner lg:flex mt-5  ">
            <img
              className="object-cover h-[22rem]  w-full md:h-60 rounded-t-lg md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
              src={
                "https://images.unsplash.com/photo-1618828665347-d870c38c95c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
              }
              alt=""
            />
            <div className="border-r border-b border-l border-gray-400 bg-[color:#111827] text-[color:white] lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {lagosWeather.temp < 27 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#EBED5A"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#706C6F"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                <h5 className="text-2xl font-bold text-gray-600 flex items-center">
                  {lagosData.name}
                </h5>
                <div className="text-gray-900 text-sm mt-3 mb-2">
                  <p>{`Temperature: ${lagosWeather.temp} \u00B0C`}</p>
                </div>
                <div className="text-gray-900 text-sm   capitalize">
                  <p>{`Weather: ${lagosCloud.description}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full shadow-2xl shadow-inner lg:flex mt-5  ">
            <img
              className="object-cover h-[22rem]  w-full md:h-60 rounded-t-lg md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
              src={
                "https://images.unsplash.com/photo-1585208798174-6cedd86e019a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80"
              }
              alt=""
            />
            <div className="border-r border-b border-l border-gray-400 bg-[color:#111827] text-[color:white] lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {lisbonWeather.temp < 27 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#EBED5A"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#706C6F"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                <h5 className="text-2xl font-bold text-gray-600 flex items-center">
                  {lisbonData.name}
                </h5>
                <div className="text-gray-900 text-sm mt-3 mb-2">
                  <p>{`Temperature: ${lisbonWeather.temp} \u00B0C`}</p>
                </div>
                <div className="text-gray-900 text-sm   capitalize">
                  <p>{`Weather: ${lisbonCloud.description}`}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-sm w-full lg:max-w-full shadow-2xl shadow-inner lg:flex mt-5  ">
            <img
              className="object-cover h-[22rem]  w-full md:h-60 rounded-t-lg md:h-auto lg:w-48 md:rounded-none md:rounded-l-lg"
              src={
                "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              }
              alt=""
            />
            <div className="border-r border-b border-l border-gray-400 bg-[color:#111827] text-[color:white] lg:border-l-0 lg:border-t lg:border-gray-400  rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                {chinaWeather.temp < 27 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#EBED5A"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12  mr-10"
                    viewBox="0 0 20 20"
                    fill="#706C6F"
                  >
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                  </svg>
                )}
                <h5 className="text-2xl font-bold text-gray-600 flex items-center">
                  {chinaData.name}
                </h5>
                <div className="text-gray-900 text-sm mt-3 mb-2">
                  <p>{`Temperature: ${chinaWeather.temp} \u00B0C`}</p>
                </div>
                <div className="text-gray-900 text-sm   capitalize">
                  <p>{`Weather: ${chinaCloud.description}`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
