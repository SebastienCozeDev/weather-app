import {Text, View} from "react-native";
import {style} from "./Home.style";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import {useState, useEffect} from "react";
import {WeatherAPI} from "../api/weather";

/**
 * Home component.
 *
 * @return {JSX.Element} The JSX element.
 *
 * @constructor
 */
export function Home() {
  const [coords, setCoords] = useState({});
  const [weather, setWeather] = useState();

  useEffect(() => {
    getUserCoords().then();
  }, []);

  useEffect(() => {
    if (coords) {
      fetchWeather(coords).then();
    }
  }, [coords]);

  /**
   * Get the user's coordinates.
   *
   * @return {Promise<void>} The user's coordinates.
   */
  async function getUserCoords() {
    let {status} = await requestForegroundPermissionsAsync()
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({ lat: location.coords.latitude, lng: location.coords.longitude });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  async function fetchWeather(coordinates) {
    const weatherResponse = await WeatherAPI.fetchWeatherFromCoords(coordinates);
    setWeather(weatherResponse);
  }

  console.log(weather);

  return (
    <>
      <View style={style.basicWeatherContainer}>
      </View>
      <View style={style.searchbarContainer}></View>
      <View style={style.advancedWeatherContainer}></View>
    </>
  );
}