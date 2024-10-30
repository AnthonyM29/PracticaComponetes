import React, {useRef, useState} from 'react';
import CustonView from '../../componets/ui/CustonView';
import {colors, globalStyles} from '../theme/theme';
import {
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Button from '../../componets/ui/Button';
import {useNavigation} from '@react-navigation/native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const [currentSlideIdex, setCurrentSlideIdex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset, layoutMeasurement} = event.nativeEvent;
    const currenIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIdex(currenIndex > 0 ? currenIndex : 0);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) {
      return;
    }

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };
  return (
    <CustonView style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={items => items.title}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        onScroll={onScroll}
      />
      {currentSlideIdex === items.length - 1 ? (
        <Button
          text="Finalizar"
          onPress={() => navigation.goBack()}
          style={{position: 'absolute', bottom: 60, right: 30, width: 100}}
        />
      ) : (
        <Button
          text="Siguiente"
          onPress={() => scrollToSlide(currentSlideIdex + 1)}
          style={{position: 'absolute', bottom: 60, right: 30, width: 100}}
        />
      )}
    </CustonView>
  );
};

export default SlidesScreen;

interface Props {
  item: Slide;
}

export const SlideItem = ({item}: Props) => {
  const {width} = useWindowDimensions();
  const {title, desc, img} = item;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 40,
        justifyContent: 'center',
        width: width,
      }}>
      <Image
        source={img}
        style={{
          width: width * 0.7,
          height: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <Text style={[globalStyles.title, {color: colors.primary}]}>{title}</Text>
      <Text style={{color: colors.text, fontSize: 20, marginTop: 10}}>
        {desc}
      </Text>
    </View>
  );
};