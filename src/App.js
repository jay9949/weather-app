import "./App.css";
import Forecast from "./components/Forecast";
import Inputs from "./components/Inputs";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import TimeAndLoaction from "./components/TimeAndLoaction";
import TopButton from "./components/TopButton";
import getFormattedWeatherData from "./services/WeatherService";

const App = () => {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "mumbai" });
    console.log(data);
  };

  fetchWeather();

  return (
    <>
      <div className=" mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButton />
        <Inputs />

        <TimeAndLoaction />
        <TemperatureAndDetails />
        <Forecast title="hourly forecast" />
        <Forecast title="daily forecast" />
      </div>
    </>
  );
};

export default App;
