function preload() {
    var clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}

function setup() {
    canvas = createCanvas(450, 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 350);
    video.hide();
    PoseNet = ml5.poseNet(video, modelloaded);
    PoseNet.on("pose", gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log("nose X ="+results[0].pose.nose.x); 
        console.log("nose Y ="+results[0].pose.nose.y);
    }
}

function modelloaded() {
    console.log("Model is initialized");
}

function draw() {
    image(video, 0, 0, 450, 350);
}