import React, {useState} from 'react';
import CustonView from '../../componets/ui/CustonView';
import {CustomSwitch} from '../../componets/ui/CustonSwitch';
import Card from '../../componets/ui/Card';
import Separator from '../../componets/ui/Separator';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });
  return (
    <CustonView style={{paddingTop: 20, paddingHorizontal: 20}}>
      <Card style={undefined}>
        <CustomSwitch
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="¿Está activo?"
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="¿Tiene hambre?"
        />

        <Separator />

        <CustomSwitch
          isOn={state.isHappy}
          onChange={value => setState({...state, isHappy: value})}
          text="¿Es feliz?"
        />
      </Card>
    </CustonView>
  );
};

export default SwitchScreen;
