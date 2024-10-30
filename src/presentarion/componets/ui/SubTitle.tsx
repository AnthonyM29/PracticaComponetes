import React, {useContext} from 'react';
import {Text} from 'react-native';
import {globalStyles} from '../../screens/theme/theme';
import {ThemeContext} from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
}

const SubTitle = ({text, safe = false}: Props) => {
  const {colors} = useContext(ThemeContext);
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        color: colors.text,
      }}>
      {text}
    </Text>
  );
};

export default SubTitle;
