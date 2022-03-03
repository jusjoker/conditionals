var randomChoice = (Math.random()>0.5)? 1 : 0;
var userChoice = prompt("Heads or Tails?")

if (randomChoice > 0.5) {
    var computerChoice = "tails";
} else {
    var computerChoice = "heads"
}

if (userChoice == computerChoice) {
    alert(`You guessed right! The coin flip landed on ${userChoice}.`);
} 
if (userChoice !== computerChoice) {
    alert(`You guessed wrong! The coin flip landed on ${computerChoice}.`);
}

var birthYear = prompt("What year were you born?")
var currentYear = 2022
var num1 = parseInt(birthYear);

var age = (currentYear - num1)
if (age > 21) {
    alert("You are old enough to drink in the US.")
}
if (age == 21) {
    alert("You are old enough to drink in the US... barely.")
}
if (age < 21) {
    alert("You are not old enough to drink in the US.")
}
