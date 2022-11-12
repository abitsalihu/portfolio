"use strict"

const body = document.querySelector("body");
const nav = document.querySelector(".nav")
const aboutSection = document.querySelector(".about");
const heroName = document.querySelector(".hero_name");
const frontEndTitle = document.querySelector(".frontend");
const developerTitle = document.querySelector(".developer");
const heroFooterLeft = document.querySelector(".hero_footer__left");
const heroFooterRight = document.querySelector(".hero_footer__right");
const aboutWord = document.querySelector(".aboutWord")
const loadSection = document.querySelector(".load")
const projectSection = document.querySelector(".projects") 
const changeModeBtn = document.querySelectorAll(".nav_lc--mode-btn");

console.log(changeModeBtn)
let words = ["look beautiful!", "are complex!", "tell a story!", "are thoughtful!", "show creativity!", "are unique!", "work well!", "don't suck!", "inspire people!"]

const changeWord = function(){
    
    let randomNumber = Math.round((Math.random() * 9));  
    let randomWord = words[randomNumber];

    aboutWord.textContent = `${randomWord}`
}



window.addEventListener("scroll", function(){
    let userYposition = window.pageYOffset;

    heroName.style.transform = `translateX(-${userYposition}px)`
    heroFooterLeft.style.transform = `translateX(-${userYposition}px)`
    frontEndTitle.style.transform = `translateX(-${userYposition * 3}px)`
    developerTitle.style.transform = `translateX(${userYposition * 3}px)`
    heroFooterRight.style.transform = `translateX(${userYposition}px)`


    aboutSection.style.transition = `transform ease`;
    aboutSection.style.transform = `translateY(-${userYposition}px)`
    projectSection.style.transition = `transform ease`;
    projectSection.style.transform = `translateY(-${userYposition}px)`
})

changeModeBtn.forEach(function(e){e.addEventListener("click", (e) => {
    const mode =  e.target.getAttribute("data-mode");
    // const nextBtn = e.target.getAttribute("data-btn");

    e.target.style.display = "none";
    // document.querySelector(`.${nextBtn}`).style.display = "flex";
    // console.log(document.querySelector(`.${nextBtn}`));
    

    if(mode === "light-mode"){
        console.log("dark-mode")
    changeModeBtn[1].style.display = "flex";
    nav.classList.remove("dark-mode")
    nav.classList.add(`${mode}`);

    body.classList.remove("dark-mode")
    body.style.background = `#f5f5f5`;

    aboutSection.classList.remove("dark-mode")
    aboutSection.classList.add(`${mode}`);
    
    frontEndTitle.classList.remove("dark-mode")
    frontEndTitle.classList.add(`${mode}`);
    
    developerTitle.classList.remove("dark-mode")
    developerTitle.classList.add(`${mode}`)

  
    document.querySelectorAll(".nav_menu--line").forEach((e) => {
        e.style.backgroundColor = `#000000`
    })
    } else{
        console.log("light-mode")

    changeModeBtn[0].style.display = "flex";

    nav.classList.remove("light-mode");
    nav.classList.add(`${mode}`);

    body.classList.remove("light-mode");
    body.style.background = `#000000`;

    aboutSection.classList.remove("light-mode");
    aboutSection.classList.add(`${mode}`);
    

    frontEndTitle.classList.remove("light-mode");
    frontEndTitle.classList.add(`${mode}`);

    developerTitle.classList.remove("light-mode");
    developerTitle.classList.add(`${mode}`);

    document.querySelectorAll(".nav_menu--line").forEach((e) => {
        e.style.backgroundColor = `#f5f5f5`
    })

    }
})});

setTimeout(() => {
    frontEndTitle.style.animation = `none`
    heroName.style.animation = `none`
    heroFooterLeft.style.animation = `none`
    developerTitle.style.animation = `none`
    heroFooterRight.style.animation = `none`


},11750);

setTimeout(() => {
    body.style.height = `auto`;
},11000);

setTimeout(() => {
    aboutSection.style.display = `flex`
    projectSection.style.display = `flex`
}, 11000);

setTimeout(() => {
    frontEndTitle.style.opacity = `1`
    heroName.style.opacity = `1`
    developerTitle.style.opacity = `1`
    heroFooterLeft.style.opacity = `1`
    heroFooterRight.style.opacity = '1'
}
, 11750);

setTimeout(() =>{
    loadSection.style.display = `none`
},10000)

setInterval(changeWord, 2000);