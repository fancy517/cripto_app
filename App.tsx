import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import ListOfTokens from "./src/views/ListOfTokens";
import TicketDetails from "./src/views/TicketDetails";
import RootStack from "./src/helpers/root.stack";

function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <RootStack.Navigator initialRouteName="ListOfTokens">
          <RootStack.Screen
            name="ListOfTokens"
            component={ListOfTokens}
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

export default App;
// export { default } from "./.storybook";
