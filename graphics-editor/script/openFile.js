let open = document.getElementById('open');
let input = document.getElementById('file-input');
input.addEventListener('change', openFile, false);

function openFile(e){
	let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function(e)
    {
        let img = new Image();
        img.onload = function()
        {
	        canvas.width = img.width;
	        canvas.height = img.height;
	        context.drawImage(img, 0, 0);
        }
        img.src = e.target.result;
    }
    reader.readAsDataURL(file);    
}
