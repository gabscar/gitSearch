
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Search from '../screens/searchScreen/Search'
import userScreen from '../screens/UserScreen/UserScreen';

import store from '../store';
import repoScreen from '../screens/repoScreen/repoScreen';
import followerScreen from '../screens/followerScreen/followerScreen';
import  Icon  from 'react-native-vector-icons/Feather'
import followingScreen from '../screens/followingScreen/followingScreen';
import userRedirectScreen from '../screens/UserScreen/UserRedirectScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();







function Home() {
  
    return (
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarButton: [
          "HomeRedirect",        
        ].includes(route.name)
          ? () => {
              return null;
            }
          : undefined,
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
        <Tab.Screen name= "HomeRedirect" component = {userRedirectScreen}  options={{showTab:false}}/> 
      </Tab.Navigator>
    );
  }
  
export default function Routes() {
  
  
    return (
    
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#1F1F1F',
            },
            headerTintColor: '#fff',
            headerTitleAlign:'left',
            title: '#teste'
          }} >
            <Stack.Screen name="search" component={Search} options={{
                headerShown: false,
                animationTypeForReplace: store.isLogged ? 'pop' : 'push',
            }}/>
            <Stack.Screen name= "Home" component = {Home} options={{headerShown: false}} />
            
          </Stack.Navigator>
    );
}
  

  