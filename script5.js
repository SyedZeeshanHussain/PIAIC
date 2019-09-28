/* 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum); */


/* 2. Repeat task1 for subtraction, multiplication, division & modulus. 

var num1 = 3;
var num2 = 5;
var subtract = num1 - num2;
var multiply = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;

document.write("Subtraction of " + num1 + " and " + num2 + " is " + subtract + "<br>");
document.write("Multiplication of " + num1 + " and " + num2 + " is " + multiply + "<br>");
document.write("Division of " + num1 + " and " + num2 + " is " + division + "<br>");
document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br>");
*/


/* 3. Do the following using JS Mathematic Expressions

var num;
document.write("Value after variable declaration is " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num = ++num;
document.write("Value after increament is " + num + "<br>");
num = num + 7;
document.write("Value after addition is " + num + "<br>");
num = --num;
document.write("Value after decreament is " + num + "<br>");
num = num % 2;
document.write("The remainder is " + num); */


/* 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 

var ticket = 600; var qty = 5; cost = ticket * qty;
document.write("Total cost to buy " + qty + " tickets to a movie is " + cost + "PKR");
*/


/* 5. Write a script to display multiplication table of any number in your browser. E.g 

var num = 4;
document.write("Table of " + num + "<br>");
document.write(num + " x 1 = " + num * 1 + "<br>");
document.write(num + " x 2 = " + num * 2 + "<br>");
document.write(num + " x 3 = " + num * 3 + "<br>");
document.write(num + " x 4 = " + num * 4 + "<br>");
document.write(num + " x 5 = " + num * 5 + "<br>");
document.write(num + " x 6 = " + num * 6 + "<br>");
document.write(num + " x 7 = " + num * 7 + "<br>");
document.write(num + " x 8 = " + num * 8 + "<br>");
document.write(num + " x 9 = " + num * 9 + "<br>");
document.write(num + " x 10 = " + num * 10 + "<br>");
*/


/* 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

var c = 25;
var f = 70;
var fahrenheit = (c * 9 / 5) + 32;
var celsius = (f -32) * 5 / 9;
document.write(c + "<sup>0</sup>C is " + fahrenheit + "<sup>0</sup>F" + "<br>");
document.write(f + "<sup>0</sup>F is " + celsius + "<sup>0</sup>C"); */


/* 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

var item1 = 650;
var item2 = 100;
var qty1 = 3;
var qty2 = 7;
var shippingCharges = 100;
var totalCost = (item1 * qty1) + (item2 * qty2) + shippingCharges;
document.write("<h1>Shopping Cart</h1><br>");
document.write("Price of items 1 is " + item1 + "<br>");
document.write("Quantity of items 1 is " + qty1 + "<br>");
document.write("Price of items 2 is " + item2 + "<br>");
document.write("Quantity of items 2 is " + qty2 + "<br>");
document.write("Shipping Charges " + shippingCharges + "<p>");
document.write("Total cost of your order is " + totalCost); */


/* 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

var totalMarks = 980;
var marksObtained = 804;
var percent = marksObtained / totalMarks * 100;
document.write("<h1>Marks Sheet</h1><br>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percent + "%"); */


/* 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

var us$ = 104.80;
var riyal = 28;
var pkr = (10 * us$) + (25 * riyal);
document.write("<h1>Currency in PKR</h1><br>");
document.write("Total currency in PKR: " + pkr); */


/* 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:

var num = ((2 + 5) * 10) / 2; */


/* 11. The Age Calculator: Forgot how old someone is? Calculate it! a. Store the current year in a variable. b. Store their birth year in a variable. c. Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: “They are either NN or NN years old”. 

var currentYear = 2016;
var birthYear = 1992;
var age = currentYear - birthYear;
document.write("<h1>Age Calculator</h1><br>");
document.write("Current Year: " + currentYear + "<br>");
document.write("Birth Year: " + birthYear + "<br>");
document.write("Your Age is: " + age); */


/* 12. The Geometrizer: Calculate properties of a circle.

var radius = 20;
var circum = 2 * 3.14 * radius;
var area = 3.14 * radius * radius;
document.write("<h1>The Geometrizer</h1><br>");
document.write("Radius of circle is: " + radius + "<br>");
document.write("Circumference is: " + circum + "<br>");
document.write("Area is: " + area); */


/* 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.

var currentAge = 15;
var estMaxAge = 65;
var snackPerYear = 3;
var result = (estMaxAge - currentAge) * 3;
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
document.write("Favourite Snack: Chocolate chip<br>");
document.write("Current age: " + currentAge + "<br>");
document.write("Estimated Maximum Age: " + estMaxAge + "<br>");
document.write("Amount of total snacks per year: " + snackPerYear + "<br>");
document.write("You will need " + result + " chocolate chip to last you until the ripe old age of " + estMaxAge); */

