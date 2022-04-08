clown_nose_x="0";
clown_nose_y="0";

function preload(){
clown_nose =("https://i.postimg.cc/7YzXM3Vd/red-nose-day-on-white-260nw-1195898881.jpg");
}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(300, 300);
   

    poseNet = ml5.poseNet(video , modelLoaded());
    poseNet.on('pose', gotPoses());
}

function draw(){
    image(video , 0 , 0 , 300 , 300);
    fill(255 , 0 , 0);
    stroke(255 , 0 , 0);
    circle(clown_nose_x , clown_nose_y , 30);
    image(clown_nose , clown_nose_x , clown_nose_y , 30 , 30);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        clown_nose_x=results[0].pose.nose.x - 15;
        clown_nose_y=results[0].pose.nose.y - 15;
        
        console.log("Nose x =" , clown_nose_x);
        console.log("Nose y =" , clown_nose_y);
    }
}

function take_snapshot(){
    save("photo.png");
}