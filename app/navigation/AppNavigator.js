import * as React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";
import Chat from "../ChatScreens/Chat.js";
import SearchBar from "../components/SearchBar.js";
import Item from "../components/Item.js";
import Save from "../Save/Save.js";

// スクリーン実装 //

// 案件一覧 //

function ItemScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ height: 65 }}>
        <SearchBar />
      </View>
      <View style={{ flex: 1 }}>
        <Item />
      </View>
    </SafeAreaView>
  );
}

// お気に入り //

function SaveScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Save />
    </View>
  );
}

// チャット //

function ChatScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Chat />
    </View>
  );
}

// ゲーム //

function GameScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Game!</Text>
    </View>
  );
}

// プロフィール //

function GuildScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Guild!</Text>
    </View>
  );
}

// 下のタブナビゲーション機能 //

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* 案件一覧タブナビゲーション */}

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

        {/* お気に入りタブナビゲーション */}

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

        {/* チャットタブナビゲーション */}

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

        {/* ゲームタブナビゲーション */}

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

        {/* プロフィールタブナビゲーション */}

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
