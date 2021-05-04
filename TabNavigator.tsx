import * as React from 'react';
import {Text, View, TouchableOpacity, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import Play from './src/components/Play/Play';
import Profile from './src/components/Profile/Profile';
import TabComponent from './Tab';
const Tab = createBottomTabNavigator();
function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={StackNavigator}
        options={{
          tabBarButton: props => <TabComponent label="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="play"
        component={Play}
        options={{
          tabBarButton: props => <TabComponent label="play" {...props} />,
        }}
      />
      <Tab.Screen
        name="profile"
        component={Profile}
        options={{
          tabBarButton: props => <TabComponent label="profile" {...props} />,
        }}
      />
    </Tab.Navigator>
  );
}
export default App;
