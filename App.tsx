import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PaperProvider } from "react-native-paper";
import StartPage from "./src/views/StartPage";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Stack.Navigator initialRouteName="StartPage">
          <Stack.Screen name="StartPage" component={StartPage} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </PaperProvider>
    </NavigationContainer>
  );
}
