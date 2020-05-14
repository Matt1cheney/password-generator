// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// main structure
let password = document.getElementById('password');
let numberLength = document.getElementById('numberLength');
let upperCase = document.getElementById('upperCase');
let lowerCase = document.getElementById('lowerCase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let generate = document.getElementById('generate');
let clipboard = document.getElementById('clipboard');

// functions on bottom
let randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,
} 
// object constructor methods
// Object.keys(randomFunction).forEach(function(key){
// console.log(key);
// console.log(randomFunction[key]);
// });


// Write password to the #password input
function writePassword(upper, lower, number, symbol, length) {
  
  
  let writePassword = '';
  
  let typesCount = upper + lower + number + symbol;
  
  if (length < 8 || length > 128) {
    return alert('not enough characters or too many characters');
  }
  if (typesCount === 0) {
    return alert('you need to select a type');
  }

  let typesArr = [{ upper }, { lower }, { number }, { symbol }].
  //filter out objects that are unchecked
  filter(
    item => Object.values(item)[0]);
    
    
    for (let i = 0; i < length; i++) {
      
      let funcName = Object.keys(typesArr[Math.floor(Math.random() * typesArr.length)])[0]
      
      
      writePassword += randomFunction[funcName]();
    };
    
    
    
let finalPassword = writePassword.slice(0, length);
return finalPassword;
}


// character functions
 const getRandomUpper = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
 const getRandomLower= () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
 const getRandomNumber = () => {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
 const getRandomSymbol = () => {
  let symbols = '!@#$%^&*()_+{}[]<>,.'
  return symbols[Math.floor(Math.random() * 20)]
  
}

// attached event listener 
generateBtn.addEventListener('click', () => {
  let length = +numberLength.value;
  let hasUpper = upperCase.checked;
  let hasLower = lowerCase.checked;
  let hasNumber = numbers.checked;
  let hasSymbols = symbols.checked;

  password.innerText = writePassword(
    hasUpper,
    hasLower,
    hasNumber,
    hasSymbols,
    length
  );
});
// BONUS 

copyMe.addEventListener('click', () => {
  let clipboardText = document.getElementById('password');

  clipboardText.select();
  clipboardText.setSelectionRange(0, 99999);

  document.execCommand('copy');

  alert('Copied Password \"' + password.textContent + '\" to clipboard'); 
});

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


