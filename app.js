const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Alat bantu biar server bisa baca input dari form
app.use(bodyParser.urlencoded({ extended: true }));

// Tempat nyimpen jurnal sementara (Memory)
let listJurnal = [
  { tanggal: "22 April 2026", isi: "Gue berhasil deploy website Node.js pertama gue ke Hostinger via GitHub!" }
];

app.get('/', (req, res) => {
  // Bikin daftar jurnal jadi tampilan HTML
  let tampilanJurnal = listJurnal.map(j => `
    <div style="border-left: 4px solid #FF8C00; background: #262626; padding: 15px; margin-bottom: 10px; border-radius: 5px;">
      <small style="color: #888;">${j.tanggal}</small>
      <p style="margin: 5px 0 0 0;">${j.isi}</p>
    </div>
  `).join('');

  res.send(`
    <body style="background-color: #1a1a1a; color: #ffffff; font-family: sans-serif; padding: 40px; max-width: 600px; margin: auto;">
      <h1 style="color: #FF8C00; text-align: center;">Jurnal 1% Sinekat</h1>
      
      <form action="/tambah-jurnal" method="POST" style="background: #262626; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
        <label style="display: block; margin-bottom: 10px;">Apa progres lo hari ini?</label>
        <textarea name="isiJurnal" style="width: 100%; height: 80px; background: #333; color: #fff; border: 1px solid #444; padding: 10px; border-radius: 5px;" placeholder="Tulis di sini..."></textarea>
        <button type="submit" style="background: #FF8C00; color: #fff; border: none; padding: 10px 20px; border-radius: 5px; margin-top: 10px; cursor: pointer; font-weight: bold; width: 100%;">SIMPAN JURNAL</button>
      </form>

      <h3 style="border-bottom: 1px solid #444; padding-bottom: 10px;">Riwayat Jurnal</h3>
      ${tampilanJurnal}
    </body>
  `);
});

// ROUTE UNTUK NERIMA DATA DARI FORM
app.post('/tambah-jurnal', (req, res) => {
  const isiBaru = req.body.isiJurnal;
  const hariIni = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
  
  if (isiBaru) {
    listJurnal.unshift({ tanggal: hariIni, isi: isiBaru });
  }
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server jalan di port ${port}`);
});
