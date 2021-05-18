import React, {useState} from 'react';
import {Switch, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../Panel/Panel.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
interface Props {
  icon: string;
  content: string;
}
function Panel(props: Props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.panel}>
      <View style={styles.panel01}>
        <View style={styles.item1}>
          <LinearTextGradient
            locations={[0, 1]}
            colors={['#2E499C', '#00C7CC']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}>
            <Icon name={props.icon} size={40} />
          </LinearTextGradient>
        </View>
        <View style={styles.item2}>
          <Switch
            trackColor={{false: '#E5E5E5', true: '#E5E5E5'}}
            thumbColor={isEnabled ? '#2E499C' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
      <View style={styles.panel02}>
        <Text style={styles.textPanel}>{props.content}</Text>
      </View>
    </View>
  );
}

export default Panel;
