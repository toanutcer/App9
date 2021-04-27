import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ExpandableSlider from 'react-native-expandable-slider';
import LinearGradient from 'react-native-linear-gradient';
import Button from 'react-native-button';

export default function _SliderTest() {
  const [value, setValue] = React.useState<number>(9999);

  const handleSetValue = React.useCallback(() => {
    setValue(13400);
  }, []);

  const handleValueChange = React.useCallback((v: number) => {
    setValue(v);
  }, []);

  const heightRef: React.MutableRefObject<number> = React.useRef<number>(94);

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.gradientContainer}
        colors={['#7B61FF', '#DDD6FF', '#FFFFFF']}
        locations={[0, 0.7396, 1]}>
        <ExpandableSlider
          min={0}
          max={20000}
          value={value}
          onSlide={handleValueChange}
          heightRef={heightRef}
          style={styles.slider}
        />
      </LinearGradient>

      <Button style={styles.button} onPress={handleSetValue}>
        <Text>Set Value</Text>
      </Button>

      <Text>{Math.round(value)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 94,
    borderRadius: 12,
    marginLeft: 16,
    marginRight: 16,
  },
  gradientContainer: {
    width: '100%',
    height: 94,
    borderRadius: 12,
  },
  slider: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    marginTop: 40,
  },
});
