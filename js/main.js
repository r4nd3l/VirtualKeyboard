// Default DevCorner JavaScript Setting
// Get the modal
var modal = document.getElementById('_myModal');

// Get the button that opens the modal
var btn = document.getElementById("_myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("_close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Canvas
var c = document.getElementById("cableCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(150, 0);
ctx.bezierCurveTo(80, 150, 500, 10, 350, 350);
ctx.strokeStyle = "#ebe9ea";
ctx.lineWidth = 8;
ctx.shadowColor = "black";
ctx.shadowBlur = 8;
ctx.stroke();

// Keyboard layout
let key_grave_accent = 192;
let key_1 = 49;
let key_2 = 50;
let key_3 = 51;
let key_4 = 52;
let key_5 = 53;
let key_6 = 54;
let key_7 = 55;
let key_8 = 56;
let key_9 = 57;
let key_0 = 48;
let key_subtract = 109;
let key_add = 107;
let key_Delete = 46;
let key_Tab = 9;
let key_Q = 81;
let key_w = 87;
let key_E = 69;
let key_R = 82;
let key_T = 84;
let key_Y = 89;
let key_U = 85;
let key_I = 73;
let key_O = 79;
let key_P = 80;
let key_suqare_left = 219;
let key_suqare_right = 221;
let key_back_slash = 220;
let key_CapsLock = 20;
let key_A = 65;
let key_S = 83;
let key_D = 68;
let key_F = 70;
let key_G = 71;
let key_H = 72;
let key_J = 74;
let key_K = 75;
let key_L = 76;
let key_semi_colon = 186;
let key_singe_quote = 222;
let key_enter = 13;
let key_Shift = 16;
let key_Z = 90;
let key_X = 88;
let key_C = 67;
let key_V = 86;
let key_B = 66;
let key_N = 78;
let key_M = 77;
let key_comma = 188;
let key_periode = 190;
let key_slash = 111;
let key_Space = 32;
let key_Cmd = 91;
let key_Alt = 18;
let key_Ctrl = 17;
let key_Fn = 93;


// keydown listener
let d;
document.addEventListener("keydown", keyboard);

function keyboard(event){
  let key = event.keyCode;
  if(key == 37 && d != "right"){
    console.log("left");
    d = "left";
  }else if(key == 38 && d != "down"){
    console.log("up");
    d = "up";
  }else if(key == 39 && d != "left"){
    console.log("right");;
    d = "right";
  }else if(key == 40 && d != "up"){
    console.log("down");
    d = "down";
  }
}











































// END
