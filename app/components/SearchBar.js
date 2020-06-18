import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  SafeAreaView,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

export default class SearchBar extends Component {
  state = {
    searchBarFocused: false,
  };
  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };

  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            height: 60,
            justifyContent: "center",
            paddingHorizontal: 5,
          }}
        >
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              height: 50,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
            }}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
              }
            >
              <Icon
                name={
                  this.state.searchBarFocused ? "md-arrow-back" : "ios-search"
                }
                style={{ fontSize: 24 }}
              />
            </Animatable.View>
            <TextInput
              placeholder="Search"
              style={{ fontSize: 24, marginLeft: 15 }}
            />
          </Animatable.View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
