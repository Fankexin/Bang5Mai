window.onload = function(){
	var head = document.getElementsByClassName('head')[0];
	window.onscroll = function(){
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st>180){
			head.style.position = 'fixed';
		}else{
			head.style.position = 'static';
		}
	}
}

var ul = document.getElementsByClassName("ul")[0];
console.log(ul.offsetHeight);
function show(){
	var top = ul.offsetTop - 1;
	ul.style.top = top +"px";
	if (-1 * ul.offsetTop >= ul.offsetHeight / 2) {
		ul.style.top = 0;
	}
}
var t = setInterval(show,20);
var li = ul.getElementsByTagName("li");
for (var i = 0; i < li.length; i++) {
	li[i].onmouseout = function () {
		t = setInterval(show, 20);
    };
    li[i].onmouseover = function () {
        clearInterval(t);
    };
}

var rightBottom = document.getElementsByClassName("rightBottom")[0];
var span = rightBottom.getElementsByTagName("span")[0];
var option = rightBottom.getElementsByTagName("option");
var select = rightBottom.getElementsByTagName("select")[0];
select.onchange = function(){
	span.innerHTML = '￥' + select.value;
}

function getStyle(obj, attr) { //返回值带有单位px
  	if (obj.currentStyle) {
  		return obj.currentStyle[attr];
  	} else {
 		return getComputedStyle(obj, null)[attr];
	}
}

function animate(obj, json, callback) {
  	clearInterval(obj.timer);
  	obj.timer = setInterval(function () {
  		var flag = true;
  		for (var attr in json) {
  			(function (attr) {
  				if (attr == "opacity") {
  					var now = parseInt(getStyle(obj, attr) * 100);
  					var dest = json[attr] * 100;
  				} else {
  					var now = parseInt(getStyle(obj, attr));
  					var dest = json[attr];
  				}
  				var speed = (dest - now) / 6;
  				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
  				if (now != dest) {
  					flag = false;
  					if (attr == "opacity") {
  						obj.style[attr] = (now + speed) / 100;
  					} else {
  						obj.style[attr] = now + speed + "px";
  					}
  				}
  			})(attr);
  		}
  		if (flag) {
  			clearInterval(obj.timer);
  			callback && callback(); //如果回调函数存在，就调用回调函数
  		}
  	}, 30);
}
var box = document.getElementsByClassName('centerTop')[0];
var slider = document.getElementsByClassName('slider')[0];
var left = document.getElementsByClassName('point1')[0];
var right = document.getElementsByClassName('point2')[0];
var oNavlist = document.getElementsByClassName('nav')[0].children;
var index = 1;
var timer;
var isMoving = false;
box.onmouseover = function(){
	animate(left,{
		opacity: 0.6
	})
	animate(right,{
		opacity: 0.6
	})
	clearInterval(timer);
}
box.onmouseout = function(){
	animate(left,{
		opacity: 0
	})
	animate(right,{
		opacity: 0
	})
	timer = setInterval(next,3000);
}
right.onclick = next;
left.onclick = prev;
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	navmove();
	animate(slider,{
		left: -800 * index
	},function(){
		if(index==7){
			slider.style.left = '-800px';
			index = 1;
		}
		isMoving = false;
	});
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	navmove();
	animate(slider,{
		left: -800 * index
	},function(){
		if(index==0){
			slider.style.left = '-4800px';
			index = 6;
		}
		isMoving = false;
	});
}
for(var i=0;i< oNavlist.length;i++){
	oNavlist[i].index = i;
	oNavlist[i].onclick = function(){
		index = this.index + 1;
		navmove();
		animate(slider,{
			left:-800 * index
		});
	}
}
function navmove(){
	for(var i=0;i<oNavlist.length;i++){
		oNavlist[i].className = "";
	}
	if(index>6){
		oNavlist[0].className = "active";
	}else if(index<=0){
		oNavlist[5].className = "active";
	}else{
		oNavlist[index-1].className = "active";
	}
}
timer = setInterval(next,3000);
