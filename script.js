// Advanced string analysis in JavaScript

// Text / string
const text = "AmirAliMahmoodi";

// Length
console.log(text.length);
// Returns an integer
// Example: 15
// Used to get the number of characters in a string

// includes()
console.log(text.includes("A"));
// Returns a boolean
// true → the string contains "A"
console.log(text.includes("AM"));
// Returns false because it's case-sensitive

// toUpperCase()
console.log(text.toUpperCase());
// Returns "AMIRALIMAHMOODI"
// Converts the string to uppercase
// Don't forget the parentheses () — without them it won't work

// toLowerCase()
console.log(text.toLowerCase());
// Returns "amiralimahmoodi"
// Converts the string to lowercase

// trim()
const textWithSpace = "      AmirAliMahmoodi      ";
console.log(textWithSpace.trim());
// Returns "AmirAliMahmoodi"
// Removes whitespace from the beginning and end of the string

// substring()
console.log(text.substring(2, 7));
// Returns "irAli"
// Extracts a part of the string from index 2 to 6
console.log(text.substring(2));
// The second parameter is optional
// Returns "irAliMahmoodi"

// Method chaining
// You can call multiple string methods in sequence
console.log(text.toLowerCase().toUpperCase().trim().substring(1));
// Returns "MIRALIMAHMOODI"

console.log("Thanks for reading!");
