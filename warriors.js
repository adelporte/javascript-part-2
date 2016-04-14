/*Create a constructor function called Warrior that can create new warriors. 
This function will take parameters name, and gender. 
name can be any string, gender can be M or F. 
It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
In addition to that, every object that gets created should have the following methods:
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. 
Based on the power of each opponent, this method should 
output to the console which player won the fight based on their power. 
Be as creative as you like with the text of this method :)
Finally, create a bunch of warriors and make them fight together.*/

function Warrior(name, gender) {
    this.name = name;
    this.gender = gender;
    this.level = 1;
    this.weapon = "wooden sword";
    this.power = Math.floor((Math.random() * 100) + 1);
    this.fight = function () {console.log(" rushes to the arena with ")};
    this.faceoff = function (opponent) {
        if (this.power > opponent.power) {
            console.log(this.name + " won");
        }
        else {
            console.log(opponent.name + " lost");
        }
    }
}

var firstWarrior = new Warrior("Don", "M");
var secondWarrior = new Warrior("Helena", "F");
var thirdWarrior = new Warrior("Franck", "M");
console.log(firstWarrior);
secondWarrior.faceoff(firstWarrior);
secondWarrior.fight();

/*Create a file called addressbook.js, then do the following. 
Commit and push as often as you like so that we can monitor 
the progress of your work in the pull request.

Create a constructor function called Person that can create new persons. 
It takes firstName and lastName as arguments, and assigns them to the new object. 
In addition to that, the constructor function will assign each person 
an emails property that will be an empty array.
Create a constructor function called Email that can create a new email address. 
It takes address and type as arguments. It will assign address to the new object. 
For type, check if it's in the list (work, home, other). 
If it's not in the list, set the type to "other".
Add an addEmail function to the prototype of Person. 
This function will be available to all objects created using new Person. 
The addEmail function should take an email address and type as arguments, 
call the Email constructor to create a new email object, 
then push that email object to the emails of the person.
Finally test your code by creating a person and giving them a home and work email.*/