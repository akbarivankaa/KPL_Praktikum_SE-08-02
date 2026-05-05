import { hitungHuruf, hitungKata } from './index.js';

const teksUji = "tes pustaka JS ke-1";

console.log("Teks:", teksUji);
console.log("Jumlah Kata:", hitungKata(teksUji)); 
console.log("Jumlah Huruf Alfabet:", hitungHuruf(teksUji));