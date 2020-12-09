let prompt = require("prompt-sync")();
let fs = require("fs");
let OrderList = require("./OrderlistBusiness");
let fileData = fs.readFileSync("./Readorderlist.txt");
let array = fileData.toString().split(' ');
console.log(array);

array.forEach((element) => {
  OrderList.sortList(parseInt(element));
});

let display = OrderList.printList();
console.log(display);

fs.writeFileSync("./Writeorderlist.txt", display);

let find = prompt("Enter the number you want to delete :");
let check = OrderList.searchElement(find);
if (check) {
  OrderList.delete(find);
} else {
  OrderList.sortList(find);
}

let displayFile = OrderList.showElement();
console.log(displayFile);

fs.writeFileSync("./writeorderlist.txt", displayFile);
