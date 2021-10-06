let moving = document.getElementById('moving');


moving.addEventListener('click', function()
{

   if(moving.classList.contains('active'))
  {
    console.log('move');
    left.style.display = 'block';
    triangle.style.display = 'block';

   
    select.style.display = 'none';
    size.style.display = 'none';

    opacity.style.display = 'none';
    opacityID.style.display = 'none';

    sizeBrush.style.display = 'none'; //кисть
    sizeBrushID.style.display = 'none';



    left.innerHTML = "Инструмент: Перемещение";

    
    canvas.style.zIndex  = '10';
    canvas1.style.zIndex  = '0'; // для линии 

    canvas.style.cursor = "move";

    canvas.onmousedown = function(e) {

      let coords = canvasCoords(canvas);
      let shiftX = e.pageX - coords.left;
      let shiftY = e.pageY - coords.top;

      canvas.style.position = 'fixed';
      canvas1.style.position = 'fixed';


      move(e);

      function move(e) {
        canvas.style.top = e.pageY - shiftY + 'px';
        canvas.style.left = e.pageX - shiftX + 'px';
        canvas1.style.top = e.pageY - shiftY + 'px';
        canvas1.style.left = e.pageX - shiftX + 'px';
      }

      document.onmousemove = function(e) {
        move(e);
      }

      canvas.onmouseup = function(e) {
        document.onmousemove = null;
        canvas.onmouseup = null;
        canvas1.onmouseup = null;
      }

    }
  }
}, false);



 
