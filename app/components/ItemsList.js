import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, SafeAreaView } from "react-native";
import Items from "/Users/m_abe/Desktop/Demo/app/components/Items.js";
import { createStackNavigator } from "@react-navigation/stack";
import axios from "axios";

// ----- 案件一覧 ----- //

const Stack = createStackNavigator();

const URL = `http://newsapi.org/v2/top-headlines?country=jp&apiKey=7fd14728bc70467d9969c22564ddd41b`;
const ItemsList = (props) => {
  const { navigation } = props;
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);
  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
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

export default ItemsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ItemContainer: {
    height: 100,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
  },
  LeftContainer: {
    width: 100,
  },
  RightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  Text: {
    fontSize: 16,
  },
  Subtext: {
    fontSize: 12,
    color: "gray",
  },
});
