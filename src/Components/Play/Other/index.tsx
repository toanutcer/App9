import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface OtherScreenProps {}

const OtherScreen = (props: OtherScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>OtherScreen</Text>
    </View>
  );
};

export default OtherScreen;

const styles = StyleSheet.create({
  container: {}
});
