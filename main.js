function setup() {
    canvas = createCanvas(640,480);
    canvas.position(300,250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("lightblue");
    stroke("blue");
    noFill();
    rect(25, 25, 580, 450);

  
}

function take_snapshot() {
    save('filter_image.png');
}
