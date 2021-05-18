import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './src/Home/Home';
import ChonCanh from './src/ChonCanh/ChonCanh';
import Profile from './src/Profile/Profile';
import Play from './src/Play/Play';
import ScanHC from './src/Profile/ScanHC/ScanHC';
import ScanDevice from './src/Profile/ScanDevice/ScanDevice';

const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Play"
        component={Play}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="ScanHC"
        component={ScanHC}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="ScanDevice"
        component={ScanDevice}
      />
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen name="Home" component={HomeTabs} />
        <HomeStack.Screen name="ChonCanh" component={ChonCanh} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
