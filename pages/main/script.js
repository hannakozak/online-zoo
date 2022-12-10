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
  let cardsNumber = (window.innerWidth = 1000 ? 4 : 6);
  for (let i = 0; i < cardsNumber; i++) {
    slider.appendChild(slider.children[Math.floor(Math.random() * i)]);
  }
  return slider;
};

const slideLeft = (e) => {
  arrowLeft.removeEventListener("click", slideLeft);
  cards.forEach((card) => {
    card.scroll({ behavior: "smooth", left: 320 });
  });

  slider.replaceWith(generateSlide());
  setTimeout(() => {
    arrowLeft.addEventListener("click", slideLeft);
  }, 1000);
};

const slideRight = () => {
  arrowRight.removeEventListener("click", slideRight);
  cards.forEach((card) => {
    card.classList.remove("slide-left");
    card.classList.add("slide-right");
  });

  slider.replaceWith(generateSlide());
  setTimeout(() => {
    arrowRight.addEventListener("click", slideRight);
  }, 1000);
};

arrowRight.addEventListener("click", slideRight);
arrowLeft.addEventListener("click", slideLeft);
// testimonial slider

var elem = document.querySelector('input[type="range"]');
const testimonialsWrapper = document.querySelector(".testimonials__card--wrapper");

function rangeValue(e) {
  if (window.innerWidth <= 1000) {
    testimonialsWrapper.scroll({ behavior: "smooth", left: 320 * e.target.value });
  } else {
    testimonialsWrapper.scroll({ behavior: "smooth", left: 265 * e.target.value });
  }
}

elem.addEventListener("input", rangeValue);

//testimonial popup

const testimonialsCards = document.querySelectorAll(".testimonials__card");

const popupModal = (index) => {
  const modalOverlay = document.createElement("div");
  modalOverlay.setAttribute("class", "modal-overlay");

  const modal = document.createElement("div");
  modal.setAttribute("class", modal);

  const closeButton = document.createElement("div");
  closeButton.setAttribute("class", "modal-close");
  closeButton.innerHTML = "X";

  closeButton.addEventListener("click", (e) => {
    modalOverlay.style.display = "none";
  });

  testimonialsCards[index].style.minHeight = "60vh";
  testimonialsCards[index].style.marginTop = "40px";

  modal.appendChild(closeButton);
  modal.appendChild(testimonialsCards[index]);

  modalOverlay.appendChild(modal);

  window.addEventListener("click", outsideClick);
  function outsideClick(e) {
    if (e.target == modalOverlay) {
      modalOverlay.style.display = "none";
    }
  }
  return modalOverlay;
};

const openPopup = (index) => {
  const modal = popupModal(index);
  modal.style.display = "block";
  testimonialsWrapper.appendChild(modal);
};
if (window.innerWidth === 640) {
  testimonialsCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      openPopup(index);
    });
  });
}
