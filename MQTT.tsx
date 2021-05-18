import AwesomeMqtt from 'react-native-awesome-mqtt';

export default function MQTT(obj: any, address: string) {
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
      client.publish(MQTT_TOPIC, JSON.stringify(obj), 2);
    });

    client.on('error', () => {});

    client.on('closed', () => {});
    client.connect();
  });
}
