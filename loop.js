// PROBLEM 1 - PRINT 1 TO 50
// SOLVE 1
let number1 = 50;
for(let i = 1; i <= number1; i++) {
   console.log(i);
}
// PROBLEM 1 SOLVED

// -----------------------------------------------------------------------------------

// PROBLEM 2 - PRINT 33 TO 1
// SOLVE 2
let number2 = 1;
for(let i = 33; i >= number2; i--){
    console.log(i);
}
// PROBLEM 2 SOLVED

// -------------------------------------------------------------------------------------

// PROBLEM 3 - FIND OUT THE ADDITION OF ALL OF THE EVEN NUMBERS FROM 1 TO 45
// SOLVE 3
let number3 = 45;
sum = 0;
for(let i = 1; i <= number3; i++){
    if (i % 2 === 0) {
       sum += i;
    }
}
console.log(sum);
// PROBLEM 3 SOLVED

// --------------------------------------------------------------------------------------

// PROBLEM 4 - FIND THE SQUARES OF ALL THE ODD NUMBERS FROM 1 TO 10, AND THEN ADD THOSE SQUARES TOGETHER.
// SOLVE 4
let number4 = 10;
sum = 0;
for(let i = 1; i <= number4; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
Math.pow(i,2) 
sum = sum + Math.pow(i,2);
}
    console.log(sum);
// PROBLEM 4 SOLVED

// ---------------------------------------------------------------------------------------

// PROBLEM 5 - WRITE A PROGRAM TO PRINT THE MULTIPLICATION TABLE OF 7.
// SOLVE 5
let number = 10;
let number5 = 7;
for(let i = 1; i <= number; i+=2){
    console.log(number5 + " " + "X" + " " + i + "=" + " " + number5 * i );    
}
// PROBLEM 5 SOLVED

// -----------------------------------------------------------------------------------------

// PROBLEM 6 - FIND OUT HOW MANY DIGITS ARE THERE IN THE NUMBER 139586883 
// SOLVE 6
let number6 = 139586883;
let digits = number6.toString().length;
console.log(digits);
// PROBLEM 6 SOLVED
