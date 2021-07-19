import React from 'react';
import {Text, View} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';

const textGradient = props => {
  return (
    <View style={{alignItems: 'center'}}>
      <LinearTextGradient
        locations={[0, 1]}
        colors={['#2E499C', '#00C7CC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text style={styles.textHeader}>{props.name}</Text>
      </LinearTextGradient>
    </View>
  );
};

export default textGradient;
