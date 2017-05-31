function jiaZai(kuai,Class,height){
	let ch=window.innerHeight;
	let floors=document.querySelectorAll(kuai);
	let arr=[];
	floors.forEach(function(value,index){
		arr.push(value.offsetTop);
	})
	window.onscroll=function(){
		let tops=document.body.scrollTop;
		arr.forEach(function(value,index){
			if(tops+ch>value+height){
				let floor=document.getElementsByClassName(Class)[index];
				let imgs=floor.getElementsByTagName('img')
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].title;
				}
			}
		})
	}
}
jiaZai('.zhu','zhu',200);