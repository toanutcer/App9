import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './stylesbox.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
// @ts-ignore
export default function Box(props) {
  return (
    <View style={styles.container}>
      <LinearTextGradient
        style={styles.icon}
        locations={[0, 1]}
        colors={['#2E499C', '#00C7CC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Icon name={props.icon} size={25} />
      </LinearTextGradient>
      <Text style={styles.text}>{props.content}</Text>
      <Icon name="chevron-forward-outline" size={25} color="#999999" />
    </View>
  );
}
