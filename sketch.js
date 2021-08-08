var iss1,spacecraft,hasdocked;

function preload(){

bg = loadImage ("spacebg.jpg");
iss = loadImage ("iss.png");
space1 = loadImage ("spacecraft1.png");
space2 = loadImage ("spacecraft2.png");
space3 = loadImage ("spacecraft3.png");
space4 = loadImage ("spacecraft4.png");

}



function setup() {
  createCanvas(800,400);
    
  spacecraft = createSprite(280,240);
  spacecraft.scale = 0.15;
  spacecraft.addImage(space1)

iss1 = createSprite(330,130);
 iss1.scale = 0.25;
  iss1.addImage(iss)
}

function draw() {
  background(bg);  
 

  if(!hasdocked){

  spacecraft.x = spacecraft.x +random (-1,1);


  if(keyDown("LEFT_ARROW")){

  spacecraft.addImage(space3);
  spacecraft.x = spacecraft.x-1;
  

  }

  if(keyDown("RIGHT_ARROW")){

    spacecraft.addImage(space4);
    spacecraft.x = spacecraft.x+1;
    
  
    }


    if(keyDown("UP_ARROW")){

      spacecraft.y = spacecraft.y-1;
    
      }

      if(keyDown("DOWN_ARROW")){

        spacecraft.addImage(space2);
      
        }
  }

   if(spacecraft.y<=(iss1.y+70)&&spacecraft.x<=(iss1.x-10)){

      hasdocked = true;
      fill ("white");
      text  ("DOCKING SUCCESSFUL",200,200);
      textSize (35);
   }

   drawSprites();
}