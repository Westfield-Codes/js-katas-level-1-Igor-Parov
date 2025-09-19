/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
// make a string variable for a color, set it equal to your favorite
var color = "green";
// alert the message" "My favorite color is " plus the color
alert ("My favorite color is "+ color);


/* Prompt */

/* Prompt with Conditional */


/* AGE */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* ICE CREAM */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* PET */

/* No Prompt */


/* Prompt */


/* Prompt with Conditional */
/* Var, Prompt and Alert Katas */

/* COLOR KATAS */

/* No Prompt */
// make a string variable for a color, set it equal to your favorite
var color = "green";
// alert the message" "My favorite color is " plus the color
alert ("My favorite color is "+ color);

/* Prompt */


/* AGE */

/* No Prompt */

/* Prompt */
var age = 17;
// make a string variable for name, set it to your name
var fname = "Igor"
// alert name is age years old
alert (fname + "is" + age + "years old");

/* Prompt with Conditional */


/* ICE CREAM */
var flavor = prompt("favorite flavor?");
var scoops = prompt("number of scoops?");
alert("you want" + scoops + "scoops of" + flavor)
/* No Prompt */


/* Prompt */


/* Prompt with Conditional */


/* PET */

/* No Prompt */
var petType = prompt("What is your pet type?");
var petName = prompt("What is your pet's name?");
alert ("You have a " + petType + " named " + petName);

/* Prompt */


/* Prompt with Conditional */
var petType = prompt("What is your pet type?");
var petName = prompt("What is your pet's name?");
alert ("You have a " + petType + " named " + petName);
if (petType = "dog") prompt("I like dogs too!");
if (petType = "cat") prompt("I'm allergic to cats");




 Variable and Alert Katas */
// These katas do not involve functions and are very basic. 
// "String variable" and "integer variable" are created the same way. 

/* COLOR KATAS */

/* Var Alert */

// make a string variable named color, set it equal to your favorite color.
var color = "Green";
// alert the message" "My favorite color is " plus the variable name, outside the quotes.
alert("My favorite color is " + color)
/* Var Alert Prompt */

// make a string variable for color, but prompt the user for their favorite color.
var color1 = prompt("What is yours favorite color?");

// alert color plus " is a nice color!" - note the space in the quotes.
alert(color1 + " is a nice color!");
/* Var Alert Prompt Conditional */
var color2 = prompt("What is yours favorite color?")
// if user enters "black" alert "Black is not really a color." 
if (color2 == "black" ) alert("Black is not really a color");
// otherwise alert color " is a nice color!"
else(color2 + "is a nice color!")
/* AGE KATAS */
// make an integer variable for age, prompt user for it
var age = prompt("What is your age?");
var firstName = prompt("What is your first name?")
// make a string variable for name, prompt user for it
if (age>16) alert ("you don't look that old");
// if age is greater than 16, alert "you don't look that old!"
else alert(firstName + " is " + age + "years old.");
// otherwise alert name is age years old

var pet = "";
var allergic = confirm("Are you allergic to fur?");
if (allergic == true){
 var cute = confirm("Cute [ok] or creepy [cancel]");
 if (cute == true) pet = "bird";
 else pet = "snake";
}
 else{
    var outside = confirm("Outside [ok] or inside [cancel] pet? ")
     if (outside == true) pet = "dog"
    if (outside == false) pet = "cat"
}
alert("Then try a " + pet + " as your pet!");
