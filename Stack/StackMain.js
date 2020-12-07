
const prompt = require('prompt-sync')();
const Stack = require('./StackBusinessLogic');



//flag is taken to stop the program. i.e to come out of infinite loop
let flag = true;

//creating the object of class Stack
let stack = new Stack();

while (flag) {

    //userunput to select the option in menu    
    let userInput = prompt("enter choice 1.push 2.pop 3.display 4.Enter 0 Exit ");
    console.log(userInput);

    switch (userInput) {

        case "1":
            //length of stack asks user to input stack size
            var lengthOfStack = Number(prompt("what is size of stack: "));

            if (stack.sizee() <= lengthOfStack) {
                for (let i = 0; i < lengthOfStack; i++) {
                    let num = prompt("Enter number to push " + i + "--> ");
                    stack.push(parseInt(num));
                }
            }
            break;

        case "2":
            console.log("Delete the number from stack");
            console.log(stack.pop());
            break;

        case "3":
            console.log("elements in stack");
            console.log(stack.printStack());
            break;

            default:
                break;
        }
        if(userInput == 0) break;
    }
   
