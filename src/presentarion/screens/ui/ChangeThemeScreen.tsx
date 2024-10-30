import React, {useContext} from 'react';
import CustonView from '../../componets/ui/CustonView';
import Title from '../../componets/ui/Title';
import {globalStyles} from '../theme/theme';
import Button from '../../componets/ui/Button';
import {Text, View} from 'react-native';
import {ThemeContext} from '../../context/ThemeContext';

const ChangeThemeScreen = () => {
  const {setTheme, currentTheme, colors} = useContext(ThemeContext);

  return (
    <CustonView style={globalStyles.globalMargin}>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />

      <Button text="Light" onPress={() => setTheme('light')} />
      <View style={{height: 10}} />
      <Button text="Dack" onPress={() => setTheme('dark')} />
      <View style={{height: 10}} />

      <Text style={{color: colors.text}}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustonView>
  );
};

export default ChangeThemeScreen;
