
$(function(){FastClick.attach(document.body)});

$(document).ready(function(){

	$("#loader-wrapper").fadeOut(1500);

});
document.querySelector("#choujiang").addEventListener("click",function(){
	$('#mask2').css('display','block')

});

document.querySelector("#mask2 .mask2-title .cls").addEventListener("click",function(){
	$('#mask2').css('display','none')

});