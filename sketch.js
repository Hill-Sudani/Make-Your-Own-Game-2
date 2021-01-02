var player;
var playerWalking,playerStanding;
var roadImg;

function preload()
{
  playerWalking = loadAnimation("IMAGES/PLAYER/player1.png","IMAGES/PLAYER/player2.png",
                                "IMAGES/PLAYER/player3.png","IMAGES/PLAYER/player4.png",
                                "IMAGES/PLAYER/player5.png");
  
  playerStanding = loadImage("IMAGES/PLAYER/playerStanding.png");
  roadImg = loadImage("IMAGES/ROAD/road.jpg");
}

function setup() 
{
  createCanvas(displayWidth - 400,displayHeight - 400);

  player = createSprite(width - 900,height - 200,50,50);
  player.addImage(playerStanding);

  player.debug = true;
  player.setCollider("rectangle",-15,15,15,80);

  edges = createEdgeSprites();
}

function draw() 
{
  background(roadImg); 

  if(keyDown("D"))
  {
    player.x += 5;
  }

  if(keyDown("A"))
  {
    player.x -= 5;
  }

  player.collide(edges);

  if(player.x >= width - 50)
  {
    console.log("bg change");
  }

  drawSprites();
}