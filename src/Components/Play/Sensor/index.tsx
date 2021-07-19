import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface SensorScreenProps {}

const SensorScreen = (props: SensorScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>SensorScreen</Text>
    </View>
  );
};

export default SensorScreen;

const styles = StyleSheet.create({
  container: {}
});
