import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import { renderUserTable } from "./renderUsers.js";

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// document.addEventListener("DOMContentLoaded", async (event) => {
//   const response = await fetch("http://localhost:3000/users");
//   const users = await response.json();
//   renderUserTable(JSON.parse(users));
// });
const userInput = document.getElementById("create_user");
console.log(userInput);
userInput.addEventListener("click", async () => {
  console.log("HERE");
  await stworz();
});

async function stworz() {
  var log = document.querySelector("#login").value;
  var has = document.querySelector("#haslo").value;
  var phas = document.querySelector("#phaslo").value;
  if (phas == has) {
    // const myLog = { login: log, haslo: has };

    document.querySelector("#wstaw").innerHTML = "Twoj login to " + log;
    const response = await fetch("http://localhost:3000/users/createUser", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        log,
        has,
      }),
      mode: "no-cors",
    });
    // const respone = await fetch("http://localhost:3000/users/userCreator", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(log),
    //   mode: "no-cors",
    // });
  } else {
    document.querySelector("#wstaw").innerHTML = "POWTÓRZ HASŁO!!!";
  }
}
const main_page = document.querySelector("#log-in");
main_page.addEventListener("click", async (event) => {
  console.log("working");
  const userResponse = await fetch("http://localhost:3000/users/logins");
  const myUsers = await userResponse.json();
  await logging(JSON.parse(myUsers));
  // console.log(myUsers);
});

async function logging(myUsers) {
  var log1 = document.querySelector("#login1").value;
  var has1 = document.querySelector("#haslo1").value;
  for (const myUser of myUsers) {
    console.log(myUser);
    if ((myUser.username = log1)) {
      if ((myUser.password = has1)) {
        document.querySelector("#wstaw2").innerHTML =
          "Witam uzytkowniku " + log1;
      }
    } else {
      document.querySelector("#wstaw2").innerHTML =
        "Nie poprawne hasło lub nazwa użytkownika";
    }
  }
}
const test = document.querySelector("#spr");
test.addEventListener("click", async (event) => {
  console.log("working");
  const userTest = await fetch("http://localhost:3000/users/logins2");
  const myTest = await userTest.json();
  // await logging(JSON.parse(myTest));
  console.log(myTest);
  // for (const myTester of myTest) {
  //   console.log(myTester);
  // }
});
