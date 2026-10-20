/* 
  File: script.js
  Fungsi: Mengatur interaktivitas dasar pada website UT Gaming
*/

// Menunggu sampai seluruh elemen HTML selesai dimuat sebelum menjalankan skrip
document.addEventListener("DOMContentLoaded", function () {
    
    // Mengambil elemen tombol berdasarkan ID 'cta-btn'
    const ctaButton = document.getElementById("cta-btn");

    // Mengecek apakah tombol tersebut benar-benar ada di halaman
    if (ctaButton) {
        // Menambahkan fungsi ketika tombol diklik
        ctaButton.addEventListener("click", function () {
            alert("Halo Gamer! Selamat datang di UT Gaming. Siapkan dirimu untuk bermain!");
        });
    }

});
