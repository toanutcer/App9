import React, {useState} from 'react';
import styles from '../ZonePanel/ZonePanel.scss';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import ExpandableSlider from '../test';
import MQTT from '../../MQTT';
import {useGlobal} from 'reactn';
interface Props {
  icon: string;
  title: string;
}
function ZonePanel(props: Props) {
  const [address] = useGlobal<any>('address');
  const [isEnabled, setIsEnabled] = useState(false);
  const [isText, setText] = useState('Tất cả thiết bị đang được tắt');
  const toggleSwitch = () => {
    if (!isEnabled) {
      setIsEnabled(true);
      setText('Tất cả thiết bị đang được bật');
    } else {
      setIsEnabled(false);
      setText('Tất cả thiết bị đang được tắt');
    }
  };
  const [value, setValue] = React.useState<number>(800);

  const handleValueChange = React.useCallback((v: number) => {
    setValue(v);
  }, []);
  const handleValueChange2 = React.useCallback(
    (v: number) => {
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '',
          PROPERTIES: [
            {
              ID: 1,
              VALUE: Math.ceil((v / 20000) * 100),
            },
          ],
        },
      };
      MQTT(data, address);
    },
    [address],
  );
  const heightRef: React.MutableRefObject<number> = React.useRef<number>(100);
  return (
    <View style={styles.container}>
      <View style={isEnabled ? styles.zonePanelTrue : styles.zonePanelFalse}>
        <View style={styles.zoneIcon}>
          <Icon1 name={props.icon} size={35} color="black" />
        </View>
        <View style={styles.zoneTitle}>
          <View>
            <Text style={styles.zoneHeader}>{props.title}</Text>
            <Text style={styles.zoneContent}>{isText}</Text>
          </View>
        </View>
        <View style={styles.panelSwitch}>
          <Switch
            trackColor={{false: '#808080', true: '#E5E5E5'}}
            thumbColor={isEnabled ? '#2E499C' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      {isEnabled ? (
        <View style={styles1.container}>
          <ExpandableSlider
            min={0}
            max={20000}
            value={value}
            onSlide={handleValueChange}
            onSlideCompleted={handleValueChange2}
            heightRef={heightRef}
            style={styles1.slider}
          />
        </View>
      ) : null}
    </View>
  );
}
const styles1 = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 12,
  },
  gradientContainer: {
    width: '100%',
    borderRadius: 12,
  },
  slider: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    marginTop: 40,
  },
});
export default ZonePanel;
