let eyedropper = document.getElementById('eyedropper');

eyedropper.addEventListener('click', function(e)
{
   if(eyedropper.classList.contains('active'))
  {
    console.log('пипетка');
    left.style.display = 'block';
    select.style.display = 'none';
    size.style.display = 'none';
    left.innerHTML = "Инструмент: Пипетка";


    
    canvas.style.zIndex  = '10';
    canvas1.style.zIndex  = '0'; // для линии 
    let x, y;
    canvas.onmousemove = function(e)
      {
        let pos = canvasCoords(this);
        x = e.pageX - pos.left;
        y = e.pageY - pos.top;
      }
    canvas.onclick = function()
      {
          console.log('aaaaa');
          let p = context.getImageData(x, y, 1, 1).data; 
          let hex = "#" + (rgba(p[0], p[1], p[2])).slice(-6);
          myColor1.setAttribute('value', hex);

          console.log(hex);
      }

  }
}, false);



function rgba (r,g,b,a)
{
	if (r == 0 && g == 0 && b == 0 && a == 0) 
	{
		return '#fff';
	}

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}


