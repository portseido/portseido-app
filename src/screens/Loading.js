import { View } from "react-native";
import { Spinner } from "native-base";

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Spinner size="sm" />
    </View>
  );
}

export default LoadingScreen;
