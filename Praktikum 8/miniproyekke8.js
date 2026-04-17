// Data dummy (15 insiden)
const dataInsiden = [
    {id:1, userId:101, title:"Kebocoran Pipa Air Lantai 3", body:"Air menggenangi koridor lantai 2 dan 3. Perbaikan segera."},
    {id:2, userId:102, title:"Listrik Padam di Ruang Server", body:"Server mati total akibat korsleting. Tim IT sedang perbaiki."},
    {id:3, userId:103, title:"Kerusakan Lift Barang", body:"Lift barang macet. Teknisi menunggu suku cadang."},
    {id:4, userId:104, title:"Kebakaran Kecil di Dapur Kantin", body:"Kompor gas meledak. Api sudah dipadamkan."},
    {id:5, userId:105, title:"Genangan Air di Parkiran", body:"Pompa air mati, 5 kendaraan terendam."},
    {id:6, userId:101, title:"AC Ruang Rapat Tidak Berfungsi", body:"AC mati total, ruangan panas 32°C."},
    {id:7, userId:106, title:"Pintu Otomatis Rusak", body:"Pintu masuk timur tidak bisa terbuka."},
    {id:8, userId:107, title:"Kebocoran Gas di Laboratorium", body:"Bau gas menyengat. Area dievakuasi."},
    {id:9, userId:102, title:"Jaringan Internet Putus", body:"Internet gedung A dan B putus total."},
    {id:10, userId:108, title:"Kerusakan Mesin Fotokopi", body:"Mesin error kode E-47."},
    {id:11, userId:103, title:"Pipa Bocor di Ruang Arsip", body:"Air menetes dari plafon. Dokumen basah."},
    {id:12, userId:109, title:"Lampu Parkiran Mati", body:"5 tiang lampu parkiran mati."},
    {id:13, userId:104, title:"CCTV Mati", body:"20% kamera tidak berfungsi."},
    {id:14, userId:105, title:"Toilet Pria Tersumbat", body:"Toilet lantai 2 mampet total."},
    {id:15, userId:106, title:"Genset Darurat Rusak", body:"Genset tidak mau menyala."}
];

const container = document.getElementById('containerInsiden');
const loading = document.getElementById('loadingSpinner');
const btnMuat = document.getElementById('btnMuatInsiden');

btnMuat.onclick = async () => {
    loading.style.display = 'inline-block';
    container.innerHTML = '<div class="col-12 text-center py-5"><div class="spinner-border text-danger"></div><p>Memuat data...</p></div>';
    
    await new Promise(r => setTimeout(r, 500));
    
    const terbaru = dataInsiden.slice(-10).sort((a,b) => b.id - a.id);
    container.innerHTML = '';
    
    terbaru.forEach(i => {
        const desc = i.body.length > 100 ? i.body.slice(0,100)+'...' : i.body;
        container.innerHTML += `
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <span class="badge bg-danger mb-2">Insiden #${i.id}</span>
                        <h5 class="text-danger">${escapeHtml(i.title)}</h5>
                        <p class="small">${escapeHtml(desc)}</p>
                        <button class="btn btn-warning w-100" onclick="alert('Tiket ID ${i.id} sedang diproses oleh Tim Maintenance.\\nJudul: ${escapeHtml(i.title)}')">Tindak Lanjut</button>
                    </div>
                </div>
            </div>
        `;
    });
    
    loading.style.display = 'none';
};

function escapeHtml(str) {
    return str.replace(/[&<>]/g, function(m) {
        if(m === '&') return '&amp;';
        if(m === '<') return '&lt;';
        if(m === '>') return '&gt;';
        return m;
    });
}