import React from 'react';
import {Text, View} from 'react-native';
import dgram from 'react-native-udp';

function TestUdp() {
  const [obj, setObj] = React.useState<any>([]);
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
      }
    }
  });

  return (
    <View>
      <Text>Hello World</Text>
    </View>
  );
}
export default TestUdp;
