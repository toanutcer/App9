import styles from './Category.scss';
import {Text, View} from 'react-native';
import React from 'react';
interface Props {
  name: string;
}
export default function Category(props: Props) {
  return (
    <View>
      <Text style={styles.textCategory}>{props.name}</Text>
    </View>
  );
}
