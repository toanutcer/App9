import React, {useEffect, useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {crateRoom, getDevice} from '../../../model/helpers';
import {StackScreenProps} from '@react-navigation/stack';

export default function CreateRoom({navigation}: StackScreenProps<any>) {
  const [device, setDevice] = useState<any>([]);
  const [name, setName] = useState<any>('');

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
  }, []);
  const [selectedLanguage, setSelectedLanguage] = useState('');

  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          padding: 30,
          backgroundColor: 'cornflowerblue',
        }}>
        Tạo phòng mới
      </Text>
      <View style={{padding: 10}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              flex: 3,
              fontSize: 18,
            }}>
            Tên Phòng:
          </Text>
          <TextInput
            onChangeText={v => {
              setName(v);
              console.log(v);
            }}
            style={{
              marginRight: 10,
              borderColor: 'gray',
              borderRadius: 5,
              borderWidth: 1,
              flex: 7,
              paddingBottom: 0,
              paddingTop: 0,
              paddingLeft: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              fontSize: 18,
              flex: 3,
            }}>
            ID đèn:
          </Text>
          <Picker
            style={{
              flex: 7,
            }}
            selectedValue={selectedLanguage}
            onValueChange={itemValue => {
              getAllDevice();
              setSelectedLanguage(itemValue);
            }}>
            {device.map((device: any) => (
              <Picker.Item
                key={device}
                label={device.device_id}
                value={device.device_id}
              />
            ))}
          </Picker>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => {
            crateRoom(selectedLanguage, name);
            navigation.navigate('ScanRoom');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              backgroundColor: 'cornflowerblue',
              padding: 5,
              width: 150,
              borderRadius: 15,
            }}>
            Thêm phòng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
