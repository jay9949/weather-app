import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLoaction from "./components/TimeAndLoaction";
import TopButton from "./components/TopButton";
import getFormattedWeatherData from "./services/WeatherService";

const App = () => {
  const [query, setQuery] = useState({ q: "london" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <>
      <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButton />
        <Inputs />

        {weather && (
          <>
            <TimeAndLoaction weather={weather} />
            <TemperatureAndDetails weather={weather} />
            <Forecast title="hourly forecast" />
            <Forecast title="daily forecast" />
          </>
        )}
      </div>
    </>
  );
};

export default App;
