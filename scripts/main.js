var img_var = document.querySelector('img');
img_var.onclick = function (){
	var mysrc = img_var.getAttribute('src');
	if(mysrc === 'images/sea.jpeg'){

			img_var.setAttribute('src','images/light.jpeg');

	}else{
			img_var.setAttribute('src','images/sea.jpeg');

	}


}

var mybutton = document.querySelector('button')
var myheading = document.querySelector('h1')
function setUsername(){
	var myName = prompt("please enter the name:");
	localStorage.setItem('name',myName);
	myheading.textContent = "wow" + myName;

}
if(!localStorage.getItem('name')){

	setUsername();
}else{

	var storename = localStorage.getItem('name')
	myheading.textContent = "wow" + storename
}

mybutton.onclick = function(){
	setUsername();
}