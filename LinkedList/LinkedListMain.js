const prompt = require('prompt-sync')();
const LinkedList = require('../FunctionalProgram/Linked');

//flag is taken to stop the program. i.e to come out of infinite loop
let flag = true;

//creating the object of class Stack
let list = new LinkedList();

while (flag) {

    //userinput to select the option in menu    
    let userInput = prompt("enter choice :       1.addFirst         2.addLast             3.printList          4.deleteFirst       5.deleteLast          6.search         7.exit ");


    switch (userInput) {
        
       

        // case 2 is for adding the element to first position
        case "1":
            let addFirstInput = prompt("Enter a  element to insert at first posiion/head to linkedlist: ");
            console.log(list.addFirst(addFirstInput));
            break;

        //case 3 is adding element to last of the linkedlist
        case "2":
            let addLastInput = prompt("Enter a  element to insert at last posiion/head to linkedlist: ");
            console.log(list.addLast(addLastInput));
            break;

        
        //case 5 is for printing the linkedlist
        case "3":
            console.log(" The prsent linkedlist is: " + list.printList());
            console.log(list.printList());
            break;
        //case 6 is for deleteFirst means deleting first element in list
        case "4":
            console.log("First element is deleted from the list " + list.deleteFirst());
            break;
        //case 7 is for deleteLast means deleting last element  in list which points towards the tail
        case "5":
            console.log("Last element is deleted from the list " + list.deleteLast());
            break;
        
        case "6":
            let searchKey = prompt("Enter a  number to be searched: ");
            console.log(list.search(searchKey));
            break;
       
       
            default:
                break;
        }
        if(userInput == 0) break;
    }