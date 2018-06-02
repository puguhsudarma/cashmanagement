import { Navigation } from 'react-native-navigation';

import SplashScreen from './modules/SplashScreen/SplashScreen';

export default (store, Provider) => {
    Navigation.registerComponent('cashmanagement.SplashScreen', () => SplashScreen, store, Provider);
};
