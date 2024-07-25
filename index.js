///////////////////////////////////////////////// Chp 21 /  25 //////////////////////////////////////////

//Question 1

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = firstName + ' ' + lastName;
// alert('Hello, ' + fullName + '!');

 //Question 2

// let favoriteMobileModel = prompt("What is your favorite mobile phone model?");
// let lengthOfInput = favoriteMobileModel.length;
// document.write("My favorite mobile is "+ ":"+ " " + favoriteMobileModel +"</br>"+ 
//     " length of string"+ ":" + " " + lengthOfInput);

// Question 3

// let word = "Pakistani";
// let indexOfN = word.indexOf('n');
// document.write("string ; " + word + " </br>   index of 'n' is " + indexOfN + "");

// Question 4

// let word = "Hello World";
// let lastIndexOfL = word.lastIndexOf('l');
// document.write("string ; " + word + "<br>last index of 'l' is " + lastIndexOfL);

//Question 5

// let word = "Pakistani";
// let characterAtIndex3 = word.charAt(3);
// document.write("string :  pakistani "+" <br> character at index 3 : " + characterAtIndex3 + "<br>");

// Question 6

// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// let fullName = "".concat(firstName, " ", lastName);
// alert("Hello, " + fullName + "! Welcome!");
// console.log("Full Name:", fullName);

//Question 7

// let word = "Hyderabad";
// let replacedWord = word.replace("Hyder", "Islam");
// document.write("City: " + word + "<br> After Replacement : " + replacedWord);

//Question 8

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Var Message: " + message.replace(/and/g, "&"));

//Question 9

// let str = "472";
// let num = parseInt(str);
// document.write("Value: " + str + "<br>Type: " + typeof(str) + "<br>");
// document.write("Value: " + num + "<br>Type: " + typeof(num));

//Question 10

// let userInput = prompt("Enter some text:");
// let capitalInput = userInput.toUpperCase();
// document.write("User Input: " + userInput + "<br>Upper Caset: " + capitalInput);

//Question 11

// var num = 35.36;
// var numString = num.toString();
// numString = numString.replace('.', '');
// document.write("Number: " + num + "<br>Result: " + numString);

//Question 12

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// function searchItem(item) {
//     item = item.toLowerCase();
//     for (let i = 0; i < A.length; i++) {
//         if (A[i].toLowerCase() === item) {
//             return true;
//         }
//     }
//     return false; 
// }
// let userInput = prompt("Enter item to search in the list:");
// let isFound = searchItem(userInput);

// if (isFound) {
//     alert("Yes, '" + userInput + "' is found in the list.");
// } else {
//     alert("No, '" + userInput + "' is not found in the list.");
// }

//Question 13

// var university = "University of Karachi";
// document.write("<br>");
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i]); 
//     document.write("<br>"); 
// }

//Question 14

// var word = "Pakistan";
// var lastCharacter = word.charAt(word.length - 1);

// document.write("User Input : Pakistan <br> Last character of input : " + lastCharacter);


//Question 15

var sentence = "The quick brown fox jumps over the lazy dog";
var wordToSearch = "the";
var count = 0;
var words = sentence.split(" ");
for (var i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === wordToSearch) {
        count++;
    }
}
ext: The quick brown fox jumps................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................... '" + wordToSearch + "': " + count);



    











































