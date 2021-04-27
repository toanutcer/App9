import {Switch, Text, View} from 'react-native';
import styles from './Room.scss';
import Icon from 'react-native-vector-icons/FontAwesome5';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';
import _Switch from '../../DungLienTungTuc/Switch/Switch';
import _Slider from '../../DungLienTungTuc/ExpandableSlider/ExpandableSlider';
import MQTT from '../../../MAIN/MQTT/MQTT';
interface propsTuTao {
  icon: string;
  name: string;
  status: string;
  id: string;
}
function App(props: propsTuTao) {
  const [value, setValue] = React.useState<number>(1);
  const handleValueChange = React.useCallback((v: number) => {
    setValue(v);
  }, []);
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => {
    if (!isEnabled) {
      const dataaa = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: props.id,
          PROPERTIES: [
            {
              ID: 0,
              VALUE: 1,
            },
          ],
        },
      };
      setIsEnabled(true);
      MQTT(dataaa);
    } else {
      const dataaa = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: props.id,
          PROPERTIES: [
            {
              ID: 0,
              VALUE: 0,
            },
          ],
        },
      };
      setIsEnabled(false);
      MQTT(dataaa);
    }
  };
  const heightRef: React.MutableRefObject<number> = React.useRef<number>(94);
  return (
    <View>
      <LinearGradient
        colors={['#FFF5D9', '#FF7B82', '#7B61FF']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.livingRoom}>
        <View style={styles.livingRoomUp}>
          <Icon
            style={[styles.lingvingRoomIcon, styles.icon]}
            name={props.icon}
            size={32}
          />
          <View style={styles.livingRoomName}>
            <Text style={styles.livingRoomNameUp}>{props.name}</Text>
            <Text style={styles.livingRoomNameDown}>{props.status}</Text>
          </View>
          <View style={styles.switch}>
            <Switch
              style={styles.switch}
              trackColor={{false: '#000000', true: '#E5E5E5'}}
              thumbColor={isEnabled ? '#6177bb' : '#FFFFFF'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
        <View style={styles.livingRoomDown}>
          {/*<PROGESSBAR />*/}
          <_Slider
            min={1}
            max={2}
            value={value}
            onSlide={handleValueChange}
            heightRef={heightRef}
            style={styles.slider}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
export default App;
