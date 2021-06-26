import React from 'react';
import styles from './styles.scss';
import {Image, Text, View} from 'react-native';
import {IMAGES} from '../../Themes';

// @ts-ignore
function Status(props) {
  const icon = () => {
    if (props.uri === 'off') {
      return IMAGES.office;
    } else if (props.uri == 'Dimmed') {
      return IMAGES.office;
    } else if (props.uri == 'Nightlight') {
      return IMAGES.night_lights_penglight;
    } else if (props.uri == 'Bright') {
      return IMAGES.bright;
    } else if (props.uri == 'tokyo') {
      return IMAGES.tokyo;
    } else if (props.uri == 'office') {
      return IMAGES.office;
    } else if (props.uri == 'spring') {
      return IMAGES.spring;
    } else if (props.uri == 'Summer') {
      return IMAGES.golden_summer;
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
