import {StyleSheet} from 'react-native';
import {colors} from '../../styles';
import padding from '../../styles/padding';
import radius from '../../styles/radius';
import margin from '../../styles/margin';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: 75,
    height: 55,
    borderRadius: radius.small,
  },
  Switch: {
    backgroundColor: colors.background.brand,
    margin: margin.medium,
    borderRadius: radius.small,
    padding: padding.large,
  },
});

export default styles;
