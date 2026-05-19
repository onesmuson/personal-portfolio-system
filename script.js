function goToPage(page){

    window.location.href = page;
}

const typing = document.getElementById("typing");

if(typing){

const text = "Software Developer";

let index = 0;

function typeEffect(){

    if(index < text.length){

        typing.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect,100);
    }
}

window.onload = typeEffect;

}