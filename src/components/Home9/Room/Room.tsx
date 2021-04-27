import styles from './Room.scss';
import {Text, View} from 'react-native';
import React from 'react';
import Room1 from './Room1';

function Room() {
  return (
    <View style={styles.Room}>
      <Text style={styles.Name}>Phòng</Text>
      <Room1
        icon="chair"
        name={'Phòng khách'}
        status={'Thiết bị đang bật'}
        id={' cb839832836c83b837f 6ef91 f6fd3'}
      />
      <Room1
        icon="couch"
        name={'Phòng bếp'}
        status={'Thiết bị tắt'}
        id={'402f592d6bef5036981aaefe5d4e789a'}
      />
    </View>
  );
}
export default Room;
