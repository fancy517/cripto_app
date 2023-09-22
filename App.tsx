import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import StartPage from "./src/views/StartPage";
import TiketDetails from "./src/views/TiketDetails";
import RootStack from "./src/helpers/root.stack";

// const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootStack.Navigator initialRouteName="StartPage">
          <RootStack.Screen
            name="StartPage"
            component={StartPage}
            options={{ headerShown: false }}
          />
          <RootStack.Screen
            component={TiketDetails}
            name="TiketDetails"
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
