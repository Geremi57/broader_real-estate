// const checkString = function(string){
//   if(typeof string !== String){

//   }
// }

const nameInput = document.querySelector(".name");

const passInput = document.querySelector("#pass");

const confirmPass = document.querySelector("#confirm");

const myNumb = document.querySelector("#mobile");

const emailInput = document.querySelector(".email");

const numbText = document.querySelector(".valid");

const wrongName = document.querySelector(".wrongName");

const wrongEmail = document.querySelector(".emailText");

// const changeType = checkType;
// console.log(checkType);

// console.log(changeType);
// const test = prompt("nada");

// console.log(typeof test);

const objectTest = {
  name: "jeremy",
  age: "18yrs",
  location: {
    sub: "namulungu",
    county: "kakamega",
  },
  height: "6ft",
};

const numb = 8989;

// console.log(typeof numb);

// console.log(objectTest.location.sub);

//function to work when entering mobile number
const displayText = function () {
  numbText.classList.remove("hidden");
};

const hideText = function () {
  numbText.classList.add("hidden");
};

//function to work when the email was not entered
const displayEmailError = function () {
  wrongEmail.classList.remove("hidden");
};

const hideEmailError = function () {
  wrongEmail.classList.add("hidden");
};

//function to work when confirming the password
const confPassWord = function (conf) {
  document.querySelector(".confPass").textContent = conf;
};

const styleConfFontPass = function (styleConf) {
  document.querySelector(".confPass").style.fontSize = styleConf;
};

const enterPass = function (password) {
  document.querySelector(".entPass").textContent = password;
};

const styleEntFontPass = function (styleEnt) {
  document.querySelector(".entPass").style.fontSize = styleEnt;
};

document.querySelector(".start").addEventListener("click", function () {
  const checkType = nameInput.firstName.value;

  const checkLast = nameInput.lastName.value;
  // console.log(checkType);
  let kolo = "adasncjan0";
  let numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  console.log(...(kolo.includes(numb) ? "wooza" : "zaee mzee"));
  // console.log(...(numbs.includes(9) ? "wooza" : "zaee mzee"));
  // console.log(...(numbs.includes(2) && console.log("i think i luv you")));

  const checkInput = function (entry, input) {
    let paramtr = entry + input;
    const wroInp = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    const [...done] = wroInp;
    for (const inp of done) {
      console.log(inp);
      if (paramtr.includes(...inp)) {
        wrongName.classList.remove("hidden");
        console.log("gotchaaa");
        break;
      } else {
        wrongName.classList.add("hidden");
        console.log("dear lort");
      }
      //  paramtr.includes(!inp) &&

      // console.log(done);
      // paramtr.includes(inp)
      // ? wrongName.classList.remove("hidden")
    }
    // for (let i = 0; i < numbs.length; i++) {
    //   console.log(paramtr);
    //   paramtr.includes(numbs[1] || numbs[2] || numbs[3] || numbs[4]) &&
    //     console.log("inaweza");
    //   console.log(...numbs);
    //   paramtr.includes(...numbs)
    //     ? wrongName.classList.remove("hidden")
    //     : wrongName.classList.add("hidden");

    if (entry === "" || input === "") {
      console.log("!works");
      wrongName.classList.remove("hidden");
    }
    // if (paramtr.includes(...numbs)) {
    //   wrongName.classList.remove("hidden");
    // } else if (paramtr.includes(...numbs)) {
    //   wrongName.classList.add("hidden");
    //   console.log("bullshiiiet");
    // }
    // if (entry === true && input === true) {
    //   console.log("shieeeet");
    //   if (paramtr.includes(i)) {
    //     console.log("motherfucker");
    //     wrongName.classList.remove("hidden");
    //   } else if (paramtr.includes(i) === false) {
    //     console.log("not");
    //     wrongName.classList.add("hidden");
    //   }
    // } else if (!paramtr.includes(i)) {
    //   wrongName.classList.add("hidden");
    // }
  };

  checkInput(checkType, checkLast);

  const email = emailInput.mail.value;

  if (!email.includes("@")) {
    displayEmailError();
  } else if (email.includes("@")) {
    hideEmailError();
  }

  // if(){

  // }

  // checkInput(checkType);

  if (passInput.value === "" || confirmPass.value === "") {
    document.querySelector(".entPass").textContent = "Enter a strong password";
    document.querySelector(".entPass").style.color = "red";
    document.querySelector(".entPass").style.fontSize = "15px";
    document.querySelector(".entPass").style.fontWeight = "bold";
  } else {
    document.querySelector(".entPass").textContent = "Enter your password";
    document.querySelector(".entPass").style.fontSize = "12px";
    document.querySelector(".entPass").style.color = "black";

    if (
      passInput.value === confirmPass.value &&
      passInput.value.length < 7 &&
      passInput.value.length > 1
    ) {
      styleConfFontPass("11px");

      enterPass("⛔must contain atleast 8 characters");
      styleEntFontPass("15px");
      document.querySelector(".entPass").style.fontWeight = "bold";
      confPassWord("Confirm your password");
    } else if (
      passInput.value !== confirmPass &&
      passInput.value.length < 7 &&
      passInput.value.length > 1
    ) {
      styleConfFontPass("12px");
      document.querySelector(".confPass").style.fontWeight = "5px";

      enterPass("⛔ must contain atleast 8 characters");
      styleEntFontPass("15px");
      document.querySelector(".entPass").style.fontWeight = "bold";
      confPassWord("Confirm your password");
    } else if (
      passInput.value !== confirmPass.value &&
      passInput.value.length > 7
    ) {
      styleConfFontPass("15px");
      styleEntFontPass("12px");
      document.querySelector(".entPass").style.fontWeight = "5px";
      document.querySelector(".confPass").style.fontWeight = "bold";
      enterPass("Enter your password");
      confPassWord("⛔ Passwords do not match");
    } else if (
      passInput.value === confirmPass.value &&
      passInput.value.length > 7
    ) {
      styleEntFontPass("12px");
      document.querySelector(".entPass").style.fontWeight = "5px";
      // document.querySelector(".confPass").style.fontWeight = "bold";
      enterPass("Enter your password");
      confPassWord("Confirm your password");
    }
  }
  const checkNumb = /^[a-zA-Z]+$/;

  // const inValid = ['0','1','2','3','4','5','6','7','8','9'];
  // const [...desNumbs] = validNumbs;
  // const mobileInp = myNumb.value;
  // for(const valid of desNumbs){
  //   console.log(valid);
  //   if(mobileInp !== valid) {
  //     displayText();
  //     console.log('no numbers');
  //   }
  //   else if(mobileInp === valid){
  //     hideText();
  //     console.log('yes numbers');
  //   }
  // }

  console.log(checkNumb);

  if (myNumb.value.length !== 10) {
    if (!myNumb.value.match(checkNumb)) {
      displayText();
      console.log("maaahn");
      myNumb.value = "";
    } else if (myNumb.value.match(checkNumb)) {
      displayText();
      console.log("whaat! ");
      myNumb.value = "";
    }
  } else if (myNumb.value.length === 10) {
    if (myNumb.value.match(checkNumb)) {
      myNumb.value = "";
      displayText();
      console.log("nooo");
    } else if (!myNumb.value.match(checkNumb)) {
      for (i = 97; i <= 122; i++) {
        const letters = String.fromCharCode(i);
        console.log(letters);
        if (myNumb.value.includes(letters)) {
          console.log("gotchaa!");
          displayText();
          myNumb.value = "";
          break;
        } else if (myNumb.value.includes(!letters)) {
          console.log("doesnt have letters");
          hideText();
        }
      }
    }
  }
});
let currYear = new Date().getFullYear();
document.querySelector(".year").textContent = currYear;
