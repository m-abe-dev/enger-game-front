import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChatScreen from "/Users/m_abe/Desktop/Demo/app/ChatScreens/ChatScreen.js";
import MessagesScreen from "/Users/m_abe/Desktop/Demo/app/ChatScreens/MessagesScreen.js";

const Stack = createStackNavigator();

// チャット画面遷移 //

export default Chat = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ChatScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Message" component={MessagesScreen} />
    </Stack.Navigator>
  );
};
