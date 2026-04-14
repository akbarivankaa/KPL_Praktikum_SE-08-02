function divide(a, b) {
    // prakonidisi
    if (typeof a !== 'number') {
        throw new TypeError
        ('Salah tipe data untuk argumen a');
    }
    if (typeof a !== 'number') {
        throw new TypeError
        ('Salah tipe data untuk argumen b');
    }
    if (b === 0) {
        return 0;
    } 
    
    const hasil = a / b;

    // pascakondisi
    if (hasil * b === a) {
        return hasil;
    }

    return 0;
}

console.log(
    div(10, 40)
);