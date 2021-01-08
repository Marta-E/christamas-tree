var creadas=0;
var eliminadas=0;


function crearMierda(){
  
    var div = document.createElement("div");
    div.className = "form";
    document.getElementById("container").appendChild(div);
    setForm(creadas);
    creadas++;
    document.getElementById('counterA').innerHTML = creadas;
   
}
function setForm(i) {
    var algo = false;
    var top;
    var left;


    while (algo == false) {
        top = Math.random() * 350;
        left = Math.random() * 350;
        if (isInside(50, 350, 210, 10, 350, 350, left, top)) {

            algo = true;
        }
    }
    document.getElementsByClassName("form")[i].style.top ="1"+ "px";

    $(document.getElementsByClassName("form")[i]).animate({
     
        top:  top + "px"  },
        1000, function() {
        //some stuff here.
    });
    document.getElementsByClassName("form")[i].style.left= left + "px";    

    
    var color = randomColor();  
    document.getElementsByClassName("form")[i].style.borderRadius = "50%";
    document.getElementsByClassName("form")[i].style.width = "20px";
    document.getElementsByClassName("form")[i].style.height = "20px";
    document.getElementsByClassName("form")[i].style.backgroundColor = color;
   
    
}

function borrarMierdas(){
    $(document).ready(function() {
        $( "#arbol" ).effect( "shake");
      });
     

      $(".form").animate({
     
        top:  +400 + "px"  },
        1000, function() {
        //some stuff here.
    });
   
    $( ".form" ).toggle( "puff", function(){
        $("div").remove(".form");
    });
       eliminadas+=creadas;
    document.getElementById('counterB').innerHTML = eliminadas;
creadas=0;
document.getElementById('counterA').innerHTML = creadas;

 
}


function randomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.round(Math.random() * 15)];
    }
    return color;
}



function area(x1, y1, x2,
    y2, x3, y3) {
    var bla = (x1 * (y2 - y3) +
        x2 * (y3 - y1) +
        x3 * (y1 - y2));

    return Math.abs((bla) / 2.0);
}

function isInside(x1, y1, x2, y2,
    x3, y3, x, y) {

    /* Calculate area of triangle ABC */
    var A = area(x1, y1, x2, y2, x3, y3);

    /* Calculate area of triangle PBC */
    var A1 = area(x, y, x2, y2, x3, y3);

    /* Calculate area of triangle PAC */
    var A2 = area(x1, y1, x, y, x3, y3);

    /* Calculate area of triangle PAB */
    var A3 = area(x1, y1, x2, y2, x, y);

    /* Check if sum of A1, A2 
    and A3 is same as A */
    if (A == A1 + A2 + A3) {
        return true;
    }

} 
function myMove(top, eleme) {
    var elem =   eleme;  
    var pos = 0;
    var num= top;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos ==( Math.random() * 350)) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
    
      }
    }
  }
  
 