let text = document.getElementById('text');
 
 
text.onclick = function()
{
	left.style.display = 'block';
    triangle.style.display = 'block';
	left.innerHTML = "Инструмент: Текст";
 

	sizeBrush.style.display = 'none'; //кисть
    sizeBrushID.style.display = 'none';

    opacity.style.display = 'none';
    opacityID.style.display = 'none';


    select.style.display = 'none';
	size.style.display = 'none';

    canvas.style.zIndex  = '10';
    canvas1.style.zIndex  = '0'; // для линии 
	if(text.classList.contains('active'))
  {
	canvas.style.cursor = 'text';
	let mouseX = 0;
	let mouseY = 0;
	let start = 0;
	canvas.addEventListener('click', function(e)
	{
		mouseX = e.offsetX;
		mouseY = e.offsetY;
		start = mouseX;
 
	}, false);

	document.addEventListener('keypress', function(e)
	{	
		let str ='';
		var keycode = parseInt(e.which);
		str += String.fromCharCode(keycode);
		console.log(str);
		if (e.keyCode === 13)
		{
			str +='\n';

		}
		context.font = "16px Arial";
		context.fillStyle = myColor1.value;
		context.fillText(str, mouseX, mouseY);
		mouseX += context.measureText(str).width;
		context.globalAlpha = "1";
		
	}, false);
	canvas.onmousemove = function(e)
      {
        	
      }     

    canvas.onmouseup = function(e)   
      {
        	
      }   
}
}

