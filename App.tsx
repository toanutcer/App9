import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home9 from './src/components/Home9/Home9';
import Scrences from './src/components/ShortcutOfCanh/MainShortcutOfCanh';
import Tab from './Tab';
import QlPhong from './src/components/Phong/QLPhong';
import Users from './src/components/Home9/Users/Users';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Home9"
          component={Home9}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Scrences"
          component={Scrences}
        />
        <Stack.Screen name="QlPhong" component={QlPhong} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
