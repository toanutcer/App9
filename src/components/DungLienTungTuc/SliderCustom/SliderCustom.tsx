import React from 'react';
import {View} from 'react-native';
import Slider from 'react-native-custom-slider';

function SliderApp() {
  const [value, setValue] = React.useState(15);

  return (
    <Slider
      value={value}
      minimumValue={0}
      maximumValue={50}
      onValueChange={value => setValue(value)}
      thumbStyle={{justifyContent: 'center', alignItems: 'center', width: 25}}
      customThumb={
        <View
          style={{
            width: 35,
            height: 20,
            overflow: 'hidden',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            backgroundColor: 'gold',
          }}
        />
      }
    />
  );
}

export default SliderApp;
