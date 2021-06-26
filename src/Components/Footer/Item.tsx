import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Footer.scss';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

function ItemActive({onClick, icon}: any) {
  return (
    <TouchableOpacity onPress={() => onClick}>
      <LinearTextGradient
        locations={[0, 1]}
        colors={['#2E499C', '#00C7CC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Icon name={icon} size={10} />
      </LinearTextGradient>
    </TouchableOpacity>
  );
}
export default ItemActive;
