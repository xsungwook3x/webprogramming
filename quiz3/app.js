
const number = document.getElementById("number");
const decrease = document.querySelector(".decrease");
const reset = document.querySelector(".reset");
const increase = document.querySelector(".increase");

let currentNumber = 0;



let decreaseNumber = function(){
    currentNumber--;

    number.textContent=currentNumber;
    if(currentNumber<0){
        number.style.color="red"
    }
}

let resetNumber = function(){
    currentNumber=0;
    number.textContent=currentNumber;
    number.style.color="black"
}

let increaseNumber =function(){
    currentNumber++;
    number.textContent=currentNumber;
    if(currentNumber>0){
        number.style.color="green"
    }
}