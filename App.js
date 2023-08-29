import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WebViewApp from "./src/components/WebViewScreen ";
import { APP_NAME } from "./src/config/env/env";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WebView">
        <Stack.Screen name={APP_NAME} component={WebViewApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
