let myColor1 = document.getElementById('color1');
let myColor2 = document.getElementById('color2');
let swapArrow = document.getElementById('swap-arrow');

myColor2.setAttribute('value', "#000000");
myColor1.setAttribute('value', "#dddddd");
swapArrow.style.cursor = 'pointer';



myColor1.oninput = function()
{
	myColor1.setAttribute('value', this.value);
	console.log(myColor1.value);

}

myColor2.oninput = function()
{

	myColor2.setAttribute('value', this.value);

}

swapArrow.onclick = function()
{
	let a = myColor1.value;
	myColor1.setAttribute('value', myColor2.value);
	myColor2.setAttribute('value', a);

}