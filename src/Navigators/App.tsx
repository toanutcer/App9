import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ChonCanh} from '../Components';
import MainNavigation from './MainNavigation';
import SplashScreen from 'react-native-splash-screen';
const HomeStack = createStackNavigator();
function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen name="Home" component={MainNavigation} />
        <HomeStack.Screen name="ChonCanh" component={ChonCanh} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
