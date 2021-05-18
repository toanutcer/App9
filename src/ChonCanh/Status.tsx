import React from 'react';
import styles from './styles.scss';
import {Image, Text, View} from 'react-native';

// @ts-ignore
function Status(props) {
  const icon = () => {
    if (props.uri === 'off') {
      return require('../uploads/off.jpeg');
    } else if (props.uri == 'Dimmed') {
      return require('../uploads/dimmed.jpeg');
    } else if (props.uri == 'Nightlight') {
      return require('../uploads/Nightlight.jpeg');
    } else if (props.uri == 'Bright') {
      return require('../uploads/Bright.jpeg');
    } else if (props.uri == 'tokyo') {
      return require('../uploads/tokyo.jpeg');
    } else if (props.uri == 'office') {
      return require('../uploads/office.jpeg');
    } else if (props.uri == 'spring') {
      return require('../uploads/spring.jpeg');
    } else if (props.uri == 'Summer') {
      return require('../uploads/Summer.jpeg');
    }
  };
  // @ts-ignore
  return (
    <View
      style={props.isActive === props.uri ? styles.boxisActive : styles.box}>
      <Image source={icon()} style={styles.images} />
      <Text style={{color: '#00C7CC'}}>{props.content}</Text>
    </View>
  );
}

export default Status;
