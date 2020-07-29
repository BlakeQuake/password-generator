// Assignment Code
var uppercase = ["A", "B", "C", "D", "E", "F","G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["$","!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "="];
var h1 = document.getElementsByTagName("h1");
var workshopArr = [];
var finalResultArr = [];

var generateBtn = document.querySelector("#generate");

const buttonElement = document.getElementById('generate');


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//----------------------------------------------------------------------

for (var i = 0; i < uppercase.length; i++) {
  console.log("" + uppercase[i]);
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function generatePassword(){
  // do some stuff here , make a random password
var length = prompt("How many characters in your random password? (please choose between 8 and 128)")
var hasCap = confirm("Do you want capital letters?");
var hasLow = confirm("Do you want lower case letters in your password?");
var hasSpecial = confirm("Do you want special characters?");
var hasNumbers = confirm("Do you want numbers too?");
    workshopArr = []

if (length <= 128 && length >= 8 ){
  if(hasCap){
    workshopArr = workshopArr.concat(uppercase);
  }
  if(hasLow){
    workshopArr = workshopArr.concat(lowercase)
  }
  if (hasSpecial) {
    workshopArr = workshopArr.concat(special)
  }
  if (hasNumbers) {
    workshopArr = workshopArr.concat(numbers)
  }
}
var randomizedArr = shuffle(workshopArr)

  // return random password
var smallArr = []
for (var i = 0; i < length; i++) {
    smallArr = smallArr.concat(randomizedArr[i])
}
  return smallArr.join("") 
}




// false, 2.342 , "ok", {}, ["1",'2']
// var arr = ["2", "3", false, true, 2>3, {
//   key: [1,2,3,4,5]
// }];


// console.log(arr[5].key[3])
