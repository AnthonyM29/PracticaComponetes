import React, {useContext} from 'react';
import {View, StyleProp, ViewStyle} from 'react-native';
import {globalStyles} from '../../screens/theme/theme';
import {ReactNode} from 'react';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
}

const CustonView = ({style, children}: Props) => {
  const {colors} = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        {backgroundColor: colors.background},
        style,
      ]}>
      {children}
    </View>
  );
};

export default CustonView;
