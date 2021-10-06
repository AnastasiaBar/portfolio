circle.onclick = function()
{
	left.style.display = 'block';
	select.style.display = 'none';
	size.style.display = 'none';

	left.innerHTML = "Инструмент: Круг";

	canvas.style.cursor = 'default';
	left.style.display = 'block';
    triangle.style.display = 'block';

    canvas.style.zIndex  = '0';
	canvas1.style.zIndex  = '10';
	canvas1.style.opacity  = "0.5";
   	canvas.style.cursor = "default";

   	context.globalAlpha = "1";
    context1.globalAlpha = "1";



    if(circle.classList.contains('active'))
	{
		let startCircle = {x: 0, y: 0};
		let circleCoord = {x: 0, y: 0};
		let drawStartCircle = false;
		let R;

		let clientCoord = (e) =>
		{
			let x =  e.offsetX;
		    let y =  e.offsetY;
		    return { x, y}  
		}

		let drawCircle = () =>
		{
			context1.fillStyle = myColor1.value;
			context1.beginPath();
			context1.arc(startCircle.x, startCircle.y, R, 0, Math.PI*2, true); 
			context1.fill();
			context.globalAlpha = "1";
		    context1.globalAlpha = "1";
			canvas1.style.opacity  = "0.5";
		}

		let mouseDown = (e) =>
		{
			startCircle = clientCoord(e);
			drawStartCircle = true;
		}

		let mouseMove = (e) =>
		{
			if (!drawStartCircle)
				return;

			circleCoord = clientCoord(e);
			R = Math.sqrt(Math.pow(circleCoord.x - startCircle.x,2) + Math.pow(circleCoord.y - startCircle.y, 2));

			clearCanvas();
			drawCircle();
		}

		let mouseupLis = (e) =>
		{
			drawStartCircle = false;
			canvas1.style.opacity  = "0";
	 		context.drawImage(canvas1, 0, 0);

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