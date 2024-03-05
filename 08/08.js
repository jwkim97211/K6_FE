document.addEventListener("DOMContentLoaded", ()=> {
    let n;
    let flag = false;
    const img = document.querySelector("section img");
    const bts = document.querySelector("section button");
    //const bts = document.getElementById("button");
    const inp = document.querySelector("section input");
    const msg = document.querySelector("#msg");
    inp.focus();

    bts.addEventListener("click", ()=> {                            //html에서 form태그 설정 시 bts.addEventListener("click", (e)=> { 
        //한번 끝날 때 까지 숫자가 변하면 안됨                          e.preventDefault();
        if(!flag) { //flag==false
            n= Math.floor(Math.random() * 100) + 1;
            console.log("n =",n);
            flag=true;
            inp.style.display="inline"; //input이 다시 나타남
            bts.innerHTML="확인";
            inp.value="";
            img.setAttribute("src", `/08/img/what.png`);
        }
        
        //input box내용 가져오기
        //input에서 값을 가져오기 = value
        if(inp.value=='') {
        //alert("숫자를 입력하세요.");
        msg.innerHTML="<span>숫자를 입력하세요</sapn>"
        inp.focus();
        return;   //밑으로 내려갈 필요가 없기 때문에 return사용
        }

        if(n<inp.value) {
            img.setAttribute("src", `/08/img/down.png`);
            msg.innerHTML="<span>더 작은 수를 입력하세요.</sapn>"
        }
        else if (n>inp.value) {
            img.setAttribute("src", `/08/img/up.png`);
            msg.innerHTML="<span>더 큰 수를 입력하세요.</sapn>"
        }
        else {
            img.setAttribute("src", `/08/img/good.png`);
            msg.innerHTML="<span>정답입니다.</sapn>"
            inp.style.display="none";    //맞춘 경우 input이 사라짐
            bts.innerHTML="재시작";
            flag=false;
        }
    });
    //값 비교할 때 ==가 아닌 ===를 사용하면  타입까지 확인함
    //input에는 숫자를 입력해도 txt로 받아드림
    //parseInt사용
});