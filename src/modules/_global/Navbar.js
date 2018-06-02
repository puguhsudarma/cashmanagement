import React, { PureComponent } from 'react';
import { View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { styles as s } from 'react-native-style-tachyons';
import { UniButton } from '../_global';
import { colors } from '../../constants/index';
import { ms } from '../../utils/index';

const NAVBAR_HEIGHT = _.isEqual(Platform.OS, 'ios') ? 56 + 12 : 56;

class Navbar extends PureComponent {
    constructor(props) {
        super(props);
        this._leftAction = this._leftAction.bind(this);
        this._rightAction = this._rightAction.bind(this);
        this.state = {

        };
    }
    _leftAction() {
        this.props.leftAction(this.props.leftParams);
    }
    _rightAction() {
        this.props.rightAction(this.props.rightParams);
    }
    render() {
        const { width, height } = Dimensions.get('window');

        return (
            <View style={[s.jcc, {
                minHeight: NAVBAR_HEIGHT,
                maxHeight: 100,
                backgroundColor: this.props.bgColor,
                shadowColor: colors.BLACK,
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.8,
                shadowRadius: 10,
            }]}>
                {
                    !!this.props.centerComponent &&
                    <View style={[s.absolute, s.jcc, {
                        width,
                        height: NAVBAR_HEIGHT,
                        paddingTop: _.isEqual(Platform.OS, 'ios') ? 12 : 0,
                        left: ms(70),
                    }]}>
                        {this.props.centerComponent}
                    </View>
                }

                {
                    !!this.props.leftComponent &&
                    <View style={[s.absolute, s.left_0, {
                        width: NAVBAR_HEIGHT,
                        height: NAVBAR_HEIGHT,
                        borderRadius: NAVBAR_HEIGHT / 2,
                        paddingTop: _.isEqual(Platform.OS, 'ios') ? 12 : 0,
                    }]}>
                        <UniButton action={this._leftAction} borderless borderRadius={56 / 2}>
                            <View style={[s.jcc, s.aic, { height: 56, width: 56, borderRadius: NAVBAR_HEIGHT / 2 }]}>
                                {this.props.leftComponent}
                            </View>
                        </UniButton>
                    </View>
                }

                {
                    !!this.props.rightComponent &&
                    <View style={[s.absolute, s.right_0]}>
                        {
                            this.props.rightAction ?
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={this._rightAction}
                                >
                                    <View style={[s.jcc, s.aife, { height, paddingHorizontal: 16 }]}>
                                        {this.props.rightComponent}
                                    </View>
                                </TouchableOpacity>
                                :
                                <View style={[s.jcc, { height, paddingHorizontal: 16 }]}>
                                    {this.props.rightComponent}
                                </View>
                        }
                    </View>
                }
            </View>
        );
    }
}

Navbar.propTypes = {
    bgColor: PropTypes.string,
    centerComponent: PropTypes.any,
    leftComponent: PropTypes.any,
    leftAction: PropTypes.func,
    leftParams: PropTypes.any,
    rightComponent: PropTypes.any,
    rightAction: PropTypes.func,
    rightParams: PropTypes.any,
};

Navbar.defaultProps = {
    bgColor: colors.WHITE,
};

export default Navbar;
