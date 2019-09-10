const fs = require('fs');

console.log('start reading a file.....')

fs.readFile('haloo.txt' , 'utf-8',(err, content)=>{
    if (err){
        console.log('error happened during reading the file')
        return console.log(err)
    }


fs.rename('haloo.txt' , 'haihai.txt' , (err)=>{
    if(err) console.log("Gagal!!!" + err);

    console.log("alhamdullilah berhasil")
})
})

console.log('end of the file')