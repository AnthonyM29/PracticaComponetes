import React, {useContext, useState} from 'react';
import CustonView from '../../componets/ui/CustonView';
import Title from '../../componets/ui/Title';
import {globalStyles} from '../theme/theme';
import Card from '../../componets/ui/Card';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ThemeContext} from '../../context/ThemeContext';

const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const {colors} = useContext(ThemeContext);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustonView style={globalStyles.globalMargin}>
          <Title text="Text Input" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre"
              autoCapitalize="words"
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Phone"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: colors.text}}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
        </CustonView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;
