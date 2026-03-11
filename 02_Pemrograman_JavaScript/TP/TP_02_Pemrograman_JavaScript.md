Terdapat dua masalah utama didalam logika kodenya 

karena targetnya adalah untuk menghasilkan 1456
Maka, Nilai 0 dalam Perkalian Di dalam blok if (arr[i] >= 0), angka 0 tersebut juga ikut diproses. karena didalam matematika, angka bearapapun yang dikalikan dengan 0 bakal menghasilkan 0. nah maka dari itu, variabel result bisa langsung menjadi 0 dan tetap 0 sampai akhir iterasi.

lalu Kondisi Filternya karena output yang diminta adalah 1456, itu didapat dari hasil perkalian 2 x 26 x 28. yang dimana, angka 0 dan -2 harus kita abaikan. Syarat arr[i] >= 0 masih mengikutsertakan angka 0.