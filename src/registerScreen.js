import { Navigation } from 'react-native-navigation';

import SplashScreen from './modules/SplashScreen/SplashScreen';
import Dashboard from './modules/Dashboard/Dashboard';

export default (store, Provider) => {
    Navigation.registerComponent('cashmanagement.SplashScreen', () => SplashScreen, store, Provider);
    Navigation.registerComponent('cashmanagement.Dashboard', () => Dashboard, store, Provider);
};
