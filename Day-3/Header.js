let buttonRight = document.getElementById('slideright');
let buttonLeft = document.getElementById('slideleft');

    buttonRight.onclick = function () {
      document.getElementById('opinionbox').scrollLeft += 170;
    };
    buttonLeft.onclick = function () {
      document.getElementById('opinionbox').scrollLeft -= 170;
    };


let leftbutton = document.getElementById('left');
let rightbutton = document.getElementById('right');

    rightbutton.onclick = function(){
        document.getElementById("vscontent").scrollLeft+=150;
    };
    leftbutton.onclick = function(){
        document.getElementById("vscontent").scrollLeft-=150;
    };