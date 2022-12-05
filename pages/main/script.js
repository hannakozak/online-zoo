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
