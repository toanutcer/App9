import styles from './Switch.scss';
import {Switch, View} from 'react-native';
import React from 'react';

export default function _Switch() {
  const [isEnabled, setIsEnabled] = React.useState(true);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <Switch
        style={styles.switch}
        trackColor={{false: '#000000', true: '#E5E5E5'}}
        thumbColor={isEnabled ? '#6177bb' : '#FFFFFF'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}
