//Uppgift 1 - Hälsa användaren
let name = prompt("Whats your name?");
console.log("Hello " + name + "!");

//Uppgift 2 - Jämföra två ord
let word1 = prompt("Enter a word");
let word2 = prompt("Enter another word");

if (word1 < word2){
    console.log(word1 + " comes first in the alphabet.")
}else{
    console.log(word2 + " comes first in the alphabet.")
}

// Uppgift 3 - Är användaren vuxen

let age = prompt("How old are you?")

if (age >= 18){
    console.log("You are over 18 years old");
}else if (age < 18){
    console.log("you are under 18 years old");
} else{
    console.log("Error, enter your age in numbers");
}

//Uppgift 4 - Gissa ett djur
let animal = prompt("What animal am I thinking of?");

if (animal == "cat"){
    console.log("Yes, You are right!");
}else{
    console.log("No, you guessed wrong!");
}

//Uppgift 5 - Känn igen en färg

let color = prompt("which color do you like? red, green or blue?");

if (color == "red"){
    console.log("Red is a powerful and strong color that triggers strong emotions. It is intense and acute and signals energy, power and passion.");
}else if (color == "green"){
    console.log("Green contributes to a feeling of calm, health, power and nature. It is associated with renewal, optimism, growth, organic and sustainable, but also with nausea, greed and being inexperienced");
}else if (color == "blue"){
    console.log("The color blue symbolizes trust, harmony and stability, and it is often associated with calm and concentration.");
} else{
    console.log("Error,choose any of the color above");

}

//Uppgift 6 - Godkänd eller inte

let testResults = prompt("enter your score");

if (testResults >= 50){
    console.log("Congratulations, you passed the test!");
}else if (testResults < 50){
    console.log("Sorry, you did not pass the test");
} else{
    console.log("Error, enter your score in numbers");
}

//Uppgift 7 - Vad ska vi göra idag?

let weather = prompt("How is the weather? Is it sunny, rainy or cloudy?");

if (weather == "sunny"){
    console.log("Go out for a walk");
}else if (weather == "rainy"){
    console.log("Drink something warm");
}else if (weather == "cloudy"){
    console.log("Watch a movie");
} else{
    console.log("choose any of the option above");
}

//Uppgift 8 - Vilket språk talar du?

let language =prompt("What language do you speak");

if (language == "swedish"){
    console.log("Hej, vad kul att du prata svenska");
}else if (language == "english"){
    console.log("Hello, it's great that you speak English");
}else{
    console.log("I would like to learn that language, " + language);
    
}

//Uppgift 9 - Multipel av 5
const number = prompt("Enter a number");

if (number % 5 === 0) {
    console.log(number + " is a multiple of 5.");
} else {
    console.log(number + " is not multiple of 5.");
}

//Uppgift 10 - Ska vi gå ut?

let goOut = confirm("Do you want to go out?");

if (goOut){
    alert("Call or text me!");
}else{
    alert("Okey, maybe another day!");
}

