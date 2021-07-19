import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TimerScreenProps {}

const TimerScreen = (props: TimerScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>TimerScreen</Text>
    </View>
  );
};

export default TimerScreen;

const styles = StyleSheet.create({
  container: {}
});
