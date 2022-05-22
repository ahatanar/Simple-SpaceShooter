//function for generating bullet
function bulletgen(left,top){
  //checks if timer is done
  if (fire == false)
      {
        //creates bullet
        var bullet = document.createElement("div");
      bullet.classList.add("bullets");
      board.appendChild(bullet);
      bullet.style.bottom =  top + 'px';
      
      var movebullet = setInterval(() => {
        var rocks = document.getElementsByClassName("rocks");
        
        for (var i = 0; i < rocks.length; i++) {
          var rock = rocks[i];
          if (rock != undefined) {
            //create rectangles around objects
            var rockbound = rock.getBoundingClientRect();
            var bulletbound = bullet.getBoundingClientRect();
              var jetbound = jet.getBoundingClientRect();
            

            //check if bullet collided with enemyspace ship
            if (
              bulletbound.x < rockbound.x + rockbound.width &&
              bulletbound.x + bulletbound.width > rockbound.x &&
              bulletbound.y < rockbound.y + rockbound.height &&
              bulletbound.y + bulletbound.height > rockbound.y
            ) {
              //remove spaceship remove bullet increase points by 1
              rock.parentElement.removeChild(rock); 
              board.removeChild(bullet);
              document.getElementById("points").innerHTML =
                parseInt(document.getElementById("points").innerHTML) + 1;
            }
            //check if jet collided with enemy spaceship
            if (
              jetbound.x < rockbound.x + rockbound.width &&
              jetbound.x + jetbound.width > rockbound.x &&
              jetbound.y < rockbound.y + rockbound.height &&
              jetbound.y + jetbound.height > rockbound.y
            ) {

              //game is over reload
              alert("Game Over");
              rock.parentElement.removeChild(rock);
              window.location.reload();
            }
          }
        }
        //check where the bullet is
        var bulletbottom = parseInt(
          window.getComputedStyle(bullet).getPropertyValue("bottom")
        );
          //remove bullet if it reaches the end of the board
        if (bulletbottom >= 460) {
          board.removeChild(bullet);
        }
        //moving bullet left centers in bulletbottom allows it to move
        bullet.style.left = left + 10 + "px"; 
        bullet.style.bottom =  bulletbottom + 3 + "px";
      },1);
      //set fire back tot rue
      fire = true;  
    
      }
   
  
  }