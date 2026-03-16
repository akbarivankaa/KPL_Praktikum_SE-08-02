const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const uppercaseCountElement = document.getElementById("hb");
const lowercaseCountElement = document.getElementById("hk");

const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");

function updateCounters() {
    const text = editorElement.value;
    
    charCountElement.textContent = text.length;
    
    const lowercaseMatch = text.match(/[a-z]/g);
    lowercaseCountElement.textContent = lowercaseMatch ? lowercaseMatch.length : 0;
    
    const uppercaseMatch = text.match(/[A-Z]/g);
    uppercaseCountElement.textContent = uppercaseMatch ? uppercaseMatch.length : 0;
}

const opmat = {
  tambah: (a, b) => a + b,
  kurang: (a, b) => a - b,
  kali: (a, b) => a * b,
  bagi: (a, b) => a / b
};

const ot = opmat[tambah];

// Hasilnya 3
console.log(
    ot(1, 2)
);

editorElement.addEventListener("input", updateCounters);

btnBesarkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCounters();
});

btnKecilkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCounters(); 
});