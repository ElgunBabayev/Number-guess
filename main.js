let number = document.querySelector(".guess-numb");
let button = document.querySelector(".btn");
let guesscount = document.querySelector(".guessed");
let guess = document.querySelector(".guesses");
let result = document.querySelector(".guess-quality")



let random = Math.floor(Math.random() * 15 + 1);
console.log(random);
button.addEventListener("click", function(){
  let number1 = number.value
  if(number1 == random){
    result.innerText = "Congratulation"
  }
  else if(number1>random){
    result.innerText= "high";
  }
  else if(number1<random){
    result.innerText = "low";
  }
  number.value ="";
})
  
   
  

