import * as React from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Play from './src/components/Play/Play';
import Profile from './src/components/Profile/Profile';
import TabComponent from './Tab';
import Home9 from './src/components/Home9/Home9';
const Tab = createBottomTabNavigator();
function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home9}
        options={{
          tabBarButton: props => <TabComponent label="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Play"
        component={Play}
        options={{
          tabBarButton: props => <TabComponent label="play" {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarButton: props => <TabComponent label="profile" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default App;
