const fs = require('fs');
const linkedList = require('./OrderlistBusiness');
const readline = require("readline-sync");
let filedata = fs.readFileSync('./orderlist.txt');
console.log("Numbers data read from file: " + filedata);
searchNumber = readline.question("Enter a number to search: ");
linkedList.orderedList(filedata, searchNumber);