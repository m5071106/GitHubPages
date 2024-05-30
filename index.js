// for onload
document.getElementById("eng").style.display = "none";

// for language selector
document.getElementById("engLink").addEventListener("click", function(){
	document.getElementById("eng").style.display = "block";
	document.getElementById("jpn").style.display = "none";
});
document.getElementById("jpnLink").addEventListener("click", function(){
	document.getElementById("jpn").style.display = "block";
	document.getElementById("eng").style.display = "none";
});
