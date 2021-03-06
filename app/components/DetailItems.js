import React, { PureComponent } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  cardText: {
    fontSize: 30,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 10,
    marginLeft: "5%",
    width: "90%",
    shadowColor: "#000",
    shadowOpacity: 1,
    shadowOffset: {
      width: 3,
      height: 3,
    },
  },
  cardImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

class ItemsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.getDataFromAPI();
  }

  getDataFromAPI = async () => {
    const endpoint = "https://jsonplaceholder.typicode.com/photos?_limit=20";
    const res = await fetch(endpoint);
    const data = await res.json();
    this.setState({ items: data });
  };

  _renderItem = ({ item, index }) => {
    let { cardText, card, cardImage } = styles;
    return (
      <TouchableOpacity style={card}>
        <Image style={cardImage} source={{ uri: item.url }} />
        <Text style={cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };
  render() {
    let { container, loader } = styles;
    let { items } = this.state;
    if (items.length === 0) {
      return (
        <View style={loader}>
          <ActivityIndicator size="large" />
        </View>
      );
    }
    return (
      <FlatList
        style={container}
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this._renderItem}
      />
    );
  }
}

export default Detail;
