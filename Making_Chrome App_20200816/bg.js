const body = document.querySelector("body");

const IMG_NUMBER = 4;

function handleImgLoader(){
    console.log("completed image loading")
}

function paintImage(imgNumber){
    const img = new Image();  // image Object 생성, 쉽게 얘기하면, html에서 <img> 태그를 생성한 것이다. 태그를 생성한다는 뜻은, object (객체)를 만든다는 뜻이다. 이렇게 객체를 만드는 것은 태그를 만드는 것과 같다고 생각해도 무방하다.
    img.src = `/images/${imgNumber + 1}.jpg`;  // 경로 추가
    img.classList.add("bgImage");  //  객체에 Class를 추가했음. class가 Array 타입으로 되어 있는 이유는? 생각해보면 답이 나온다.  ./css파일보면, visual 요소를 처리한 것을 볼 수 있음.  https://mzl.la/3hjX5P0
    console.log(img.classList);
    body.appendChild(img); //image를 body의 끝부분으로 삽입

}

function getRandom(){  // 
    const number = Math.floor(Math.random() * IMG_NUMBER);  // Math.floor 같거나 적은 수 반환하는 함수, Math.random은 0~1 사이값 반환    https://mzl.la/2Elcn7R
    return number;
}


function init(){   // 초기화 
    const randomNumber = getRandom();
    paintImage(randomNumber);
}

init();
