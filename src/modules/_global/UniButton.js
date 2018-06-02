import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    Platform,
} from 'react-native';

const Default = (props) => {
    return (
        <TouchableHighlight
            onPress={() => props.action(props.params)}
            underlayColor={props.highlightColor}
            disabled={props.disabled}
            style={{ borderRadius: props.borderRadius }}
        >
            {props.children}
        </TouchableHighlight>
    );
};

Default.propTypes = {
    action: PropTypes.func,
    params: PropTypes.oneOfType([PropTypes.any]),
    highlightColor: PropTypes.string,
    disabled: PropTypes.bool,
    borderRadius: PropTypes.number,
    children: PropTypes.element.isRequired,
};

Default.defaultProps = {
    action() { },
    params: null,
    highlightColor: (Platform.OS === 'android' && Platform.Version < 21) ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.15)',
    disabled: false,
    borderRadius: 0,
};

const UniButton = (props) => {
    // Use TouchableHighlight
    if (props.useTouchableHightlight) {
        return <Default {...props} />;
    } else if (Platform.OS === 'android') {
        // ANDROID
        // Below Lolipop
        if (Platform.Version < 21) {
            return <Default {...props} />;
        }

        // Lolipop or above (with ripple effect)
        return (
            <TouchableNativeFeedback
                onPress={() => props.action(props.params)}
                background={TouchableNativeFeedback.Ripple(props.highlightColor, props.borderless)}
                useForeground={props.foregroundRipple && TouchableNativeFeedback.canUseNativeForeground()}
                disabled={props.disabled}
            >
                {props.children}
            </TouchableNativeFeedback>
        );
    }

    // IOS
    return (
        <TouchableOpacity
            onPress={() => props.action(props.params)}
            activeOpacity={props.activeOpacity}
            disabled={props.disabled}
            style={{ borderRadius: props.borderRadius }}
        >
            {props.children}
        </TouchableOpacity>
    );
};

UniButton.propTypes = {
    action: PropTypes.func,
    params: PropTypes.oneOfType([PropTypes.any]),
    disabled: PropTypes.bool,
    highlightColor: PropTypes.string,
    borderless: PropTypes.bool,
    borderRadius: PropTypes.number,
    foregroundRipple: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.any]).isRequired,
    activeOpacity: PropTypes.number,
    useTouchableHightlight: PropTypes.bool,
};

UniButton.defaultProps = {
    action() { },
    params: null,
    highlightColor: (Platform.OS === 'android' && Platform.Version < 21) ? 'rgba(0,0,0,0.05)' : 'rgba(0,0,0,0.15)',
    disabled: false,
    borderless: false,
    foregroundRipple: false,
    activeOpacity: 0.5,
    useTouchableHightlight: false,
    borderRadius: 0,
};

export default UniButton;
