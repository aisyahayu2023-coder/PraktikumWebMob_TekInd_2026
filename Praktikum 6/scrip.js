// Komentar single line 

// 1. Variabel & Tipe Data 
let namaMesin = "CNC-Mazak-01"; // String 
let targetHarian = 500; // Number 
let isOperational = true; // Boolean 

// Menampilkan ke console browser (Tekan F12 -> Console) 
console.log("Mesin: " + namaMesin); 
console.log("Target: " + targetHarian); 

// 2. Operator Aritmatika 
let produksiPagi = 200; 
let produksiSiang = 150; 
let totalProduksi = produksiPagi + produksiSiang; 

console.log("Total saat ini: " + totalProduksi); 

// Hitung sisa kekurangan target 
let kekurangan = targetHarian - totalProduksi; 
console.log("Kekurangan target: " + kekurangan);
// Simulasi data pembacaan sensor (jam operasional) 
let jamOperasional = 1250; 
let batasMaksimal = 1200; 

console.log("--- Cek Status Maintenance ---"); 

// Logika If/Else 
if (jamOperasional >= batasMaksimal) { 
    console.log("PERINGATAN: Mesin mencapai batas maksimal!"); 
    console.log("Status: MAINTENANCE WAJIB (Stop Produksi)"); 
} else if (jamOperasional > 1000) { 
    console.log("Status: SIAP HATI-HATI (Segera jadwalkan maintenance)"); 
} else { 
    console.log("Status: BERJALAN NORMAL"); 
} 
console.log("--- Perhitungan Availability Mesin ---");

// Data Input
let jamKerjaPlanned = 8; // Jam
let jamKerjaAktual = 6.5; // Jam (Ada 1.5 jam breakdown)

// Perhitungan
let availability = (jamKerjaAktual / jamKerjaPlanned) * 100;

// Pembulatan 2 angka di belakang koma
availability = availability.toFixed(2);

console.log("Planned Time: " + jamKerjaPlanned + " Jam");
console.log("Actual Time: " + jamKerjaAktual + " Jam");
console.log("Availability: " + availability + "%");

// Logika Penilaian
if (availability >= 90) {
    console.log("Kategori: WORLD CLASS");
} else if (availability >= 80) {
    console.log("Kategori: BAIK (Tetap monitor)");
} else {
    console.log("Kategori: BURUK (Perlu investigasi penyebab breakdown)");
}
// Input dari user
let namaOperator = prompt("Masukkan Nama Operator:"); 
let shiftKerja = prompt("Masukkan Shift (Pagi/Siang/Malam):"); 

if (shiftKerja === "Malam") { 
    alert("Halo " + namaOperator + ", Shift malam memiliki tambahan uang makan sebesar Rp 20.000."); 
} else { 
    alert("Halo " + namaOperator + ", Selamat bekerja. Tetap semangat!");
}
// 1. Seleksi Elemen DOM 
const btnStart = document.getElementById('btnStart'); 
const btnStop = document.getElementById('btnStop'); 
const btnReset = document.getElementById('btnReset'); 
const statusIndicator = document.getElementById('statusIndicator'); 
const suhuMesin = document.getElementById('suhuMesin'); 
const teksStatus = statusIndicator.querySelector('strong'); // Mengambil elemen <strong> di dalam alert 
// Variabel State 
let suhu = 25; 
let intervalId = null; // Untuk menyimpan ID timer 
// Event Listener Tombol START 
btnStart.addEventListener('click', function() { 
// Ubah UI Status 
statusIndicator.className = 'alert alert-success'; // Ganti class Bootstrap (Hijau) 
teksStatus.innerText = 'RUNNING'; 
// Logika simulasi kenaikan suhu 
intervalId = setInterval(function() { 
suhu += 1; 
suhuMesin.innerText = suhu + " °C"; 
// Peringatan jika suhu overheat 
if (suhu > 80) { 
statusIndicator.className = 'alert alert-danger'; 
teksStatus.innerText = 'OVERHEAT WARNING'; 
suhuMesin.style.color = 'red';
} 
}, 1000); // Jalankan setiap 1 detik 
// Matikan tombol Start agar tidak double click 
btnStart.disabled = true; 
btnStop.disabled = false; 
}); 
// Event Listener Tombol STOP 
btnStop.addEventListener('click', function() { 
    clearInterval(intervalId); // Hentikan timer kenaikan suhu 
    statusIndicator.className = 'alert alert-secondary'; 
    teksStatus.innerText = 'STOPPED'; 
     
    // Reset tombol 
    btnStart.disabled = false; 
    btnStop.disabled = true; 
}); 
  
// Event Listener Tombol RESET 
btnReset.addEventListener('click', function() { 
    clearInterval(intervalId); 
    suhu = 25; 
    suhuMesin.innerText = suhu + " °C"; 
    suhuMesin.style.color = 'black'; 
    statusIndicator.className = 'alert alert-secondary'; 
    teksStatus.innerText = 'UNKNOWN'; 
     
    btnStart.disabled = false; 
    btnStop.disabled = true; 
});
const btnMaintenance = document.getElementById('btnMaintenance');
const inputRPM = document.getElementById('inputRPM'); 
const pesanError = document.getElementById('pesanError'); 
  
inputRPM.addEventListener('input', function() { 
    let val = parseInt(this.value); 
     
    if (val > 2000) { 
        pesanError.classList.remove('d-none'); // Tampilkan pesan error 
        this.classList.add('is-invalid'); // Berikan border merah Bootstrap 
    } else { 
        pesanError.classList.add('d-none'); // Sembunyikan pesan 
        this.classList.remove('is-invalid'); 
    } 
});
btnMaintenance.addEventListener('click', function(){

statusIndicator.className = 'alert alert-light';

teksStatus.innerText = 'MAINTENANCE';

});
// Mouse masuk
suhuMesin.addEventListener('mouseover', function(){

suhuMesin.style.fontWeight = 'bold';
suhuMesin.style.color = 'blue';

});

// Mouse keluar
suhuMesin.addEventListener('mouseout', function(){

suhuMesin.style.fontWeight = 'normal';
suhuMesin.style.color = 'black';

});