const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [1080, 1080]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const margin = 1 / 4;
    context.fillStyle = 'hsl(0, 30%, 58%)';
    context.fillRect(0, 0, width, height);

    const fill = context.createLinearGradient(0, 0, width, height);
    fill.addColorStop(0, '#AF39FC');
    fill.addColorStop(1, '#F68283');


    context.fillStyle = fill;
    context.fillRect(margin, margin, width - margin * 2, height - margin * 2);

    const x0 = width * 0.11, y0 = height * 0.11, r0 = width * 0.08, gap = width * 0.06;
    const xi = width * 0.16, yi = height * 0.17; 
    let x, y;

    
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = xi + (x0 + gap) * i;
        y = yi + (y0 + gap) * j;

        const gradient = context.createRadialGradient(x, y, 0, x, y, 50);
        gradient.addColorStop(0.06, '#AF39FC');
        gradient.addColorStop(0.9, '#FA9E7D');
        gradient.addColorStop(1, '#F68283');

        const randomValue = Math.random();
        if (randomValue > 0.80) {
          context.fillStyle = gradient;
        } else if(randomValue > 0.50){
          
          const innerGradient = context.createRadialGradient(x, y, 0, x, y, 60);
          innerGradient.addColorStop(0.06, '#F68283');
          innerGradient.addColorStop(0.9, '#E1468C');
          innerGradient.addColorStop(1, '#F68283');
          
          context.fillStyle = innerGradient;
        }else{
          const innerGradient = context.createRadialGradient(x, y, 0, x, y, 100);
          innerGradient.addColorStop(0.07, '#E1468C');
          innerGradient.addColorStop(0.9, '#F68283');
          innerGradient.addColorStop(0.6, '#7809A1');

          context.fillStyle = innerGradient;
          
        }

        context.beginPath();
        context.arc(x, y, r0, 0, 2 * Math.PI);
        context.fill();
      }
    }
  };
};

canvasSketch(sketch, settings);
