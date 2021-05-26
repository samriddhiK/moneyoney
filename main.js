function preload() {
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCanvas(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet Is Intialized')
}


function gotPoses(result) 
{
    if(result.length > 0)
    {
        console.log(result);
        nose = [0].pose.nose.x;
        nose = [0].pose.nose.y;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
    
}
function draw() {
    image(video, 0, 0, 300, 300,);
    image(clown_nose, noseX, noseY, 30, 30);
    }

function take_snapshot(){
    save('bloxburg_is_my_favorite.jpg')
}