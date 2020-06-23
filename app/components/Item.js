import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ItemsList from "/Users/m_abe/Desktop/Demo/app/components/ItemsList.js";
import DetailScreen from "/Users/m_abe/Desktop/Demo/app/components/DetailScreen.js";

const Stack = createStackNavigator();

// チャット画面遷移 //

export default Item = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Item"
        component={ItemsList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
