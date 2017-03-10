/*
第一阶段

在页面中，有一个单行输入框，一个按钮，输入框中用来输入
用户的兴趣爱好，允许用户用半角逗号来作为不同爱好的分隔。
当点击按钮时，把用户输入的兴趣爱好，按照上面所说的分隔
符分开后保存到一个数组，过滤掉空的、重复的爱好，在按钮
下方创建一个段落显示处理后的爱好。

第二阶段

单行变成多行输入框，一个按钮，输入框中用来输入用户的兴趣爱好，
允许用户用换行、空格（全角/半角）、逗号（全角/半角）、顿号、
分号来作为不同爱好的分隔。
*/

function arrange(strHobby){
	var arrHobby = strHobby.split(/[；;、，,\s\n]/);		//正则分隔字符串得到数组
	console.log(arrHobby)
	for (var i = 0; i < arrHobby.length-1; i++) {	//将第i项与后面每一行j比较
		for (var j = i + 1; j < arrHobby.length; j++) {
			if ((arrHobby[i] == arrHobby[j]) || arrHobby[j] == "" ||arrHobby[j] == " ") {
				arrHobby.splice(j,1);	//发现数组相同，为空，为空格时删除掉
				j--;		//后一项数组会前移，需再比较
			}
		}
	}
	if (arrHobby[0] == "" || arrHobby[0] == " ") {
		arrHobby.splice(0,1);		//上面for循环只能删除后项j，所以第一项需再检查
	}
	console.log(arrHobby)
	return arrHobby;
}

var btn = document.getElementById("btn");
btn.onclick = function(){
	var strHobby = document.getElementById("hobby").value;
	var result = document.getElementById("result");
	result.firstChild.nodeValue = arrange(strHobby);
}

/*示例字符串1：
你好；youyong;dasf、24243，@￥#%￥,hhh youyong
youyong, ,

示例字符串2：
 大师傅(第一个字符是空格) 
*/