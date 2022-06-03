import React from "react";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [data, setData] = useState({});
  const [main, setMain] = useState({});
  const [desc, setDesc] = useState({});
  const [status, setStatus] = useState(false);
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=64ecdec57d8058822462e8b9b44efa69&units=metric`;

  const onLocationChange = (event) => {
    setLocation(event.target.value);
 
 setIsLoading(true);
    
  };

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("hi");
      axios.get(url).then((response) => {
        if (response) {
          setStatus(true);
          setIsLoading(false);
        }
        setData(response.data);
        setMain(response.data.main);
        setDesc(response.data.weather[0]);
        console.log(response.data);
        console.log(response.data.main);
        console.log(data);
      });
      setLocation("");
    }
  };

  return (
    <div className="search">
      <Nav />
      <div className="mb-20 ">
        <div className="md:mx-20 mx-5 md:mb-5 md:mt-20 mt-10 mb-5 ">
          <form action="">
            <div className="grid md:grid-cols-3 grid-cols-1  gap-4 flex justify-center ">
              <div className="md:ml-auto md:mb-6"></div>

              <div className="md:mb-6">
                <input
                  value={location}
                  onChange={onLocationChange}
                  onKeyPress={searchLocation}
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-2
                font-medium
                text-base
                font-light
                text-[color:white]
                text-md
                 bg-clip-padding
                border-2 border-solid border-[color:white]
                rounded
                transition
                ease-in-out
                rounded-2xl
                m-0
                bg-inherit
                capitalize
                placeholder-current
                focus:text-[color:white]  focus:border-grey-200 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Search..."
                />
              </div>
            </div>
          </form>
        </div>
        {!isLoading ? (
          <div
            className={
              status ? "flex justify-center items-center flex-col" : "hidden"
            }
          >
            <div className="glass p-6 md:w-96  mt-10 mx-5  text-[color:white] rounded-lg border shadow-md sm:p-8  dark:border-gray-700">
              <div className="grid  grid-cols-2  md:gap-40 mb-20">
                <div>
                  <h5 className=" text-4xl font-bold pb-2 text-gray-900 dark:text-white">
                    {data.name}
                  </h5>
                  <p className=" text-xl text-base text-gray-500  dark:text-gray-400">
                    {`${main.temp} \u00B0C`}
                  </p>
                </div>
                <div className="md:pt-5 pt-10 pl-20 md:pl-20  ">
                  <p className=" text-2xl text-base rotate-90  text-gray-500  dark:text-gray-400">
                    {desc.main}
                  </p>
                </div>
              </div>
              <div className="grid  grid-cols-2 gap-20  md:gap-40 mt-10">
                <div>
                  <h5 className=" text-base   text-gray-900 dark:text-white">
                   Min Temp
                  </h5>
                  <p className=" md:text-xl  text-lg text-gray-500  dark:text-gray-400">
                    {`${main.temp} \u00B0C`}
                  </p>
                </div>
                <div >
                  <h5 className=" text-base   text-gray-900 dark:text-white">
                    Max Temp
                  </h5>
                  <p className=" md:text-lg text-lg text-gray-500  dark:text-gray-400">
                    {`${main.temp} \u00B0C`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div class="text-center">
            <svg
              role="status"
              class="inline w-14 h-14 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
