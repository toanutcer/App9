import AwesomeMqtt from 'react-native-awesome-mqtt';
const {
  MQTT_HOST = '192.168.28.132',
  MQTT_USER = 'RD',
  MQTT_PASS = '1',
  MQTT_TOPIC = 'HC.CONTROL',
} = process.env;

// @ts-ignore
export default function MQTT(obj) {
  AwesomeMqtt.createClient({
    uri: `mqtt://${MQTT_HOST}:1883`,
    username: MQTT_USER,
    password: MQTT_PASS,
    clientId: Math.random().toString(),
    debug: true,
  }).then((client: AwesomeMqtt) => {
    client.on('connect', () => {
      //client.subscribe(MQTT_TOPIC);
      client.publish(MQTT_TOPIC, JSON.stringify(obj), 0);
    });

    client.on('error', error => {
      console.log(error);
    });
    client.on('closed', () => {});
    client.connect();
  });
}
