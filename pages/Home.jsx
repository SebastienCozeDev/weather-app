import {Text, View} from "react-native";
import {style} from "./Home.style";
import {getCurrentPositionAsync, requestForegroundPermissionsAsync} from "expo-location";
import {useState, useEffect} from "react";

export function Home() {
  const [coords, setCoords] = useState({});

  useEffect(() => {
    getUserCoords().then();
  }, []);

  async function getUserCoords() {
    let {status} = await requestForegroundPermissionsAsync()
    if (status === "granted") {
      const location = await getCurrentPositionAsync();
      setCoords({ lat: location.coords.latitude, lng: location.coords.longitude });
    } else {
      setCoords({ lat: "48.85", lng: "2.35" });
    }
  }

  console.log(coords);

  return (
    <>
      <View style={style.basicWeatherContainer}>
      </View>
      <View style={style.searchbarContainer}></View>
      <View style={style.advancedWeatherContainer}></View>
    </>
  );
}