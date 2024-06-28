"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList1 = void 0;
exports.guestList1 = ["Umair", "Hamza", "Taimoor"]; //old guestlist
console.log(exports.guestList1);
var notAttending = "Hamza";
console.log("".concat(notAttending, " can't attend dinner.")); //this guest not attend dinner
var newGuest = "Mazz";
console.log("Dear,".concat(newGuest, " i invite you for dinner")); //new guest is invited
exports.guestList1[exports.guestList1.indexOf(notAttending)] = newGuest; //indexOf remove "Hamza",add "Mazz",in new guestlist
console.log(exports.guestList1); //print new guest list
