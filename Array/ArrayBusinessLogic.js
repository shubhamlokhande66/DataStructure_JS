class ArrayBussinesLogic {

    filterFunction(array) {
        console.log("You choose Filter");
                function checkFilter(element) {
                    return element > 25;
                }
                console.log(array.filter(checkFilter));
    }

    reduceFunction(array) {
        console.log("You choose Reduce");
                function findTotal(total, num) {
                    return total + num;
                }
                console.log(array.reduce(findTotal));
    }

    indexOfFunction(array) {
        console.log("You choose indexOfFunction");
            
                let index = array.indexOf(" 5 ");
                console.log("Index of element " + index);
    }

    joinFunction(array) {
        console.log("You choose Join");
                console.log(array.join());
    }

    mapFunction(array) {
        console.log("You choose Map");
                console.log(array.map(Math.sqrt));
    }

    spliceFunction(array) {
        console.log("You choose Splice");
                console.log(array);
                array.splice( array );
                //console.log(array)
    }

    shiftFunction(array) {
        console.log("You choose Shift");
                console.log(array.shift());
    }

    sortFunction(array) {
        console.log("You choose Sort");
                console.log(array.sort());
    }

    unshiftFunction(array) {
        console.log(" You choose Unshift");
                console.log(array.unshift());
    }

    forEachFunction(array) {
        console.log("You choose forEach");
                function myForEachFunction(item, index) {
                    index + " : " + item
                }
                console.log(array.forEach(myForEachFunction));
    }

    sliceFunction(array) {
        console.log("You choose Slice");
                console.log(array.slice(1));
    }

    reverseFunction(array) {
        console.log("You choose Reverse");
                console.log(array.reverse());
    }
}

module.exports = ArrayBussinesLogic;