import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, PlayScreen, ProfileScreen} from '../Containers';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateRoom,
  HelpAndFeedbackScreen,
  ScanDevice,
  ScanHC,
  ScanRoom,
  SettingScreen,
  UpdateScreen,
} from '../Components/Profile';
import {
  AlarmScreen,
  BedTimeScreen,
  OtherScreen,
  SensorScreen,
  TimerScreen,
} from '../Components/Play';

interface MainNavigationProps {}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function headerTitle() {
  return (
    <View style={{flexDirection: 'row'}}>
      <Text>ahihihi</Text>
    </View>
  );
}


const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
const Play = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Play"
        component={PlayScreen}
      />
      <Stack.Screen
        name="AlarmScreen"
        component={AlarmScreen}
        options={({route}) => ({title: route.params.name})}
      />
      <Stack.Screen name="BedTimeScreen" component={BedTimeScreen}  options={({route}) => ({title: route.params.name})} />
      <Stack.Screen name="OtherScreen" component={OtherScreen}  options={({route}) => ({title: route.params.name})}/>
      <Stack.Screen name="SensorScreen" component={SensorScreen}  options={({route}) => ({title: route.params.name})}/>
      <Stack.Screen name="TimerScreen" component={TimerScreen}  />
    </Stack.Navigator>
  );
};
const Profile = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen name="CreateRoom" component={CreateRoom} />

      <Stack.Screen name="ScanHC" component={ScanHC} />
      <Stack.Screen name="ScanRoom" component={ScanRoom} />
      <Stack.Screen name="ScanDevice" component={ScanDevice} />
      <Stack.Screen
        name="HelpAndFeedbackScreen"
        component={HelpAndFeedbackScreen}
      />
      <Stack.Screen name="UpdateScreen" component={UpdateScreen} />
      <Stack.Screen name="SettingScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
const MainNavigation = (props: MainNavigationProps) => {
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
        name="Play"
        component={Play}
      />
      <Tab.Screen
        options={() => ({
          tabBarVisible: false,
        })}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  container: {},
});
