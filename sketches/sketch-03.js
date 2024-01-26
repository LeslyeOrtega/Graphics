const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black'; 


    const x = width * 0.5, y = width * 0.5, w = width * 0.3, h = width * 0.3; 

    context.rotate(0.3);


    context.beginPath(); 
    context.rect(x, y ,w , h); 
    context.fill();

  };
};

canvasSketch(sketch, settings);
