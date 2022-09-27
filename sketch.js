let angle = 0;      //angolo del primo cerchio
let direzione = "destra";
let x = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
  angleMode(DEGREES)
  background("#AE412A");
  frameRate(40);

}

function draw() {

  push()                                     //creazione del cerchio centrale dalla rotazione di due segmenti
    translate(width/2, height/2)
    rotate(angle);
    stroke("#C98E4A");
    line(0, 0, 100, 0);
    stroke("#97AD3C")
    line(100, 0, 150, 0);
    if(angle<360){                            //l'angolo aumenta finché non ne raggiunge uno specifico
      angle = angle + 1;
    }
  pop() 
  }