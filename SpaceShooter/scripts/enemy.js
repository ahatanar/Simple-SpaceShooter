
var generaterocks = setInterval(() => {
  //create rock
    var rock = document.createElement("div");
    rock.classList.add("rocks");
    
   
    //place rock in a random location
    rock.style.left = Math.floor(Math.random() * 450) + "px";
    board.appendChild(rock);
  //every second 
  }, 1000);
  
  var moverocks = setInterval(() => {
    
    var rocks = document.getElementsByClassName("rocks");
  //if rocks do exist
    if (rocks != undefined) {
      //putting rocks into an array
      for (var i = 0; i < rocks.length; i++) {
        var rock = rocks[i]; 
        //seeing how far rock is from the top
        var rocktop = parseInt(
        window.getComputedStyle(rock).getPropertyValue("top")
        );
        //if rock reaches end
        if (rocktop >= 475) {
          //Game is over, remove the rock and reload the page
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
  
