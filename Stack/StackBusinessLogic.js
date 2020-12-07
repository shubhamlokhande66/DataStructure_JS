/**
 * @author: Shubham Lokhande
 * @problem : Write a program for stack to
 * 1) push 
 * 2)  push and
 * 3)  display array
 *  
 */

// definition of class
class Stack {

    //constructor of Stack class
    constructor() {
        this.arr = [];
        this.top = -1;
        this.size = 0;
    }
    //method th push the elements in the end of array
    push(num) {
        this.top = this.top + 1;
        this.arr[this.top] = num;
        this.size++;
    }