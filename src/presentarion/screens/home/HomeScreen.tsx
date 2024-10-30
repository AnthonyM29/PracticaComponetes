import React from 'react';
import {View, ScrollView} from 'react-native';
// import {AirplaneIcon} from '../../icons/Icons';
import {globalStyles} from '../theme/theme';
import Title from '../../componets/ui/Title';
import MenuItem from '../../componets/ui/MenuItem';
import CustonView from '../../componets/ui/CustonView';

const animationItems = [
  // 01-animationMenuItems
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

const menuItems = [
  // 02-menuItems
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiItems = [
  // 03- uiMenuItems
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

const HomeScreen = () => {
  return (
    <CustonView style={globalStyles.globalMargin}>
      <ScrollView>
        <Title text={'Opciones de menu'} safe />

        {animationItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === animationItems.length - 1}
            component={item.component}
          />
        ))}

        <View style={{marginTop: 20}} />
        {uiItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === uiItems.length - 1}
            component={item.component}
          />
        ))}

        <View style={{marginTop: 20}} />
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.component}
            {...item}
            isFirst={index === 0}
            isLast={index === menuItems.length - 1}
            component={item.component}
          />
        ))}

        <View style={{marginTop: 20}} />
      </ScrollView>
    </CustonView>
  );
};

export default HomeScreen;
