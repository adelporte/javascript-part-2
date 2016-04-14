/*Read about the Array.prototype.sort method. 
Create a function that can be used with sort. 
This function should take two strings, and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted using your new function.*/

function sortingTwoStrings(string1, string2) {
    var array1 = [];
    function createArray (element1, element2){
            array1.push(element1, element2);
        }
    createArray(string1, string2)
    return array1.sort(function(first, second) {
            if (first.length > second.length) {
                return -1;
            } else if (first.length < second.length) {
                return 1;
            } else {
                return 0;
            }
    });
}

console.log(sortingTwoStrings("this is the first string", "Hello this is the second string an longest one"));

/*Create an array of objects (don’t need to use new here, just regular object literals). 
These objects will contain a name and email property. 
Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical order.*/
function pushObjects() {
    var listOfPersons = [];
    var marco = {
        name: "Marco",
        email: "marco@gmail.com"
    }
    var polo = {
        name: "Polo",
        email: "polo@gmail.com"
    }
    listOfPersons.push(marco);
    listOfPersons.push(polo);
    console.log(listOfPersons.sort(function(a, b) {
            if (a.name > b.name) {
                return 1;
            }
            else if (a.name < b.name) {
                return -1;
            }
            else {
                return 0;
            }
    }))
    console.log(listOfPersons.sort(function(a, b) {
            if (a.email > b.email) {
                return 1;
            }
            else if (a.email < b.email) {
                return -1;
            }
            else {
                return 0;
            }
    }))
}

pushObjects();

/*Create a function that can be used with Array.prototype.map. 
This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.*/

var newArray = [1, 2];
function makeItSquare (a) {
        return a * a;
    }


var result = newArray.map(makeItSquare);
console.log(result);

/*Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each containing a “num” property.*/

var arrayOfobjects = [{
    name: "Albert",
    num: 19
},
{
    name: "Francis",
    num: 25
}];

function squareNum(obj) {
        return obj.num * obj.num;
}

var result2 = arrayOfobjects.map(squareNum);
console.log(result2);

/*In a previous workshop, 
you had to create a function that took two numbers and an operation (add, sub, mult, …) 
and returned the result of the operation on the two numbers. 
Here we are going to do the same but at a higher order. 
Create a function called operationMaker that takes only a string called operation as argument. 
This string could be “add”, “subtract”, “mult” or “div”. 
Your function will return a function that will take two numbers and 
return the result of running operation on these numbers. 
The end result should let me do something like this:

var adder = operationMaker(“add”);
var sum = adder(5, 10); //15

var multiplier = operationMaker(“mult”);
var product = mult(5, 10); // 50     */

function operationMaker(string) {
    if (string === "add") {
        return function(numberOne, numberTwo) {
            return numberOne + numberTwo;
        }
    }
    else if (string === "subtract") {
        return function(numberOne, numberTwo) {
            return numberOne - numberTwo;
        }
    }
    else if(string === "div") {
        return function(numberOne, numberTwo) {
            return numberOne / numberTwo;
        }
    }
}

var adder = operationMaker("add");
console.log(adder(5, 2));
var adder = operationMaker("subtract");
console.log(adder(5, 2));
var adder = operationMaker("div");
console.log(adder(5, 2));

console.log(operationMaker("add")(5,2));