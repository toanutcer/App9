import styles from './Users.scss';
import {
  Image,
  TouchableOpacity,
  Text,
  Button,
  View,
  Switch,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import 'react-native-gesture-handler';
import Scrences from '../../ShortcutOfCanh/MainShortcutOfCanh';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import MQTT from '../../../MAIN/MQTT/MQTT';
function Users({navigation}: {navigation: any}) {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    if (!isEnabled) {
      const dataaa = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 0,
              VALUE: 1,
            },
          ],
        },
      };
      setIsEnabled(true);
      MQTT(dataaa);
    } else {
      const dataaa = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 0,
              VALUE: 0,
            },
          ],
        },
      };
      setIsEnabled(false);
      MQTT(dataaa);
    }
  };
  return (
    <View style={styles.downCategories}>
      <View style={styles.users}>
        <Image source={require('../../../image/1.jpg')} style={styles.user} />
        <Image source={require('../../../image/1.jpg')} style={styles.user} />
        <Image source={require('../../../image/1.jpg')} style={styles.user} />
        <Image source={require('../../../image/1.jpg')} style={styles.user} />
        <TouchableOpacity onPress={() => navigation.navigate('Scrences')}>
          <Icon
            name={'plus-circle'}
            style={[styles.user, styles.icon]}
            size={34}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.switch}>
        <Switch
          style={styles.switch}
          trackColor={{false: '#000000', true: '#E5E5E5'}}
          thumbColor={isEnabled ? '#6177bb' : '#FFFFFF'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
}
export default Users;
