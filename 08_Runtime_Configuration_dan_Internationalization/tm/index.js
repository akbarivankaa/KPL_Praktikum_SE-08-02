require('@dotenvx/dotenvx').config({ quiet: true });

async function tampilkanKurs() {
  const apiUrl = process.env.BASE_API;

  if (!apiUrl) {
    console.error("BASE_API belum diatur di dalam file .env");
    return;
  }

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const tanggalAPI = new Date(data.date);
    const rateCNH = data.idr.cnh;
    const rateEUR = data.idr.eur;

    const formatTanggal = new Intl.DateTimeFormat('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(tanggalAPI);

    const formatIDR = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    });

    const formatCNH = new Intl.NumberFormat('id-ID', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    const formatEUR = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    const nominalUji = [25000, 50000, 100000];

    nominalUji.forEach(jumlah => {
      // Menghitung konversi
      const nilaiCNH = jumlah * rateCNH;
      const nilaiEUR = jumlah * rateEUR;

      const strIDR = formatIDR.format(jumlah).replace(/\s/g, '');
      const strCNH = formatCNH.format(nilaiCNH);
      const strEUR = formatEUR.format(nilaiEUR);

      console.log(`Kurs ${strIDR} pada ${formatTanggal} adalah CNH ${strCNH} dan ${strEUR}`);
    });

  } catch (error) {
    console.error("Terjadi kesalahan saat mengambil data API:", error);
  }
}

tampilkanKurs();