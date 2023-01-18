//declaring the variables
//circle (for fireworks)
let circleX;
let circleY;
let circleSize;

//img
let img; //keyboardKey
let img2; //cityscape

//synth
var polySynth;

//this had to go here because polySynth wasn't loading if it was in setup
function preload() {
    noFill();
    strokeWeight(5);
    circleX = width/2;
    circleY = height/2;
    circleSize = 0;
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight-100); //-100 to make place for the text
    canvas.parent("p5container");

    //load the images
    img = loadImage('assets/keyboardKeyPurple.PNG'); 
    img2 = loadImage('assets/cityscapePurple.png');
    
    polySynth = new p5.PolySynth();
}

function playSynth(note){
    userStartAudio();

    var dur = 0.5;
    var time = 0;
    var vel = 0.1;
    
    polySynth.play(note, vel, time +=1/3, dur);
}

function draw() {
    background(125, 14, 126);

    circleSize += 10;
    noFill();
    strokeWeight(5);
    stroke(252, 191, 73);
    circle(circleX, circleY, circleSize);
    circle(circleX, circleY, circleSize * 2);
    circle(circleX, circleY, circleSize * .75);
    circle(circleX, circleY, circleSize * .5);
    circle(circleX, circleY, circleSize * .25);

    image(img, windowWidth/2-256.5, 0, img.width, img.height); //top of the screen in the centre
    image(img2, 0, 0, img2.width+250, img2.height); //bottom of the screen, stretched a bit so it fits in the canvas
}



function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        //'show' keyboard
        img.width = img.width/512;
        img.height = img.height/512;
    } else if (keyCode === RIGHT_ARROW) {
        //'hide' keyboard
        img.width = img.width*512;
        img.height = img.height*512;
    }
}

function keyTyped(){
   //adding the white keys
    if (key === 'a') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450)); //so the fireworks don't appear in the 'water'
        circleSize = 0;
        playSynth('C4');
    } else if (key === 's') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('D4');
    } else if (key === 'd') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('E4');
    } else if (key === 'f') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('F4');
    } else if (key === 'g') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('G4');
    } else if (key === 'h') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('A5');
    } else if (key === 'j') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('B5');
    } else if (key === 'k') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('C5');
    //adding the black keys (e.g. Db)
    } else if (key === 'w') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('Db4');
    } else if (key === 'e') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('Eb4');
    } else if (key === 't') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('Gb4');
    } else if (key === 'y') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('Ab5');
    } else if (key === 'u') {
        circleX = random(windowWidth);
        circleY = random((windowHeight-100)-(windowHeight-450));
        circleSize = 0;
        playSynth('Bb5');
    } 
}