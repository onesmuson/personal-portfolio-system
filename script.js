const typing = document.getElementById("typing");

const texts = [
    "Software Developer",
    "Web Designer",
    "Tech Enthusiast",
    "Frontend Developer",
    "Creative Problem Solver"
];

let textIndex = 0;
let charIndex = 0;

function typeEffect() {

    if(charIndex < texts[textIndex].length){

        typing.innerHTML += texts[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }
}

function eraseEffect(){

    if(charIndex > 0){

        typing.innerHTML = texts[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if(textIndex >= texts.length){

            textIndex = 0;

        }

        setTimeout(typeEffect, 500);
    }
}

window.onload = typeEffect;

/* SMOOTH SCROLL ANIMATION */

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < window.innerHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0px)";

        }

    });

});

/* FLOATING BUTTON EFFECT */

const btn = document.querySelector(".btn");

btn.addEventListener("mouseover", () => {

    btn.style.boxShadow = "0 0 20px #00ffff";

});

btn.addEventListener("mouseout", () => {

    btn.style.boxShadow = "none";

});

/* NAVBAR ACTIVE EFFECT */

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

    });

});

/* WELCOME MESSAGE */

console.log("Welcome to Onesmus Meron's Portfolio Website 🚀");
