class ArrayBussinesLogic {

    filterFunction(array) {
        console.log("\nYou choose Filter");
                function checkFilter(element) {
                    return element > 25;
                }
                console.log(array.filter(checkFilter));
    }

    reduceFunction(array) {
        console.log("\nYou choose Reduce");
                function findTotal(total, num) {
                    return total + num;
                }
                console.log(array.reduce(findTotal));
    }

    indexOfFunction(array) {
        console.log("\nYou choose indexOfFunction");
                let value = 5;
                let index = array.indexOf(" ");
                console.log("Index of element " + value + "is " + index);
    }

    joinFunction(array) {
        console.log("\nYou choose Join");
                console.log(array.join());
    }

    mapFunction(array) {
        console.log("\nYou choose Map");
                console.log(array.map(Math.sqrt));
    }

    spliceFunction(array) {
        console.log("\nYou choose Splice");
                console.log(array);
                array.splice( );
                console.log(array)
    }

    shiftFunction(array) {
        console.log("\nYou choose Shift");
                console.log(array.shift());
    }

    sortFunction(array) {
        console.log("\nYou choose Sort");
                console.log(array.sort());
    }

    unshiftFunction(array) {
        console.log("\nYou choose Unshift");
                console.log(array.unshift());
    }

    forEachFunction(array) {
        console.log("\nYou choose forEach");
                function myForEachFunction(item, index) {
                    index + " : " + item
                }
                console.log(array.forEach(myForEachFunction));
    }

    sliceFunction(array) {
        console.log("\nYou choose Slice");
                console.log(array.slice(1));
    }

    reverseFunction(array) {
        console.log("\nYou choose Reverse");
                console.log(array.reverse());
    }
}

module.exports = ArrayBussinesLogic;