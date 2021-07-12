$(document).ready(function(){
	$('.slider').slick({
			dots: true,
			adaptiveHeight: true,
			slidesToShow: 1
	});
});


let plus = document.getElementsByClassName('plus');

for (var i = 0; i < plus.length; i++) {
	plus[i].addEventListener('click' , ShowAnser);
}

	function ShowAnser () {
if (this.className === "plus") {
	let med = this.parentNode.parentNode;
	let res = med.getElementsByClassName('answer');

	for (var q = 0; q < res.length; q++) {
		res[q].style.display = 'block';

	}
	this.className +="active";
}	else {
		this.className = "plus";	
			let med = this.parentNode.parentNode;
	let res = med.getElementsByClassName('answer');
		for (var q = 0; q < res.length; q++) {
		res[q].style.display = 'none';

	}
	}
}
