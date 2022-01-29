//DECLARATION AREA
let result;

//FUNCTION AREA
let sum = (firstNumber,secondNumber) => {
     result=firstNumber+secondNumber;
    document.getElementById("sum").innerHTML=result;

};

let sub = (firstNumber,secondNumber) => {
     result=firstNumber-secondNumber;
  document.getElementById("sub").innerHTML=result;

};

let div = (firstNumber,secondNumber) => {
     result=firstNumber/secondNumber;
    document.getElementById("divi").innerHTML=result;
  
};

let mult = (firstNumber,secondNumber) => {
      result=firstNumber*secondNumber;
    document.getElementById("mult").innerHTML=result;
  
};




//MAIN AREA
let start = () => {
  
let firstNumber=Number(prompt("Enter the first number:"));
let secondNumber=Number(prompt("Enter the second number:")); 
console.log(firstNumber,secondNumber);
console.log(firstNumber+secondNumber);
document.getElementById("numbers").innerHTML=`N1=${firstNumber} <br> N2=${secondNumber}`
sum(firstNumber,secondNumber);
sub(firstNumber,secondNumber);
div(firstNumber,secondNumber);
mult(firstNumber,secondNumber);
};




