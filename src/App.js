import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { persistStore } from 'redux-persist';
import { Provider } from 'react-redux';
import registerScreens from './registerScreen';
import { configureStore, configureTachyons } from './utils';

const app = () => {
    // Disable on screen warning while in debug mode
    console.disableYellowBox = true;

    // build tachyons
    configureTachyons();

    // configure store
    const store = configureStore();

    persistStore(store, {
        storage: AsyncStorage,
        // whitelist: [],
        // blacklist: [],
    }, () => {
        // register all screens for navigation
        registerScreens(store, Provider);

        // Run app (single screen)
        Navigation.startSingleScreenApp({
            screen: {
                screen: 'cashmanagement.SplashScreen',
            },
        });
    });
};

export default app;
