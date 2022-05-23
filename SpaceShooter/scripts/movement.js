//keys variable to store inputs
var keys = {};
//addd inputs into keys variable when a key is pressed
window.addEventListener('keydown', (e) => {
  

  keys[e.key] = true;

});
//reove inputs from keys variable when a key is unpressed
window.addEventListener('keyup', (e) => {

    keys[e.key] = false;
    
});
//check movement functions with all the neccessary checkers Up Down Left Right and Spacebar
function checkMovement(){
  //neccessary variables
  var speed = 3;
  var topx = 470 - parseInt(window.getComputedStyle(jet).getPropertyValue("top")) ;
  var left = parseInt(window.getComputedStyle(jet).getPropertyValue("left"));
  var top = parseInt(window.getComputedStyle(jet).getPropertyValue("top"));

  //simply movement Up Down Left and Right
  if (keys[' ']) 
  {
    bulletgen(left,topx);
  }

  if (keys['ArrowUp']  && top > 0) 
  {
    jet.style.top = top - speed + "px";
    
  }

  if (keys['ArrowLeft']  && left > 0) 
  {
    jet.style.left = left -speed + "px";
  }
 
  if (keys['ArrowDown']  && top < 450 ) 
  {
    jet.style.top = top + speed + "px"; 
    
  }
  
  if (keys['ArrowRight']  && left <= 460) 
  {
    jet.style.left = left + speed + "px";
  }
 

  if (keys['ArrowDown'] && keys['ArrowLeft'] && left > 0 && top < 450) 
  {
    jet.style.top = top + speed + "px";
    jet.style.left = left - speed + "px";
  }

  if (keys['ArrowUp'] && keys['ArrowLeft'] && left > 0 && top > 0) 
  {
    jet.style.top = top - speed + "px";
    jet.style.left = left - speed + "px";
  }


  if (keys['ArrowDown'] && keys['ArrowRight'] && left <= 460 && top < 450) 
  {
    jet.style.top = top + speed + "px";
    jet.style.left = left + speed + "px";
  }

  if (keys['ArrowUp'] && keys['ArrowRight'] && left <= 460 && top > 0) 
  {
    jet.style.top = top - speed + "px";
    jet.style.left = left + speed + "px";
  }


  if (keys['ArrowLeft'] && keys['ArrowRight'] && left <= 460 && left > 0) 
  {
    
    jet.style.left = left + 0 + "px";
  }
  
  
  if (keys['ArrowUp'] && keys['ArrowDown'] && top <= 450 && top > 0) 
  {
    
    jet.style.top = top + 0 + "px";
  }
  


  
  //movement and fire checking if both is being done at the same time
  if (keys['ArrowUp'] && keys[' '] && top > 0 ) 
  {
    
    jet.style.top = top - speed + "px";
    bulletgen(left,topx);
  }

  if (keys['ArrowLeft'] && keys[' '] && left > 0) 
  {
    
    jet.style.left = left - speed + "px";
    bulletgen(left,topx);
  }
 
  if (keys['ArrowDown'] && keys[' '] && top < 450 ) 
  {
   
    jet.style.top = top + speed + "px"; 
    bulletgen(left,topx);
  }
  
  if (keys['ArrowRight'] && keys[' '] && left <= 460) 
  {
    
    jet.style.left = left + speed + "px";
    bulletgen(left,topx);
  }
 

  if (keys['ArrowDown'] && keys['ArrowLeft'] && keys[' ']  && left > 0 && top < 450) 
  {
    jet.style.top = top + speed + "px";
    jet.style.left = left - speed + "px";
    bulletgen(left,topx);
  }

  if (keys['ArrowUp'] && keys['ArrowLeft']  && keys[' '] && left > 0 && top > 0) 
  {
    
   
    jet.style.top = top - speed + "px";
    jet.style.left = left - speed + "px";
    bbulletgen(left,topx);
  }


  if (keys['ArrowDown'] && keys['ArrowRight'] && keys[' '] && left <= 0 && top < 450) 
  {
    
    jet.style.top = top + speed + "px";
    jet.style.left = left - speed + "px";
    bulletgen(left,topx);
  }

  if (keys['ArrowUp'] && keys['ArrowRight'] && keys[' '] && left <= 460 && top > 0) 
  {
   
    jet.style.top = top - speed + "px";
    jet.style.left = left + speed + "px";
    bulletgen(left,topx);
  }


  if (keys['ArrowLeft'] && keys['ArrowRight'] && keys[' '] && left <= 460 && left > 0) 
  {
    
    jet.style.left = left + 0 + "px";
    bulletgen(left,topx);;
  }
  
  
  if (keys['ArrowUp'] && keys['ArrowDown'] && keys[' '] && top <= 450 && top > 0) 
  {
    
    jet.style.left = left + 0 + "px";
    bulletgen(left,topx);;
  }
}



//call the checkmovement every 10 seconds for smooth transitions
setInterval(checkMovement,10);
