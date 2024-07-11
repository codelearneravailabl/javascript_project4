//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  let intervalId;
  const startChangingColor = function () {
    if (!intervalId) {
      intervalId = setInterval(changeBgColor, 1000);
    }
  
    function changeBgColor() {
      document.body.style.backgroundColor = randomColor();
    }
  };
  const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };
  
  document.querySelector('#start').addEventListener('click', startChangingColor);
  
  document.querySelector('#stop').addEventListener('click', stopChangingColor);


  setInterval(()=>{
   let heading= document.querySelector("#heading")
    heading.innerHTML="hey Nidhi is here"
    console.log(heading.innerHTML)
     
  

  },30000)
  
  