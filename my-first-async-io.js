//declare variable fs to contain filesystem module
const fs = require('fs');
let data = '';
//defining the callback function
function callback (err, data){
    if(err) throw err;
    readBuffer(data);
    //console.log('data:'+data);
}
function readBuffer(buf){
    const str = buf.toString();
    //slpit string with \n as separator
    const substr = str.split('\n');
    console.log(substr.length - 1);
}
//open and read file from path process.argv[2], input to buffer 
//already string because utf-8 and using callback
fs.readFile(process.argv[2], 'utf-8', callback);

