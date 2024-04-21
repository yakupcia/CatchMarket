import {Text, View, FlatList, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {Icon} from '../../../components';
import styles from './Splash.style';

const Splash = ({navigation}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const IMAGES = [
    require('../../../assets/images/delivery.jpeg'),
    require('../../../assets/images/delivery.jpeg'),
  ];

  const renderItem = ({item}) => (
    <Image source={item} style={styles.image} resizeMode="cover" />
  );

  const renderIndicator = ({item, index}) => (
    <View
      style={[
        styles.indicator,
        index === activeIndex && styles.activeIndexContainer,
      ]}
    />
  );

  const onMomentumScrollEnd = event => {
    const index = Math.floor(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width,
    );
    console.log(index);
    setActiveIndex(index);
  };

  const navigateToHome = () => navigation.navigate('MapScreen');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateToHome} style={styles.closeContainer}>
        <Icon type="ant" name="close" />
      </TouchableOpacity>
      <FlatList
        data={IMAGES}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />
      <View style={styles.absoluteFlatlist}>
        <FlatList data={IMAGES} renderItem={renderIndicator} horizontal />
      </View>
    </View>
  );
};

export default Splash;
