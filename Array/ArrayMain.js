let ArrayBussinesLogic = require('./ArrayBusinessLogic');
let prompt = require('prompt-sync')();
let arrayf = new ArrayBussinesLogic();
let element =  prompt("Enter no of array to store : ")
let array= [];

for (i=0; i<=element; i++){
    array[i]=prompt("Enter the Array Element ");
}
for (i=0; i<=element; i++){
    console.log(array[i])
}

let flag = true;
function choice(){
while (flag == true){
      
        let input = prompt(" Enter Your Choice :  1.Filter  2.Reduce  3.IdexOf 4.Joint  5.Map  6.Splice  7.Shift   8.Sort   n9.Unshift  10.forEach   11.Slice 12.Reverse ");
    
    switch (input) {
    case "1":
        arrayf.filterFunction(array);
    break;

    case "2":
        arrayf.reduceFunction(array);
    break;
                
    case "3":
        arrayf.indexOfFunction(array);
    break;

    case "4":
        arrayf.joinFunction(array);
    break;

    case "5":
        arrayf.mapFunction(array);
    break;

    case "6":
        arrayf.spliceFunction(array);
    break;

    case "7":
        arrayf.shiftFunction(array);
    break;

    case "8":
        arrayf.sortFunction(array);
    break;

    case "9":
        arrayf.unshiftFunction(array);
    break;

    case "10":
        arrayf.forEachFunction(array);
    break;
            
    case "11":
        arrayf.sliceFunction(array);
    break;

    case "12":
        arrayf.reverseFunction(array);
    break;

    default:
        flag = false;
    console.log("Exit"); 
}    
}
}
choice();

