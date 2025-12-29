// Lec 134. What We'll Make: Drum Kit

////////////////////////////////////////////////

// Lec 136. Adding Event Listeners to a Button

// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//     alert("I got clicked");
// }


// or we can also add a anonymous function, cause it doesn't have name, so it's anonomous function.

// document.querySelector("button").addEventListener("click", function() {
//     alert("I got clicked")
// });


///////////////////////////////////////

// Selecting multiple button using forloop


// var divs = document.querySelectorAll("button");


// for (var div of divs) {
//     div.addEventListener("click", function() {
//         alert("I got clicked")
//     })
// }


// or we can do this by

// allButton = document.querySelectorAll(".drum").length
// allB = document.querySelectorAll(".drum")

// for (var i=0; i<allButton; i++) {
//     allB[i].addEventListener("click", function() {
//         alert("You clicked me.")
//     })
// }



/////////////////////////////////////////////////////


// Lec 137. Higher Order Functions and Passing Functions as Arguments


// function add(num1, num2) {
//     return num1 + num2;
// }

// function multiply(num1, num2) {
//     return num1 * num2
// }

// function calculator(num1, num2, operator) {
//     return operator(num1, num2)
// }

// console.log(calculator(2, 2, add))


// So this type of function which can take other function as input called Higher order function.

///////////////////////////////////////////////

// Inside console write (debugger;) and hold the shift then press enter then write the function which you want to debug (ex: calculator(2, 2, multiply);) then press enter. It will open the debugger mode inside chrome inspect. then click on the right side down arrow for the next step. and it will go and find the function. You can click on the down arrow again to look at the another line. It is used to debug.



///////////////////////////////////////////

// Lec 138. Higher Order Function Challenge Solution


// function add(num1, num2) {
// return num1 + num2;
// }
 
// function subtract(num1, num2) {
// return num1 - num2;
// }
 
// function multiply(num1, num2) {
// return num1 * num2;
// }
 
// function divide(num1, num2) {
// return num1 / num2;
// }
 
// function calculator(num1, num2, operator) {
// return operator(num1, num2);
// }



///////////////////////////////////////////////


// Lec 139. How to Play Sounds on a Website


// var numberOfDrumButtons = document.querySelectorAll(".drum").length

// for (var i=0; i<numberOfDrumButtons; i++) {
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){

//         console.log(this)
//         console.log(this.innerHTML)
//         this.style.color = "white";
//         if(this.innerHTML=="w"){
//             var audio = new Audio("./Sounds/crash.mp3")
//             audio.play()
//         } 
//         else if(this.innerHTML=="a") {
//              var audio = new Audio("./Sounds/kick-bass.mp3")
//             audio.play()
//         }
//         else if(this.innerHTML=="s") {
//             var audio = new Audio("./Sounds/snare.mp3")
//             audio.play()
//         }
//         else if(this.innerHTML=="d") {
//              var audio = new Audio("./Sounds/tom-1.mp3")
//             audio.play()
//         }
//         else if(this.innerHTML=="j") {
//              var audio = new Audio("./Sounds/tom-2.mp3")
//             audio.play()
//         }
//         else if(this.innerHTML=="k") {
//              var audio = new Audio("./Sounds/tom-3.mp3")
//             audio.play()
//         }
//         else if(this.innerHTML=="l") {
//              var audio = new Audio("./Sounds/tom-4.mp3")
//             audio.play()
//         }
//     })
// }



/////////////////////////////////////////////////


// Lec 140. How to Use Switch Statements in Javascript

// Instead of if-else we can use this method to play sound.

///////////////////////////

// switch (expression) {
//     case: expression:

//     break;
//     default:
// }

//////////////////////////////////////

var numberOfDrumButtons = document.querySelectorAll(".drum").length

for (var i=0; i<numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case "w":
                var tom1 = new Audio("./Sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("./Sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio ("./Sounds/tom-3.mp3");
                tom3.play()
                break;

            case "d":
                var tom4 = new Audio("./Sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("./Sounds/snare.mp3")
                snare.play()
                break;

            case "k":
                var crash = new Audio("./Sounds/crash.mp3");
                crash.play();

            case "l":
                var kick = new Audio("./Sounds/kick-bass.mp3");
                kick.play();
                break;


            default: console.log(buttonInnerHTML);
        }
    })
}