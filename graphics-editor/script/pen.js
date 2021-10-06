/*let pen = document.getElementById('pen');

let colorBack = false;


pen.addEventListener('click', function()
{
  console.log('pen');
  left.style.display = 'block';
  select.style.display = 'none';
  size.style.display = 'none';

  left.innerHTML = "Инструмент: Заливка";
 
    left.style.display = 'block';
    triangle.style.display = 'block';


    opacity.style.display = 'none';
    opacityID.style.display = 'none';

    sizeBrush.style.display = 'none'; //кисть
    sizeBrushID.style.display = 'none';

    canvas.style.zIndex  = '10';
    canvas1.style.zIndex  = '0'; // для линии 
   if(pen.classList.contains('active'))
  {
     let backgroundColor = function()
     {
        colorBack = true;
        context.fillStyle = myColor1.value;
        context.fillRect(0, 0, canvas.width, canvas.height);
     }

     let backUp = function()
     {
        colorBack = false;
     }

    canvas.addEventListener('click', backgroundColor);
    canvas1.addEventListener('mouseup', backUp);
  }
}, false);
*/