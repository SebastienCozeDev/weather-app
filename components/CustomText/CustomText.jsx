import {Text} from "react-native";
import {s} from "./CustomText.style";

export function CustomText({ children, style }) {
  return <Text style={[s.text, style]}>{children}</Text>;
}