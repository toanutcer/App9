import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {
  FlatList,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import HC from './HC';
import dgram from 'react-native-udp';
import {setGlobal} from 'reactn';
export default function ScanHC() {
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetInfo(state.isConnected);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const [netInfo, setNetInfo] = useState<any>(false);
  const [obj, setObj] = useState<any>([]);
  const UDP = () => {
    let socket = dgram.createSocket({
      type: 'udp4',
    });
    socket.bind(12345);
    socket.once('listening', function () {
      socket.send(
        '{"CMD":"SCAN_HC"}',
        undefined,
        undefined,
        8181,
        '255.255.255.255',
        function (err) {
          if (err) {
            throw err;
          }
          console.log('Message sent!');
        },
      );
    });
    socket.on('message', function (msg) {
      if (msg) {
        if (msg.toString('utf8') !== '{"CMD":"SCAN_HC"}') {
          obj.push(JSON.parse(msg.toString('utf8')));
          let object = obj
            .map((v: any) => v.IP)
            .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
            .filter((v: any) => obj[v])
            .map((v: any) => obj[v]);
          setObj(object);
          console.log(object);
        }
      }
    });
  };
  const _storeData = async (value: any) => {
    try {
      await AsyncStorage.setItem('address', value.IP);
      ToastAndroid.show('Kết nối HC:' + value.IP, ToastAndroid.SHORT);
    } catch (e) {
      // saving error
    }
  };

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          if (!netInfo) {
            const unsubscribe = NetInfo.addEventListener(state => {
              setNetInfo(state.isConnected);
            });
            unsubscribe();
          }
          if (netInfo) {
            UDP();
          } else {
            ToastAndroid.show('Vui lòng kết nối Wifi', ToastAndroid.SHORT);
          }
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            padding: 30,
            backgroundColor: 'cornflowerblue',
          }}>
          Danh sách HC trong mạng
        </Text>
      </TouchableOpacity>
      {JSON.stringify(obj) === '[]' ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              if (!netInfo) {
                const unsubscribe = NetInfo.addEventListener(state => {
                  setNetInfo(state.isConnected);
                });
                unsubscribe();
              }
              if (netInfo) {
                UDP();
              } else {
                ToastAndroid.show('Vui lòng kết nối Wifi', ToastAndroid.SHORT);
              }
            }}>
            <Text>Làm mới</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          style={{flex: 1}}
          data={obj}
          keyExtractor={item => item.IP}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setGlobal({
                    address: item.IP,
                  });
                  _storeData(item);
                }}>
                <HC item={item} />
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
}
