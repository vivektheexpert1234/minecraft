var canvas=new fabric.Canvas("myCanvas")
blockimageheight=30
blockimagewidth=30
playery=200
playerx=100
var playerobject=""
var blockobject=""
function playerupdate()
{
    fabric.Image.fromURL("player.png",function(Img){
        playerobject=Img
        playerobject.scaleToWidth(150)
        playerobject.scaleToHeight(140)
        playerobject.set({
            top:playery,left:playerx
        });
        canvas.add(playerobject)
    })
}
function blockupdate(getimage){
    fabric.Image.fromURL(getimage,function(Img){
        blockobject=Img
        blockobject.scaleToWidth(blockimagewidth)
        blockobject.scaleToHeight(blockimageheight)
        blockobject.set({
            top:playery,left:playerx
        });
        canvas.add(blockobject)
    })
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e)
{
    keypressed=e.keyCode
    console.log(keypressed);
    if(e.shiftKey==true &&keypressed=="80"){
        console.log("shiftkey&p")
        blockimagewidth=blockimagewidth+10
        blockimageheight=blockimageheight+10
        document.getElementById("currentwidth").innerHTML=blockimagewidth
        document.getElementById("currentheight").innerHTML=blockimageheight
    }
    if(keypressed=="38")
    {
        Up();
        console.log("Up is pressed");
    }
    if(keypressed=="40")
    {
        Down();
        console.log("Down is pressed");
    }
    if(keypressed=="37")
    {
        Left();
        console.log("Left is pressed")
    }
    if(keypressed=="39")
    {
        Right();
        console.log("Right is pressed")
    }

    if(e.shiftKey==true &&keypressed=="77"){
        console.log("shiftkey&m")
        blockimagewidth=blockimagewidth-10
        blockimageheight=blockimageheight-10
        document.getElementById("currentwidth").innerHTML=blockimagewidth
        document.getElementById("currentheight").innerHTML=blockimageheight   
    }
    if(keypressed=="67"){
        blockupdate("cloud.jpg")
        console.log("c is pressed");
    }
    if(keypressed=="68"){
        blockupdate("dark_green.png");
        console.log("d is pressed");
    }
    if(keypressed=="71"){
        blockupdate("ground.png");
        console.log("g is pressed");
    }
    if(keypressed=="76"){
        blockupdate("light_green.png");
        console.log("l is pressed");
    }
    if(keypressed=="82"){
        blockupdate("roof.jpg");
        console.log("r is pressed");
    }
    if(keypressed=="84"){
        blockupdate("trunk.jpg");
        console.log("t is pressed");
    }
    if(keypressed=="85"){
        blockupdate("unique.png");
        console.log("u is pressed");
    }
    if(keypressed=="87"){
        blockupdate("wall.jpg");
        console.log("w is pressed");
    }
    if(keypressed=="89"){
        blockupdate("yellow_wall.png");
        console.log("y is pressed");
    }
}
function Up()
{
    if(playery>=0)
    {
        playery=playery-blockimageheight;
        console.log("blockimageheight="+blockimageheight)
        console.log(playerx+","+playery)
        canvas.remove(playerobject)
        playerupdate()
    }
}
function Down()
{
    if(playery<=500)
    {
        playery=playery+blockimageheight;
        console.log("blockimageheight="+blockimageheight)
        console.log(playerx+","+playery)
        canvas.remove(playerobject)
        playerupdate()
    } 
}
function Right()
{
    if(playerx<=850)
    {
        playerx=playerx+blockimageheight;
        console.log("blockimageheight="+blockimageheight)
        console.log(playerx+","+playery)
        canvas.remove(playerobject)
        playerupdate()
    }   
}
function Left()
{
    if(playerx>0)
    {
        playerx=playerx-blockimageheight;
        console.log("blockimageheight="+blockimageheight)
        console.log(playerx+","+playery)
        canvas.remove(playerobject)
        playerupdate()}  
}