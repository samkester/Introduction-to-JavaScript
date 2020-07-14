/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;
console.log(votingAge > 18);

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let foo = "bar";
let change = true;
if(change === true)
{
    foo = "bar-2";
}
console.log(foo);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const dateStr = "1999"
const dateInt = Number(dateStr);
console.log(dateStr);
console.log(dateInt);

//Task d: Write a function to multiply a*b 

function mult(a, b)
{
    return a*b;
}

console.log(mult(2,3));


/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(humanYears)
{
    return humanYears * 7;
}

console.log(dogYears(29));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age)
{
    if(age < 1)
    {
        //puppy values
        if(age < 4/12) return 0.1 * weight; // 4/12 year = 4 months; this value is also used for <2 months because there was no value specified
        else if(age < 7/12) return 0.05 * weight;
        else return 0.04 * weight;
    }
    else
    {
        //adult values
        if(weight <= 5) return 0.05 * weight;
        else if(weight <= 10) return 0.04 * weight;
        else if(weight <= 15) return 0.03 * weight;
        else return 0.02 * weight;
    }
}

console.log(dogFeeder(15, 1))

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Scissors
// Your function should take a string (either rock paper or scissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const validMoves = ["rock", "paper", "scissors"];

function rockPaperScissors(inputMove)
{
    playerMove = validMoves.indexOf(inputMove); // 0, 1, 2 for valid moves, -1 if invalid
    if(playerMove === -1)
    {
        console.log("Please enter a valid move.");
        return;
    }
    computerMove = Math.floor(Math.random() * 3); // generates an integer from 0 to 2 (inclusive)

    let result = "Your move: " + validMoves[playerMove] + "; CPU move: " + validMoves[computerMove] + "; ";

    if(playerMove === computerMove)
    {
        result += "TIE";
    }
    else if(playerMove === computerMove + 1 || playerMove === computerMove - 2)
    {
        // two win conditions: either the player move is 1 higher on the list, OR it's 2 lower (rock 0 beats scissors 2)
        result += "YOU WIN";
    }
    else
    {
        // since we didn't win, and didn't tie, we must've lost
        result += "YOU LOSE";
    }

    console.log(result);
}

rockPaperScissors("rock");
rockPaperScissors("scissors");
rockPaperScissors("spock");

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmToMiles(km)
{
    return km * 0.621371;
}

console.log(kmToMiles(100));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function feetToCm(feet)
{
    return feet * 30.48;
}

console.log(feetToCm(10));

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(bottles)
{
    for(i = bottles; i > 0; i--)
    {
        if(i === 1) console.log("1 bottle of soda on the wall, 1 bottle of soda, take it down, pass it around, no bottles of soda on the wall!");
        else if(i === 2) console.log("2 bottles of soda on the wall, 2 bottles of soda, take one down, pass it around, 1 bottle of soda on the wall!");
        else console.log(String(i) + " bottles of soda on the wall, " + i + " bottles of soda, take one down, pass it around, " + (i - 1) + " bottles of soda on the wall!");
    }
}

annoyingSong(5);

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGradeFor(numberGrade)
{
    if(numberGrade >= 90) return "A";
    if(numberGrade >= 80) return "B"; // the nature of `return` makes an "else" here redundant. We will only ever reach this code if numberGrade < 90
    if(numberGrade >= 70) return "C";
    if(numberGrade >= 60) return "D";
    return "F";
}
  
console.log(letterGradeFor(100)); // A
console.log(letterGradeFor(75));  // C
console.log(letterGradeFor(50));  // F

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method

const vowels = "aeiou";

function countVowels(inputString)
{
    inputString = String(inputString).toLowerCase();

    let result = 0;

    for(let i = 0; i < inputString.length; i++)
    {
        if(vowels.includes(inputString[i])) result ++;
    }

    return result;
}

console.log(countVowels("Interesting")); // 4

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let prompt = window.prompt("Enter your rock-paper-scissors move.");

console.log(rockPaperScissors(prompt));

