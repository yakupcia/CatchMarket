import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../styles';
import margin from '../../../styles/margin';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height,
  },
  closeContainer: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    zIndex: 99,
  },
  absoluteFlatlist: {
    position: 'absolute',
    bottom: '5%',
  },
  indicator: {
    width: width * 0.2,
    height: 3,
    backgroundColor: colors.background.primary,
    marginHorizontal: margin.medium,
  },
  activeIndexContainer: {
    backgroundColor: colors.foreground.brand,
  },
});

export default styles;
