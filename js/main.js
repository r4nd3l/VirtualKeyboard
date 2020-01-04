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
document.addEventListener("keydown", keyboard_start);
function keyboard_start(event){
  let key = event.keyCode;
  let button = document.getElementsByClassName("key");

  if(key == key_grave_accent ){
    console.log(key_grave_accent );
    button[0].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_1){
    console.log(key_1);
    button[1].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_2){
    console.log(key_2);
    button[2].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_3){
    console.log(key_3);
    button[3].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_4){
    console.log(key_4);
    button[4].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_5){
    console.log(key_5);
    button[5].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_6){
    console.log(key_6);
    button[6].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_7){
    console.log(key_7);
    button[7].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_8){
    console.log(key_8);
    button[8].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_9){
    console.log(key_9);
    button[9].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_0){
    console.log(key_0);
    button[10].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_subtract ){
    console.log(key_subtract );
    button[11].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_add ){
    console.log(key_add );
    button[12].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Delete){
    console.log(key_Delete);
    button[13].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Tab){
    console.log(key_Tab);
    button[14].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Q){
    console.log(key_Q);
    button[15].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_w){
    console.log(key_w);
    button[16].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_E){
    console.log(key_E);
    button[17].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_R){
    console.log(key_R);
    button[18].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_T){
    console.log(key_T);
    button[19].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Y){
    console.log(key_Y);
    button[20].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_U){
    console.log(key_U);
    button[21].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_I){
    console.log(key_I);
    button[22].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_O){
    console.log(key_O);
    button[23].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_P){
    console.log(key_P);
    button[24].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_suqare_left ){
    console.log(key_suqare_left );
    button[25].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_suqare_right ){
    console.log(key_suqare_right );
    button[26].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_back_slash ){
    console.log(key_back_slash );
    button[27].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_CapsLock){
    console.log(key_CapsLock);
    button[28].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_A){
    console.log(key_A);
    button[29].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_S){
    console.log(key_S);
    button[30].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_D){
    console.log(key_D);
    button[31].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_F){
    console.log(key_F);
    button[32].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_G){
    console.log(key_G);
    button[33].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_H){
    console.log(key_H);
    button[34].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_J){
    console.log(key_J);
    button[35].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_K){
    console.log(key_K);
    button[36].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_L){
    console.log(key_L);
    button[37].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_semi_colon ){
    console.log(key_semi_colon );
    button[38].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_singe_quote ){
    console.log(key_singe_quote );
    button[39].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_enter){
    console.log(key_enter);
    button[40].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Shift){
    console.log(key_Shift);
    button[41].style.border = "1px solid var(--dw-)";
    button[52].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Z){
    console.log(key_Z);
    button[42].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_X){
    console.log(key_X);
    button[43].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_C){
    console.log(key_C);
    button[44].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_V){
    console.log(key_V);
    button[45].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_B){
    console.log(key_B);
    button[46].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_N){
    console.log(key_N);
    button[47].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_M){
    console.log(key_M);
    button[48].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_comma ){
    console.log(key_comma );
    button[49].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_periode ){
    console.log(key_periode );
    button[50].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_slash ){
    console.log(key_slash );
    button[51].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Space){
    console.log(key_Space);
    button[56].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Cmd){
    console.log(key_Cmd);
    button[53].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Alt){
    console.log(key_Alt);
    button[58].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Ctrl){
    console.log(key_Ctrl);
    button[53].style.border = "1px solid var(--dw-)";
    button[59].style.border = "1px solid var(--dw-)";
  }
  else if(key == key_Fn){
    console.log(key_Fn);
    button[60].style.border = "1px solid var(--dw-)";
  }
}

// keyup listener
document.addEventListener("keyup", keyboard_over);
function keyboard_over(event){
  let key = event.keyCode;
  let button = document.getElementsByClassName("key");

  if(key == key_grave_accent ){
    console.log(key_grave_accent );
    button[0].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_1){
    console.log(key_1);
    button[1].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_2){
    console.log(key_2);
    button[2].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_3){
    console.log(key_3);
    button[3].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_4){
    console.log(key_4);
    button[4].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_5){
    console.log(key_5);
    button[5].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_6){
    console.log(key_6);
    button[6].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_7){
    console.log(key_7);
    button[7].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_8){
    console.log(key_8);
    button[8].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_9){
    console.log(key_9);
    button[9].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_0){
    console.log(key_0);
    button[10].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_subtract ){
    console.log(key_subtract );
    button[11].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_add ){
    console.log(key_add );
    button[12].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Delete){
    console.log(key_Delete);
    button[13].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Tab){
    console.log(key_Tab);
    button[14].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Q){
    console.log(key_Q);
    button[15].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_w){
    console.log(key_w);
    button[16].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_E){
    console.log(key_E);
    button[17].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_R){
    console.log(key_R);
    button[18].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_T){
    console.log(key_T);
    button[19].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Y){
    console.log(key_Y);
    button[20].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_U){
    console.log(key_U);
    button[21].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_I){
    console.log(key_I);
    button[22].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_O){
    console.log(key_O);
    button[23].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_P){
    console.log(key_P);
    button[24].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_suqare_left ){
    console.log(key_suqare_left );
    button[25].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_suqare_right ){
    console.log(key_suqare_right );
    button[26].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_back_slash ){
    console.log(key_back_slash );
    button[27].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_CapsLock){
    console.log(key_CapsLock);
    button[28].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_A){
    console.log(key_A);
    button[29].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_S){
    console.log(key_S);
    button[30].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_D){
    console.log(key_D);
    button[31].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_F){
    console.log(key_F);
    button[32].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_G){
    console.log(key_G);
    button[33].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_H){
    console.log(key_H);
    button[34].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_J){
    console.log(key_J);
    button[35].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_K){
    console.log(key_K);
    button[36].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_L){
    console.log(key_L);
    button[37].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_semi_colon ){
    console.log(key_semi_colon );
    button[38].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_singe_quote ){
    console.log(key_singe_quote );
    button[39].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_enter){
    console.log(key_enter);
    button[40].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Shift){
    console.log(key_Shift);
    button[41].style.border = "2px solid var(--gr2-)";
    button[52].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Z){
    console.log(key_Z);
    button[42].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_X){
    console.log(key_X);
    button[43].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_C){
    console.log(key_C);
    button[44].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_V){
    console.log(key_V);
    button[45].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_B){
    console.log(key_B);
    button[46].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_N){
    console.log(key_N);
    button[47].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_M){
    console.log(key_M);
    button[48].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_comma ){
    console.log(key_comma );
    button[49].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_periode ){
    console.log(key_periode );
    button[50].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_slash ){
    console.log(key_slash );
    button[51].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Space){
    console.log(key_Space);
    button[56].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Cmd){
    console.log(key_Cmd);
    button[53].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Alt){
    console.log(key_Alt);
    button[58].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Ctrl){
    console.log(key_Ctrl);
    button[53].style.border = "2px solid var(--gr2-)";
    button[59].style.border = "2px solid var(--gr2-)";
  }
  else if(key == key_Fn){
    console.log(key_Fn);
    button[60].style.border = "2px solid var(--gr2-)";
  }
}











































// END
