export const number = (angka = 0) => {
    let rupiah = '';
    const angkarev = angka.toString().split('').reverse().join('');
    let i = 0;
    for (i = 0; i < angkarev.length; i += 1) {
        if (i % 3 === 0) rupiah += `${angkarev.substr(i, 3)}.`;
    }
    return rupiah.split('', rupiah.length - 1).reverse().join('');
};

export const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const validateNumber = (value) => {
    const re = /^\d+$/;
    return re.test(value);
};

export const dob = (date = '') => {
    const part = date.split('-');
    return `${part[2]}/${part[1]}/${part[0]}`;
};

export const url = (str, mapObj) => {
    if (!Array.isArray(mapObj)) {
        return str.replace(/{\w*}/gi, mapObj);
    }

    let iterator = 0;
    return str.replace(/{\w*}/gi, () => {
        const map = mapObj[iterator];
        iterator += 1;
        return map;
    });
};

export const xor = (a, b) => (a || b) && !(a && b);
