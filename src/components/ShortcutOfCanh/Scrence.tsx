import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
interface NameProps {
  text: string;
}
function Scrence() {
  return (
    <View style={styles.scrence}>
      <Image
        source={require('../../image/dimmed.png')}
        style={styles.img}
        height={50}
        width={50}
      />
      <Text style={styles.text}>ahihi</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scrence: {
    flexDirection: 'row',
    shadowColor: 'red',
    backgroundColor: '#ffff',
    padding: 11,
    borderRadius: 15,
  },
  img: {
    borderRadius: 10,
  },
  text: {
    color: '#00C7CC',
    fontWeight: '300',
    fontSize: 12,
    marginLeft: 12,
    alignSelf: 'center',
  },
});
export default Scrence;
