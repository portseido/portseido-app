import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login";

const Stack = createNativeStackNavigator();

function UnauthenticatedNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default UnauthenticatedNavigator;
