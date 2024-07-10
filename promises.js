
const form = document.querySelector("form");
console.log(form)
const result = document.querySelector("#result");
const targetNumber = 25; // Set the target number to 25

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let yourNumber = parseInt(document.querySelector("#number").value);
    
    if (isNaN(yourNumber)) {
        result.innerHTML = "Enter a valid number";
        console.log("Enter a valid number");
    } else if (yourNumber !== targetNumber) {
        result.innerHTML = "Incorrect, try again!";
        console.log("Incorrect, try again!");
    } else {
        result.innerHTML = "Congratulations, you guessed the correct number!";
        console.log("Congratulations, you guessed the correct number!");
        endGame();
    }
});

function endGame() {
    document.querySelector("#number").disabled = true;
    document.querySelector("button").disabled = true;
}
