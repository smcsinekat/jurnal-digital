const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <body style="background-color: #1a1a1a; color: #ffffff; font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">
        <h1 style="color: #FF8C00;">Jurnal Digital Sinekat</h1>
        <p>1% Better Every Day.</p>
        <hr style="border: 0.5px solid #444;">
        <p>Status: Server Node.js Berhasil Berjalan.</p>
      </div>
    </body>
  `);
});

app.listen(port, () => {
  console.log(`Website jalan di port ${port}`);
});