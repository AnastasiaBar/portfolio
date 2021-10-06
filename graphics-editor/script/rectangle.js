let rectangle = document.getElementById('square');
let mouseDown = false;
rectangle.onclick = function()
{
	left.style.display = 'block';
	select.style.display = 'none';
	size.style.display = 'none';

	left.innerHTML = "Инструмент: Прямоугольник ";

	left.style.display = 'block';
    triangle.style.display = 'block';

    opacity.style.display = 'none'; //прозрачность 
    opacityID.style.display = 'none';
    sizeBrush.style.display = 'none'; //кисть
    sizeBrushID.style.display = 'none';


    canvas.style.zIndex  = '0';
	canvas1.style.zIndex  = '10';
	canvas1.style.opacity  = "0.5";

   	canvas.style.cursor = "default";

    context.globalAlpha = "1";
    context1.globalAlpha = "1";

    
	let x, y;
	let width, height;
	if(rectangle.classList.contains('active'))
	{
		let startRectangle = {x: 0, y: 0};
		let rectangleCoord = {x: 0, y: 0};
		let drawStart = false;

		let clientCoord = (e) =>
		{
			let x =  e.offsetX;
		    let y =  e.offsetY;
		    return { x, y}  
		}

		let drawRectangle = () =>
		{
			context1.fillStyle = myColor1.value;
			context1.fillRect(startRectangle.x, startRectangle.y, rectangleCoord.x - startRectangle.x , rectangleCoord.y - startRectangle.y);
			context1.restore();	
			context.globalAlpha = "1";
		    context1.globalAlpha = "1";
			canvas1.style.opacity  = "0.5";

		}

		let mouseDown = (e) =>
		{
			startRectangle = clientCoord(e);
			drawStart = true;
		}

		let mouseMove = (e) =>
		{
			if (!drawStart)
				return;

			rectangleCoord = clientCoord(e);
			clearCanvas();
			drawRectangle();
		}

		let mouseupLis = (e) =>
		{
			drawStart = false;
			canvas1.style.opacity  = "0";
	 		context.drawImage(canvas1, 0, 0);
			canvas.style.opacity  = "1";


		}

		let clearCanvas = () =>
		{
	  		context1.clearRect(0, 0, canvas1.width, canvas1.height);
		}

		canvas1.addEventListener('mousedown', mouseDown);
		canvas1.addEventListener('mousemove', mouseMove);
		canvas1.addEventListener('mouseup', mouseupLis);




	}
}




