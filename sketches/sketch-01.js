const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    
    context.lineWidth =  width * 0.01;
    const  w= width * .10, h= height * .10 , gap= width * 0.03, 
    iy= width*0.17, ix = height*0.17; 
    let x, y; 
    const cm= width*0.05; 
 
 for(let i=0; i < 5; i++){
     for(let j=0; j < 5; j++){
     x= ix+(w + gap)* i;
     y= iy+(h + gap)*j; 
 
     context.beginPath(); 
     context.rect(x, y, w, h); 
     context.stroke();
 
     if(Math.random() > 0.5 ){
 
     context.beginPath(); 
     context.arc(x+cm,y+cm,w-cm,0,2 * Math.PI);
     context.stroke();
          } 
     }
 }
  };
};

canvasSketch(sketch, settings);
