import { StyleSheet } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';
import { colors } from '../constants';

export default () => {
    NativeTachyons.build({
        rem: 16,
        colors: {
            palette: {
                white: colors.WHITE,
                black: colors.BLACK,
                indigo_1: colors.INDIGO,
                indigo_2: colors.INDIGO_LIGHT,
                indigo_3: colors.INDIGO_DARK,
                pink_1: colors.PINK,
                pink_2: colors.PINK_LIGHT,
                pink_3: colors.PINK_DARK,

                grey_2: colors.COOL_GREY_2,
                grey_4: colors.COOL_GREY_4,
                grey_6: colors.COOL_GREY_6,
                grey_7: colors.COOL_GREY_7,
                grey_9: colors.COOL_GREY_9,
                grey_10: colors.COOL_GREY_10,
                grey_11: colors.COOL_GREY_11,

                purple: colors.PURPLE,

                red: colors.RED,
                orange: colors.ORANGE,
                yellow: colors.YELLOW,
                transparent: colors.TRANSPARENT,
            },
        },
        fonts: {
            opensans_bold: 'OpenSans-Bold',
            opensans_light: 'OpenSans-Light',
            opensans_lightitalic: 'OpenSansLight-Italic',
            opensans_regular: 'OpenSans',
            opensans_semibold: 'OpenSans-Semibold',
        },
    }, StyleSheet);
};
