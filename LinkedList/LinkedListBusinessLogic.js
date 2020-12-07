const prompt = require('prompt-sync')();
/**
 * @problem : To write a program where linked list is created and perform following operrations:
 * 
 * Operations: 1. AddFirst 2. addLast 3.displayLinkedList 4.search 5.Delete First 6.Delete Last 7.Exit
 * 
 * @author : Shubham Lokhande
 * 
 */

//Create class Node
//@params data take from user
class Node {

    constructor(data) {
        this.data = data;
        this.next = null;
    }

}

//Create LinkedList main Class 

class LinkedList {
    constructor() {
        this.head = null;
        //this.next=null
    }