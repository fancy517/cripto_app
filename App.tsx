import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import StartPage from "./src/views/StartPage";
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
        </RootStack.Navigator>
        {/* <StatusBar style="auto" /> */}
      </PaperProvider>
    </NavigationContainer>
  );
}
