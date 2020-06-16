import React from 'react';
import { StyleSheet, Text, View,ScrollView,Button, ViewComponent,Image, SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Listitem from './Listitem';
import articles from '../dummies/articles.json';



const Stack = createStackNavigator();

const styles = StyleSheet.create({


  container:{
    flex:1,
    
  },
 
});




export default  ChatScreen =(props)=> {
  const {navigation} = props;
  const items = articles.map((articles,index) => {
    return(
    <Listitem 
      imageUrl={articles.urlToImage}
      title={articles.title}
      author={articles.author}
      key={index}
    />
  )})
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
       data={articles}
       renderItem={({item}) => (
       <Listitem 
          imageUrl={item.urlToImage}
          title={item.title}
          author={item.author}
          onPress={()=> navigation.navigate("Message")}
    />
      )}
        keyExtractor={(item,index) => index.toString()}
    />
    </SafeAreaView>
  );
}