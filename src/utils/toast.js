import { AlertIOS, ToastAndroid, Platform } from 'react-native';

export default (msg, title = null) => {
    if (__DEV__) {
        // debugging purpose
        console.warn(msg);
    }

    let message = '';
    if (typeof msg !== 'string') {
        message = msg.message; // eslint-disable-line prefer-destructuring
    } else {
        message = msg;
    }

    if (Platform.OS === 'ios') {
        AlertIOS.alert(title, message);
    } else {
        ToastAndroid.show(message, ToastAndroid.SHORT);
    }
};
