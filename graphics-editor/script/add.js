let add = document.getElementById('add');

add.addEventListener('click', function(e)
{
	let widthCanvas = prompt('Введите ширину холста:');
	  if (widthCanvas == null) 
		  return; 
	let heightCanvas = prompt('Введите высоту холста:');
	  if (heightCanvas == null) 
		  return;
	context.fillStyle = '#fff';
	context.fillRect(0, 0, canvas.widthCanvas, canvas.heightCanvas);



	canvas.setAttribute('width', widthCanvas);
	canvas.setAttribute('height', heightCanvas);
	canvas1.setAttribute('width', widthCanvas);
	canvas1.setAttribute('height', heightCanvas);

}, false);