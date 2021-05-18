import React, {useEffect, useState} from 'react';
import styles from './RoomPanel.scss';
import {StyleSheet, Switch, Text, View} from 'react-native';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import MQTT from '../../MQTT';
import ExpandableSlider from '../test';
import {useGlobal} from 'reactn';

interface Props {
  id: string;
  isStyles: string;
  title: string;
  icon: string;
  status: boolean;
}
function RoomPanel(props: Props) {
  const [address] = useGlobal<any>('address');
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [isText, setText] = useState('Tất cả thiết bị đang được tắt');
  const toggleSwitch = () => {
    if (!isEnabled) {
      const data = {
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
      MQTT(data, address);
      setIsEnabled(true);
      setText('Thiết bị đang bật');
    } else {
      const data = {
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
      MQTT(data, address);
      setIsEnabled(false);
      setText('Tất cả thiết bị đang được tắt');
    }
  };

  const [value, setValue] = React.useState<number>(20000);
  const handleValueChange1 = React.useCallback((v: number) => {
    setValue(v);
  }, []);
  const handleValueChange2 = React.useCallback(
    (v: number) => {
      setValue(v);
      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: props.id,
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
    [address, props.id],
  );
  const heightRef: React.MutableRefObject<number> = React.useRef<number>(100);
  return (
    <View>
      {isEnabled ? (
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={
            props.isStyles === 'PK'
              ? ['#7B61FF', '#FF7B82', '#FFF5D9']
              : ['#7B61FF', '#DDD6FF', '#FFFFFF']
          }
          style={styles.linearGradient}>
          <View style={styles.roomPanel}>
            <View style={styles.panelIcon}>
              <Icon1 name={props.icon} size={35} color="white" />
            </View>
            <View style={styles.panelTitle}>
              <View>
                <Text style={styles.panelHeader}>{props.title}</Text>
                <Text style={styles.panelContent}>{isText}</Text>
              </View>
            </View>
            <View style={styles.panelSwitch}>
              <Switch
                trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
                thumbColor={isEnabled ? '#2E499C' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch()}
                value={isEnabled}
              />
            </View>
          </View>
          <ExpandableSlider
            min={0}
            max={20000}
            value={value}
            onSlide={handleValueChange1}
            onSlideCompleted={handleValueChange2}
            heightRef={heightRef}
            style={styles1.slider}
          />
        </LinearGradient>
      ) : (
        <View style={styles.linearGradient}>
          <View style={styles.roomPanel}>
            <View style={styles.panelIcon}>
              <Icon1 name={props.icon} size={35} color="white" />
            </View>
            <View style={styles.panelTitle}>
              <View>
                <Text style={styles.panelHeader}>{props.title}</Text>
                <Text style={styles.panelContent}>{isText}</Text>
              </View>
            </View>
            <View style={styles.panelSwitch}>
              <Switch
                trackColor={{false: '#808080', true: '#E5E5E5'}}
                thumbColor={isEnabled ? '#2E499C' : '#FFFFFF'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch()}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles1 = StyleSheet.create({
  slider: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    marginTop: 40,
  },
});
export default RoomPanel;
