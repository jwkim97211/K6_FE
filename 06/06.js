const handleClick = (n) => {
    const img1 = document.querySelector("#img1");
    const img2 = document.querySelector("#img2");
    const n1 = Math.floor(Math.random() * 6) + 1;
    img1.setAttribute("src", `/04/img/${n1}.png`);
    img2.setAttribute("src", `/04/img/${n}.png`);

    let result;
    if (n1 == n) result = "같음";
    else result = "다름";
    document.getElementById("msg").innerHTML = result;
}
