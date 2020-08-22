// call HTML TAG / ID / Class
const form = document.querySelector(".js-form"), // 이름 묻는 창
      input = form.querySelector("input"), // 이름
      greeting = document.querySelector(".js-greetings");  //Hello name 부분

// set up VARIABLE
const USER_LS = "currentUser",
      SHOWING_CN = "showing";

// set up FUNCTION

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();  // 기능을 실행시키지 않는다.  https://bit.ly/2QgmKfE
    const currentValue = input.value; // To do 입력 값.
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN); //
    form.addEventListener("submit", handleSubmit); // form 에 submit이 실행 되었을 때, function 실행
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

// set up LOAD CONDITION
function loadName() {
    const currentUser = localStorage.getItem(USER_LS);  // localstorage에 currentUser 호출
    if(currentUser === null){  // 없으면
        askForName();  //이름 입력창 띄우기
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