//Login and save the user's name in the localStorage.

//variables
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//set variables for repetitive words to prevent spelling mistakes.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

//functions
function loginSubmitHandler(e) {
  e.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greetingText(username);
}

const greetingText = (username) => {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
};

//events and call function
loginForm.addEventListener("submit", loginSubmitHandler);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", loginSubmitHandler);
} else {
  greetingText(savedUsername);
}

//clock
//to-do list
//favorite links
