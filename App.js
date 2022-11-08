import React from "react";
import { useAuth0, Auth0Provider } from "react-native-auth0";
import { NativeBaseProvider, extendTheme } from "native-base";
import Root from "./src/navigators/AppNavigator";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

const App = () => {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#550AFB",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      text: {
        400: "#000000"
      }
    },
    // config: {
    //   // Changing initialColorMode to 'dark'
    //   initialColorMode: "dark",
    // },
  });
  return (
    <Auth0Provider
      domain={"portseido-dev.us.auth0.com"}
      clientId={"aRDxVSrtuvXJnPRAA78bC3ZNk4BydR5z"}
    >
      <NativeBaseProvider theme={theme}>
        <Provider store={store}>
          <Root />
        </Provider>
      </NativeBaseProvider>
    </Auth0Provider>
  );
};

export default App;
