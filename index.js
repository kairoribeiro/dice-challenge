
let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randonDiceImage1 = "dice" + randomNumber1 + ".png"; // dice1.png to dice6.png
let randomImageSource1 = "images/" + randonDiceImage1; // src
let randonDiceImage2 = "dice" + randomNumber2 + ".png"; 
let randomImageSource2 = "images/" + randonDiceImage2;


let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource1);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) { // player 1 wins
    document.querySelector("h1").innerHTML = "🏆 Player 1 wins!";
}
else if(randomNumber2 > randomNumber1) { // player 2 wins
    document.querySelector("h1").innerHTML = "🏆 Player 2 wins!";
} else { // a tie
    document.querySelector("h1").innerHTML = "❌ Draw!"
}


// console.log(randomNumber1)
// console.log(randomNumber2)
