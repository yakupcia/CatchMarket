import { StyleSheet } from 'react-native';
import { colors } from '../../styles';
import padding from '../../styles/padding';
import radius from '../../styles/radius';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'tomato',
    padding: padding.medium,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius.small,
  },
  text: {
    color: 'white',
  },
});

export default styles;
