import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import i18next from '../../../I18n';

interface SettingScreenProps {}

const SettingScreen = (props: SettingScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>{i18next.t('setting')}</Text>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {}
});
