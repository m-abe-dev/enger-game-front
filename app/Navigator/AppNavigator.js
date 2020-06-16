import React from 'react';
import { StyleSheet, Text, View,ScrollView,Button } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from 'react-native-gesture-handler';
import ChatScreen from '../Screens/ChatScreen';
import MessagesScreen from '../Screens/MessagesScreen';


const Stack = createStackNavigator();

export default  AppNavigator = () =>{
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={ChatScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Message" component={MessagesScreen} />
      </Stack.Navigator>
    
    );
}



