import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Action from './Action';

class Actions extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.action}>
            <Action text={'Cảm biến sáng 01'} iconName={'adjust'} />
          </View>
          <View style={styles.action}>
            <Action text={'Chuyển động 01'} iconName={'sign-language'} />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.action}>
            <Action text={'Công tắc bật tắt 01'} iconName={'power-off'} />
          </View>
          <View style={styles.action}>
            <Action text={'Công tắc cảnh 01'} iconName={'power-off'} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  row: {
    borderRadius: 50,
    flexDirection: 'row',
  },
  action: {
    borderRadius: 50,
    width: '50%',
    padding: 10,
  },
});
export default Actions;
