import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import StartPage from "./src/views/StartPage";
import TicketDetails from "./src/views/TicketDetails";
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
            component={TicketDetails}
            name="TicketDetails"
            options={{ headerShown: false }}
            
          />
        </RootStack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}
