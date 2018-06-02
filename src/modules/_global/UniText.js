import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { ms } from '../../utils';

const BaseTemplate = (props) => {
    return (
        <Text
            numberOfLines={props.numberOfLines}
            style={[
                {
                    fontSize: props.size,
                    color: props.color,
                    backgroundColor: 'transparent',
                    fontFamily: props.family,
                    textDecorationLine: props.underline === true ? 'underline' : 'none',
                    fontStyle: props.italic === true ? 'italic' : 'normal',
                    textAlign: props.textAlign,
                },
                props.style,
            ]}
        >
            {props.children}
        </Text>
    );
};
BaseTemplate.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    color: PropTypes.string,
    numberOfLines: PropTypes.number,
    size: PropTypes.number,
    family: PropTypes.string,
    style: PropTypes.oneOfType([
        PropTypes.shape(),
        PropTypes.arrayOf(),
    ]),
    underline: PropTypes.bool,
    italic: PropTypes.bool,
    textAlign: PropTypes.string,
};
BaseTemplate.defaultProps = {
    color: '#000',
    numberOfLines: 0,
    size: ms(14),
    family: 'OpenSans',
    textAlign: 'left',
    underline: false,
    italic: false,
    style: {},
    children: '',
};

export const Bold = props => (
    <BaseTemplate {...props} family="OpenSans-Bold" />
);

export const Light = props => (
    <BaseTemplate {...props} family="OpenSans-Light" />
);

export const LightItalic = props => (
    <BaseTemplate {...props} family="OpenSansLight-Italic" />
);

export const Regular = props => (
    <BaseTemplate {...props} family="OpenSans" />
);

export const Semibold = props => (
    <BaseTemplate {...props} family="OpenSans-Semibold" />
);
