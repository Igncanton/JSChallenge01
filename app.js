// Condición del do while loop
let condition = false;

// Creación número random
let randomNumber = Math.floor(Math.random() * 10);

do {
    // User input
    let userInput = parseInt(prompt("Enter a number between 0 to 9:"))

    // Condicional comparar valores del input y el numero random
    if (userInput == randomNumber) {
        alert("Congratulations, you've won!")
        // Changing condition to end the loop
        condition = true
    } else {
        if (userInput < randomNumber) {
            alert("please try again! aim higher!")
        } else {
            alert("please try again! aim lower!")
        }
    }

} while (condition === false)