let capture;
let posenet;
let reyeX,reyeY,leyeX,leyeY;
let noseX,noseY;
let singlePose;
let skeleton;
let angel;

function setup() {
    createCanvas(800, 500);   // creating workspace a.k.a canvas
    capture=createCapture(VIDEO);
    capture.hide();

    posenet=ml5.poseNet(capture, modelLoaded);
    posenet.on('pose',receivedPoses);

    angel=loadImage('images/ring1.png');

}

function receivedPoses(poses) {
    console.log(poses);

    if(poses.length>0){

        singlePose=poses[0].pose;
        skeleton=poses[0].skeleton;
        /*noseX=singlePose.nose.x;
        noseY=singlePose.nose.y;

        reyeX=singlePose.rightEye.x;
        reyeY=singlePose.rightEye.y;

        leyeX=singlePose.leftEye.x;
        leyeY=singlePose.leftEye.y;*/

    }

    console.log(noseX + " " + noseY);

}

function modelLoaded() {
    console.log('Model has loaded');
}

function draw() {
   // background(200);   // for background color of our canvas (area of working)
    
    image(capture, 0,0);
    fill(255,0,0);

    if(singlePose){
        for(let i=0; i<singlePose.keypoints.length; i++){
            ellipse(singlePose.keypoints[i].position.x,
                    singlePose.keypoints[i].position.y,10);
        }

        stroke(0,255,0);
        for(let j=0; j<skeleton.length; j++){
            line(skeleton[j][0].position.x,
                skeleton[j][0].position.y,
                skeleton[j][1].position.x,
                skeleton[j][1].position.y);
        }   
    
        image(angel,singlePose.nose.x-150,singlePose.nose.y-320,300,300);
    

    }


    /*ellipse(noseX, noseY, 10);
    ellipse(reyeX, reyeY, 10);
    ellipse(leyeX, leyeY, 10);*/





    /*
    //lets see how to make shapes
    // 1. for creating point
    point(200, 200);
    // 2. forline
    line(200,200, 300,300);
    // 3. for traingle
    triangle(100,200, 300,400, 150,450);
    // 4. for rectangle
    rect(500,200, 200,100);
    // 5. for circle
    ellipse(600,300, 100,100);*/

    // lets learn stroke and coloring
    /*fill(0,0,0,255);
    stroke(255,0,0); //stroke means border
    strokeWeight(5);
    ellipse(100,200, 100,100);
    stroke(0,0,255);
    ellipse(250,200, 100,100);
    ellipse(400,200, 100,100);*/

}