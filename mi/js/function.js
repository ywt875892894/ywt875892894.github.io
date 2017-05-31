/*
$('.box')
$('#box')
$('div')
$(function(){})
 */	
	function $(selector,ranger=document){
		//判断参数的类型  字符串还是函数
		if(typeof selector=='string'){
			//去掉字符串的空白符
			let select=selector.trim();
			//判断参数的第一个字符是啥
			if(select.charAt(0)=='.'){
				//获取类名的属性并返回这个值           截取字符串的名字部分
				return ranger.getElementsByClassName(select.substring(1));
			}else if(select.charAt(0)=='#'){
				//获取该ID名的属性并返回这个值    截取字符串的名字部分
				return document.getElementById(select.substring(1));
			  //利用正则表达式判断标签名的格式是否正确  第一位a-z 第二位a-z,1-6 最少0个最多8个
			}else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
				//返回属性
				return ranger.getElementsByTagName(select);
			}
		}
		//判断数据类型是否是函数
		if(typeof selector=='function'){
			//在window.onload环境下运行该函数
			window.onload=function(){
				selector();
			}
		}
	}

	function getStyle(obj,attr){
		if(window.getComputedStyle){
			return getComputedStyle(obj,null)[attr];
		}else{
			return obj.currentStyle[attr];
		}
	}

/*   用来获取或设置某一个元素的内容
	
*/
function html(obj,content){
	if(content){
		obj.innerHTML=content;
	}else{
		return obj.innerHTML;
	}
}