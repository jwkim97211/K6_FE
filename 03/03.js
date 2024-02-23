//DOM tree가 완성된 후 실행
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOMContentLoaded ok");

//버튼 생성(자동으로 생성)
    const bt3 = document.createElement("button");
//버튼3이라는 이름 추가
    const buttxt = document.createTextNode("버튼3");
    bt3.appendChild(buttxt)
//버튼 추가하기
document.querySelector("#butArea2").append(bt3);
//버튼 이벤트 달기
bt3.addEventListener("click", ()=>{
    handleClick(3);
})
const bt4 = document.createElement("button"); //()자리에는 태그
    const but4txt = document.createTextNode("버튼4");
    bt4.appendChild(but4txt)
document.querySelector("#butArea2").append(bt4);
//id 값 설정
bt3.setAttribute("id","bt3");
bt4.setAttribute("id","bt4");
bt4.addEventListener("click", ()=>{
    handleClick(4);
})
});



// 함수작성1
//function handleClick(n) {
// 메세지 영역 가져오기1
// document.getElementById("msgArea").innerHTML = "안녕하세요"; 파라미터 없을 때

// 메세지 영역 가져오기2
//document.querySelector("#msgArea").innerHTML = `<h2>버튼${n}이 눌러졌습니다.</h2>`;
//document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";
//}

// 함수작성2 : 화살표함수
const handleClick = (n) => {
    let msg;
    if(n==1) msg="안녕하세요"
    else if (n==2) msg="안녕히 가세요" 
    else if (n==3) msg=`<h2>버튼${n}이 눌러졌습니다.</h2>`
    else msg=`<h2>버튼${n}이 눌러졌습니다.</h2>`;
    document.querySelector("#msgArea").innerHTML = `<h2>${msg}</h2>`;
    //document.querySelector("#msgArea").innerHTML = msg;
    
    //document.querySelector("#msgArea").innerHTML = `<h2>버튼${n}이 눌러졌습니다.</h2>`;
}
