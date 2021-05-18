import React from 'react';
import {Text, View} from 'react-native';
import styles from '../ScanHC/styles.scss';

interface Props {
  item: {
    device_id: string;
    note: string;
    name: string;
  };
}

export default function Device(props: Props) {
  return (
    <View style={styles.HCbox}>
      <View style={styles.text1}>
        <Text style={styles.title}>Địa chỉ đèn: </Text>
        <Text>{props.item.device_id}</Text>
      </View>
      <View style={styles.text2}>
        <Text style={styles.title}>Name: </Text>
        <Text>{props.item.name}</Text>
      </View>
    </View>
  );
}
