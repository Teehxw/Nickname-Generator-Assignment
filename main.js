// Nickname Generator 

//GlobaL Variables     
let containerE1 = document.getElementById("container");
let randNickE1=document.getElementById("random");
let allNickE1 =  document.getElementById("all")

//Event Listener
randNickE1.addEventListener("click", randomNick);
allNickE1.addEventListener("click", allNicks);

// Array
let nicknames = ["twinkle-toes", "beautiful", "fortnite-sweat", "shadow", "faze", "da amazing", "da beauty", "ismylov"];
// index ->            0              1               2             3        4        5         6           7

//Process

function randomNick(){
    //Global Variables
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
    
    //output
    let randNickname = randomElement(nicknames);
    containerE1.innerHTML = `${first} "${randNickname}" ${last}`;
}

function allNicks() {
    let first = document.getElementById("first").value;
    let last = document.getElementById("last").value;
     let divStr = "";
     for (let i = 0; i < nicknames.length; i++)  {
        divStr += `${first} "${nicknames[i]}" ${last} <br><br>`;
     }               
     containerE1.innerHTML = divStr;                              
}

