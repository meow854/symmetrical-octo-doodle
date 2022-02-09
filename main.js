nosex= 0;
nosey= 0;

function preload() {
    clownnose= loadImage("https://i.postimg.cc/0Qsjf0Kd/114-1147898-clown-nose-png-clip-art-clown-nose-transparent-removebg-preview.png");
}

function setup() {
    canvas= createCanvas(400, 300);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(400, 300);
    video.hide();
    posenet= ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function modelloaded() {
    console.log("model");
}

function gotposes(results) {
    if(results.length > 0) {
        console.log(results);
        console.log("nose x value: " + results[0].pose.nose.x);
        console.log("nose y value: " + results[0].pose.nose.y);
        nosex= results[0].pose.nose.x - 30;
        nosey= results[0].pose.nose.y - 15;
    }
}

function draw() {
    image(video, 0, 0, 400, 300);
    fill(255, 0, 0);
    stroke(0, 0, 0);
    //circle(nosex, nosey, 30);
    image(clownnose, nosex, nosey, 60, 40);
}

function savepic() {
    save("clownpic.png");
}