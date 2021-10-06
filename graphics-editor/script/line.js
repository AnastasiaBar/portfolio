let line = document.getElementById('line');
let canvas1 = document.getElementById('canvas1');
let context1 = canvas1.getContext('2d');


line.onclick = function()
{
 
	let arr = [];

	left.style.display = 'block';
    triangle.style.display = 'block';

   
    select.style.display = 'block';
    size.style.display = 'block';

    opacity.style.display = 'none';
    opacityID.style.display = 'none';

    sizeBrush.style.display = 'none'; //кисть
    sizeBrushID.style.display = 'none';

   	canvas.style.cursor = "crosshair";




    left.innerHTML = "Инструмент: Линия";



	canvas.style.zIndex  = '0';
	canvas1.style.zIndex  = '10';
	canvas1.style.opacity  = "0.5";

	context.globalAlpha = "1";
    context1.globalAlpha = "1";

	select.onclick = function()
	{
		let selectvalue = document.getElementById('select').value;
        let mmm = selectvalue.slice(0,-2);
		arr = mmm;
		
	}

	let startPosition = {x: 0, y: 0};
	let lineCoordinates = {x: 0, y: 0};
	let isDrawStart = false;

	let getClientOffset = (e) => {
	    let x =  e.offsetX;
	    let y =  e.offsetY;
	    return { x, y}  
	}

	let drawLine = () => {
	   context1.beginPath();
	   context1.moveTo(startPosition.x, startPosition.y);
	   context1.lineTo(lineCoordinates.x, lineCoordinates.y);
	   context1.lineWidth = arr;
	   context1.stroke();
	   context.globalAlpha = "1";
	   context1.globalAlpha = "1";
	   canvas1.style.opacity  = "0.5";
       context1.strokeStyle = myColor1.value;

	}

	let mouseDownListener = (e) => {
	   startPosition = getClientOffset(e);
	   isDrawStart = true;
	}

	let mouseMoveListener = (e) => {
	  if(!isDrawStart) return;
	  
	  lineCoordinates = getClientOffset(e);
	  clearCanvas();
	  drawLine();
	}

	let mouseupListener = (e) => {
	  isDrawStart = false;
	  canvas1.style.opacity  = "0";
	  context.drawImage(canvas1, 0, 0);
	}

	let clearCanvas = () => {
	   context1.clearRect(0, 0, canvas1.width, canvas1.height);
	}

	canvas1.addEventListener('mousedown', mouseDownListener);
	canvas1.addEventListener('mousemove', mouseMoveListener);
	canvas1.addEventListener('mouseup', mouseupListener);
}

