import React, {useState} from 'react';
import styles from '../Users/Users.scss';
import {Image, Switch, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LinearTextGradient} from 'react-native-text-gradient';
import MQTT from '../../MQTT';
import {useGlobal} from 'reactn';
import {StackScreenProps} from '@react-navigation/stack';

function Users({navigation}: StackScreenProps<any>) {
  const [address] = useGlobal<any>('address');
  const [status, setStatus] = useGlobal<any>('status');
  const [isEnabled, setIsEnabled] = useState(status);

  const toggleSwitch = () => {
    if (!status) {
      const data = {
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
      MQTT(data, address);
      setIsEnabled(true);
      setStatus(true);
    } else {
      const data = {
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
      MQTT(data, address);
      setIsEnabled(false);
      setStatus(false);
    }
  };
  return (
    <View style={styles.list}>
      <View style={styles.listImages}>
        <Image
          style={styles.images}
          source={require('../uploads/Bright.jpeg')}
        />
        <Image
          style={styles.images}
          source={require('../uploads/dimmed.jpeg')}
        />
        <Image
          style={styles.images}
          source={require('../uploads/reading.jpeg')}
        />
        <Image
          style={styles.images}
          source={require('../uploads/office.jpeg')}
        />
        <LinearTextGradient
          onPress={() => navigation.navigate('ChonCanh')}
          locations={[0, 1]}
          colors={['#2E499C', '#00C7CC']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Ionicons name="add-circle-outline" size={50} />
        </LinearTextGradient>
      </View>
      <View style={styles.Switch}>
        <Switch
          trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
          thumbColor={isEnabled ? '#2E499C' : '#FFFFFF'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch()}
          value={isEnabled}
        />
      </View>
    </View>
  );
}

export default Users;
