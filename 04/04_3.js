//버튼에 이벤트 달기
//html button태그에 onclick="handleClick1()
// const handleClick1 = () => {
//     const random = Math.floor(Math.random()*6+1);
//     const img = document.querySelector("#img1");
//     img.setAttribute("src",`/04/img/${random}.png`);


//dom tree 활용
//html button태그에 id="but1" 부여
document.addEventListener("DOMContentLoaded", ()=>{
    //버튼 가져오기
    const but1 = document.querySelector("#but1");
    const but2 = document.querySelector("#but1");
    const but3 = document.querySelector("#but1");
    //const but = document.querySelector("#div > button");도 가능
    //const but = document.querySelector("button");

    //버튼 이벤트 달기
    but1.addEventListener("click", ()=>{
        handleClick();
    })
    but2.addEventListener("click", ()=>{
        handleClick();
    })
    but3.addEventListener("click", ()=>{
        handleClick();
    })
    })

const handleClick = ()=>{
    const n1= Math.floor(Math.random()*6)+1;
    console.log("click",5) //개발자모드(console)에서 클릭을 누를 때 마다 1~6출력
    const img1 = document.querySelector("#img1"); //class가 img인 것을 가져온다
    img1.setAttribute("src",`/04/img/${n1}.png`);
    const n2= Math.floor(Math.random()*6)+1;
    console.log("click",5)
    const img2 = document.querySelector("#img2");
    img2.setAttribute("src",`/04/img/${n2}.png`);
    const n3= Math.floor(Math.random()*6)+1;
    console.log("click",5)
    const img3 = document.querySelector("#img3");
    img3.setAttribute("src",`/04/img/${n3}.png`);
}