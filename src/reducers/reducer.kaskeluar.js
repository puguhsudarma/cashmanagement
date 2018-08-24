import { actionType as type } from '../actions/action.kaskeluar';

const initialState = {
    dataHariIni: [],
    dataAll: [],
    dataCustom: [],

    loadingInput: false,
    loadingGetDataHariIni: false,
    loadingGetDataAll: false,
    loadingGetDataCustom: false,

    error: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case type.INPUT_KAS_KELUAR:
            return {
                ...state,
                loadingInput: true,
            };

        case type.INPUT_KAS_KELUAR_SUCCESS:
            return {
                ...state,
                loadingInput: false,
                dataHariIni: [
                    ...state.dataHariIni,
                    action.payload,
                ],
            };

        case type.GET_KAS_KELUAR_HARI_INI:
            return {
                ...state,
                loadingGetDataHariIni: true,
            };

        case type.GET_KAS_KELUAR_HARI_INI_SUCCESS:
            return {
                ...state,
                loadingGetDataHariIni: false,
                dataHariIni: action.payload.data,
            };

        case type.GET_KAS_KELUAR_ALL:
            return {
                ...state,
                loadingGetDataAll: true,
            };

        case type.GET_KAS_KELUAR_ALL_SUCCESS:
            return {
                ...state,
                loadingGetDataAll: false,
                dataAll: action.payload.data,
            };

        case type.GET_KAS_KELUAR_CUSTOM:
            return {
                ...state,
                loadingGetDataCustom: true,
            };

        case type.GET_KAS_KELUAR_CUSTOM_SUCCESS:
            return {
                ...state,
                loadingGetDataCustom: false,
                dataCustom: action.payload.data,
            };

        case type.KAS_KELUAR_FAILED:
            return {
                ...state,
                error: action.payload,
                loadingInput: false,
                loadingGetDataHariIni: false,
                loadingGetDataAll: false,
                loadingGetDataCustom: false,
            };

        default:
            return state;
    }
};
