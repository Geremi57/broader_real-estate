import { assets } from "./assets.js";

console.log(
  `${assets[0].image} luxury ${assets[0].type} in ${assets[0].location}`
);

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", this.window.scrollY > 10);
});

let menu = document.querySelector("#menu-icon");

let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  console.log(menu.classList);
  navbar.classList.toggle("open");
};

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});
const modal = document.getElementById("propModal");
const closeBtn = document.querySelector(".close");
const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const dropProps = document.querySelector(".drop");
const dropContent = document.querySelector(".dropdown-content");
const modalContent = document.querySelector("#propModal .modal-content");
const btnOpenLogin = document.querySelector(".h-btn3");
const loginModal = document.querySelector("#loginModal");
const loginClose = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

dropProps.addEventListener("click", function () {
  dropContent.classList.toggle("showDrop");
});

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

document.querySelectorAll(".dropdown-content a").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const type = item.dataset.type;
    console.log(type);

    if (type === "land") {
      modalContent.style.backgroundImage =
        'url("./image/aerial-view-small-village-country-roadside.jpg")';
    } else if (type === "apartment") {
      modalContent.style.backgroundImage =
        'url("./image/modern-residential-building.jpg")';
    } else if (type === "mortgage") {
      modalContent.style.backgroundImage =
        'url("./image/house-isolated-field.jpg")';
    }

    modalContent.style.backgroundSize = "cover";
    modalContent.style.backgroundPosition = "center";
    modalContent.style.backgroundRepeat = "no-repeat";
    modalTitle.textContent = `Available ${
      type.charAt(0).toUpperCase() + type.slice(1)
    }s`;

    modalBody.innerHTML = "";

    const allSlides = document.querySelectorAll(".swiper-slide");

    allSlides.forEach((slide) => {
      if (slide.dataset.type === type) {
        const clone = slide.cloneNode(true);
        clone.classList.remove("swiper-slide");
        modalBody.appendChild(clone);
      }
    });

    if (modalBody.innerHTML === "") {
      modalBody.innerHTML = `<p>No ${type}s available right now.</p>`;
    }

    modal.classList.remove("hidden");
  });
});

const operationsTab = document.querySelector(".operations__tab-container");
const operations = document.querySelector(".operations");

console.log(operations);

operationsTab.querySelectorAll(".operations__tab").forEach((element) => {
  element.addEventListener("click", () => {
    let currTab = element.dataset.tab;
    if (currTab === "1") {
      operations.style.backgroundImage =
        'url("./image/mortgage-house-loan-website-login-graphic-concept.jpg")';
    } else if (currTab === "2") {
      operations.style.backgroundImage =
        'url("./image/man-holding-house-sale-icon.jpg")';
    } else if (currTab === "3") {
      operations.style.backgroundImage =
        'url("./image/man-holding-house-sale-icon.jpg")';
    }
    console.log("yaaaas", element.dataset.tab);
    // if (element.dataset === 3) {

    operations.style.backgroundImage.opacity = "0.5";

    operations.style.backgroundSize = "cover";
    operations.style.backgroundPosition = "center";
    operations.style.backgroundRepeat = "no-repeat";
    // }
  });
});

// operationsTab.querySelectorAll(".operations__tab").forEach(
//   el.addEventListener("click", () => {
//     console.log(el.dataset);
//       console.log(el);
//     }
//   })
// );

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target != dropProps) dropContent.classList.remove("showDrop");
  console.log(dropContent.classList);
});

// const openLoginModal = function () {
//   loginModal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// const closeLoginModal = function () {
//   loginModal.classList.add("hidden");
//   overlay.classList.add("hidden");
//   console.log(overlay.classList);
// };

// console.log(btnOpenLogin);

// btnOpenLogin.addEventListener("click", function (e) {
//   e.preventDefault();
//   openLoginModal();
// });

loginClose.addEventListener("click", closeLoginModal);

overlay.addEventListener("click", closeLoginModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !loginModal.classList.contains("hidden")) {
    closeLoginModal();
  }
});

const propModalClose = document.querySelector(".close");

const btnOpenProp = document.querySelector(".open-prop");

if (btnOpenProp) {
  btnOpenProp.addEventListener("click", function (e) {
    e.preventDefault();
    propModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

if (propModalClose) {
  propModalClose.addEventListener("click", function () {
    propModal.classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

overlay.addEventListener("click", function () {
  propModal.classList.add("hidden");
  loginModal.classList.add("hidden"); // in case login is open
  overlay.classList.add("hidden");
});

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 30,
//   centeredSlides: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

let scores = [
  { name: "Wasan", duration: 93 },
  { name: "Muntaser", duration: 122 },
  { name: "Noura", duration: 235 },
  { name: "Maitha", duration: 927 },
];

function ultimateScoreBoard(arr, count) {
  let final = "";
  for (let i = 0; i < count; i++) {
    let min = `${Math.floor(arr[i].duration / 60)}`;
    let rem = `${arr[i].duration % 60}`;
    let fin = `${min}:${rem}`;
    final += `#0${i + 1} - ${min.length == 1 ? "0" : ""}${min}:${
      rem.length == 1 ? "0" : ""
    }${rem}, ${arr[i].name}\n`;
  }
  return final;
}

let Score = ultimateScoreBoard(scores, 3);
console.log(Score);
