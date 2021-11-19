$(function(){

var hello = document.getElementById("hello");
var buttonName = document.getElementById("buttonName");
var form1 = document.getElementById("form1");
var buildingPage = document.getElementById("buildingPage");
var name = document.getElementById("name");


// Saisie du prénom
buttonName.addEventListener("click",function(){
    var userName = document.getElementById("name").value;
    form1.style.display = "none";
    buildingPage.style.display = "flex";
    hello.innerHTML = "Bonjour " + userName + ",";
    console.log(userName)
});

// saisie du mail

var buttonMail = document.getElementById("buttonMail");

buttonMail.addEventListener("click", function(){
    var inputMail = document.getElementById("inputMail").value;
    var userName = document.getElementById("name").value;
    alert("Merci " + userName + " ! Nous te confirmons que tu seras informé(e) sur ton email : " + inputMail +" dès que le site sera terminé ! ");
    hello.innerHTML = "Merci " + userName + " et à bientôt !";
    buildingPage.style.display = "none";
});

// Partie menu burger
const navbar = document.querySelector(".topnav");
const burger = document.querySelector(".fas");

console.log()


burger.addEventListener("click", function(){
    navbar.classList.toggle('is-visible')
})

})