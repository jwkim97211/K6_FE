document.addEventListener("DOMContentLoaded", ()=> {
    const bts = document.querySelector("section button");
    const inps = document.querySelectorAll("input");
    
    
    bts.addEventListener("click", ()=> {   
        let arr=[];                    
        while(arr.length<8) {
            let n= Math.floor(Math.random() * 45) + 1;
            if(!arr.includes(n)) {
                arr.push(n)
            }
        }
        for(let i=0; i<8;i++) {
            inps[i].setAttribute("value", arr[i]);
        }
    });
});