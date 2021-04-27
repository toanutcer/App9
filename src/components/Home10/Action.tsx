import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import _Switch from '../DungLienTungTuc/Switch/Switch';

interface NameProps {
  iconName: string;
  text: string;
}
function Action(props: NameProps) {
  return (
    <View style={styles.container}>
      <View style={styles.child}>
        <Icon style={styles.icon} name={props.iconName} size={30} />
        <View style={styles.switch}>
          <_Switch />
        </View>
      </View>
      <View>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#ffff',
    padding: 15,
  },
  child: {
    flexDirection: 'row',
  },
  icon: {
    flex: 4,
    color: '#627ab6',
  },
  switch: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 30,
    color: '#2E499C',
    fontSize: 12,
  },
});
export default Action;
