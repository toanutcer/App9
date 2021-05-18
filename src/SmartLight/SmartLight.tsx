import React, {useEffect, useState} from 'react';
import {FlatList, Image, Switch, Text, View} from 'react-native';

import RoomPanel from '../RoomPanel/RoomPanel';
import ZonePanel from '../ZonePanel/ZonePanel';
import {StackScreenProps} from '@react-navigation/stack';
import styles from '../Users/Users.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useGlobal} from 'reactn';
import MQTT from '../../MQTT';
import {getRoom} from '../../model/helpers';

function SmartLight({navigation}: StackScreenProps<any>) {
  const [address] = useGlobal<any>('address');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    if (!isEnabled) {
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
    }
  };
  const [room, setRoom] = useState<any>([]);
  useState(getAllRoom);

  async function getAllRoom() {
    try {
      let value = await getRoom();

      if (value !== null) {
        setRoom(value);
      }
    } catch (e) {}
  }

  useEffect(() => {
    getAllRoom();
  }, []);
  return (
    <View style={{flex: 12}}>
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

      <View style={{marginTop: 15}}>
        <Text>Phòng: </Text>
      </View>

      {room.length > 0 ? (
        <View style={{flex: 5}}>
          <FlatList
            style={{flex: 1}}
            data={room}
            extraData={room}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <RoomPanel
                  id={item.device_id}
                  isStyles="PK"
                  title={item.name}
                  icon="sofa"
                  status={isEnabled}
                />
              );
            }}
          />
        </View>
      ) : (
        <View style={{flex: 2}}>
          <RoomPanel
            id="Mặc định"
            isStyles="PK"
            title="Mặc định"
            icon="sofa"
            status={isEnabled}
          />
        </View>
      )}

      <View style={{marginTop: 15}}>
        <Text>Vùng</Text>
      </View>

      <View style={{flex: 4}}>
        <ZonePanel title="Tầng 2" icon="stairs" />
      </View>
    </View>
  );
}

export default SmartLight;
