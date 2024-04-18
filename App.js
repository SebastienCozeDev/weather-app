import {Home} from "./pages/Home";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
