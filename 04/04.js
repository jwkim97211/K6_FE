document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Click");
    const but1 = document.querySelector("#but1");
 
    but1.addEventListener("click", ()=>{
        handleClick();
    })
})

const handleClick = ()=>{
    const n1= Math.floor(Math.random()*6)+1;
    const n2= Math.floor(Math.random()*6)+1;
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    img1.setAttribute("src",`/04/img/${n1}.png`);
    img2.setAttribute("src",`/04/img/${n2}.png`);

    let result;
    if(n1==n2) result="비겼습니다";
    else if (n1>n2) result="이겼습니다";
    else result="졌습니다";
    document.getElementById("msg").innerHTML=result;
    //document.querySelector("#msg").innerHTML=result;
}