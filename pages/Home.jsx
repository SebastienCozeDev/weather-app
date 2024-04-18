import {Text, View} from "react-native";
import {style} from "./Home.style";

export function Home() {
  return (
    <>
      <View style={style.basicWeatherContainer}>
        <Text style={{ fontSize: 60, color: "white", }}>Hello</Text>
      </View>
      <View style={style.searchbarContainer}></View>
      <View style={style.advancedWeatherContainer}></View>
    </>
  );
}