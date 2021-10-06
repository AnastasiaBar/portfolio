let eraser = document.getElementById('eraser');

eraser.onclick = function()
{
	let arr = [];
	left.style.display = 'block';
	select.style.display = 'block';
	size.style.display = 'block';

	left.innerHTML = "Инструмент: Ластик";

    opacity.style.display = 'none';
    opacityID.style.display = 'none';


    sizeBrush.style.display = 'none'; //кисть
    sizeBrushID.style.display = 'none';

    canvas.style.cursor = "default";




    left.style.display = 'block';
    triangle.style.display = 'block';
    
    canvas.style.zIndex  = '10';
    canvas1.style.zIndex  = '0'; // для линии 

	select.onclick = function()
	{
		let selectvalue = document.getElementById('select').value;
        let mmm = selectvalue.slice(0,-2);
		arr = mmm;
		
	}
	if(eraser.classList.contains('active'))
    {
    	canvas.onmousedown = function(e)
    	{
    		mouse.x = e.offsetX;
            mouse.y = e.offsetY;
            draw = true;
            context.beginPath();
            context.moveTo(mouse.x, mouse.y);
    	}
                 
        canvas.onmousemove = function(e)
        {
        	if(draw == true)
        	{
                mouse.x = e.offsetX;
                mouse.y = e.offsetY;
                context.lineTo(mouse.x, mouse.y);
                context.lineWidth = arr;
                context.strokeStyle = "#fff";
                context.stroke();
                context.globalAlpha = "1";
            }
        }     

        canvas.onmouseup = function(e)   
        {
        	mouse.x = e.offsetX ;
            mouse.y = e.offsetY;
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
            context.closePath();
            draw = false;
        }    
    }       
}



