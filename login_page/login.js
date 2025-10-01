const emailForm = document.querySelector("#mail");
const passWordInput = document.querySelector("#password");

const wrongMail = document.querySelector(".wrongMail");

const wrongPassword = document.querySelector(".wrongPass");
const year = document.querySelector(".year");

const btnLogin = document.querySelector(".login");

const incorrectEmailOrPassword = document.querySelector(
  ".incorrectemailorpassword"
);

const modalTitle = document.getElementById("modal-title");
const modalBody = document.getElementById("modal-body");
const dropProps = document.querySelector(".drop");
const dropContent = document.querySelector(".dropdown-content");
const modalContent = document.querySelector("#propModal .modal-content");
const btnOpenLogin = document.querySelector(".h-btn3");
const loginModal = document.querySelector("#loginModal");
const loginClose = document.querySelector(".btn--close-modal");
const overlay = document.querySelector(".overlay");

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

let emailArray = [];

const account1 = {
  email: "geremiwanga57@gmail.com",
  password: "aimForTheStars",
};
const account2 = {
  email: "wangageremi725@gmail.com",
  password: "timeInAbottle",
};

const account3 = {
  email: "grizzyplayer58@gmail.com",
  password: "preserveToObserve",
};

let accountEmail = [];
const accounts = [account1, account2, account3];

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  //checking the email input
  let html = "<h4>Incorrect username or password</h4>";
  // html.style.color = "red";
  accounts.forEach((curr, i) => {
    accountEmail.push(emailForm);
    if (accountEmail.includes(curr.email)) {
      // curr.password === passWordInput.value
      console.log("it fucking works");
      console.log(i);
      console.log(curr.email);
      console.log(accountEmail[i]);
    } else {
      // emailForm.insertAdjacentHTML("beforebegin", html);
      incorrectEmailOrPassword.classList.remove("hidden");
      console.log("it dont work");
    }
  });
  console.log(this);
  emailArray.push(emailForm.value.split(""));
  console.log(emailArray.flat());
  emailArray.flat().includes("@" && "c" && "o" && "m" && ".")
    ? // emailArray.flat().includes(".")
      wrongMail.classList.add("hidden")
    : wrongMail.classList.remove("hidden");
  // accounts.email = emailArray.flat(2);
  // console.log(accounts);
  html = " ";
  emailArray = [];
  console.log(accountEmail);
  accountEmail = [];

  //checking password
});
let date = new Date();
console.log(date.getFullYear());
year.textContent = date.getFullYear();

console.log(year.textContent);

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

// window.addEventListener("click", (e) => {
//   if (e.target === modal) modal.classList.add("hidden");
// });

window.addEventListener("click", (e) => {
  if (e.target != dropProps) dropContent.classList.remove("showDrop");
  console.log(dropContent.classList);
});

// overlay.addEventListener("click", function () {
//   propModal.classList.add("hidden");
//   loginModal.classList.add("hidden"); // in case login is open
//   overlay.classList.add("hidden");
// });
