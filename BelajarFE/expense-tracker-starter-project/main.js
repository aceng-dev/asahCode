/**
 * ========================================================
 * Expense Tracker App — main.js
 * ========================================================
 * Tulis seluruh kode JavaScript kamu di sini.
 */
document.addEventListener("DOMContentLoaded", (Event) => {
  let transaction = [];
  const renderEvent = "RENDER_EVENT";

  document
    .getElementById("transactionForm")
    .addEventListener("submit", function (ev) {
      ev.preventDefault();
    });
  /**
   * ========================================================
   * Kriteria 1: Memanipulasi DOM untuk Form dan Daftar Transaksi
   * ========================================================
   */
  // TODO [Basic] Ambil elemen kontainer incomeList dan expenseList dari DOM
  const incomeList = document.getElementById("incomeList");
  const expendList = document.getElementById("expendList");

  function addTranscation() {
    const titleTrans = document.getElementById('transactionFormTitleInput').value;
    const amountTrans = document.getElementById('number').value;
    const dateTrans = document.getElementById('date').value;
    const typeTrans = document.getElementById('transactionFormTypeSelect').value;


    function generateId() {
      return +new Date();
    }

    function genrObj(id, title, amount, date, type) {
      return {
        id, 
        title,
        amount, 
        date,
        type,
      };
    }
    const createId = generateId();
    const newTrans = genrObj(createId, titleTrans, amountTrans, dateTrans, typeTrans);

    transaction.push(newTrans);

    document.dispatchEvent(new Event(renderEvent));
  }

  function makeTransaction(objectTf) {
    
  }
  /**
   * TODO [Basic]:
   * Buat fungsi untuk menampilkan (render) semua transaksi ke layar:
   *  - Kosongkan kontainer terlebih dahulu sebelum mengisi ulang
   *  - Gunakan perulangan, buat setiap elemen kartu dengan document.createElement()
   *  - Pastikan setiap elemen memiliki atribut data-testid yang sesuai (lihat panduan di rubrik)
   *  - Masukkan kartu ke kontainer yang tepat: income → incomeList, expense → expenseList
   */

  // TODO [Basic] Tambahkan event listener 'submit' pada form, panggil e.preventDefault() di dalamnya
  // TODO [Basic] Di dalam handler submit, ambil nilai input lalu tambahkan sebagai objek transaksi baru ke array

  /**
   * TODO [Skilled]:
   * Tambahkan validasi input sebelum menyimpan data:
   *  - Tampilkan alert() dan hentikan proses jika judul kosong
   *  - Tampilkan alert() dan hentikan proses jika nominal kurang dari 1
   */

  /**
   * TODO [Advanced]:
   * Setiap kali data transaksi berubah, perbarui Panel Dasbor:
   *  - Hitung total pemasukan, total pengeluaran, dan saldo (pemasukan - pengeluaran)
   *  - Tampilkan hasilnya ke elemen yang sesuai di HTML
   */

  /**
   * ========================================================
   * Kriteria 2: Mengelola Penyimpanan Data (Web Storage API)
   * ========================================================
   */
  /**
   * TODO [Basic]:
   * Data transaksi disimpan ke localStorage menggunakan JSON.stringify(), dan dimuat kembali saat halaman dibuka menggunakan JSON.parse().
   *  - Tombol "Hapus" berfungsi: transaksi yang dihapus langsung hilang dari layar dan dari localStorage.
   */

  /**
   * TODO [Skilled]:
   * Tombol "Edit" berfungsi: saat ditekan, formulir (#transactionForm) secara otomatis terisi dengan data transaksi yang dipilih.
   *  - Pengguna dapat mengubah data lalu menyimpan perubahan.
   *  - Formulir kembali ke mode "Tambah" setelah pembaruan selesai.
   */

  /**
   * TODO [Advanced]:
   * Gunakan Custom Event sebagai penghubung antara perubahan data dan pembaruan tampilan:
   *  - Kirim sinyal dengan document.dispatchEvent(new Event('transaction:updated')) setiap kali data berubah
   *  - Pasang satu listener untuk event tersebut yang memanggil fungsi render dan update dasbor
   */

  /**
   * ========================================================
   * Kriteria 3: Fitur Interaktif (Pindah Kategori dan Pencarian)
   * ========================================================
   */
  /**
   * TODO [Basic]:
   * Tambahkan tombol "Ubah Tipe" pada setiap kartu transaksi:
   *  - Saat diklik, ubah tipe transaksi: 'income' → 'expense' atau 'expense' → 'income'
   *  - Simpan perubahan ke localStorage dan perbarui tampilan
   */

  /**
   * TODO [Skilled]:
   * Tambahkan event listener 'input' pada kolom pencarian:
   *  - Filter array transaksi berdasarkan kecocokan kata kunci dengan judul transaksi
   *  - Tampilkan hanya transaksi yang judulnya mengandung kata kunci tersebut
   */

  /**
   * TODO [Advanced]:
   * Pastikan fitur pencarian berjalan dengan baik di semua kondisi:
   *  - Saat kolom pencarian dikosongkan, tampilkan kembali seluruh daftar transaksi
   */
  document.addEventListener(renderEvent, function () {
    incomeList.innerHTML = "";
    expendList.innerHTML = "";
  });
});
