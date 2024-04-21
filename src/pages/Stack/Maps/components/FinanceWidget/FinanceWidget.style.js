import { StyleSheet } from 'react-native';
import radius from '../../../../../styles/radius';
import { colors } from '../../../../../styles';
import padding from '../../../../../styles/padding';
import margin from '../../../../../styles/margin';

const styles = StyleSheet.create({
    container: {
        height: 320,
        backgroundColor: '#fff',
        borderRadius: radius.xlarge,
        padding: padding.xlarge
    },
    topContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderWidth: 1,
        borderColor: colors.border.primary,
        borderRadius: radius.small,
        width: '45%',
        padding: padding.large,
    },
    activeItemContainer: {
        borderColor: colors.border.brand
    },
    textContainer: {
        alignItems: 'flex-end',
    },
    iconContainer: {
        backgroundColor: colors.global.black,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: radius.full,
        marginLeft: margin.medium
    },
    image: {
        width: 120,
        height: 175,
        marginRight: margin.medium,
        marginVertical: margin.xlarge,
        borderRadius: radius.medium,
    }
});

export default styles;
