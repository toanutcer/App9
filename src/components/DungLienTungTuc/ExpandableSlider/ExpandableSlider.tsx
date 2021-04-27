import PropTypes from 'prop-types';
import type {FC, MutableRefObject, ReactElement, Reducer} from 'react';
import React from 'react';
import type {
  GestureResponderEvent,
  LayoutChangeEvent,
  PanResponderInstance,
  ViewProps,
} from 'react-native';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {styles} from './ExpandableSlider.styles';
import type {ExpandableSliderProps} from './ExpandableSliderProps';
import {triggerHapticFeedback} from './helpers/trigger-haptic-feedback';
import type {
  LayoutReducerAction,
  LayoutReducerState,
} from './reducers/layout-reducer';
import {
  layoutReducer,
  LayoutReducerActionType,
} from './reducers/layout-reducer';
import LinearGradient from 'react-native-linear-gradient';
import MQTT from '../../../MAIN/MQTT/MQTT';

const useNativeDriver: boolean = false;

/**
 * File: ExpandableSlider.tsx
 * @created 2021-02-25 17:22:17
 * @author Thanh Tùng <ht@thanhtunguet.info>
 * @type {FC<ExpandableSliderProps>}
 */
const ExpandableSlider: FC<ExpandableSliderProps> = (
  props: ExpandableSliderProps,
): ReactElement => {
  const {
    style,
    indicatorSize,
    min,
    max,
    value,
    useHapticResponse,
    heightRef,
    onSlide,
    onSlideCompleted,
    slidingVelocity,
    heightAnimatedDuration,
  } = props;

  if (min >= max) {
    console.error(new Error('Invalid value range'));
  }

  if (value < min || value > max) {
    console.warn(new Error('Invalid value'));
  }

  const sliderRange: number = React.useMemo(() => max - min, [max, min]);
  const borderRadius: number = React.useMemo(() => indicatorSize / 2, [
    indicatorSize,
  ]);
  const handleCalculatePercentage = React.useCallback(
    (v: number) => {
      const current: number = v - min;
      return (current / sliderRange) * 100;
    },
    [min, sliderRange],
  );

  const [{width: layoutWidth, x: layoutX}, dispatch] = React.useReducer<
    Reducer<LayoutReducerState, LayoutReducerAction>
  >(layoutReducer, {});

  const widthRef: MutableRefObject<number> = React.useRef<number>(0);

  const xRef: MutableRefObject<number> = React.useRef<number>(0);

  const slideableWidthRef: MutableRefObject<number> = React.useRef<number>(0);

  const animatedX: Animated.Value = React.useRef<Animated.Value>(
    new Animated.Value(borderRadius),
  ).current;

  const animatedHeight: Animated.Value = React.useRef<Animated.Value>(
    new Animated.Value(indicatorSize),
  ).current;

  const handleAnimatedHeight = React.useCallback(
    (v: number) => {
      Animated.timing(animatedHeight, {
        toValue: v,
        duration: heightAnimatedDuration,
        useNativeDriver,
      }).start();
    },
    [animatedHeight, heightAnimatedDuration],
  );

  React.useEffect(() => {
    if (layoutWidth > 0 && max > min) {
      const v: number =
        ((value - min) / sliderRange) * slideableWidthRef.current +
        borderRadius;

      Animated.timing(animatedX, {
        toValue: v,
        duration: v / slidingVelocity,
        useNativeDriver,
      }).start();
    }
  }, [
    animatedX,
    borderRadius,
    max,
    min,
    sliderRange,
    value,
    layoutWidth,
    layoutX,
    animatedHeight,
    slidingVelocity,
  ]);

  const handleLayout: ViewProps['onLayout'] = React.useCallback(
    (event: LayoutChangeEvent) => {
      const {width, x} = event.nativeEvent.layout;
      widthRef.current = width;
      xRef.current = x;
      slideableWidthRef.current = width - indicatorSize;
      dispatch({
        type: LayoutReducerActionType.update,
        width,
        x,
      });
    },
    [indicatorSize],
  );

  const handleSetAnimatedValue = React.useCallback(
    (v: number) => {
      animatedX.setValue(v);
    },
    [animatedX],
  );

  const handleResponderEvent = React.useCallback(
    (event: GestureResponderEvent, isCompleted: boolean = false) => {
      const {pageX} = event.nativeEvent;
      let locationX: number = pageX - xRef.current;
      if (locationX <= borderRadius) {
        locationX = borderRadius;
      }
      if (locationX >= slideableWidthRef.current + borderRadius) {
        locationX = widthRef.current - borderRadius;
      }

      const newValue: number =
        ((locationX - borderRadius) / slideableWidthRef.current) * sliderRange + min;
      handleSetAnimatedValue(locationX);

      const percentage: number = handleCalculatePercentage(newValue);

      const data = {
        CMD: 'DEVICE',
        DATA: {
          DEVICE_ID: '402f592d6bef5036981aaefe5d4e789a',
          PROPERTIES: [
            {
              ID: 1,
              VALUE: Math.ceil(percentage),
            },
          ],
        },
      };
      MQTT(data);

      if (isCompleted) {
        if (typeof onSlideCompleted === 'function') {
          onSlideCompleted(newValue, percentage);
        }
      }

      if (typeof onSlide === 'function') {
        onSlide(newValue, percentage);
      }
    },
    [
      borderRadius,
      handleCalculatePercentage,
      handleSetAnimatedValue,
      min,
      onSlide,
      onSlideCompleted,
      sliderRange,
    ],
  );

  const panResponder: PanResponderInstance = React.useRef<PanResponderInstance>(
    PanResponder.create({
      onStartShouldSetPanResponder: () => {
        return true;
      },
      onMoveShouldSetPanResponder: () => {
        return true;
      },
      onPanResponderGrant: (event: GestureResponderEvent) => {
        if (useHapticResponse) {
          triggerHapticFeedback();
        }
        if (heightRef?.current) {
          handleAnimatedHeight(heightRef.current);
        }
        handleResponderEvent(event);
      },
      onPanResponderMove: (event: GestureResponderEvent) => {
        handleResponderEvent(event);
      },
      onPanResponderRelease: (event: GestureResponderEvent) => {
        handleResponderEvent(event, true);
        if (heightRef?.current) {
          // @ts-ignore
          handleAnimatedHeight(indicatorSize);
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[styles.container, StyleSheet.flatten(style)]}
      {...panResponder.panHandlers}
      onLayout={handleLayout}>
      <LinearGradient
        style={{
          borderRadius: borderRadius,
        }}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          'rgba(158,234,211,0.2)',
          'rgba(239,227,236,0.2)',
          'rgba(118,238,74,0.2)',
        ]}>
        <Animated.View
          style={[
            styles.track,
            {
              height: animatedHeight,
              borderBottomLeftRadius: borderRadius,
              borderTopLeftRadius: borderRadius,
              width: animatedX,
            },
          ]}>
          <Animated.View
            style={[
              styles.thumb,
              {
                width: indicatorSize,
                height: animatedHeight,
                borderRadius,
                transform: [
                  {
                    translateX: Animated.subtract(animatedX, borderRadius),
                  },
                ],
              },
            ]}
          />
        </Animated.View>
      </LinearGradient>
    </Animated.View>
  );
};
ExpandableSlider.defaultProps = {
  indicatorSize: 24,
  slidingVelocity: 1.2,
  heightAnimatedDuration: 50,
  useHapticResponse: true,
};

ExpandableSlider.propTypes = {
  indicatorSize: PropTypes.number,
  useHapticResponse: PropTypes.bool,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number,
  onSlide: PropTypes.func,
  onSlideCompleted: PropTypes.func,
  slidingVelocity: PropTypes.number,
  heightAnimatedDuration: PropTypes.number,
};

ExpandableSlider.displayName = 'ExpandableSlider';

export default ExpandableSlider;
