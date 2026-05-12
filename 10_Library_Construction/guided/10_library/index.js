export function tambah(x, y) {
    return x + y;
}

export function kurang(x, y) {
    return x - y;
}

export function kali(x, y) {
    return x * y;
}

export function bagi(x, y) {
    return x / y;
}

export function pangkat(x, y) {
    return x ** y;
}

/** 
 * @param {string} x
 * @param {number} a
 */
export function plsv_dua(x, a) {
    const coeff = parseInt(x);
    return bagi(a, coeff);
}


/** 
 * @param {string} x
 * @param {number} y
 * @param {number} z
 */

export function plsv_tiga(x, a, b) {
    const k = b - a;

    if (x.length == 1) {
        const konstanta = b - a;

    } else { (x.length >= 2) 
        const coeff = parseInt(x);
        return bagi(k, coeff);
    }

    return {
        "x": x,
        "dengan": "=",
        "hasil": hasil
    }
}

export function plsv_dua(x, ap, a) {
    const coeff = parseInt(x);

    const balikkan_op = {
        ">=": "<=",
        "<=": ">=",
        ">": "<",
        "<": ">"
    }

    const op_baru = coeff < 0 ? balikkan_op[ap] : ap;
    return {
        "x": x,
        "dengan": op_baru,
        "hasil": bagi(a, coeff)
    }
}