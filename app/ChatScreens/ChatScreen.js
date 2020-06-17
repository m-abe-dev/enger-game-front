import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { FlatList } from "react-native-gesture-handler";
import ChatItems from "./ChatItems";
import articles from "../dummies/articles.json";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen = (props) => {
  const { navigation } = props;
  const items = articles.map((articles, index) => {
    return (
      <ChatItems
        imageUrl={articles.urlToImage}
        title={articles.title}
        author={articles.author}
        key={index}
      />
    );
  });
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ChatItems
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Message")}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};
