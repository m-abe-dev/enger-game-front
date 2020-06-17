import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
import ItemsList from "../components/ItemsList";
import Chats from "../components/Chats.js";
import { SearchBar } from "react-native-elements";

function ItemScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 26 }}>
        <SearchBar />
      </View>
      <View style={{ flex: 1 }}>
        <ItemsList />
      </View>
    </SafeAreaView>
  );
}

function SaveScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Save!</Text>
    </View>
  );
}

function ChatScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Chats />
    </View>
  );
}

function GameScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Game!</Text>
    </View>
  );
}

function GuildScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Guild!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Item"
          component={ItemScreen}
          options={{
            tabBarLabel: "Item",
            tabBarIcon: ({ color }) => (
              <Icon name="search" color={color} size={26} />
            ),
          }}
        />

        <Tab.Screen
          name="Save"
          component={SaveScreen}
          options={{
            tabBarLabel: "Save",
            tabBarIcon: ({ color }) => (
              <Icon name="favorite-border" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color }) => (
              <Icon name="chat" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Game"
          component={GameScreen}
          options={{
            tabBarLabel: "Game",
            tabBarIcon: ({ color }) => (
              <Icon name="videogame-asset" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Guild"
          component={GuildScreen}
          options={{
            tabBarLabel: "Guild",
            tabBarIcon: ({ color }) => (
              <Icon name="home" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
