let paintbrush = document.getElementById('paintbrush');


paintbrush.addEventListener('click', function()
{
	console.log('paintbrush');
	left.style.display = 'block';
    triangle.style.display = 'block';

    canvas.style.opacity  = "1";

   
    select.style.display = 'none'; //кисть
    size.style.display = 'none';
    left.innerHTML = "Инструмент: Кисть";


    opacity.style.display = 'block'; //прозрачность 
    opacityID.style.display = 'block';


    sizeBrush.style.display = 'block'; //кисть
    sizeBrushID.style.display = 'block';

   	canvas.style.cursor = "default";


    
    canvas.style.zIndex  = '10';
    canvas1.style.zIndex  = '0'; // для линии 

    let drawing = false;
    let mouseX, mouseY;
    let currentMouseX, currentMouseY; 
    
    let arrSize = 5;
    let arrOpacity = 0.01;

    sizeBrushID.onclick = function()
	{
		let selectSize = document.getElementById('sizeBrush').value;
		let resSize = selectSize.slice(0,-2);
		arrSize = resSize;
		
	}
	opacityID.onclick = function()
	{
		let selectOpacity = document.getElementById('opacity').value;
		let res = selectOpacity.slice(0,-1);
		arrOpacity = res / 1000;
		
	}

	if(paintbrush.classList.contains('active'))
	{
	    canvas.onmousedown = function(e)
	    {
	    	drawing = true;	
	    	mouseX = e.offsetX;
	    	mouseY = e.offsetY;
	    	console.log(mouseX, mouseY);

	    };

	    canvas.onmousemove = function(e)
	    {
	    	
	    	if (drawing == true)
	    	{
		    	let x, y;
		    	currentMouseX = e.offsetX;
		    	currentMouseY = e.offsetY;
		    	let dist = distance(mouseX, mouseY, currentMouseX, currentMouseY);
		 		let angle = fAngle(mouseX, mouseY, currentMouseX, currentMouseY);
		 		context.fillStyle = myColor1.value;
				context.strokeStyle = myColor1.value;
				context.globalAlpha = arrOpacity;


		 		for (let i = 0; i < dist; i ++)
		 		{
		 			x = mouseX + (Math.sin(angle) * i);
		 			y = mouseY + (Math.cos(angle) * i);
		 			context.beginPath();
				    context.arc(x, y, arrSize, false, Math.PI * 2, false);
				    context.closePath();
				    context.fill();
				    context.stroke();
		 		}
		 		mouseX = currentMouseX;
		 		mouseY = currentMouseY;
	 	}
	    }
	    canvas.onmouseup = function(e)
	    {
	    	console.log('1');
	    	drawing = false;
	    }
	}
}, false);

function distance(a,b,c,d)
{
	return  Math.sqrt(Math.pow(c - a, 2) + Math.pow(d - b, 2));
}

function fAngle(a,b,c,d)
{
	return Math.atan2(c - a, d - b);
}