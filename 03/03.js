// 함수작성1
//function handleClick(n) {
// 메세지 영역 가져오기1
// document.getElementById("msgArea").innerHTML = "안녕하세요";

// 메세지 영역 가져오기2
//document.querySelector("#msgArea").innerHTML = `<h2>버튼${n}이 눌러졌습니다.</h2>`;
//document.querySelector("#msgArea").innerHTML = "<h2>버튼" + n + "이 눌러졌습니다.</h2>";
//}

// 함수작성2 : 화살표함수
const handleClick = (n) => {
    document.querySelector("#msgArea").innerHTML = `<h2>버튼${n}이 눌러졌습니다.</h2>`;
}
