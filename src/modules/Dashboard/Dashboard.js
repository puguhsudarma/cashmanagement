import React, { Component } from 'react';
import {
    View,
    Dimensions,
    FlatList,
    RefreshControl,
    ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { styles as s } from 'react-native-style-tachyons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ms } from '../../utils';
import {
    Navbar,
    UniText,
} from '../_global';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={[s.flx_i, {
                backgroundColor: '#dee1e5',
            }]}>
                <Navbar
                    leftComponent={
                        <Ionicons name="ios-menu-outline" size={ms(28)} />
                    }
                    leftAction={this._handleMenu}
                    centerComponent={
                        <UniText.Bold size={ms(16)}>
                            {'Dashboard Today'}
                        </UniText.Bold>
                    }
                    noBorder
                />

                <View style={[s.flx_i]}>
                    {
                        this.props.data.length > 0 ?
                            <FlatList
                                contentContainerStyle={[{ paddingHorizontal: ms(10) }]}
                                data={props.data}
                                extraData={props.extraData}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={props.loading}
                                        onRefresh={props.onRefresh}
                                    />
                                }
                                ItemSeparatorComponent={() => <View style={{ height: ms(10) }} />}
                                keyExtractor={(item, index) => index.toFixed()}
                                initialNumToRender={8}
                                renderItem={({ item, index }) => (
                                    <View>
                                        {null}
                                    </View>
                                )}
                            />
                            :
                            <ScrollView
                                contentContainerStyle={[s.flx_i, s.aic, s.jcc]}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={props.loading}
                                        onRefresh={props.onRefresh}
                                    />
                                }
                            >
                                <UniText.Regular color="#aaa" textAlign="center">
                                    {
                                        props.loading && props.data.length === 0 ?
                                            'Mohon tunggu\nMemuat rekomendasi untuk anda' :
                                            'Tidak ada data rekomendasi'
                                    }
                                </UniText.Regular>
                            </ScrollView>
                    }
                    <TabViewAnimated
                        style={s.flx_i}
                        navigationState={this.state.tabs}
                        renderScene={this._renderScene}
                        renderHeader={this._renderHeader}
                        onIndexChange={this._handleIndexChange}
                        initialLayout={{
                            height: 0,
                            width: Dimensions.get('window').width,
                        }}
                    />
                </View>
            </View>
        );
    }
}

Dashboard.navigatorStyle = {
    navBarHidden: true,
};

Dashboard.propTypes = {
    // navigator
    navigator: PropTypes.shape().isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
