const textArray = [
    "Welcome to my portfolio!",
    "I'm passionate about...",
    "Exploring new technologies.",
    "Building innovative solutions.",
    "Creating a positive impact.",
    "Let's connect and collaborate!"
  ];
  
  const typerText = document.getElementById('typer-text');
  let index = 0;
  
  function typeText() {
    typerText.textContent = textArray[index];
    index = (index + 1) % textArray.length;
  }
  
  setInterval(typeText, 1000); // Adjust the interval as needed


  var typed=new Typed(".text",{
    Strings:['programmer','frontend developer(React)','full stack developer'],
    typespeed:400,
    backspeed:400,
    backdelay:4000,
    loop:true,
   

  });