import { StyleSheet } from 'react-native';
import padding from '../../styles/padding';
import radius from '../../styles/radius';
import { colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
    padding: padding.large,
    backgroundColor: colors.background.secondary,
    borderRadius: radius.medium,
    marginHorizontal: radius.medium,
  },
  title: {
    marginLeft: 12
  }
});

export default styles;
