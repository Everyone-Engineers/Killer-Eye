//Variable for teachable machine model converted and stored/essentially the AI aspect of the machine
var imageURL = 'https://teachablemachine.withgoogle.com/models/meX2zcuwY/';
var network;
function preload() {
     network = ml5.imageClassifier(imageURL + 'model.json');
 }
// Video and setup the page
var vid;
var reversevideo;
function setup() {
	createCanvas(640, 480);
    vid = createCapture();
    vid.size(640, 480);
	vid.hide();
	reversevideo = ml5.flipImage(vid)
    classifier();
}
//label and background work to provide response
var label;
function draw() {
     image(vid, 0, 0);
	 textSize(69);
	 fill(169);
     textAlign(CENTER);
     text(label, width / 2, height - 69);
}
//Classfier Function
function classifier() {
     reversevideo = ml5.flipImage(vid)
	 network.classify(reversevideo, gotResult);
}
 // When we get a result
function gotResult(error, results) {
    if (error) {
         console.error(error);
         return;
    }     
	 if(results[0].confidence>0.95){
     label = results[0].label;
     }
     else{
     label = "";
     }
     reversevideo.remove();
     classifier();
}

 
