var leftBottom = document.getElementsByClassName("leftBottom")[0];
var sp0 = document.getElementsByClassName("sp0")[0];
var sp1 = document.getElementsByClassName("sp1")[0];
var spanl = document.getElementsByClassName("spanl")[0];
var spanr = document.getElementsByClassName("spanr")[0];
var div = document.getElementsByClassName("leftTop")[0].children[0];
div.style.left = 0;
sp0.onmouseover = function(){
	sp0.setAttribute("style","border: 3px solid #ff9003");
	sp1.setAttribute("style","border: none");
	div.style.left = 0;
}
sp1.onmouseover = function(){
	sp1.setAttribute("style","border: 3px solid #ff9003");
	sp0.setAttribute("style","border: none");
	div.setAttribute("style","left:-410px");
}
spanl.onclick = next;
spanr.onclick = next;
function next(){
	if(div.style.left == "0px"){
		sp1.setAttribute("style","border: 3px solid #ff9003");
		sp0.setAttribute("style","border: none");
		div.setAttribute("style","left:-410px");
		return;
	}else{
		sp0.setAttribute("style","border: 3px solid #ff9003");
		sp1.setAttribute("style","border: none");
		div.setAttribute("style","left:0");
		return;
	}
}

var content1 = document.getElementsByClassName("b2")[0];
var content2 = document.getElementsByClassName("b2")[1];
var content3 = document.getElementsByClassName("d3")[0];
content1.onclick = function(){
	content1.className = "b2 b3";
	content2.className = "b2";
	content3.innerHTML = "150ml";
}
content2.onclick = function(){
	content2.className = "b2 b3";
	content1.className = "b2";
	content3.innerHTML = "200ml";
}

var plus = document.getElementsByClassName("c3")[1];
var minus = document.getElementsByClassName("c3")[0];
var num = document.getElementsByClassName("c4")[0];
var a = parseInt(num.value);
plus.onclick = function(){
	var a = parseInt(num.value);
	if(a>0 && a<5){
		num.value = a + 1;
	}
	if(a == 0){
		minus.setAttribute("style","cursor:not-allowed");
		plus.setAttribute("style","cursor:pointer");
	}else if(a == 4){
		plus.setAttribute("style","cursor:not-allowed");
		minus.setAttribute("style","cursor:pointer");
	}else{
		plus.setAttribute("style","cursor:pointer");
		minus.setAttribute("style","cursor:pointer");
	}
}
minus.onclick = function(){
	var a = parseInt(num.value);
	if(a>1 && a<6){
		num.value = a - 1;
	}
	if(a == 2){
		minus.setAttribute("style","cursor:not-allowed");
		plus.setAttribute("style","cursor:pointer");
	}else{
		plus.setAttribute("style","cursor:pointer");
		minus.setAttribute("style","cursor:pointer");
	}
}

var e1 = document.getElementsByClassName("e1")[0];
var e2 = document.getElementsByClassName("e2")[0];
e1.setAttribute("onclick","ShowDiv('MyDiv','fade')");
e2.setAttribute("onclick","ShowDiv('MyDiv','fade')");
function ShowDiv(show_div,bg_div){
	var scrollHeight = document.body.scrollHeight; //文档高度
	document.getElementById(bg_div).style.height=scrollHeight+'px';
	
	document.getElementById(show_div).style.display='block';
	document.getElementById(bg_div).style.display='block';
};
//关闭弹出层
function CloseDiv(show_div,bg_div)
{
	document.getElementById(show_div).style.display='none';
	document.getElementById(bg_div).style.display='none';
};
