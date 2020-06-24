import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// 案件詳細 //

const DetailScreen = () => {
  return (
    <View style={styles.ItemContainer}>
      <View style={styles.LeftContainer}>
        <Image style={{ width: 100, height: 100 }} />
      </View>
      <View style={styles.RightContainer}>
        <Text numberOfLines={3}>hello</Text>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  ItemContainer: {
    height: 200,
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
