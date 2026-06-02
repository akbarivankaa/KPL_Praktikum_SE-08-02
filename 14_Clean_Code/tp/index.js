// Hanya mengambil data dari API
async function fetchOrderData(orderId, token) {
    const response = await fetch(`https://example.com/api/order/${orderId}`, {
        headers: { 'Authorization': token }
    });

    if (!response.ok) {
        throw new Error(`Gagal mengambil data pesanan dengan ID: ${orderId}`);
    }
    
    return response.json();
}

// hanya merender data ke dalam elemen UI 
function renderOrderDetails(order, containerElement) {
    containerElement.innerHTML = ''; 

    const header = document.createElement('h3');
    header.textContent = `Order ID: ${order.id}`;

    const status = document.createElement('p');
    status.textContent = `Status: ${order.status}`;

    containerElement.append(header, status);
}

// Mengatur logika tombol konfirmasi
function setupConfirmButton(order, buttonElement, token) {
    if (order.status === 'Delivered') {
        buttonElement.style.display = 'none';
        buttonElement.onclick = null; // Bersihkan aksi sebelumnya
    } else {
        buttonElement.style.display = 'inline-block';
        // Menggunakan .onclick menggantikan addEventListener biar mencegah adanya penumpukan event
        buttonElement.onclick = () => confirmOrder(order.id, token); 
    }
}

// Fungsi Utama orkestrator yang mengoordinasikan alur
async function showOrderModal(orderId, token) {
    try {
        // mengambil elemen elemen DOM yang dibutuhkan
        const modal = document.getElementById('orderModal');
        const detailsDiv = modal.querySelector('#orderDetails');
        const closeBtn = modal.querySelector('.close');
        const confirmBtn = modal.querySelector('#confirmOrderBtn');

        // untuk menjalankan alur
        const order = await fetchOrderData(orderId, token);
        renderOrderDetails(order, detailsDiv);
        setupConfirmButton(order, confirmBtn, token);

        // menampilkan modal dan mengatur tombol tutup
        modal.style.display = 'block';
        closeBtn.onclick = () => {
            modal.style.display = 'none';
        };

    } catch (error) {
        console.error('Terjadi kesalahan:', error);
        // nampilin pesan error ini ke UI, bukan cuma ke console
    }
}