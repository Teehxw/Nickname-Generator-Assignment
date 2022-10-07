// Nickname Generator 

//GlobaL Variables     
let containerE1 = dpcument.getElementById("container");
let firstE1 = document.getElementById("first");
let lastE1 = document.getElementById("last");
let randNickE1=document.getElementById("random");
let allNickE1 =  document.getElementById("all")

//Event Listener
randNickE1.addEventListener("click", randomNick);
allNickE1.addEventListener("click", allNicks);

