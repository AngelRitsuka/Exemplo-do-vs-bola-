var bola;

//configurações
function setup() 
{
  //criar tela
  createCanvas(1200,600);

  bola = createSprite(600,300,50,50);
  bola.shapeColor = "#A020F0";

  
}

function draw() 
{
  //fundo
  background("#FFA500");

  //keyIsDown - só para setas
  if(keyIsDown(UP_ARROW))
  {
    bola.y = bola.y - 5;
  }

  if(keyIsDown(DOWN_ARROW))
  {
    bola.y = bola.y + 5;
  }

  
  if(keyIsDown(LEFT_ARROW))
  {
    bola.x = bola.x - 5;
  }

  if(keyIsDown(RIGHT_ARROW))
  {
    bola.x = bola.x + 5;
  }

  drawSprites();

}




