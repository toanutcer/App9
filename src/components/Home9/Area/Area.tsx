import styles from './Area.scss';
import {Switch, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import _ProgessBar from '../../DungLienTungTuc/ProgessBar/ProgessBar';
import _Switch from '../../DungLienTungTuc/Switch/Switch';
export default function Area() {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.Area}>
      <Text style={styles.Name}>Vùng</Text>
      <LinearGradient
        colors={isEnabled ? ['#FF7B82', '#7B61FF'] : ['#E5E5E5', '#E5E5E5']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.livingRoom}>
        <View style={styles.livingRoomUp}>
          <Icon
            style={[styles.lingvingRoomIcon, styles.icon]}
            name={'holly-berry'}
            size={32}
          />
          <View style={styles.livingRoomName}>
            <Text style={styles.livingRoomNameUp}>Tầng 2</Text>
            <Text style={styles.livingRoomNameDown}>
              Tất cả thiết bị đang được bật
            </Text>
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
          <_ProgessBar />
        </View>
      </LinearGradient>
    </View>
  );
}
