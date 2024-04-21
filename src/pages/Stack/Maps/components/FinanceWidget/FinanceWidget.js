import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React from 'react';
import styles from './FinanceWidget.style';
import { Icon } from '../../../../../components';
import { colors } from '../../../../../styles';

const FinanceWidget = () => {
  const [active, setActive] = React.useState(false);

  const changeActive = () => {
    setActive(!active);
  };

  const IMAGES = [require('../../../../../assets/images/home1.png'), require('../../../../../assets/images/home2.png'), require('../../../../../assets/images/home3.png')];

  const renderPhoto = ({ item }) => <Image source={item} style={styles.image} />;

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          onPress={changeActive}
          style={[styles.itemContainer, active && styles.activeItemContainer]}>
          <View style={styles.textContainer}>
            <Text>Total Earned</Text>
            <Text>80.00$</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon type="entypo" name="list" color={colors.global.white} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={changeActive}
          style={[styles.itemContainer, !active && styles.activeItemContainer]}>
          <View style={styles.textContainer}>
            <Text>Balance</Text>
            <Text>80.00$</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon type="mat" name="money" color={colors.global.white} />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList data={IMAGES} renderItem={renderPhoto} horizontal showsHorizontalScrollIndicator={false} />
    </View>
  );
};

export default FinanceWidget;
