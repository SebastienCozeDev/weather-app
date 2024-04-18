import {Home} from "./pages/Home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {style} from "./App.style";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import {StatusBar} from "expo-status-bar/build/StatusBar";

export default function App() {
  return (
    <ImageBackground source={backgroundImg} style={style.backgroundImgContainer} imageStyle={style.backgroundImg}>
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
          <Home />
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </ImageBackground>
  );
}
