import React from 'react';
import CustonView from '../../componets/ui/CustonView';
import Title from '../../componets/ui/Title';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from '../theme/theme';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  return (
    <CustonView style={globalStyles.globalMargin}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <Title text="Pull to refresh" safe />
      </ScrollView>
    </CustonView>
  );
};

export default PullToRefreshScreen;
