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
 document.addEventListener('DOMContentLoaded', function () {
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 3000,
  });
});

 /*search*/
let result, locale, result_store;
let result_arr = [];

function func() {
  locale = document.body.innerHTML;  
}
setTimeout(func, 1000);  
function FindOnPage(name, status) {
  let input = document.getElementById(name).value; 
    function FindOnPageGo() {
      let search = '/'+input+'/g';  
      let pr = document.body.innerHTML;   
      result = pr.match(/>(.*?)</g);
      for(let i = 0; i < result.length; i++) {
        result_arr[i] = result[i].replace(eval(search), '<span style="background-color:rgb(0%, 35%, 73%, 0.5);">'+input+'</span>'); 
      }
      for(let i = 0; i < result.length;i++) {
        pr = pr.replace(result[i],result_arr[i]);
      }
      document.body.innerHTML = pr;
  }
  function FindOnPageBack() { document.body.innerHTML = locale; }
  if(status) { FindOnPageBack(); FindOnPageGo(); } 
}

