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

let randomFunction = {
  upper: getRandomUpper,
  lower: getRandomLower,
  number: getRandomNumber,
  symbol: getRandomSymbol,


}
// event
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

// Write password to the #password input
function writePassword(upper, lower, number, symbol, length) {
  

  let writePassword = '';

  let typesCount = upper + lower + number + symbol;

  //console.log('typesCount', typesCount);

  let typesArr = [{ upper }, { lower }, { number }, { symbol }].
    //filter out objects that are unchecked
    filter(
      item => Object.values(item)[0]);

  //console.log('typesArr', typesArr);

  if (length < 8 || length > 128 ) {
    return alert('not enough characters or too many characters');
  }
  if(typesCount === 0 ) {
    return alert('you need to select a type');
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      let funcName = Object.keys(type)[0]
      //console.log('funcName', funcName);

      writePassword += randomFunction[funcName]();
    });
    
    
  }  
  let finalPassword = writePassword.slice(0, length);
  return finalPassword;
}

  

// character functions
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  let symbols = '!@#$%^&*()_+{}[]<>,.'
  return symbols[Math.floor(Math.random() * 20)]
}




// BONUS 

  copyMe.addEventListener('click', () => {
    let clipboardText = document.getElementById('password');
    

    clipboardText.select();
    clipboardText.setSelectionRange(0,99999);
    
    
    document.execCommand('copy');
    
    alert('Password copied to clipboard');
});
    
    
    
    
    


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER