let button = document.querySelectorAll('.bt');
let pencil = document.getElementById('pencil');
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let w = canvas.width; 
let h = canvas.height;
let mouse = {x: 0, y: 0};
let draw = false;

let left = document.querySelector('.left');
let select = document.getElementById('select');
let size = document.querySelector('.size');
let triangle = document.getElementById('triangle');
let opacity = document.querySelector('.opacity');
let opacityID = document.getElementById('opacity');

let sizeBrush = document.querySelector('.sizeBrush');
let sizeBrushID = document.getElementById('sizeBrush');


/*Активный элемент */
function ActiveButton (id) {
    button.forEach(b => {
        b.classList.toggle('active', b.id === id);

    });
}

button.forEach(b => {
    let id = b.id;
    b.addEventListener('click', e => {
        ActiveButton(id);
    });
});



/*Функция, возвращающая координаты элемента*/
let canvasCoords = function(elem)
{
    let box = elem.getBoundingClientRect();
    let top = box.top + pageYOffset;
    let left = box.left + pageXOffset;
    return {top, left};
};


let triangleNone = document.querySelector('.triangle-none');
let circle = document.getElementById('circle');
let square = document.getElementById('square');
let triangle3 = document.getElementById('triangle3');
let circleNone = document.querySelector('.circle-none');
 
triangle.onclick = function()
{
    left.style.display = 'none';
    triangleNone.style.display = 'block';
}

triangleNone.onclick = function()
{
    left.style.display = 'none';
    triangleNone.style.display = 'none';
    circle.style.display = 'block';
    square.style.display = 'none';

}

triangle3.onclick = function()
{
    left.style.display = 'none';
    circleNone.style.display = 'block';
}

circleNone.onclick = function()
{
    left.style.display = 'none';
    circleNone.style.display = 'none';
    square.style.display = 'block';
    circle.style.display = 'none';

}

canvas.onmousedown = function()
{

}
canvas.onclick = function()
{

}

canvas.onmousemove = function(e)
{
    
}     

canvas.onmouseup = function(e)   
{
    
} 