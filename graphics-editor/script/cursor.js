let cursor = document.getElementById('cursor');

cursor.addEventListener('click', function()
{
	if(cursor.classList.contains('active'))
	{
		console.log('cursor');
		left.style.display = 'block';
	    triangle.style.display = 'block';

	   
	    select.style.display = 'none';
	    size.style.display = 'none';
	    left.innerHTML = "Инструмент: Курсор";
   		canvas.style.cursor = "default";

   		opacity.style.display = 'none';
    	opacityID.style.display = 'none';


    	sizeBrush.style.display = 'none'; //кисть
  		sizeBrushID.style.display = 'none';


	    
	    canvas.style.zIndex  = '10';
	    canvas1.style.zIndex  = '0'; // для линии 

	    canvas.onmousedown = function()
	    {

	    }
	    canvas.onclick = function()
	    {

	    }
	}
}, false);