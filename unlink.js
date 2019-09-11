const fs = require('fs');
fs.readFile('haihai.txt', async(err,data)=>{
    if (err) return console.log("Data tidak ditemukan!!1"); 

    await console.log("Data ditemukan!")

    fs.unlink('haihai.txt',(err)=>{
        if (err) return console.log("Gagal menghapus data");

        console.log("HORE HAPUS DATA BERHASIL !!! IYA IYA")
    })
})
