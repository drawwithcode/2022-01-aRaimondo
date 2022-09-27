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

  push()
    translate(width/2, height/2)              
    rotate(frameCount*3)                      //il cerchio ruota intorno al centro
    noFill()
    stroke("#DCAF44")
    circle(x, 0, 50)
    if (direzione == "destra"){               //il cerchio oscilla in orizzontale tra 200 e 290 pixel dal centro in base alla variazione di x
      x = x+4;
    }
    if (direzione == "sinistra"){
      x = x-4;
    }
    if (x >= 290){
      direzione = "sinistra"
    }
    else if (x <= 200){
      direzione = "destra"
    }
    pop()
  

  push()                                      //trasformazione di cerchio a destra
    translate(windowWidth/6, windowHeight/2);
    rotate(frameCount/2)
    stroke("#D88D74")
    line(0, 0, 50, 0);
    stroke("#DCAF44");
    line(50, 0, 100, 0);
    stroke("#4E78B8");
    line(100, 0, 150, 0);
    stroke("black");
    line(0, 0, -100, 0);
    stroke("white");
    line(-100, 0, -150, 0);
  pop()

  push()                                    //trasformazione del cerchio a sinistra
    translate((windowWidth/6)*5, windowHeight/2);
    rotate(-frameCount/2)
    stroke("#D88D74")
    line(0, 0, -50, 0);
    stroke("#DCAF44");
    line(-50, 0, -100, 0);
    stroke("#4E78B8");
    line(-100, 0, -150, 0);
    stroke("black");
    line(0, 0, 100, 0);
    stroke("white");
    line(100, 0, 150, 0);
  pop()
}
  
