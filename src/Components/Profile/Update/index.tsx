import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface UpdateScreenProps {}

const UpdateScreen = (props: UpdateScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>UpdateScreen</Text>
    </View>
  );
};

export default UpdateScreen;

const styles = StyleSheet.create({
  container: {}
});
