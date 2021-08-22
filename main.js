
gameplay = document.getElementById("myCanvas");

imageNasaNames = ["imageAirCam67Deg.jpg", "imageMastCamAngle71Deg.jpg", "imageRoverCam1.jpg", "mars.jpg"];

randomImageChooser = Math.floor(Math.random * 4);
background_imgTag = randomImageChooser[randomImageChooser]
ctx = gameplay.getContext("2d");
backgroundImg = "concrete-road.png";
roverImg = "car2.png"
roverX = 10;
roverY = 10;
roverWidth = 20;
roverHeight = 20;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground();
    background_imgTag.src = backgroundImg;
    
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover();
    rover_imgTag.src = roverImg;
    

    
}

function uploadBackground() {
    ctx.drawImage(background_imgTag,0 ,0 ,gameplay.width, gameplay.height);
    
}

function uploadRover() {
    ctx.drawImage(rover_imgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown", checkKeyDown);
            
function checkKeyDown(e) {
    
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38') {
            up();
            console.log("UP KEY PRESSED")
        }
        
        if(keyPressed == '40') {
            down();
            console.log("DOWN KEY PRESSED")
        }
        
        if(keyPressed == '37') {
            left();
            console.log("LEFT KEY PRESSED")
        }
        
        if(keyPressed == '39') {
            right();
            console.log("RIGHT KEY PRESSED")
        }
        
}

function up() {

    if(roverY >=0){

        roverY -= 10;
            console.log("When up pressed = " + roverX + " - " + roverY)
            uploadBackground();
            uploadRover();
    }
}

function down() {

    if(roverY <=500){

        roverY += 10;
            console.log("When down pressed = " + roverX + " - " + roverY)
            uploadBackground();
            uploadRover();
    }
}

function left() {

    if(roverX >=0){

        roverX -= 10;
            console.log("When left pressed, x = " + roverX + " | y = " + roverY)
            uploadBackground();
            uploadRover();
    }
}

function right() {

    if(roverX <=700){

        roverX += 10;
            console.log("When left pressed, x = " + roverX + " | y = " + roverY)
            uploadBackground();
            uploadRover();
    }
}