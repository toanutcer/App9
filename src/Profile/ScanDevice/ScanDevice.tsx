import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {
  getDevice,
  saveDevice,
  deleteDevice,
  deleteAllDevice,
} from '../../../model/helpers';
import Device from './Device';
import {useGlobal} from 'reactn';
import AwesomeMqtt from 'react-native-awesome-mqtt';
import MQTT from '../../../MQTT';
export default function ScanDevice() {
  const [address] = useGlobal<any>('address');
  const [device, setDevice] = useState<any>([]);
  useState(getAllDevice);
  const data = {
    CMD: 'SCAN',
  };
  const handleSavePress = () => {
    const {
      MQTT_HOST = address,
      MQTT_USER = 'RD',
      MQTT_PASS = '1',
      MQTT_TOPIC = 'HC.CONTROL',
    } = process.env;
    AwesomeMqtt.createClient({
      uri: `mqtt://${MQTT_HOST}:1883`,
      username: MQTT_USER,
      password: MQTT_PASS,
      clientId: Math.random().toString(),
      debug: true,
    }).then((client: AwesomeMqtt) => {
      client.on('connect', () => {
        client.message.subscribe(message => {
          const obj1 = JSON.parse(JSON.stringify(message.message));
          console.log(obj1.data.toString());
          if (obj1.data.toString() !== '{ "CMD": "STOP" }') {
            saveDevice(JSON.stringify(message.message));
            getAllDevice();
          }
        });
        client.subscribe('HC.CONTROL.RESPONSE');
        client.publish(MQTT_TOPIC, JSON.stringify(data), 0);
      });
      client.connect();
    });
  };
  async function getAllDevice() {
    try {
      let value = await getDevice();
      if (value !== null) {
        setDevice(value);
      }
    } catch (e) {}
  }
  useEffect(() => {
    getAllDevice();
  }, [device]);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity onPress={handleSavePress}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            padding: 30,
            backgroundColor: 'cornflowerblue',
          }}>
          Danh sách thiết bị
        </Text>
      </TouchableOpacity>
      {/*<Text onPress={() => deleteAllDevice()}>Xóa tất cả</Text>*/}
      <FlatList
        style={{flex: 1}}
        data={device}
        extraData={device}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => {}}
              onLongPress={() => {
                Alert.alert('Thông báo', 'Bạn có muốn xóa không?', [
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      const obj = {
                        CMD: 'RESET_NODE',
                        DATA: [item.device_id],
                      };
                      MQTT(obj, address);
                      deleteDevice(item.device_id);
                      getAllDevice();
                    },
                    style: 'cancel',
                  },
                ]);
              }}>
              <Device item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
