const handleClick = () => { 
    const bts = document.querySelectorAll(".c1") ;
  
    bts.forEach((bt) => {
      const n = Math.floor(Math.random() * 6) + 1;
      bt.setAttribute("src", `/04/img/${n}.png`);
      
      console.log("click", n)
    });
   
  }