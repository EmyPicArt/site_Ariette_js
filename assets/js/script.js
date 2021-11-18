$(function(){

// Saisie du prénom

// var hello = $("#hello");
var hello = document.getElementById("hello");
var buttonName = document.getElementById("buttonName");

buttonName.addEventListener("click",function(){
    var name = document.getElementById("name").value;
    form1.style.display = "none";
    buldingPage.style.display = "block";
    hello.innerHTML = "Bonjour " + name + ",";
});

var buttonMail = document.getElementById("buttonMail").addEventListener("click", function(){
    var inputMail = document.getElementById("inputMail").value;
    var name = document.getElementById("name").value;
    alert("Merci " + name + " ! Nous te confirmons que tu seras informé(e) sur ton email : " + inputMail +" dès que le site sera terminé ! ")
});



})