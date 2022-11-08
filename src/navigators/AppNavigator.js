import { StyleSheet } from "react-native";
import { useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth0 } from "react-native-auth0";
import UnauthenticatedNavigator from "./UnauthenticatedNavigator";
import AuthenticatedNavigator from "./AuthenticatedNavigator";
import LoadingScreen from "../screens/Loading";


function Root() {
  const { user } = useAuth0();

  // CHECK THAT AUTH0 IS LOADING CREDENTIAL OR NOT
  const timesRun = useRef(0);
  if (timesRun.current < 2) {
    timesRun.current += 1;
  }
  const isLoading = (timesRun.current < 2)

  if (isLoading) {
    return <LoadingScreen />
  }
  
  return (
    <NavigationContainer>
      {user && <AuthenticatedNavigator />}
      {!user && <UnauthenticatedNavigator />}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default Root;
