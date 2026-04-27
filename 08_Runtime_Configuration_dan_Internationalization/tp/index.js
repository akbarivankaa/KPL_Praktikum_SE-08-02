const tanggalSekarang = new Date();

const formatter = new Intl.DateTimeFormat('id-ID', {
  weekday: 'long',   
  day: 'numeric',    
  month: 'long',     
});

console.log(formatter.format(tanggalSekarang));