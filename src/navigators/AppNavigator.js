import { Button, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import UnauthenticatedNavigator from "./UnauthenticatedNavigator";
import AuthenticatedNavigator from "./AuthenticatedNavigator";

function Root() {
  const { authorize, clearSession, user } = useAuth0();

  const loggedIn = user !== undefined && user !== null;

  return (
    <NavigationContainer>
      {loggedIn && <AuthenticatedNavigator />}
      {!loggedIn && <UnauthenticatedNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Root;
