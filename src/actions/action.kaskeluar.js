const INPUT_KAS_KELUAR = 'INPUT_KAS_KELUAR';
const INPUT_KAS_KELUAR_SUCCESS = 'INPUT_KAS_KELUAR_SUCCESS';
const GET_KAS_KELUAR_HARI_INI = 'GET_KAS_KELUAR_HARI_INI';
const GET_KAS_KELUAR_HARI_INI_SUCCESS = 'GET_KAS_KELUAR_HARI_INI_SUCCESS';
const GET_KAS_KELUAR_ALL = 'GET_KAS_KELUAR_ALL';
const GET_KAS_KELUAR_ALL_SUCCESS = 'GET_KAS_KELUAR_ALL_SUCCESS';
const GET_KAS_KELUAR_CUSTOM = 'GET_KAS_KELUAR_CUSTOM';
const GET_KAS_KELUAR_CUSTOM_SUCCESS = 'GET_KAS_KELUAR_CUSTOM_SUCCESS';
const KAS_KELUAR_FAILED = 'KAS_KELUAR_FAILED';

export const actionType = {
    INPUT_KAS_KELUAR,
    INPUT_KAS_KELUAR_SUCCESS,
    GET_KAS_KELUAR_HARI_INI,
    GET_KAS_KELUAR_HARI_INI_SUCCESS,
    GET_KAS_KELUAR_ALL,
    GET_KAS_KELUAR_ALL_SUCCESS,
    GET_KAS_KELUAR_CUSTOM,
    GET_KAS_KELUAR_CUSTOM_SUCCESS,
    KAS_KELUAR_FAILED,
};

export const inputKasKeluar = (jumlah, deskripsi, foto) => ({
    type: INPUT_KAS_KELUAR,
    payload: {
        jumlah,
        deskripsi,
        foto,
    },
});

export const inputKasKeluarSuccess = (id, jumlah, deskripsi) => ({
    type: INPUT_KAS_KELUAR_SUCCESS,
    payload: {
        id,
        jumlah,
        deskripsi,
    },
});

export const getKasKeluarHariIni = () => ({
    type: GET_KAS_KELUAR_HARI_INI,
});

export const getKasKeluarHariIniSuccess = data => ({
    type: GET_KAS_KELUAR_HARI_INI_SUCCESS,
    payload: {
        data,
    },
});

export const getKasKeluarAll = () => ({
    type: GET_KAS_KELUAR_ALL,
});

export const getKasKeluarAllSuccess = data => ({
    type: GET_KAS_KELUAR_ALL_SUCCESS,
    payload: {
        data,
    },
});

export const getKasKeluarCustom = date => ({
    type: GET_KAS_KELUAR_CUSTOM,
    payload: {
        date,
    },
});

export const getKasKeluarCustomSuccess = data => ({
    type: GET_KAS_KELUAR_CUSTOM_SUCCESS,
    payload: {
        data,
    },
});

export const kasKeluarFailed = (error, type) => ({
    type: KAS_KELUAR_FAILED,
    payload: {
        error,
        type,
    },
});
