import React from 'react';
import {Image} from 'react-native';

interface Props {
  number: number;
}

const ListItem = ({number}: Props) => {
  return (
    <Image
      source={{uri: `https://picsum.photos/id/${number}/200/300`}}
      style={{height: 400, width: '100%'}}
    />
  );
};

export default ListItem;
