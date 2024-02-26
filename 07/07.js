const handleChange = (s1,s2,lb1,lb2)=> {
    if(s1.value=="℃") {
        s2.value = "℉";
        lb1.innerHTML="℃";
        lb2.innerHTML="℉";
    }
    else  {
        s2.value = "℃" ;
        lb1.innerHTML="℉";
        lb2.innerHTML="℃";
}

}

document.addEventListener("DOMContentLoaded",()=> {
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");

    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const labels = document.querySelectorAll("label")
    
    sel1.addEventListener("change", ()=>{
        console.log(sel1.value);
        handleChange(sel1,sel2, labels[0],labels[1]);
    });

    sel2.addEventListener("change", ()=>{
        console.log(sel2.value);
        handleChange(sel2,sel1,labels[1],labels[0]);
    });











});