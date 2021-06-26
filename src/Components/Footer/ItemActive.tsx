import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './Footer.scss';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, TouchableOpacity} from 'react-native';

function ItemActive({onClick, icon, text}: any) {
  return (
    <TouchableOpacity onPress={() => onClick}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#2E499C', '#00C7CC']}
        style={styles.footerHome}>
        <Icon name={icon} size={30} color="white" />
        <Text style={{marginLeft: 5, fontWeight: 'bold', color: 'white'}}>
          {text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
export default ItemActive;
