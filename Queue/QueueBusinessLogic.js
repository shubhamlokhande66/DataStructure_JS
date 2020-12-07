const prompt = require('prompt-sync')();
/**
 * @problem : To write a program where Queue is created and perform following operrations:
 * 
 * Operations: 1. enqueue 2. deenqueue 3.front 4.isEmpty 5.printQueue  7.Exit
 * 
 * @author : Shubham Lokhande
 * 
 */
class Queue {
    constructor() {
        this.queue = [];
    }
    //method adds an element at the end of the queue

    enqueue(element) {
        this.queue.push(element)
    }
    //method removes an element from the front of the queue

    dequeue() { 
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.queue.shift(); 
    }
    front() { 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.queue[0]; 
    } 
    //method checks if a queue is empty by checking if the length property of the array is zero.
    
    isEmpty() { 
        return this.queue.length == 0; 
    } 