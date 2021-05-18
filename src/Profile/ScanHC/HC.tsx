import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles.scss';
interface Props {
  item: {
    HOSTNAME: string;
    IP: string;
  };
}
export default function HC(props: Props) {
  return (
    <View style={styles.HCbox}>
      <View style={styles.text1}>
        <Text style={styles.title}>Tên HC: </Text>
        <Text>{props.item.HOSTNAME}</Text>
      </View>
      <View style={styles.text2}>
        <Text style={styles.title}>Địa chỉ IP: </Text>
        <Text>{props.item.IP}</Text>
      </View>
    </View>
  );
}
