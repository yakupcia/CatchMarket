import {StyleSheet} from 'react-native';
import radius from '../../styles/radius';
import margin from '../../styles/margin';
import {colors} from '../../styles/colors';
import padding from '../../styles/padding';

const styles = StyleSheet.create({
  container: {},
  ActionSheet: {
    backgroundColor: 'tomato',
    width: '100%',
    height: '50%',
    // borderRadius: radius.full,
    borderRadiusRight: radius.full,
  },
  title: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderColor: colors.border.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  ActionButton: {
    marginVertical: 10,
    padding: padding.medium,
    backgroundColor: colors.background.primary,
    borderRadius: radius.medium,
    marginHorizontal: radius.medium,
  },
  text: {
    color: colors.text.secondary,
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1,
    // backgroundColor: 'black',
  },
});

export default styles;
