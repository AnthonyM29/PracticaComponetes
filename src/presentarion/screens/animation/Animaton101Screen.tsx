import React, {useContext} from 'react';
import {Text, Pressable, StyleSheet, Animated, Easing} from 'react-native';
import {colors} from '../theme/theme';
import {useAnimation} from '../../hooks/useAnimation';
import CustonView from '../../componets/ui/CustonView';
import {ThemeContext} from '../../context/ThemeContext';

const Animaton101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    animatedOpacity,
    animatedTop,
    startMovingTopPosition,
  } = useAnimation();
  const {colors} = useContext(ThemeContext);

  return (
    <CustonView style={styles.container}>
      <Animated.View
        style={[
          styles.plupleBox,
          {opacity: animatedOpacity, transform: [{translateY: animatedTop}]},
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 700,
          });
        }}
        style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>FadeIn</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{marginTop: 10}}>
        <Text style={{color: colors.text}}>FadeIOut</Text>
      </Pressable>
    </CustonView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  plupleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});

export default Animaton101Screen;
