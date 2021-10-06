let save = document.getElementById('save');

context.fillStyle = '#fff';
context.fillRect(0, 0, canvas.width, canvas.height);

save.onclick = function()
{
    var fileName = prompt('Введите имя файла без расширения:');

	  if (fileName == null) 
		  return;

    let a = document.createElement("a");
	document.body.appendChild(a);
	a.style = "display: none";
	canvas.style.opacity  = "0.99"

	a.href = canvas.toDataURL();
	a.download = fileName + ".jpg";
	a.click();
	document.body.removeChild(a);


}