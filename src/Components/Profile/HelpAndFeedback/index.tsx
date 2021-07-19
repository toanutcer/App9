import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HelpAndFeedbackScreenProps {}

const HelpAndFeedbackScreen = (props: HelpAndFeedbackScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>HelpAndFeedbackScreen</Text>
    </View>
  );
};

export default HelpAndFeedbackScreen;

const styles = StyleSheet.create({
  container: {}
});
