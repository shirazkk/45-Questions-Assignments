var personName = "shiRaZ ";
var uppercase = personName.toUpperCase(); //all characters become capital
var lowercase = personName.toLowerCase(); //all character becomes in lowercase
var tittlecase = personName.charAt(0).toUpperCase() + lowercase.slice(1).toLowerCase(); //for tittlecase firstly
//personName.chart.(0).touppercase() it will convert personName into uppercase then  personName.slice(1).tolowercase() it will convert all characters in lowercase except first letter.
console.log("Normal name:".concat(personName));
console.log("Name in Uppercase:".concat(uppercase));
console.log("Name in lowercase:".concat(lowercase));
console.log("Name in tittlecase:".concat(tittlecase));
