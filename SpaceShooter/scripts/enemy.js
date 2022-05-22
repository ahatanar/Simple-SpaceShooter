
var generaterocks = setInterval(() => {
  //create rock
    var rock = document.createElement("div");
    rock.classList.add("rocks");
    
   
    //place rock in a random location
    rock.style.left = Math.floor(Math.random() * 450) + "px";
  
    board.appendChild(rock);
  }, 1000);
  
  var moverocks = setInterval(() => {
    
    var rocks = document.getElementsByClassName("rocks");
  
    if (rocks != undefined) {
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i]; 
        var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
        );
        //if rock reaches end game over
        if (rocktop >= 475) {
          
          alert("Game Over");
          rock.parentElement.removeChild(rock);
          clearInterval(moverocks);
          window.location.reload();
        }
        //move rock down
        rock.style.top = rocktop + 1 + "px";
      }
    }
  }, 10);
  