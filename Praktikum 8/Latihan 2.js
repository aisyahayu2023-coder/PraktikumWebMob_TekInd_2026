const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

// Buat tombol Tambah
const btnTambah = document.createElement('button');
btnTambah.textContent = 'Tambah Karyawan Baru';
btnTambah.className = 'btn btn-success mb-3 me-2';
btnTambah.id = 'btnTambah';

// Masukkan ke dalam div yang sama dengan btnLoad
const parentDiv = btnLoad.parentElement;
parentDiv.appendChild(btnTambah);

// ========== KOLOM PENCARIAN KOTA ==========
const searchDiv = document.createElement('div');
searchDiv.className = 'mb-3';
searchDiv.innerHTML = `
    <div class="row">
        <div class="col-md-6">
            <div class="input-group">
                <span class="input-group-text">Cari Kota</span>
                <input type="text" id="searchKota" class="form-control" placeholder="Cari kota yang mengandung huruf...">
                <button id="btnCariKota" class="btn btn-outline-primary">Cari</button>
                <button id="btnTampilkanSemua" class="btn btn-outline-secondary">Tampilkan Semua</button>
            </div>
            <small class="text-muted">Contoh: Ketik "s" maka akan muncul karyawan dari kota yang mengandung huruf "s"</small>
        </div>
    </div>
`;
parentDiv.insertAdjacentElement('afterend', searchDiv);

// Ambil elemen search
const searchKota = document.getElementById('searchKota');
const btnCariKota = document.getElementById('btnCariKota');
const btnTampilkanSemua = document.getElementById('btnTampilkanSemua');

// Variabel untuk menyimpan data asli
let dataKaryawanAsli = [];

// Endpoint API
const API_URL = 'https://jsonplaceholder.typicode.com/users';

// ========== FUNGSI PENCARIAN KOTA DENGAN CONSOLE LOG ==========
function cariBerdasarkanKota(data, keyword) {
    if (!keyword || keyword === '') {
        console.log("Menampilkan semua data (tanpa filter)");
        return data;
    }
    
    const keywordLower = keyword.toLowerCase();
    
    console.log("\n============================================================");
    console.log("PENCARIAN: Mencari kota yang mengandung huruf:", keyword);
    console.log("============================================================");
    console.log("Total data yang diperiksa:", data.length, "karyawan\n");
    
    const hasilFilter = data.filter(function(karyawan) {
        const kota = karyawan.address?.city || '';
        const isMatch = kota.toLowerCase().includes(keywordLower);
        
        if (isMatch) {
            console.log("[COCOK]", karyawan.name, "- Kota:", kota);
        } else {
            console.log("[TIDAK COCOK]", karyawan.name, "- Kota:", kota);
        }
        
        return isMatch;
    });
    
    console.log("\n------------------------------------------------------------");
    console.log("HASIL PENCARIAN: Ditemukan", hasilFilter.length, "karyawan dari kota yang mengandung huruf", keyword);
    
    if (hasilFilter.length > 0) {
        console.log("\nDaftar kota yang cocok:");
        hasilFilter.forEach(function(karyawan, index) {
            console.log("  ", index + 1 + ".", karyawan.address?.city, "(", karyawan.name, ")");
        });
    } else {
        console.log("  Tidak ada kota yang mengandung huruf", keyword);
    }
    console.log("============================================================\n");
    
    return hasilFilter;
}

// ========== FUNGSI RENDER ULANG DENGAN FILTER ==========
function renderDenganFilter() {
    const keyword = searchKota.value;
    const dataTerfilter = cariBerdasarkanKota(dataKaryawanAsli, keyword);
    
    if (dataTerfilter.length === 0 && keyword !== '') {
        container.innerHTML = `<div class="alert alert-info">Tidak ada karyawan yang tinggal di kota mengandung huruf "${keyword}"</div>`;
        return;
    }
    
    renderData(dataTerfilter);
}

// Event listener untuk tombol Load
btnLoad.addEventListener('click', function() {
    loading.classList.remove('d-none');
    container.innerHTML = '';

    fetch(API_URL)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Gagal mengambil data');
            }
            return response.json();
        })
        .then(function(dataKaryawan) {
            console.log("\n============================================================");
            console.log("DATA BERHASIL DIMUAT DARI API");
            console.log("============================================================");
            console.log("Data asli:", dataKaryawan);
            console.log("============================================================\n");
            
            // Simpan data asli
            dataKaryawanAsli = dataKaryawan;
            
            // Kosongkan input search
            searchKota.value = '';
            
            // Tampilkan semua data
            renderData(dataKaryawanAsli);
        })
        .catch(function(error) {
            container.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        })
        .finally(function() {
            loading.classList.add('d-none');
        });
});

// Event listener untuk tombol Cari Kota
btnCariKota.addEventListener('click', function() {
    if (dataKaryawanAsli.length === 0) {
        alert("Silakan muat data terlebih dahulu dengan klik 'Muat Data dari API'");
        return;
    }
    renderDenganFilter();
});

// Event listener untuk tombol Tampilkan Semua
btnTampilkanSemua.addEventListener('click', function() {
    searchKota.value = '';
    if (dataKaryawanAsli.length > 0) {
        console.log("\nMenampilkan semua data (filter direset)");
        renderData(dataKaryawanAsli);
    } else {
        container.innerHTML = '<div class="alert alert-info">Silakan muat data terlebih dahulu</div>';
    }
});

// Bisa tekan Enter untuk mencari
searchKota.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        btnCariKota.click();
    }
});

function renderData(data) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="alert alert-warning">Tidak ada data karyawan</div>';
        return;
    }
    
    container.innerHTML = '';
    
    data.forEach(function(karyawan) {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-3';
        
        const companyName = karyawan.company?.name || 'Tidak tersedia';
        const cityName = karyawan.address?.city || 'Tidak tersedia';
        
        col.innerHTML = `
            <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">${karyawan.name}</h5>
                    <p class="card-text text-muted">Email: ${karyawan.email}</p>
                    <p class="card-text">Perusahaan: ${companyName}</p>
                    <p class="card-text"><small>Kota: ${cityName}</small></p>
                    <button class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${karyawan.id})">Detail Profil</button>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

async function cariKaryawan(id) {
    try {
        console.log("\nMencari data ID:", id);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }
        
        const data = await response.json();
        console.log("Ditemukan:", data);
        
        alert(`Ditemukan:\nNama: ${data.name}\nEmail: ${data.email}\nPerusahaan: ${data.company?.name || '-'}\nKota: ${data.address?.city || '-'}`);
        
        return data;
        
    } catch (error) {
        console.error("Error:", error.message);
        alert(`Error: ${error.message}`);
    }
}

// Event listener untuk tombol Tambah
btnTambah.addEventListener('click', function() {
    tambahKaryawanBaru();
});

async function tambahKaryawanBaru() {
    const karyawanBaru = {
        name: "Aisyah Ayu Salsabila",
        username: "aisyah",
        email: "aisyah@gmail.com",
        phone: "08123456789",
        website: "aisyah.com",
        company: {
            name: "PT Akalpa Belt",
            catchPhrase: "Perempuan Berdaya",
            bs: "transformasi Kekuatan Perempuan berdaya"
        },
        address: {
            street: "Jl. Merdeka No. 123",
            suite: "Apt 45",
            city: "Semarang",
            zipcode: "12345",
            geo: {
                lat: "-6.2088",
                lng: "106.8456"
            }
        }
    };

    try {
        console.log("\nMengirim data POST...", karyawanBaru);
        
        loading.classList.remove('d-none');
        
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(karyawanBaru)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const dataHasil = await response.json();
        
        console.log("Response dari server:", dataHasil);
        console.log("Status Response:", response.status);
        
        alert(`Berhasil menambahkan karyawan!\n\nID baru: ${dataHasil.id}\nNama: ${dataHasil.name}\nEmail: ${dataHasil.email}`);
        
        const dataDenganIdBaru = { ...karyawanBaru, id: dataHasil.id };
        
        // Tambahkan ke data asli
        dataKaryawanAsli.push(dataDenganIdBaru);
        
        console.log("Data baru ditambahkan:", dataDenganIdBaru.name, "- Kota:", dataDenganIdBaru.address.city);
        
        // Tampilkan data baru
        renderData(dataKaryawanAsli);
        
    } catch (error) {
        console.error("Error saat POST data:", error);
        alert(`Gagal menambahkan data: ${error.message}`);
    } finally {
        loading.classList.add('d-none');
    }
}