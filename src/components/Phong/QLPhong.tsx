import React, {Component} from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class QlPhong extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>
        <View style={styles.styleRoom}>
          <Text style={styles.textUp}>Phòng mới</Text>
          <Text style={styles.textDown}>0 thiết bị</Text>
        </View>

        <TouchableOpacity style={styles.bottom}>
          <Text style={styles.textBottom}>ahihi</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    padding: 15,
  },
  styleRoom: {
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'green',
  },
  textUp: {
    padding: 5,
    fontSize: 13,
    color: 'blue',
    fontWeight: 'bold',
  },
  textDown: {
    color: 'blue',
    padding: 5,
    fontSize: 10,
    fontWeight: 'normal',
  },
  bottom: {
    marginTop: 25,
    backgroundColor: 'red',
    borderRadius: 50,
  },
  textBottom: {
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 15,
  },
});
export default QlPhong;
