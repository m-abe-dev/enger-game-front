import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";

// 案件一覧レイアウト //

const Stack = createStackNavigator();

const Items = ({ imgUrl, author, title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ItemContainer}>
        <View style={styles.LeftContainer}>
          {!!imgUrl && (
            <Image
              style={{ width: 100, height: 100 }}
              source={{ uri: imgUrl }}
            />
          )}
        </View>
        <View style={styles.RightContainer}>
          <Text numberOfLines={3}>{title}</Text>
          <Text style={styles.Subtext}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Items;

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
