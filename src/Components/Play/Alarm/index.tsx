import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AlarmScreenProps {}

const AlarmScreen = (props: AlarmScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AlarmScreen</Text>
    </View>
  );
};

export default AlarmScreen;

const styles = StyleSheet.create({
  container: {}
});
