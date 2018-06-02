import React, { PureComponent } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ms } from '../../utils';

class SplashScreen extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        // give some time
        setTimeout(() => {

        }, 5000);
    }

    render() {
        return (
            <View style={[s.flx_i, s.aic, s.jcc, s.bg_white]}>
                <View style={[s.absolute, s.bottom_0, s.left_0, s.right_0, s.jcc, s.aic, {
                    height: ms(90),
                }]}>
                    <ActivityIndicator
                        size="large"
                    />
                </View>
            </View>
        );
    }
}

SplashScreen.navigatorStyle = {
    navBarHidden: true,
};

SplashScreen.propTypes = {
    // navigator
    navigator: PropTypes.shape().isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
