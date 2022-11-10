const navigationLinks = document.getElementsByClassName("header__link");
const footerNavigationLinks = document.getElementsByClassName("footer__link");
const optionsInput = document.getElementsByClassName("options__input");
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

for (let i = 0; i < optionsInput.length; i++) {
  optionsInput[i].addEventListener("click", function () {
    optionsInput[i + 1].removeAttribute("checked");
  });
}
