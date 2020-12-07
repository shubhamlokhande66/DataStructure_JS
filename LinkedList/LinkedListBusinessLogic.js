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
    addNode(data) {
        let first = new Node(data);
  
        let current = this.head;
        if (this.head == null) {
            return this.head = first;
        }
        else {
            while (current.next) {
                current = current.next;
            }
            current.next = first;
            return first = current;
        }
    }
      
      
      //add first in linkedlist
      //param data take from user
  
      addFirst(data) {
          let firstNode = new Node(data);
          firstNode.next = this.head;
          this.head = firstNode;
      }
      //add last in linkedlist
    //param data take from user
    isEmpty() {
        if (this.head === null) {
            return true;
        }
        else {
            return false;
        }
  
    }
  
      addLast(value) {
          let lastNode = { data: value, next: null };
          if (this.isEmpty()) {
              return this.head = lastNode;
          }
          let current = this.head;
          while (current.next != null) {
              current = current.next;
          }
          return current.next = lastNode;
      }
      //data take from user

    printList() {

        let curr = this.head;
        let str = " ";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }

        return (str);
    }
// delete first from linkedlist

deleteFirst() {
    this.head = this.head.next;
    return this.head;
}

// delete last in linkedlist
deleteLast() {
    let lastNode = this.head;
    let previous;
    while (lastNode.next != null) {
        previous = lastNode;
        lastNode = lastNode.next;
    }
    previous.next = null;
}
