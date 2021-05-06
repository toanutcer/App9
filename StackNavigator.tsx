import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home9 from './src/components/Home9/Home9';
import Scrences from './src/components/ShortcutOfCanh/MainShortcutOfCanh';
import QlPhong from './src/components/Phong/QLPhong';
import TabNavigator from './TabNavigator';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={TabNavigator}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Scrences"
        component={Scrences}
      />
      <Stack.Screen name="QlPhong" component={QlPhong} />
    </Stack.Navigator>
  );
}

export default StackNavigator;
