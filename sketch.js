//Sketch 4: Avatar          Julia Mueller   jm3048@bard.edu   13 Feb 2017
//Reflection: Orginally I wanted to make a design that represented me. I think that I did an ok job but it doesn't look anything like I do. 
//Seeing the numbers in brackets means nothing to me, but when it's combined with p5js it's very gratifying to see the visual. 



function setup() {
  createCanvas(500, 500);

}

function draw() {
  background(200);
    fill(12, 12, 12);
    
    //neck
    fill(150);
    rect(241, 220, 18, 15);
    
    //head
    fill(150);
    strokeWeight(1);
    ellipse(250, 200, 50);
    fill(300);
    ellipse(240, 195, 12);
    ellipse(260, 195, 12);
    fill(12, 12, 12);
    ellipse(240, 195, 5);
    ellipse(260, 195, 5);
    line(259, 210, 240, 210);
    
    //hat
    fill(170, 41, 8);
    triangle(227, 185, 273, 185, 253, 160);
    
    //body 
    fill(158, 230, 237);
    rect(226, 230, 50, 50);
    
    //arms
    //left arm
    line(190, 250, 225, 250);
    //right arm
    line(313, 250, 277, 250);
     
    //legs
    //left leg
    line(240, 340, 240, 280);
    //right leg
    line(263, 340, 263, 280);
    
  

}
