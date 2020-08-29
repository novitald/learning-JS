//declare variable fs to contain filesystem module
const fs = require('fs');
//open and read file from path process.argv[2], input to buffer
const buf = fs.readFileSync(process.argv[2]); 
//change all content of file to string
const str = buf.toString();
//split string with \n as separator -> become array
const substr = str.split('\n'); 

console.log(substr.length - 1);