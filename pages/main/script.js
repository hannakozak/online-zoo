const navigationLinks = document.getElementsByClassName("header__link");
const footerNavigationLinks = document.getElementsByClassName("footer__link");

// add active state to navigation links on click event
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

for (let i = 0; i < footerNavigationLinks.length; i++) {
  footerNavigationLinks[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("current");
    current[0].className = current[0].className.replace(" current", "");
    this.className += " current";
  });
}
//navigation

const navigationIcon = document.querySelector(".navigation__icon");
const iconClose = document.querySelector(".navigation__icon--close");
const iconOpen = document.querySelector(".navigation__icon--open");
const navigation = document.querySelector(".navigation__nav");
const overlay = document.querySelector(".navigation__overlay");

function toggleMenu(event) {
  overlay.classList.toggle("overlay");
  if (navigation.classList.contains("showMenu")) {
    event.stopPropagation();
    navigation.classList.remove("showMenu");
    iconClose.style.display = "none";
  } else {
    navigation.classList.add("showMenu");
    iconClose.style.display = "block";
  }
}

iconOpen.addEventListener("click", toggleMenu);
iconClose.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
navigation.addEventListener("click", function (event) {
  event.stopPropagation();
});

// slider
const slider = document.querySelector(".pets__gallery");
const cards = document.querySelectorAll(".gallery__card");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

let generateSlide = () => {
  let media = window.matchMedia("(max-width: 640px)");
  let cardsNumber = media ? 4 : 6;
  for (let i = 0; i < cardsNumber; i++) {
    slider.appendChild(slider.children[Math.floor(Math.random() * slider.children.length)]);
  }
  return slider;
};

const slideLeft = () => {
  cards.forEach((card) => {
    card.classList.remove("slide-right");
    card.classList.add("slide-left");
  });

  slider.replaceWith(generateSlide());
};

const slideRight = () => {
  cards.forEach((card) => {
    card.classList.remove("slide-left");
    card.classList.add("slide-right");
  });

  slider.replaceWith(generateSlide());
};

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);
// testimonial slider

var elem = document.querySelector('input[type="range"]');
const testimonialsWrapper = document.querySelector(".testimonials__card--wrapper");

function rangeValue(e) {
  if (window.matchMedia("(max-width: 1000px)")) {
    testimonialsWrapper.scrollLeft = 320 * e.target.value;
  } else {
    testimonialsWrapper.scrollLeft = 260 * e.target.value;
  }
  console.log("slider");
}

elem.addEventListener("input", rangeValue);
