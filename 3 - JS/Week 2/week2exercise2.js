
function guessNumber() {

        const random = Math.floor(Math.random() * 10) + 1;

    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    
    if(number == random) {
        alert('You guessed the correct number.');
    }

    else if(number > random) 
     {    
       number++;
       alert("Number to high! Try a smaller number");
     }
     else
     {
       number++;
       alert("Number to low! Try a greater number")
     }


  }

guessNumber();



 