function setup() {
    createCanvas(600,600);
  background("black"); 
  } 
  
  
  function draw() { 
    stroke("gold")
    fill("white")
    
    console.log(mouseIsPressed);
    if (mouseIsPressed)
      
   circle(mouseX,mouseY,20,35)
    
  }