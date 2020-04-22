let bit = []; // array of bits objects

//let boolean delete = flase;
var col = false;


var startscreen = true;
var game = false;
var downloadcompl = false;

var download = 0;
var speed =4;
var mass =10; 


var playersize = 1;


function setup() {
  //Canvas und Positionierung
  let cnv = createCanvas(windowWidth/2.5, windowHeight-20);
  cnv.position(((windowWidth/2)-(windowWidth/2.5/2)), 10);
  
  // Create objects
  for (let i = 0; i < 100; i++) {
    bit.push(new bits());
  } 
}


function draw() {
  
  if(startscreen ==true){
  background(0);
    
    rectMode(CENTER);
    fill(255);      
    rect(width/2,height/2,width/2,height*0.1);
    
    fill(0);
    textAlign(CENTER);
    text('START',width/2,height/1.95)
    text('DOWNLOAD',width/2.,height/2.05)
    
    
  
    if(mouseX>width*0.25 && mouseX< width*0.75 && mouseY> ((height/2)-height*0.05) && mouseY<(height/2)+(height*0.05) ){
    startscreen = false;
    game = true;
    
    }
  }
  
  if(game == true){
  background(0);
  fill(255);
  text('DOWNLOAD:' + download + '/100', 70,50);
  
 
  rectMode(CORNER);

fill(0);
  stroke(255);
  rect(20,75,200,10);
  
  fill(255);
  rect(20,75,download*2,10);
  
  
  //generiert 100 bits
  for (let i = 0; i < bit.length; i++) {
    //befehle welche mit den bits gemacht wird
    bit[i].move();
    bit[i].display();
    bit[i].reload();
    bit[i].collision();
    
    //wenn collision da ist dann:
    if(col == true){
      bit.splice(i,1);
      download += 1;
      
     
    }
  }
    
      //player
   
   rect(mouseX-width/10, height*0.9, width/5,height/100);
  }
    
 
  
  if (download == 100){
    background(255);
    fill(0);
    textSize(40);
    text('DOWNLOAD', width/2,height/2.2);
    text('COMPLETE', width/2, height/1.8);
  } 
}


// bits class
class bits {
  constructor() {
   this.x =random(width*0.9);
   this.y = -random(10,2000);
  }
  
  move() {
    this.y += speed;
  }
  
  display() {
    fill(255);
    rect(this.x, this.y, mass,mass);
  }
  
  reload(){
  if (this.y>height){
    this.y =-(height+random(0,10));
  }
  }
  collision(){
    if(this.y > height*0.9 && this.y < height*0.93 && this.x > (mouseX-width/10) &&     this.x <(mouseX+width/10)){
      col = true;
    }else{
    col = false;
    }
  }
}
