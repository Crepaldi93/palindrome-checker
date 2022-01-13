// Function that checks if an input is a palindrome. Return true if it is and false if it is not.

function palindrome(str) {
  
  // regular expression that matches any non alphanumeric characters + underscores and white spaces
  const regex = /\W|_|\s/g ;
  
  // remove non alphanumeric characters from the string and setting all characters to lower case
  const cleanString = str.replace(regex, "").toLowerCase();
  
  // create a variable which contains the cleanString written backwawrds
  const backString = cleanString.split("").reverse().join("");
  
  // if cleanString == backString, string is a palindrome
  
  return cleanString == backString
  
}

// tests

// log true into the console
console.log(palindrome("eye"));

// log true into the console
console.log(palindrome("_eye"));

// log true into the console
console.log(palindrome("race car"));

// log false into the console
console.log(palindrome("not a palindrome"));

// log true into the console
console.log(palindrome("A man, a plan, a canal. Panama"));

// log true into the console
console.log(palindrome("never odd or even"));

// log false into the console
console.log(palindrome("nope"));

// log false into the console
console.log(palindrome("almostomla"));

// log true into the console
console.log(palindrome("My age is 0, 0 si ega ym."));

// log false into the console
console.log(palindrome("1 eye for of 1 eye."));

// log true into the console
console.log(palindrome("0_0 (: /-\ :) 0-0"));

// log false into the console
console.log(palindrome("five|\_/|four"))