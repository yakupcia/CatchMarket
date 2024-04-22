import {StyleSheet} from 'react-native';
import radius from '../../../styles/radius';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute',
    left: 20,
    top: '5%',
    zIndex: 99,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: radius.full,
  },
});

export default styles;
