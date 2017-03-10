/*
实现一个可拖拽交互的界面
如示例图，左右两侧各有一个容器，里面的选项可以通过拖拽来左右移动
被选择拖拽的容器在拖拽过程后，在原容器中消失，跟随鼠标移动
注意拖拽释放后，要添加到准确的位置
拖拽到什么位置认为是可以添加到新容器的规则自己定
注意交互中良好的用户体验和使用引导
*/

var container = document.getElementsByClassName("container");

//////拖动函数///////
var dragging = null;//不能写在函数内，否则移动鼠标会不停设null
var diffX, diffY;
function dragDrop(event){		
		var event = event ? event : window.event;
		var target = event.target || event.srcElement;
		switch(event.type){
			case "mousedown":
				dragging = target;
				diffX = event.clientX - target.offsetLeft;
				diffY = event.clientY - target.offsetTop;
				dragging.style.position = "absolute";
				dragging.style.opacity = "0.5";
				return false;		//防止按下鼠标移动时选中页面文字？？？？？？？？？？
			case "mousemove":
				if (dragging != null) {
					dragging.style.left = event.clientX - diffX + "px"; //event对象发生的位置
					dragging.style.top = event.clientY- diffY + "px";
				}
				break;
			case "mouseup":
				changeDom();
				dragging.style.opacity = "1";
				dragging = null;
				break;
		}
}

////////添加删除节点函数//////

function changeDom(){
	console.log(this)
	if (true) {}
}

//？？？？？？？？？？？？？？通过类似this.id来判别
//？？？是否能点击到下层，尽管下层不是其父容器




var draggable = document.getElementsByClassName("draggable");
for (var i = 0; i < draggable.length; i++) {	//oblong为由节点组成的数组，不能之间添加事件监听
	draggable[i].onmousedown = draggable[i].onmouseup = draggable[i].onmousemove = dragDrop;
}






