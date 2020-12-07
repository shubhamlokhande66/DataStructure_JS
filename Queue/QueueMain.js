const prompt = require('prompt-sync')();
const queue = require('./QueueBusinessLogic');
let choice = prompt("For Confirmation Enter 3: ")
switch(choice) {
case "3":
                while(true) {
                    console.log("Select a Queue Operation to perform")
                    console.log("1. Enqueue")
                    console.log("2. Dequeue")
                    console.log("3. Front")
                    console.log("4. IsEmpty")
                    console.log("5. PrintQueue")
                    console.log("enter 0 to exit")
                    let qoperation = prompt("Eenter choice: ")
                    switch(qoperation){
                        case "1":
                            let qvalue = prompt("Eenter Value to Push: ")
                            queue.enqueue(qvalue)
                            break;
                        case "2":
                            console.log(queue.dequeue())
                            break;
                        case "3":
                            console.log(queue.front())
                            break;
                        case "4":
                            console.log(queue.isEmpty())
                            break;
                        case "5":
                            console.log(queue.printQueue())
                            break;
                        default:
                            break;
                    }
                    if(qoperation == 0 ) break;
                }
                break;
            }
    
