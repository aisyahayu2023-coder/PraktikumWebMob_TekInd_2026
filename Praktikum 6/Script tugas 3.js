const daya = document.getElementById('daya');
const jam = document.getElementById('jam');
const kwhText = document.getElementById('kwh');
const biayaText = document.getElementById('biaya');

function hitung(){

let nilaiDaya = daya.value;
let nilaiJam = jam.value;

let kwh = (nilaiDaya * nilaiJam) / 1000;

let biaya = kwh * 1500;

kwhText.innerText = "Total kWh : " + kwh;

biayaText.innerText = "Estimasi Biaya : Rp " + biaya.toLocaleString('id-ID');

}

daya.addEventListener('input', hitung);

jam.addEventListener('input', hitung);
