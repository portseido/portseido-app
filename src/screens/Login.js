import { View, Text, Button, StyleSheet } from "react-native";
import { useAuth0 } from "react-native-auth0";

function LoginScreen() {
  const { authorize } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize({ scope: "openid profile email" });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Text>You are not logged in</Text>

      <Button onPress={onLogin} title="Log In" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default LoginScreen;
