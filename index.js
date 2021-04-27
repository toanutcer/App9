/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import testUDP from './src/components/test/udp-socket/TestUDP';
/*import testMQTT from './src/MAIN/MQTT/MQTT';
import App from './App';*/
AppRegistry.registerComponent(appName, () => testUDP);
