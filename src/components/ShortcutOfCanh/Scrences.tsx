import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Scrence from './Scrence';
interface NameProps {
  nameMain: string;
}
function Scrences(props: NameProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameMain}>{props.nameMain}</Text>
      <View style={styles.scrences}>
        <View style={styles.scrence}>
          <Scrence />
        </View>
        <View style={styles.scrence}>
          <Scrence />
        </View>
      </View>
      <View style={styles.scrences}>
        <View style={styles.scrence}>
          <Scrence />
        </View>
        <View style={styles.scrence}>
          <Scrence />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingTop: 10,
  },
  nameMain: {
    fontSize: 16,
  },
  scrences: {
    paddingTop: 15,
    flexDirection: 'row',
  },
  scrence: {
    padding: 5,
    width: '50%',
  },
});
export default Scrences;
