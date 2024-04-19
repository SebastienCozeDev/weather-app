import {Home} from "./pages/Home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {style} from "./App.style";
import { ImageBackground } from "react-native";
import backgroundImg from "./assets/background.png";
import {StatusBar} from "expo-status-bar/build/StatusBar";
import AlataRegular from "./assets/fonts/Alata-Regular.ttf";
import {useFonts} from "expo-font";

/**
 * App component.
 *
 * @return {JSX.Element} The JSX element.
 *
 * @constructor
 */
export default function App() {
  const [isFontLoaded] = useFonts({
    "Alata-Regular": AlataRegular,
  });

  return (
    <ImageBackground source={backgroundImg} style={style.backgroundImgContainer} imageStyle={style.backgroundImg}>
      <SafeAreaProvider>
        <SafeAreaView style={style.container}>
          { isFontLoaded ? <Home /> : null }
        </SafeAreaView>
      </SafeAreaProvider>
      <StatusBar style="light" />
    </ImageBackground>
  );
}
