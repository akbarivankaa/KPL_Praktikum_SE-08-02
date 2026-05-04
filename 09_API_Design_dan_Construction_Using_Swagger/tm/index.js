const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

function dapatkanAngkaTarget(nama) {
    let nilaiKarakter = 0;
    
    for (let i = 0; i < nama.length; i++) {
        nilaiKarakter += nama.charCodeAt(i);
    }
    
    return (nilaiKarakter % 100) + 1;
}

app.post('/', (req, res) => {
    const nama = req.body.nama;
    const tebakan = req.body.tebakan;

    const target = dapatkanAngkaTarget(nama);

    if (tebakan === target) {
        res.json({ jawaban: `Benar sekali! Tebakannya adalah ${target}.` });
    } else if (tebakan > target) {
        res.json({ jawaban: "Tebakanmu terlalu tinggi!" });
    } else if (tebakan < target) {
        res.json({ jawaban: "Tebakanmu terlalu rendah!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server Tugas Mandiri jalan di http://localhost:${PORT}`);
});