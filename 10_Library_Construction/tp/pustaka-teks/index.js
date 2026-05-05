export function hitungHuruf(teks) {
  const kecocokan = teks.match(/[a-zA-Z]/g);
  return kecocokan ? kecocokan.length : 0;
}

export function hitungKata(teks) {
  const teksBersih = teks.trim();
  
  if (!teksBersih) {
    return 0;
  }
  
  const arrayKata = teksBersih.split(/\s+/);
  return arrayKata.length;
}