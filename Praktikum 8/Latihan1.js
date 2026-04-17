const btnLoad = document.getElementById('btnLoad');
const container = document.getElementById('containerKaryawan');
const loading = document.getElementById('loading');

// Buat tombol Tambah
const btnTambah = document.createElement('button');
btnTambah.textContent = 'Tambah Karyawan Baru';
btnTambah.className = 'btn btn-success mb-3 me-2';
btnTambah.id = 'btnTambah';

// Cara 1: Masukkan ke dalam div yang sama dengan btnLoad
const parentDiv = btnLoad.parentElement;parentDiv.appendChild(btnTambah);

// Endpoint API (Simulasi Database)
const API_URL = 'https://jsonplaceholder.typicode.com/users';

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
            console.log(dataKaryawan);
            renderData(dataKaryawan);
        })
        .catch(function(error) {
            container.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
        })
        .finally(function() {
            loading.classList.add('d-none');
        });
});

function renderData(data) {
    if (!data || data.length === 0) {
        container.innerHTML = '<div class="alert alert-warning">Tidak ada data karyawan</div>';
        return;
    }
    
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
        console.log(`Mencari data ID: ${id}...`);
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error('Data tidak ditemukan');
        }
        
        const data = await response.json();
        console.log("Ditemukan:", data);
        
        alert(`Ditemukan:\nNama: ${data.name}\nEmail: ${data.email}\nPerusahaan: ${data.company?.name || '-'}\nKota: ${data.address?.city || '-'}`);
        
        return data;
        
    } catch (error) {
        console.error(error);
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
        username: "Aisyah Ayu Salsabila",
        email: "aisyah@gmail.com",
        phone: "08123456789",
        website: "aisyah.com",
        company: {
            name: "PT Akalpa Belt ",
            catchPhrase: "Perempuan Berdaya",
            bs: "transformasi Kekuatan Perempuan berdaya"
        },
        address: {
            street: "Jl. Merdeka No. 123",
            suite: "Apt 45",
            city: "Jakarta",
            zipcode: "12345",
            geo: {
                lat: "-6.2088",
                lng: "106.8456"
            }
        }
    };

    try {
        console.log("Mengirim data POST...", karyawanBaru);
        
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
        
        alert(`Berhasil menambahkan karyawan!\n\nID baru: ${dataHasil.id}\nNama: ${dataHasil.name}\nEmail: ${dataHasil.email}\n\nCatatan: JSONPlaceholder menyimpan data.`);
        
        const dataDenganIdBaru = { ...karyawanBaru, id: dataHasil.id };
        const tempCol = document.createElement('div');
        tempCol.className = 'col-md-4 mb-3';
        tempCol.innerHTML = `
            <div class="card h-100 shadow-sm border-success">
                <div class="card-body">
                    <h5 class="card-title"> ${dataDenganIdBaru.name} <span class="badge bg-success">Baru</span></h5>
                    <p class="card-text text-muted">Email: ${dataDenganIdBaru.email}</p>
                    <p class="card-text">Perusahaan: ${dataDenganIdBaru.company.name}</p>
                    <p class="card-text"><small>Kota: ${dataDenganIdBaru.address.city}</small></p>
                    <button class="btn btn-sm btn-outline-primary" onclick="cariKaryawan(${dataDenganIdBaru.id})">Detail Profil</button>
                </div>
            </div>
        `;
        container.prepend(tempCol);
        
    } catch (error) {
        console.error("Error saat POST data:", error);
        alert(`Gagal menambahkan data: ${error.message}`);
    } finally {
        loading.classList.add('d-none');
    }
}