//panggil modul filesystem
const fs = require('fs');
function callback(err, list){
    if (err) throw err;
    console.log(list);
}
fs.readdir(process.argv[2], callback);
