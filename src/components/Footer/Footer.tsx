import styles from './Footer.scss';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.FooterHome}>
        <Icon
          style={[styles.iconFooterHome, styles.icon]}
          name={'home'}
          size={20}
        />
        <Text style={styles.textFooterHome}>Home</Text>
      </View>
      <View>
        <Icon
          style={[styles.iconFooter, styles.icon]}
          name={'home'}
          size={25}
        />
      </View>
      <View>
        <Icon
          style={[styles.iconFooter, styles.icon]}
          name={'home'}
          size={25}
        />
      </View>
      <View>
        <Icon
          style={[styles.iconFooter, styles.icon]}
          name={'home'}
          size={25}
        />
      </View>
      <View>
        <Icon
          style={[styles.iconFooter, styles.icon]}
          name={'home'}
          size={25}
        />
      </View>
    </View>
  );
}
