import {useRef} from 'react';
import {Animated, Easing} from 'react-native';

export const useAnimation = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({toValue = 1, duration = 300, callbask = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callbask);

    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 700,
    //   useNativeDriver: true,
    //   easing: Easing.bounce,
    // }).start(() => console.log('animation Ended'));
  };

  const fadeOut = ({toValue = 0, duration = 300, callbask = () => {}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(callbask);
  };

  const startMovingTopPosition = ({
    initialPosition = 0,
    toValue = 0,
    duration = 300,
    easing = Easing.linear,
    callback = () => {},
  }) => {
    animatedTop.setValue(initialPosition);
    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start(callback);
  };

  return {
    // Properties
    animatedOpacity,
    animatedTop,

    // Methods
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  };
};
