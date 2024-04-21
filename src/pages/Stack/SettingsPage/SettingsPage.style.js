import { StyleSheet } from 'react-native';
import radius from '../../../styles/radius';
import margin from '../../../styles/margin';
import padding from '../../../styles/padding';
import { colors } from '../../../styles';

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: radius.huge,
    borderTopRightRadius: radius.huge,
    borderRadius: radius.full,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: radius.full,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: margin.medium,
    marginBottom: margin.small,
  },
  number: {
    marginLeft: margin.medium,
  },
  actionContainer: {
    padding: padding.medium,
    paddingBottom: 40,
  },
  langContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: padding.medium,
    backgroundColor: colors.background.primary,
    borderRadius: radius.medium,
    marginBottom: margin.xlarge,
  },
  radio: {
    width: 18,
    height: 18,
    borderRadius: radius.full,
    backgroundColor: colors.background.secondary,
    marginRight: margin.medium,
  },
  activeRadio: {
    backgroundColor: colors.foreground.brand,
  },
});

export default styles;
