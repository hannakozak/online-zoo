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
    iconOpen.style.display = "none";
  }
}

iconOpen.addEventListener("click", toggleMenu);
iconClose.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);
navigation.addEventListener("click", function (event) {
  event.stopPropagation();
});
//donate panel
const donateAmount = document.querySelector(".donate-amount__input");
const steps = document.querySelectorAll('input[name="step"]');

let stepsValues = [];

steps.forEach((step) => stepsValues.push(step.value));

let selectedValue = document.querySelector('input[name="step"]:checked').value;
donateAmount.value = selectedValue;

steps.forEach((step) => {
  step.addEventListener("change", (event) => {
    donateAmount.value = event.target.value;
  });
});

function onStepChange(event) {
  event.target.value = event.target.value.substr(0, 4);
  let currentValue = event.target.value;

  if (stepsValues.includes(currentValue)) {
    document.querySelector(`input[value="${currentValue}"]`).checked = true;
  } else {
    let currentCheckedInput = document.querySelector('input[name="step"]:checked');
    if (currentCheckedInput) {
      currentCheckedInput.checked = false;
    }
  }
}

donateAmount.addEventListener("input", onStepChange);
