import React from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import dgram from 'react-native-udp';
import {FONTS} from '../../../../constants';

function TestUdp() {
  const Port = 8181;
  const Host = '255.255.255.255';
  const data = {CMD: 'SCAN_HC'};
  const [obj, setObj] = React.useState<any>([]);
  const socket = dgram.createSocket('udp4');
  socket.bind(12345);
  socket.once('listening', function () {
    socket.send(
      JSON.stringify(data),
      undefined,
      undefined,
      Port,
      Host,
      function (err) {
        if (err) {
          throw err;
        }

        console.log('Message sent!');
      },
    );
  });
  socket.on('message', function (msg) {
    console.log('Message received', msg.toString());
    obj.push(JSON.parse(msg.toString()));
    console.log('Object = ====== ', obj);
  });
  function pressEvent() {
    socket.on('message', function (msg) {
      obj.push(JSON.parse(msg.toString()));
      let object = obj
        .map((v: any) => v.IP)
        .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
        .filter((v: any) => obj[v])
        .map((v: any) => obj[v]);
      setObj(object);
      console.log('Object2 = ', object);
    });
  }
  /*socket.on('message', function (msg) {
    if (msg) {
      if (msg.toString('utf8') !== '{"CMD":"SCAN_HC"}') {
        obj.push(JSON.parse(msg.toString('utf8')));
        let object = obj
          .map((v: any) => v.IP)
          .map((v: any, i: any, array: any) => array.indexOf(v) === i && i)
          .filter((v: any) => obj[v])
          .map((v: any) => obj[v]);
        setObj(object);
        console.log('Object = ', object);
      }
    }
  });*/

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <TouchableOpacity onPress={pressEvent}>
        <Text style={{fontSize: 60}}>ahihi</Text>
      </TouchableOpacity>
      <FlatList
        data={obj}
        keyExtractor={item => item.IP}
        renderItem={({item, index, separators}) => {
          return (
            <View>
              <Text>IP: </Text>
              <Text>{item.IP}</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
export default TestUdp;
