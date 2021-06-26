import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, PlayScreen, ProfileScreen} from '../Containers';
import ScanHCScreen from '../Containers/Profile/ScanHC';
import ScanRoomScreen from '../Containers/Profile/ScanRoom';
import ScanDeviceScreen from '../Containers/Profile/ScanDevice';
import CreateRoomScreen from '../Containers/Profile/ScanRoom/CreateRoom';

interface MainNavigationProps {}
const Tab = createBottomTabNavigator();
const MainNavigation = (props: MainNavigationProps) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Profile"
        component={ProfileScreen}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Play"
        component={PlayScreen}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="ScanHC"
        component={ScanHCScreen}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="ScanRoom"
        component={ScanRoomScreen}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="ScanDevice"
        component={ScanDeviceScreen}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="CreateRoom"
        component={CreateRoomScreen}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {},
});
