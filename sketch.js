var button1 , button2 , button3 /*, rect1*/ , bgImg , bgImg3 , bg
var fade;
var fadeAmount = 1
var gameState = 0

function setup()
{
	//bg = createCanvas (displayWidth - 58 , displayHeight - 200)
    //bg.background(bgImg);

    /*rect1 = createSprite(10 , 10 , 20 , 20)
	button1.position( 20 , 450).mousePressed(gotogame)
	button1.size(370 , 200)
	button2.position( 585 , 450).mousePressed(gotogame)
	button2.size(370 , 200)
	button3.position( 1140 , 450).mousePressed(gotogame)
    button3.size(330 , 200)
	textSize(70)*/
    fade = 0

	
}
function draw()
{
	//background(bgImg)
	//rect1.x = World.mouseX ;
	//rect1.y = World.mouseY ;
    //console.log(rect1.x , rect1.y)
	//hide();
    //hide.visible = false ;
    /*fill(0 , 0 , 255, fade)
	
    text("                 MISSION CLEAN INDIA", 50  , 100)
    if (fade<0) fadeAmount=1; 
 
    if (fade>255) fadeAmount=-10; 
 
    fade += fadeAmount; 
    print(fade) */

    //initialScreen();
    
	//drawSprites();
}
function gotogame()
{
	alert("DONE")
}
/*function initialScreen()
{
    background(bgImg)
    button1.position( 20 , 450).mousePressed(gotogame)
	button1.size(370 , 200)
	button2.position( 585 , 450).mousePressed(gotogame)
	button2.size(370 , 200)
    if (button3.mousePressed) {
        gameState = 1
    }
	button3.position( 1140 , 450)
    button3.mousePressed(FAQ)
    button3.size(330 , 200)
    
    textSize(70)
    fill(0 , 0 , 255, fade)
	
    text("                 MISSION CLEAN INDIA", 50  , 100)
    if (fade<0) fadeAmount=1; 
 
    if (fade>255) fadeAmount=-10; 
 
    fade += fadeAmount; */
    
//print(fade)
//}
/*function FAQ()
{
    button1.hide()
    button2.hide()
    button3.hide()
    bg.remove();
    //Image(bgimg3 , displayWidth - 58 , displayHeight - 200)
    if (gameState === 1)
   {
         background(bgImg3)
        
    }
    //bg = createCanvas (displayWidth - 58 , displayHeight - 200)
    //background("Images/FAQ image.jpg")
    

}*/