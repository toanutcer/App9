import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {deleteRoom, getRoom} from '../../../../model/helpers';
import Device from '../ScanDevice/Device';

export default function ScanRoom({navigation}: StackScreenProps<any>) {
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
  }, [room]);
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          getAllRoom();
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            padding: 30,
            backgroundColor: 'cornflowerblue',
          }}>
          Danh sách phòng
        </Text>
      </TouchableOpacity>
      <View style={{flex: 12}}>
        <FlatList
          style={{flex: 1}}
          data={room}
          extraData={room}
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
                        deleteRoom(item.name);
                        getAllRoom();
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
      <View style={{flex: 1}}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CreateRoom');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
            }}>
            Thêm phòng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
