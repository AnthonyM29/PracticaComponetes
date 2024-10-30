import React from 'react';
import CustonView from '../../componets/ui/CustonView';
import Title from '../../componets/ui/Title';
import Button from '../../componets/ui/Button';
import {Alert, View} from 'react-native';
import {globalStyles} from '../theme/theme';
import {showPrompt} from '../../../config/prompt.adapter';

const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

  const onshowPrompt = () => {
    showPrompt({
      title: 'Title Prompt',
      subTitle: '',
      buttons: [
        {
          text: 'ok',
          onPress: () => console.log('ok'),
        },
      ],
      placeholder: 'escribe aqui',
      promptType: 'plain-text',
    });
    // Alert.prompt('correo electronico', (valor: string) => console.log({valor}));
  };
  return (
    <CustonView style={globalStyles.globalMargin}>
      <Title safe text="Alertas" />

      <Button text="Aletea - 1 botones" onPress={createTwoButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Aletea - 3 botones" onPress={createThreeButtonAlert} />
      <View style={{height: 10}} />
      <Button text="Prompt - input" onPress={onshowPrompt} />
    </CustonView>
  );
};

export default AlertScreen;
