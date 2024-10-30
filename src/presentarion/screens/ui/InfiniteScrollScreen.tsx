import React, {useState} from 'react';
import Title from '../../componets/ui/Title';
import CustonView from '../../componets/ui/CustonView';
import {colors, globalStyles} from '../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {ActivityIndicator, View} from 'react-native';
import ListItem from '../../componets/ui/ListItem';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray = Array.from({length: 5}, (_, i) => numbers.length + i);
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 2000);
  };
  return (
    <CustonView style={globalStyles.globalMargin}>
      <Title text="InfiniteScrollScreen" safe />

      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.6}
        renderItem={({item}) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{height: 150, justifyContent: 'center'}}>
            <ActivityIndicator size={40} color={colors.primary} />
          </View>
        )}
      />
    </CustonView>
  );
};

export default InfiniteScrollScreen;
