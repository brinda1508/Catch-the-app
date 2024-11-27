var girl, girlimg
var insta, snap, facebook, whatsapp
var bomb, notebook, notebookimg
var spookybackground
var instaimg, facebookimg, snapimg, whatsappimg, bombimg

var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score=0;
var lives=3
var gameOver, restart;
var gameOverimg, restartimg
var obstaclesGroup, rewardsGroup


function preload() {
    girlimg = loadImage("assets/girl_moving/8.png")
    spookybackground = loadImage("bg.jpg")


    instaimg = loadImage("insta.png")
    facebookimg = loadImage("facebook.png")
    snapimg = loadImage("snap.png")
    whatsappimg = loadImage("whatsapp.png")

    bombimg = loadImage("bomb.png")
    notebookimg = loadImage("notebook.png")

    gameOverimg=loadImage("gameOver.png")
    restartimg=loadImage("restart.png")
}



function setup() {
    createCanvas(800, 700)

    girl = createSprite(400, 550, 100, 100)
    girl.addImage(girlimg)
    girl.scale = 0.5



    // insta=createSprite(400,0)
    // insta.addImage(instaimg)
    // insta.velocityY=2
    // insta.scale=0.15

    // facebook=createSprite(270,138)
    // facebook.addImage(facebookimg)
    // facebook.velocityY=2
    // facebook.scale=0.15

    // snap=createSprite(167,120)
    // snap.addImage(snapimg)
    // snap.velocityY=2
    // snap.scale=0.15

    // whatsapp= createSprite(283,239)
    // whatsapp.addImage(whatsappimg)
    // whatsapp.velocityY=2
    // whatsapp.scale=0.15


    // bomb=createSprite(273,289)
    // bomb.addImage(bombimg)
    // bomb.velocityY=2
    // bomb.scale=0.25

    // notebook=createSprite(432,263)
    // notebook.addImage(notebookimg)
    // notebook.scale=0.2
    // notebook.velocityY=2

    gameOver = createSprite(width/2,height/2- 50);
gameOver.addImage(gameOverimg)
    restart = createSprite(width/2,height/2);
    restart.addImage(restartimg)

    gameOver.scale = 0.8;
  restart.scale = 0.7;

  gameOver.visible = false;
  restart.visible = false;
  
  rewardsGroup= new Group();
  obstaclesGroup= new Group();
}



function draw() {

    background(spookybackground)

text("SCORE: "+score,700,50)

text("LIVES: "+lives,50,50)
fill("red")
    if (gameState===PLAY){
  score=score+ Math.round(getFrameRate()/60);


    }




    if (keyDown("Left")) {
        girl.x = girl.x - 4.5
    }

    if (keyDown("Right")) {
        girl.x = girl.x + 4.5
    }
    
if(rewardsGroup.isTouching(girl)){
score=+1



}







    apps()

    drawSprites()
}


function apps() {

var randx1=Math.round(random(20,750))
// var randx2=Math.round(random(20,750))
// var randx3=Math.round(random(20,750))

if(frameCount%150==0){

    app1 = createSprite(randx1, 0, 10)
    app1.velocityY = 2
    app1.scale = 0.2


   var rand = Math.round(random(1, 4))


    switch (rand) {

        case 1: app1.addImage(facebookimg); 
            break;
        case 2: app1.addImage(snapimg);  
            break;
        case 3: app1.addImage(whatsapp);
            break;
         case 4: app1.addImage(instaimg);
            break;

        default: break
    }

rewardsGroup.add(app1)




}
}





