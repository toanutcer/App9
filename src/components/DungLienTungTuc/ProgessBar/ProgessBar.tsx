import styles from './ProgessBAR.scss';
import {ProgressBar} from '@react-native-community/progress-bar-android';
import {View} from 'react-native';
import React from 'react';

export default function _ProgessBar() {
  return (
    <View>
      <ProgressBar
        animating={true}
        styleAttr={'Horizontal'}
        color="#FF7B82"
        progress={0.8}
        style={styles.progessBAR}
      />
    </View>
  );
}
