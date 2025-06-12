function setup() {
  createCanvas(400, 400);
}
let Xjogador1 = 0;
let Xjogador2 = 0;

function draw() {
  ativaJogo();
  desenhaJogadores();
  desenhaLinhaDeChegada();
  
 
  
  if (Xjogador1 > 350){
    fill("#F9FBFF");
    textSize(20);
   text("porquinho venceu!", 0,150);
    noLoop();
}

  if (Xjogador2 > 350) {  


  fill("#F9FBFF");
   textSize(20);
 text("vaquinha venceu!", 1,150);
 noLoop();
  }
 
}
 function keyReleased() {
 if (key === 'a') {
   Xjogador1 += random(20);
 }
   if (key == 's') {
   Xjogador2 += random(20);
   
 } }
  function ativaJogo(){ 
    
    if(focused==true) {
  background("#023FF5");
}
 else{
 background("#F5854C");
 }

   
}
  function desenhaJogadores(){
    textSize(50);
  text("🐖",Xjogador1,100);
  text("🐮",Xjogador2,300);
  }
function desenhaLinhaDeChegada(){
fill("black")
  rect(350,0,10,400);
  fill("white");
  for(let yAtual=0; yAtual< 400; yAtual += 20){
    rect(350,yAtual,10,10);
    
  }
}

