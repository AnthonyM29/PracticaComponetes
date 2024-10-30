import React from 'react';
import {Pressable, StyleProp, Text, ViewStyle} from 'react-native';
import {colors, globalStyles} from '../../screens/theme/theme';

interface Props {
  text: string;
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
}

const Button = ({text, onPress, style}: Props) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        globalStyles.btnPrimary,
        {
          opacity: pressed ? 0.8 : 1,
          backgroundColor: colors.primary,
        },
        style,
      ]}>
      <Text
        style={[
          globalStyles.btnPrimaryText,
          {
            color: colors.buttonTextColor,
            backgroundColor: colors.primary,
          },
        ]}>
        {text}
      </Text>
    </Pressable>
  );
};

export default Button;
