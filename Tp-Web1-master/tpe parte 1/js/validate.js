"use strict";

let pregunta = document.getElementById("preguntaCaptcha");
let a ;
let b ;
let d ;

let captchaRefresh = document.getElementById("captchaRefresh");
captchaRefresh.addEventListener("click", dibujocaptcha);
window.onload = dibujocaptcha;

let valide = document.getElementById("btn-captcha");
valide.addEventListener("click" , ValidCaptcha);

function dibujocaptcha() {
     a = Math.ceil(Math.random()*10);
     b = Math.ceil(Math.random()*10);
    pregunta.innerHTML="¿Cuanto es "+ a +"+"+ b + "?";
};
function ValidCaptcha() {
    
    let d = document.getElementById("captcha").value;
    let resultado = a + b;
    if (d == resultado) {
        alert("Perfecto no eres un robot!");
        
    }
    else {
    alert("Uh! algo anda mal");
    }     
};
