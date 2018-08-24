import { createLogic } from 'redux-logic';
import _ from 'lodash';
import firebase from 'react-native-firebase';
import {
    actionType as type,
} from '../actions/action.kaskeluar';
import { toast } from '../utils';

const inputKasKeluarLogic = createLogic({
    type: type.INPUT_KAS_KELUAR,
    validate({ action }, allow, reject) {
        const {
            jumlah,
            deskripsi,
        } = action.payload;

        if (_.isEmpty(jumlah) || _.isEmpty(deskripsi)) {
            toast('Input tidak boleh kosong');
            reject();
        } else {
            allow(action);
        }
    },
    process({ action }, dispatch, done) {

    },
});

const getKaskeluarHariIniLogic = createLogic();

const getKasKeluarAllLogic = createLogic();

const getKasKeluarCustomLogic = createLogic();

export default [
    inputKasKeluarLogic,
    getKaskeluarHariIniLogic,
    getKasKeluarAllLogic,
    getKasKeluarCustomLogic,
];
