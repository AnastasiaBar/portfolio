let clear = document.getElementById('clear');


	let clearCanvas = () => {
	   context.clearRect(0, 0, canvas1.width, canvas1.height);
	   context1.clearRect(0, 0, canvas1.width, canvas1.height);

	}
	clear.addEventListener('click', clearCanvas);

