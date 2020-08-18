// call HTML TAG / ID / Class
const form = document.querySelector(".js-form"),
      input = form.querySelector("input"),
      greeting = document.querySelector(".js-greetings");

// set up VARIABLE
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

// set up FUNCTION

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// set up LOAD CONDITION
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        // user is in.
        paintGreeting(currentUser);
    }
}

// set up INITIALIZE
function init() {
    loadName();
}

init();