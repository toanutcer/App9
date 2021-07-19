import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface BedTimeScreenProps {}

const BedTimeScreen = (props: BedTimeScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>BedTimeScreen</Text>
    </View>
  );
};

export default BedTimeScreen;

const styles = StyleSheet.create({
  container: {}
});
