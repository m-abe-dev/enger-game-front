import React from "react";
import { StyleSheet, Text, View } from "react-native";

// 案件詳細 //

const DetailScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Detail Screen</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
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
