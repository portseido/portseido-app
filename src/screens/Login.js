import { View, Image, Text, StyleSheet, Linking } from "react-native";
import { Button } from "native-base";
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
  const onSignup = async () => {
    try {
      await authorize({
        scope: "openid profile email",
        screen_hint: "signup",
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/portseido_logo_no_text.png")}
      />
      <Text style={styles.title}>Welcome to Portseido</Text>
      <Button style={styles.button} onPress={onLogin} size="lg">
        Log In
      </Button>
      <Button onPress={onSignup} variant="outline" size="lg">
        Create Account
      </Button>
      <Text style={styles.subtitle}>
        By tapping Login or Create Account, I agree to Portseido's{" "}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL("https://www.portseido.com/terms-conditions");
          }}
        >
          Terms and Conditions
        </Text>{" "}
        and{" "}
        <Text
          style={styles.hyperlinkStyle}
          onPress={() => {
            Linking.openURL("https://www.portseido.com/privacy");
          }}
        >
          Privacy Policy
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    marginBottom: 40,
  },
  subtitle: {
    marginTop: 30,
  },
  hyperlinkStyle: {
    textDecorationLine: "underline",
  },
  button: {
    marginBottom: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
});

export default LoginScreen;
