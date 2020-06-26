import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "/Users/m_abe/Desktop/Demo/app/components/DetailScreen.js";
import SaveScreen from "./SaveScreen";

const Stack = createStackNavigator();

// お気に入り案件画面遷移 //

export default Item = () => {
  return (
    <Stack.Navigator>
      {/* お気に入り案件一覧 */}

      <Stack.Screen
        name="SaveScreen"
        component={SaveScreen}
        options={{ headerShown: false }}
      />

      {/* お気に入り案件詳細 */}

      <Stack.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
