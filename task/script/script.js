let activelog = document.getElementById('active-log');
let regName = /^([A-Z][a-z]+)[,\s]\s*([A-Z][a-z]+)\s*$/;
let regPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*\d){8,}/g;

activelog.addEventListener('click', function()
{
	if (regName.test(document.getElementById('name').value) == true && regPassword.test(document.getElementById('password').value) == true)
	{
	 alert("Yes");
	 document.getElementById("name").value = "";
	 document.getElementById("password").value = "";
	}
	else
	 alert("No");
});

/*slider*/
let w, res;

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i, k=0;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      i++;
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function someFunc(n) {
  w = window.innerWidth;
  return w;
}

window.addEventListener('resize', function() {
  console.log("Размер окна изменен");
  res = someFunc();
  console.log(res);
});