import React, {useState} from 'react';
import Title from '../../componets/ui/Title';
import CustonView from '../../componets/ui/CustonView';
import {globalStyles} from '../theme/theme';
import {Modal} from 'react-native';
import Button from '../../componets/ui/Button';

const ModalScreen = () => {
  const [visible, setVisible] = useState(false);
  return (
    <CustonView style={globalStyles.globalMargin}>
      <Title text="Modal" safe />

      <Button text="Abrir Modal" onPress={() => setVisible(true)} />

      <Modal visible={visible} animationType="slide">
        <CustonView style={{paddingHorizontal: 10}}>
          <Title text="Modal content" safe />
        </CustonView>

        <Button
          style={{borderRadius: 0}}
          text="Cerrar Modal"
          onPress={() => setVisible(false)}
        />
      </Modal>
    </CustonView>
  );
};

export default ModalScreen;
