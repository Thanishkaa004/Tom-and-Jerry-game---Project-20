
var bgimg;
var background;
var cat;
var mouse;
var catimg1, catimg2, catimg3;
var mouseimg1, mouseimg2, mouseimg3;
var trial;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png");
    catimg1 = loadAnimation("images/cat1.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    catimg2 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseimg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    catimg3 = loadAnimation("images/cat4.png");
    mouseimg3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    background = createSprite(500, 500, 20, 20);
    background.addImage(bgimg);
    cat = createSprite(850, 700, 80, 80);
    mouse = createSprite(100, 700, 20, 30);
    cat.addAnimation("cat", catimg1)
    cat.scale = 0.2;
    mouse.addAnimation("mouse", mouseimg1)
    mouse.scale = 0.2;
}

function draw() {
    //Write condition to evaluate if mouse and cat collide
    if (cat.x - mouse.x < (cat.width/2 - mouse.width/2) + 150){
        cat.addAnimation("catStill", catimg3);
        cat.changeAnimation("catStill");
        cat.velocityX = 0;
        mouse.addAnimation("mouseStill", mouseimg3);
        mouse.changeAnimation("mouseStill");

    }
    if (cat.x < 100) {
 
        console.log(mouse.x);
     }

    drawSprites();

    

}


function keyPressed(){

    //For moving and changing animation write code here
    if (keyCode === RIGHT_ARROW) {
        mouse.addAnimation("mouseTeasing", mouseimg2);
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25;
    }

    if (keyCode === LEFT_ARROW) {
        cat.addAnimation("catWalking", catimg2);
        cat.changeAnimation("catWalking")
        cat.velocityX = -3;
        cat.frameDelay = 25;
    }

}
