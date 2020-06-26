import React from "react";
import { useSelector } from "react-redux";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Items from "../components/Items.js";

// お気に入り画面 //

const SaveScreen = (props) => {
  const { navigation } = props;
  const user = useSelector((state) => state.user);
  const { clips } = user;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({ item }) => (
          <Items
            imgUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() =>
              navigation.navigate("DetailScreen", { article: item })
            }
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default SaveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
