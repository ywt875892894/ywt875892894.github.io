/*$(function(){
	let banner=$('.banner')[0];
	banner.style.backgroundImage='url(img/2.jpg)';
})*/
$(function(){
	let banner=$('.banner')[0];
	/*let imgBox=$('.imgBox')[0];
	let lis=$('li',imgBox);*/
	let btnBox=$('.btnBox')[0];
	let btn=$('li',btnBox);
	let index=0;
	banner.style.backgroundImage='url(img/2.jpg)';
	btn[0].id='a1';
	var t=setInterval(lunbo,3000);
	let aa3=$('#a3');
	let aa4=$('#a4');
	for(let i=0;i<btn.length;i++){
		btn[i].onmouseover=function(){
			for(let i=0;i<btn.length;i++){
				btn[i].id='';
			}
			btn[i].id='a1';
			index=i;
			switch(index){
			case 0:banner.style.backgroundImage='url(img/2.jpg)';
			break;
			case 1:banner.style.backgroundImage='url(img/3.jpg)';
			break;
			case 2:banner.style.backgroundImage='url(img/4.jpg)';
			break;
			case 3:banner.style.backgroundImage='url(img/5.jpg)';
			break;
			case 4:banner.style.backgroundImage='url(img/6.jpg)';
			break;
		}
		clearInterval(t);
		}
		btn[i].onmouseout=function(){
			// setTimeout(lunbo,3000);
			t=setInterval(lunbo,3000);
		}	
	}
	function lunbo(){
		index++;
		if(index>=5){
			index=0;
		}
		switch(index){
			case 0:banner.style.backgroundImage='url(img/2.jpg)';
			break;
			case 1:banner.style.backgroundImage='url(img/3.jpg)';
			break;
			case 2:banner.style.backgroundImage='url(img/4.jpg)';
			break;
			case 3:banner.style.backgroundImage='url(img/5.jpg)';
			break;
			case 4:banner.style.backgroundImage='url(img/6.jpg)';
			break;
		}
		for(let i=0;i<btn.length;i++){
			btn[i].id='';
		}
		btn[index].id='a1';
	}
	function lunbo1(){
		index--;
		if(index<0){
			index=4;
		}
		switch(index){
			case 0:banner.style.backgroundImage='url(img/2.jpg)';
			break;
			case 1:banner.style.backgroundImage='url(img/3.jpg)';
			break;
			case 2:banner.style.backgroundImage='url(img/4.jpg)';
			break;
			case 3:banner.style.backgroundImage='url(img/5.jpg)';
			break;
			case 4:banner.style.backgroundImage='url(img/6.jpg)';
			break;
		}
		for(let i=0;i<btn.length;i++){
			btn[i].id='';
		}
		btn[index].id='a1';
	}
	aa4.onclick=function(){
			lunbo();
			clearInterval(t);
			t=setInterval(lunbo,3000);
	}
	aa3.onclick=function(){
			lunbo1();
			clearInterval(t);
			t=setInterval(lunbo,3000);
	}
	let xia1=$('.xia1');
	let hover=$('.hover');
	let xia2=document.querySelector('em>.xia2');
	for(let i=0;i<7;i++){
		hover[i].onmouseover=function(){
			xia2.style.height='229px';
			xia2.style.boxShadow='0 3px 2px #E0E0E0';
			xia1[i].style.display='block';
		}
		hover[i].onmouseout=function(){
			xia2.style.height='0px';
			xia2.style.boxShadow='';
			xia1[i].style.display='none';
		}
		xia1[i].onmouseover=function(){
			xia2.style.height='229px';
			xia2.style.boxShadow='0 3px 2px #E0E0E0';
			xia1[i].style.display='block';
		}
		xia1[i].onmouseout=function(){
			xia2.style.height='0px';
			xia2.style.boxShadow='';
			xia1[i].style.display='none';
		}
	}
/*	for(let i=7;i<9;i++){
		hover[i].onmouseover=function(){
			xia2.style.height='0px';
		}
	}*/
	let xl=$('.xl');
	let xs=$('.xs');
	for(let i=0;i<xs.length;i++){
		xs[i].onmouseover=function(){
			xl[i].style.display='block';
			xs[i].style.background='#FF6700';
		}
		xs[i].onmouseout=function(){
			xl[i].style.display='none';
			xs[i].style.background='';
		}
	}
	let a7=$('.a7')[0];
	let gouwu=$('.gouwu');
	for(let i=0;i<gouwu.length;i++){
		gouwu[i].onmouseover=function(){
			a7.style.height='99px';
		}
		gouwu[i].onmouseout=function(){
			a7.style.height='0px';
		}
	}
	let shous=$('.shous')[0];
	let a1=$('.aa1')[0];
	let a2=$('.aa2')[0];
	let a3=$('.aa3')[0];
	let a4=$('.aa4')[0];
	shous.onmouseover=function(){
		a1.style.border='1px solid #B0B0B0';
		a2.style.border='1px solid #B0B0B0';
		a2.style.borderLeft='0px';
	}
	shous.onmouseout=function(){
		a1.style.border='1px solid #E0E0E0';
		a2.style.border='1px solid #E0E0E0';
		a2.style.borderLeft='0px';
		a3.style.display='block';
		a4.style.display='block';
	}
	a1.onfocus=function(){
		a1.style.border='1px solid #FE6802';
		a2.style.border='1px solid #FE6802';
		a2.style.borderLeft='0px';
		a3.style.display='none';
		a4.style.display='none';
	}
	let kuai=$('.Kuai');
	console.log(kuai);
	let kuaiWidth=parseInt(getComputedStyle(kuai[0],null).width);
	let Lbtn=document.querySelectorAll('.dan>.a1>.a2');
	let Rbtn=document.querySelectorAll('.dan>.a1>.a3');
	kuai[1].style.left=kuaiWidth+'px';
	kuai[3].style.left=kuaiWidth+'px';
	Rbtn[0].onclick=function(){
		animate(kuai[0],{left:-kuaiWidth});
		animate(kuai[1],{left:0});
		Rbtn[0].style.color='#E0E2E5';
		Lbtn[0].style.color='#B0B0B5';
	}
	Lbtn[0].onclick=function(){
		animate(kuai[0],{left:0});
		animate(kuai[1],{left:kuaiWidth});
		Rbtn[0].style.color='#B0B0B5';
		Lbtn[0].style.color='#E0E2E5';
	}
	Rbtn[1].onclick=function(){
		animate(kuai[2],{left:-kuaiWidth});
		animate(kuai[3],{left:0});
		Rbtn[1].style.color='#E0E2E5';
		Lbtn[1].style.color='#B0B0B5';
	}
	Lbtn[1].onclick=function(){
		animate(kuai[2],{left:0});
		animate(kuai[3],{left:kuaiWidth});
		Rbtn[1].style.color='#B0B0B5';
		Lbtn[1].style.color='#E0E2E5';
	}
	let c1=document.querySelectorAll('.c1>a>img');
	let bofang=document.querySelectorAll('.c1>.bofang');
	for(let i=0;i<c1.length;i++){
		c1[i].onmouseenter=function(){
			bofang[i].style.border='2px solid #FF6700';
			bofang[i].style.background='#FF6700';
		}
		c1[i].onmouseleave=function(){
			bofang[i].style.border='2px solid white';
			bofang[i].style.background='';
		}
	}
	let dap1=document.querySelectorAll('.dap1');
	let dap1A=document.querySelectorAll('.dap1>a');
	let dap1B=document.querySelectorAll('.select1>.a2');
	let dap2=document.querySelectorAll('.dap2');
	let dap2A=document.querySelectorAll('.dap2>a');
	let dap2B=document.querySelectorAll('.select2>.a2');
	let dap3=document.querySelectorAll('.dap3');
	let dap3A=document.querySelectorAll('.dap3>a');
	let dap3B=document.querySelectorAll('.select3>.a2');
	for(let i=0;i<dap1.length;i++){
		dap1[0].style.borderBottom='2px solid #FF6700';
		dap1A[0].style.color='#FF6700';
		dap1B[0].style.display='block';
		dap1[i].onmouseenter=function(){
			for(let i=0;i<dap1.length;i++){
				dap1[i].style.borderBottom='';
				dap1A[i].style.color='black';
				dap1B[i].style.display='none';
			}
			dap1[i].style.borderBottom='2px solid #FF6700';
			dap1A[i].style.color='#FF6700';
			dap1B[i].style.display='block';
		}
	}
	for(let i=0;i<dap2.length;i++){
		dap2[0].style.borderBottom='2px solid #FF6700';
		dap2A[0].style.color='#FF6700';
		dap2[i].onmouseenter=function(){
			for(let i=0;i<dap2.length;i++){
				dap2[i].style.borderBottom='';
				dap2A[i].style.color='black';
				dap2B[i].style.display='none';
			}
			dap2[i].style.borderBottom='2px solid #FF6700';
			dap2A[i].style.color='#FF6700';
			dap2B[i].style.display='block';
		}
	}
	for(let i=0;i<dap3.length;i++){
		dap3[0].style.borderBottom='2px solid #FF6700';
		dap3A[0].style.color='#FF6700';
		dap3[i].onmouseenter=function(){
			for(let i=0;i<dap3.length;i++){
				dap3[i].style.borderBottom='';
				dap3A[i].style.color='black';
				dap3B[i].style.display='none';
			}
			dap3[i].style.borderBottom='2px solid #FF6700';
			dap3A[i].style.color='#FF6700';
			dap3B[i].style.display='block';
		}
	}

	// 内容
  let header13=document.querySelector('.header13-top');
  let header133=document.querySelector('.header13');
  let tt=document.querySelector('.tt');
  let ttt=document.querySelectorAll('.ttt');
  let dy=document.querySelector('.dy'); 
  let bnn=document.querySelector('.btnn');
  let bnns=document.querySelectorAll('.liiii');
  // console.log(bnns);
  let widthss=parseInt(getComputedStyle(ttt[0],null).width);
  // console.log(widthss);
  let left3=document.querySelector('.left3');
   // console.log(left3);
  let right3=document.querySelector('.right3');
  // console.log(right3);
  let next3=0;
  let current3=0;
  let flag3=true;
  let t3;
  let flagg;
  let flaggg;



 for(var i=0;i<bnns.length;i++){
    // 1.用Index把每次循环的i保存下来
    bnns[i].index3=i;
    bnns[i].onclick=function(){
       if(this.index3==current3){
        return;
      }
        
        this.className='hot3 liiii';
        bnns[current3].className='liiii';
      // 图片
         

        if(this.index3>current3){
          ttt[this.index3].style.left=widthss+'px';
          animate(ttt[this.index3],{left:0});
          animate(ttt[current3],{left:-widthss});
        }
         else if(this.index3<current3){
          ttt[this.index3].style.left=-widthss+'px';
          animate(ttt[this.index3],{left:0});
          animate(ttt[current3],{left:widthss});
         }
         current3=next3=this.index3;
      }
    }

 for(let i=0;i<ttt.length;i++){
     if(i==0){
        continue;
     }
    ttt[i].style.left=widthss+'px';
 }

   
   // t3=setInterval(move3,2000);
   function move3(){
       
       if(next3>2){
        return;
       }
        next3++;
         
         ttt[next3].style.left=widthss+'px';
         bnns[next3].className='hot3 liiii';
         bnns[current3].className='liiii';
         
         animate(ttt[next3],{left:0});
         animate(ttt[current3],{left:-widthss});     
             current3=next3;            
     
         
  }


   function move3D(){
    if(next3<=0){
        return;
       }
    next3--;

       ttt[next3].style.left=-widthss+'px';
      bnns[next3].className='hot3 liiii';
      bnns[current3].className='liiii';
      
      animate(ttt[next3],{left:0});
      animate(ttt[current3],{left:widthss});   
      current3=next3;    

      
    
  }

  left3.onclick=function(){      
           move3D();    
 }
  
  right3.onclick=function(){   
           move3();    
  }







  let header134=document.querySelector('.header13-top2');
  let header1334=document.querySelector('.header13');
  let tt4=document.querySelector('.tt4');
  let ttt4=document.querySelectorAll('.ttt4');
  let dyy=document.querySelector('.dyy'); 
  let bnn4=document.querySelector('.btnn4');
  let bnns4=document.querySelectorAll('.liiii4');
  // console.log(bnns);
  let widthsss=parseInt(getComputedStyle(ttt4[0],null).width);
  // console.log(widthss);
  let left4=document.querySelector('.left4');
   // console.log(left3);
  let right4=document.querySelector('.right4');
  // console.log(right3);
  let next4=0;
  let current4=0;
  let flag4=true;
  let t4;




 left4.onclick=function(){
    move4();

      
 }
  
  right4.onclick=function(){
      move4D();
  }

 for(var i=0;i<bnns.length;i++){
    // 1.用Index把每次循环的i保存下来
    bnns4[i].index4=i;
    bnns4[i].onclick=function(){
       if(this.index4==current4){
        return;
      }
        
        this.className='hot4 liii4';
        bnns4[current4].className='liii4';
      // 图片
         

        if(this.index4>current4){
          ttt[this.index4].style.left=widthsss+'px';
          animate(ttt4[this.index4],{left:0});
          animate(ttt4[current4],{left:-widthsss});
        }
         else if(this.index4<current4){
          ttt4[this.index4].style.left=-widthsss+'px';
          animate(ttt4[this.index4],{left:0});
          animate(ttt4[current4],{left:widthsss});
         }
         current4=next4=this.index4;
      }
    }

 for(let i=0;i<ttt4.length;i++){
     if(i==0){
      continue;
     }
    ttt4[i].style.left=widthsss+'px';
 }

 // 自动正播
   // t3=setInterval(move3,2000);
   function move4(){
        if(next4<=0){
        return;
       }
    	next4--;
    	console.log(next4);
    // 就位
    // 按钮
    bnns4[next4].className='hot4 liiii4';
    bnns4[current4].className='liiii4';
    ttt4[next4].style.left=widthsss+'px';
    // 动画 current left:-width
    //      next left:0
    animate(ttt4[next4],{left:0},function(){
      flag4=true;
    });
    animate(ttt4[current4],{left:-widthsss});
    current4=next4;
  }



// 自动倒播
   function move4D(){
	    if(next4>2){
	        return;
	       }
        next4++;
        console.log(next4);
     bnns4[next4].className='hot4 liiii4';
     bnns4[current4].className='liiii4';
    ttt4[next4].style.left=-widthsss+'px';
    animate(ttt4[next4],{left:0},function(){
      flag4=true;
    });
    animate(ttt4[current4],{left:widthsss});
    current4=next4;
  }


  let header135=document.querySelector('.header13-top3');
  let header1335=document.querySelector('.header13');
  let tt5=document.querySelector('.tt5');
  let ttt5=document.querySelectorAll('.ttt5');
  let dyyy=document.querySelector('.dyyy'); 
  let bnn5=document.querySelector('.btnn5');
  let bnns5=document.querySelectorAll('.liiii5');
  // console.log(bnns5);
  let widthssss=parseInt(getComputedStyle(ttt5[0],null).width);
  // console.log(widthss);
  let left5=document.querySelector('.left5');
   // console.log(left3);
  let right5=document.querySelector('.right5');
  // console.log(right3);
  let next5=0;
  let current5=0;
  let flag5=true;
  let t5;

/* header133.onmouseenter=function(){
  clearInterval(t3);
 }
  header133.onmouseleave=function(){
  t3=setInterval(move3,2000);
 }*/



 left5.onclick=function(){
    move5();
      
 }
  
  right5.onclick=function(){
      move5D();
  }

 for(var i=0;i<bnns5.length;i++){
    // 1.用Index把每次循环的i保存下来
    bnns5[i].index5=i;
    bnns5[i].onclick=function(){
       if(this.index5==current5){
        return;
      }
        
        this.className='hot5 liii5';
        bnns5[current5].className='liii5';
      // 图片
         

        if(this.index5>current5){
          ttt5[this.index5].style.left=widthssss+'px';
          animate(ttt5[this.index5],{left:0});
          animate(ttt5[current5],{left:-widthssss});
        }
         else if(this.index5<current5){
          ttt5[this.index5].style.left=-widthssss+'px';
          animate(ttt5[this.index5],{left:0});
          animate(ttt5[current5],{left:widthssss});
         }
         current5=next5=this.index5;
      }
    }

 for(let i=0;i<ttt5.length;i++){
     if(i==0){
      continue;
     }
    ttt5[i].style.left=widthssss+'px';
 }

   

// 自动正播
   // t3=setInterval(move3,2000);
   function move5(){
     if(next5<=0){
        return;
       }
    	next5--;
    // 就位
    // 按钮
    bnns5[next5].className='hot5 liiii5';
    bnns5[current5].className='liiii5';
    ttt5[next5].style.left=widthssss+'px';
    // 动画 current left:-width
    //      next left:0
    animate(ttt5[next5],{left:0},function(){
      flag5=true;
    });
    animate(ttt5[current5],{left:-widthssss});
    current5=next5;
  }



// 自动倒播
   function move5D(){
     if(next5>2){
        return;
       }
    	next5++;
     bnns5[next5].className='hot5 liiii5';
     bnns5[current5].className='liiii5';
    ttt5[next5].style.left=-widthssss+'px';
    animate(ttt5[next5],{left:0},function(){
      flag5=true;
    });
    animate(ttt5[current5],{left:widthssss});
    current5=next5;
  }
  let header136=document.querySelector('.header13-top4');
  let header1336=document.querySelector('.header13');
  let tt6=document.querySelector('.tt6');
  let ttt6=document.querySelectorAll('.ttt6');
  let dyyyy=document.querySelector('.dyyyy'); 
  let bnn6=document.querySelector('.btnn6');
  let bnns6=document.querySelectorAll('.liiii6');
  // console.log(bnns6);
  let widthsssss=parseInt(getComputedStyle(ttt6[0],null).width);
  // console.log(widthss);
  let left6=document.querySelector('.left6');
   // console.log(left3);
  let right6=document.querySelector('.right6');
  // console.log(right3);
  let next6=0;
  let current6=0;
  let flag6=true;
  let t6;

/* header133.onmouseenter=function(){
  clearInterval(t3);
 }
  header133.onmouseleave=function(){
  t3=setInterval(move3,2000);
 }*/



 left6.onclick=function(){
    move6();    
 }
  
  right6.onclick=function(){
      move6D();
  }

 for(var i=0;i<bnns6.length;i++){
    // 1.用Index把每次循环的i保存下来
    bnns6[i].index6=i;
    bnns6[i].onclick=function(){
       if(this.index6==current6){
        return;
      }
        
        this.className='hot6 liii6';
        bnns6[current6].className='liii6';
      // 图片
         

        if(this.index6>current6){
          ttt6[this.index6].style.left=widthssss+'px';
          animate(ttt6[this.index6],{left:0});
          animate(ttt6[current6],{left:-widthsssss});
        }
         else if(this.index6<current6){
          ttt6[this.index6].style.left=-widthsssss+'px';
          animate(ttt6[this.index6],{left:0});
          animate(ttt6[current6],{left:widthsssss});
         }
         current6=next6=this.index6;
      }
    }

 for(let i=0;i<ttt6.length;i++){
     if(i==0){
      continue;
     }
    ttt6[i].style.left=widthsssss+'px';
 }

   

// 自动正播
   // t3=setInterval(move3,2000);
   function move6(){
     if(next6<=0){
        return;
       }
    	next6--;
    // 就位
    // 按钮
    bnns6[next6].className='hot6 liiii6';
    bnns6[current6].className='liiii6';
    ttt6[next6].style.left=widthsssss+'px';
    // 动画 current left:-width
    //      next left:0
    animate(ttt6[next6],{left:0},function(){
      flag6=true;
    });
    animate(ttt6[current6],{left:-widthsssss});
    current6=next6;
  }



// 自动倒播
   function move6D(){
     if(next6>2){
        return;
       }
    	next6++;
     bnns6[next6].className='hot6 liiii6';
     bnns6[current6].className='liiii6';
    ttt6[next6].style.left=-widthsssss+'px';
    animate(ttt6[next6],{left:0},function(){
      flag6=true;
    });
    animate(ttt6[current6],{left:widthsssss});
    current6=next6;
  }
})