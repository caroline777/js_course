/*
LECTURE: Values and Variables

let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);
let firstName = 'Caroline';
console.log(firstName);
console.log(firstName);
console.log(firstName);
*/

/*
ASSIGNMENT: Values and Variables

1. Declare variables called 'country', 'continent' and 'population' and
assign their values according to your own country (population in millions)
2. Log their values to the console
*/

/*let country = "Canada";
let continent = "North America"
let population = 37;
console.log(country);
console.log(continent);
console.log(population);
*/

/*
LECTURE: Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "caroline");
javascriptIsFun = "yes!";
console.log(typeof javascriptIsFun);
let year;
console.log(year);
console.log(typeof year);
year = 1991;
console.log(year);
console.log(typeof year);
console.log(typeof null);
*/

/*
ASSIGNMENT: Data Types
1. Declare a variable called 'isIsland' and set its value according to your
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console
*/

/*
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

/*
LECTURE: let, const and var

let age = 30;
age = 31;
const bithYear = 1991;
bithYear = 1990;
const job;
* /


/*
ASSIGNMENT: let, const and var
1. Set the value of 'language' to the language spoken where you live (some
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
*/
/*
let language = "english";
const yearOfMarriage = 1983;
yearOfMarriage = 1985;

language = 'portuguese';
const country = 'Portugal';
const continent = 'Europe';
const isIsland = false;
isIsland = true;
*/


/*LECTURE: Basic Operators

////Math operators
const now = 2037
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jones';
const lastName = 'Schmed';
console.log(firstName + " " + lastName);

//assignment operatoers
let x = 10 + 5; //x = 15
x += 10; //x = x+10 = 25
x *= 4; // x = x*4 = 100
x++; //x = x + 1
x--; //x = x - 1
x--;
console.log(x);

//comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah <= 19);
const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
/*

ASSIGNMENT: Basic Operators
1. If your country split in half, and each half would contain half the population,
then how many people would live in each half?
2. Increase the population of your country by 1 and log the result to the console
3. Finland has a population of 6 million. Does your country have more people than
Finland?
4. The average population of a country is 33 million people. Does your country
have less people than the average country?
5. Based on the variables you created, create a new variable 'description'
which contains a string with this format: 'Portugal is in Europe, and its 11 million
people speak portuguese'
*/
/*
let country = "Canada";
let continent = "North America"
let population = 37;
console.log(population / 2);
population++;
console.log(population);
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population < averagePopulation);
let continent2 = "Europe";
console.log(continent2);
let europeCountry = "Portugal";
console.log(europeCountry);
let portugalPopulation = 11;
let language = 'portuguese';
const description1 = europeCountry + ' is in ' + continent2 + " and its " + portugalPopulation + " milion people speak " + language
console.log(description1);
*/


/*

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �

*/

// My Solution 
/*
let markWeight;
let markHeight;
let johnWeight;
let johnHeight;
let markBMI;
let johnBMI;
let markHigherBMI = true;

markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;
markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;
markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;
markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/

// Cours Solution - mai curat dar nu le poti rula deodata
/*
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
*/


/*
LECTURE: Strings and Template Literals
1. Recreate the 'description' variable from the last assignment, this time
using the template literal syntax

let country = "Canada";
let continent = "North America"
let population = 37;
console.log(population / 2);
population++;
console.log(population);
let finlandPopulation = 6;
console.log(population > finlandPopulation);
let averagePopulation = 33;
console.log(population < averagePopulation);
let continent2 = "Europe";
console.log(continent2);
let europeCountry = "Portugal";
console.log(europeCountry);
let portugalPopulation = 11;
let language = 'portuguese';
// const description1 = europeCountry + ' is in ' + continent2 + " and its " + portugalPopulation + " milion people speak " + language
const description1 = `${europeCountry} is in ${continent2} and its ${portugalPopulation} milion people speak ${language}`;
console.log(description1);
*/




/*
LECTURE: Taking Decisions: if / else Statements

we want to write a program which checks whether a person is alowed to start taking a driver's licence or not.And if she is, then it will print that to the console. And if not, it will print how many years are left until the person can start taking the driver's licence.
*/

const age = 20;

if (age >= 18) {
    console.log('Sarah can start driving licence 🚘');
} else {
    const yearsLeft = 18 - age;
    // console.log(yearsLeft);
    console.log(`Sarah is too young, she needs to wait another ${yearsLeft} years 😟`);
}

const birthYear = 2002;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


/*
1. If your country's population is greater that 33 million, log a string like this to the
console: 'Portugal's population is above average'. Otherwise, log a string like
'Portugal's population is 22 million below average' (the 22 is the average of 33
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right


Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
GOOD LUCK 😀





LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this:
prompt('How many neighbour countries does your country
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of
'numNeighbours'. Notice what happens when there is exactly 1 border! Why
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now
when you input 1
8. Reflect on why we should use the === operator and type conversion in this
situation
LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a
country that speaks english, has less than 50 million people and is not an
island.
3. Write an if statement to help Sarah figure out if your country is right for her.
You will need to write a condition that accounts for all of Sarah's criteria. Take
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily
change some variables in order to make the condition true (unless you live in
Canada :D)
LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D'
LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator
to log a string like this to the console: 'Portugal's population is above average'.
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to
130. See the different results, and set the population back to original
*/
