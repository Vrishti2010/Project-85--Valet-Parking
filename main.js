//Create a reference for canvas 
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");



//Give specific height and width to the car image
greencar_width = 75;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.
greencarX = 5;
greencarY = 225;	


function add() {
	background_imgTag = new Image();
	 background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;
	
	greencar_imgTag = new Image(); 
	greencar_imgTag.onload = uploadgreencar; 
	greencar_imgTag.src = greencar_image;

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
 ctx.drawImage(greencar_imgTag, greencarX, greencarY, greencar_width, greencar_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}
window.addEventListener("keydown", my_keydown);
console.log(my_keydown);

function up() {
	if (greencarY >=0) {
		greencarY= greencarY - 10;
	console.log("when up arrow is pressed,X = "+ greencarX + "Y = " + greencarY)
	uploadBackground();
	uploadgreencar();
	}
}

function down()
{	if (greencarY <= 500) {
	greencarY= greencarY + 10;
console.log("when down arrow is pressed, X = "+ greencarX + "Y = " + greencarY)
uploadBackground();
uploadgreencar();
}
}

function left()
{
	if (greencarX >=0) {
		greencarX= greencarX - 10;
	console.log("when left arrow is pressed,X = "+ greencarX + "Y = " + greencarY)
	uploadBackground();
	uploadgreencar();
	}
}

function right()
{ 	if (greencarX <= 700) {
	greencarX= greencarX + 10;
console.log("when right arrow is pressed, X = "+ greencarX + "Y = " + greencarY)
uploadBackground();
uploadgreencar();
}
	
}
}
