import React from 'react';
import {LinearTextGradient} from 'react-native-text-gradient';
import {Text} from 'react-native';
interface TextProps {
  text: string;
}
function _TextGradient(props: TextProps) {
  return (
    <LinearTextGradient
      locations={[0, 1]}
      colors={['#2E499C', '#00C7CC']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text>{props.text}</Text>
    </LinearTextGradient>
  );
}

export default _TextGradient;
