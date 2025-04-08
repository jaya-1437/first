function vendingMachine(selection) {
    while (true) {
        switch (selection) {
            case 1:
                console.log("Selected drink: Coffee");
                console.log("Price: $2.50");
                break; 
            case 2:
                console.log("Selected drink: Tea");
                console.log("Price: $1.80");
                break; 
            case 3:
                console.log("Selected drink: Juice");
                console.log("Price: $3.00");
                break; 
            case 4:
                console.log("Selected drink: Water");
                console.log("Price: $1.00");
                break; 
            default:
                console.log("Invalid selection! Please choose a valid drink option.");
                return;  
        }
        break; 
    }
}


vendingMachine(4); 
vendingMachine(7);

