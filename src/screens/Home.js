import * as React from "react";
import { Text, View, Button } from "react-native";
import { useAuth0 } from "react-native-auth0";

function HomeScreen() {
  const { clearSession } = useAuth0();

  const onLogout = async () => {
    try {
      await clearSession();
    } catch (e) {
      console.log("Log out cancelled");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button onPress={onLogout} title={"Log Out"} />
    </View>
  );
}

export default HomeScreen;
