var sIndex = 1;
showDivs(sIndex);

function plusDivs(n) {
	showDivs(sIndex += n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("mySlides");
	if (n > x.length) {
		sIndex = 1;
	}
	if (n < 1) {
		sIndex = x.length;
	}
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	x[sIndex - 1].style.display = "block";
}
