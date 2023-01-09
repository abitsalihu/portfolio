"use strict";

//! DOM QUERY SELECTORS TO MANIPULATE

const body = document.querySelector("body");

const nav = document.querySelector(".nav");
const menu = document.querySelector(".nav_menu");
const aboutSection = document.querySelector(".about");
const heroName = document.querySelector(".hero_name");
const frontEndTitle = document.querySelector(".frontend");
const developerTitle = document.querySelector(".developer");
const heroFooterLeft = document.querySelector(".hero_footer__left");
const heroFooterRight = document.querySelector(".hero_footer__right");
const aboutWord = document.querySelector(".aboutWord");
const loadSection = document.querySelector(".load");
const projectSection = document.querySelector(".projects");
const contactSection = document.querySelector(".contact");
const footerSection = document.querySelector(".footer");
const changeModeBtn = document.querySelectorAll(".nav_lc--mode-btn");
const footerIcons = document.querySelectorAll(".footer__con-icon");
const navLinks = document.querySelectorAll(".nav_content_m-link");
const navLine = document.querySelectorAll(".nav-line");
const navContent = document.querySelector(".nav_content");
const homeLink = document.querySelector(".home");
const aboutLink = document.querySelectorAll(".about-link");
const fMenuLine = document.querySelector(".f-m-line");
const sMenuLine = document.querySelector(".s-m-line");

let mode;

//! ARRAY FOR ABOUT ME SECTION -- WORD CHANGE
let words = [
  "look beautiful!",
  "are complex!",
  "tell a story!",
  "are thoughtful!",
  "show creativity!",
  "are unique!",
  "work well!",
  "don't suck!",
  "inspire people!",
];

// ! FUNCTIONS
const changeWord = function () {
  let randomNumber = Math.round(Math.random() * 8);
  let randomWord = words[randomNumber];
  aboutWord.textContent = `${randomWord}`;
};

const closeMenu = function () {
  fMenuLine.classList.remove("menu-f-animation");
  sMenuLine.classList.remove("menu-s-animation");
  navLinks.forEach((e) => {
    e.style.animation = "hideStuff 0.05s ease";
  });
  setTimeout(() => {
    navContent.classList.remove("content-display");
  }, 100);
};

// ! EVENT LISTENERS

window.addEventListener("scroll", function () {
  let userYposition = window.pageYOffset;

  heroName.style.transform = `translateX(-${userYposition}px)`;
  heroFooterLeft.style.transform = `translateX(-${userYposition}px)`;
  frontEndTitle.style.transform = `translateX(-${userYposition * 3}px)`;
  developerTitle.style.transform = `translateX(${userYposition * 3}px)`;
  heroFooterRight.style.transform = `translateX(${userYposition}px)`;
});

menu.addEventListener("click", () => {
  nav.classList.toggle("menu-active");
  body.classList.toggle("body-menu-active");
  fMenuLine.classList.toggle("menu-f-animation");
  sMenuLine.classList.toggle("menu-s-animation");

  if (mode === "light-mode") {
    nav.classList.toggle("nav-bg-light");
  } else {
    nav.classList.toggle("nav-bg-dark");
  }

  if (nav.classList.contains("menu-active")) {
    navContent.style.opacity = "1";

    setTimeout(() => {
      navContent.classList.add("content-display");
    }, 1000);
    setTimeout(() => {
      navLinks.forEach((e) => {
        e.style.animation = `loadUp .5s ease forwards`;
      });
    }, 1000);

    document.querySelector(
      "#nav_content_l-icons"
    ).style.animation = `loadLeft 1s ease forwards`;
    document.querySelector(
      "#nav_content_l-resume"
    ).style.animation = `loadRight 1s ease forwards`;
  } else {
    nav.classList.remove("menu-active");
    body.classList.remove("body-menu-active");
    closeMenu();
    setTimeout(() => {
      navContent.classList.remove("content-display");
    }, 1000);
    navContent.style.opacity = "0";
  }
});

homeLink.addEventListener("click", () => {
  aboutSection.style.display = `flex`;
  projectSection.style.display = `flex`;
  contactSection.style.display = `flex`;
  footerSection.style.display = `flex`;
  body.style.height = `auto`;
  nav.classList.remove("nav-bg-light");
  nav.classList.remove("nav-bg-dark");
  document.querySelector(".hero").style.display = `inline`;
  document.querySelector(".about-page").style.display = `none`;
  nav.classList.remove("menu-active");
  body.classList.remove("body-menu-active");
  closeMenu();
});

aboutLink.forEach((e) => {
  e.addEventListener("click", () => {
    nav.classList.remove("menu-active");
    body.classList.remove("body-menu-active");
    body.style.minHeight = `100vh`;
    nav.classList.remove("nav-bg-light");
    nav.classList.remove("nav-bg-dark");
    closeMenu();
    document.querySelector(".about-page").style.display = `flex`;
    document.querySelector(".hero").style.display = `none`;
    aboutSection.style.display = `none`;
    projectSection.style.display = `none`;
    contactSection.style.display = `none`;
    footerSection.style.display = `none`;
  });
});
changeModeBtn.forEach(function (e) {
  e.addEventListener("click", (e) => {
    mode = e.target.getAttribute("data-mode");
    e.target.style.display = "none";

    if (nav.classList.contains("menu-active")) {
      if (mode === "light-mode") {
        nav.classList.toggle("nav-bg-light");
        nav.classList.toggle("nav-bg-dark");
      } else {
        nav.classList.toggle("nav-bg-dark");
        nav.classList.toggle("nav-bg-light");
      }
    }

    if (mode === "light-mode") {
      changeModeBtn[1].style.display = "flex";
      nav.classList.remove("dark-mode");
      nav.classList.add(`${mode}`);

      body.classList.remove("dark-mode");
      body.style.background = `#f5f5f5`;

      aboutSection.classList.remove("dark-mode");
      aboutSection.classList.add(`${mode}`);

      frontEndTitle.classList.remove("dark-mode");
      frontEndTitle.classList.add(`${mode}`);

      developerTitle.classList.remove("dark-mode");
      developerTitle.classList.add(`${mode}`);

      projectSection.classList.remove("dark-mode");
      projectSection.classList.add(`${mode}`);

      contactSection.classList.remove("dark-mode");
      contactSection.classList.add(`${mode}`);

      document.querySelector(".about-page").style.color = `#000000`;
      document.querySelectorAll(".tech").forEach((e) => {
        e.style.fill = `#000000`;
      });

      footerIcons.forEach((e) => {
        e.style.fill = `#000000`;
      });

      navLinks.forEach((e) => {
        e.style.color = `#000000`;
      });

      navLine.forEach((e) => {
        e.style.backgroundColor = "#000000";
      });

      document.querySelectorAll(".nav_menu--line").forEach((e) => {
        e.style.backgroundColor = `#000000`;
      });
    } else {
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

      projectSection.classList.remove("light-mode");
      projectSection.classList.add(`${mode}`);

      contactSection.classList.remove("light-mode");
      contactSection.classList.add(`${mode}`);

      document.querySelector(".about-page").style.color = `#f5f5f5`;
      document.querySelectorAll(".tech").forEach((e) => {
        e.style.fill = `#f5f5f5`;
      });

      footerIcons.forEach((e) => {
        e.style.fill = `#f5f5f5`;
      });

      navLinks.forEach((e) => {
        e.style.color = `#f5f5f5`;
      });

      navLine.forEach((e) => {
        e.style.backgroundColor = "#f5f5f5";
      });

      document.querySelectorAll(".nav_menu--line").forEach((e) => {
        e.style.backgroundColor = `#f5f5f5`;
      });
    }
    return mode;
  });
});

// ! TIMEOUTS -- INTERVALS

setTimeout(() => {
  frontEndTitle.style.animation = `none`;
  heroName.style.animation = `none`;
  heroFooterLeft.style.animation = `none`;
  developerTitle.style.animation = `none`;
  heroFooterRight.style.animation = `none`;
}, 11750);

setTimeout(() => {
  aboutSection.style.display = `flex`;
  aboutSection.style.animation = `loadUp 1s ease forwards`;
}, 9750);

setTimeout(() => {
  projectSection.style.display = `flex`;
  contactSection.style.display = `flex`;
  footerSection.style.display = `flex`;
  body.classList.add(`body-load`);
}, 11000);

setTimeout(() => {
  frontEndTitle.style.opacity = `1`;
  heroName.style.opacity = `1`;
  developerTitle.style.opacity = `1`;
  heroFooterLeft.style.opacity = `1`;
  heroFooterRight.style.opacity = "1";
}, 11750);

setTimeout(() => {
  loadSection.style.display = `none`;
}, 10000);

setInterval(changeWord, 2000);
