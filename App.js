import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from './src/screens/searchScreen/Search'
import userScreen from './src/screens/UserScreen/UserScreen';
import { Provider } from 'react-redux';
import store from './src/store';
import repoScreen from './src/screens/repoScreen/repoScreen';
import followerScreen from './src/screens/followerScreen/followerScreen';
import  Icon  from 'react-native-vector-icons/Feather'
import followingScreen from './src/screens/followingScreen/followingScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function Home() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home': 'home';
          color = focused ? 'black': 'gray';
          size=25.33
        } else if (route.name === 'Repo') {
          iconName = focused ? 'github' : 'github';
          color = focused ? 'black': 'gray';
          size=27.5
        }else if(route.name === 'Seguidores'){
          iconName = focused ? 'users' : 'users';
          color = focused ? 'black': 'gray';
          size=29.88
        }else if(route.name === 'Seguindo'){
          iconName = focused ? 'users' : 'users';
          color = focused ? 'black': 'gray';
          size=29.88
        }

        // You can return any component that you like here!
        return <Icon name = {iconName} size={size} color={color}/>
      },
    })}
    tabBarOptions={{
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
      width:49,
      height:41,
      iconStyle:{
       flex:1
      },
      showIcon: true,
      labelStyle:{
        fontSize:14,
        fontWeight:'bold',
        padding:14,       
      },
      style:{
          borderTopLeftRadius:21, 
          borderTopRightRadius:21,
          backgroundColor:"#fff",
          position:'absolute',      
          height: 80,
          paddingTop:46, 
          bottom:1, 
      }
      
    }}
    >
      <Tab.Screen name="Home" component={userScreen} />      
      <Tab.Screen name="Repo" component={repoScreen} />      
      <Tab.Screen name="Seguidores" component={followerScreen} />      
      <Tab.Screen name="Seguindo" component={followingScreen} />      
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#1F1F1F',
          },
          headerTintColor: '#fff',
          headerTitleAlign:'left',
          title: '#teste'
        }} >
          <Stack.Screen name="search" component={Search} options={{headerShown: false}}/>
          <Stack.Screen name= "Home" component = {Home} options={{headerShown: false}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
