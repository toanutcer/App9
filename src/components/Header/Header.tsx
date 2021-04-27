import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './Header.scss';
import {LinearTextGradient} from 'react-native-text-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

function Header({navigation}) {
  return (
    <View style={styles.header}>
      <View style={styles.textHeader}>
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 72}}
          locations={[0, 1]}
          colors={['#2E499C', '#00C7CC']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.textHeader1}>54 Thụy Khuê, Tây Hồ</Text>
          <Icon style={styles.icon} name={'caret-down'} size={20} />
        </LinearTextGradient>
        <LinearTextGradient
          style={{fontWeight: 'bold', fontSize: 72}}
          locations={[0, 1]}
          colors={['#2E499C', '#00C7CC']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}>
          <Text style={styles.textHeader2}>29 C , Độ ẩm 58% </Text>
        </LinearTextGradient>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('QlPhong');
        }}
        style={styles.iconBarHeader}>
        <Icon name={'bars'} size={25} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;
