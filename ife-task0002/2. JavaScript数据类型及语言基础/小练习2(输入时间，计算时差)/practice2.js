/*
任务描述

实现一个倒计时功能。
1.界面首先有一个文本输入框，允许按照特定的格式YYYY-MM-DD输入年月日；
2.输入框旁有一个按钮，点击按钮后，计算当前距离输入的日期的00:00:00有多少时间差
3.在页面中显示，距离YYYY年MM月DD日还有XX天XX小时XX分XX秒
4.每一秒钟更新倒计时上显示的数
5.如果时差为0，则倒计时停止
*/
var clock = document.getElementById("clock");
var count = document.getElementById("count");
var now,year,mon,date,h,m,s;//外部声明全局变量，这样在定时器内修改后，count()函数还能取到
//当前时间
setInterval(function(){
	now = new Date();
	year = now.getFullYear();
	mon = now.getMonth() + 1;
	date = now.getDate(); 
	h = now.getHours();
	m = now.getMinutes();
	s = now.getSeconds();
	var textNode = document.createTextNode("当前时间为：" + year + "年" + mon + "月" + date + "日" + h +"时" + m + "分" + s + "秒");
	clock.replaceChild(textNode, clock.firstChild);
},10)

//计算时差
function countTime(){
	var year2 = document.getElementById("year").value;
	var mon2 = document.getElementById("month").value;
	var date2 = document.getElementById("date").value;
	var year3 = year - year2;
	var mon3 = mon - mon2;
	var date3 = date - date2;
//	console.log(mon)
//	console.log(mon2)
//	console.log(mon3)
	var textNode3 = document.createTextNode("时差为：" + year3 + "年" + mon3 + "月" + date3 + "日" + h +"时" + m + "分" + s + "秒");
	count.replaceChild(textNode3, count.firstChild);
}

var btn = document.getElementById("btn");
btn.onclick = function(){
	setInterval(countTime, 10);		//同步更新时差
}
//???????????????????????????????????????????
//没有做时间的进制运算，并且过去和将来的时间，在每一位上都可能大于或小于现在的时间。
//所以现在这种简单加减是错的。