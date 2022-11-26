function preload(){

}

function setup(){
canvas=createCanvas(640,480)
canvas.position(450,150)
video=createCapture(VIDEO)
video.hide();
}

function draw(){
image(video,0,0,640,480)
}

function save_img(){
    save(filtered_img.png);
}