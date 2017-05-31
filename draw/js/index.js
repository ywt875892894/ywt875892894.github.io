/**
 * Created by wenwu on 2017/5/18.
 */
window.onload=function () {
    let line=document.querySelector('.icon-xian');
    let xuxian=document.querySelector('.icon-xuxian');
    let pencil=document.querySelector('.icon-qianbi');
    let juxin=document.querySelector('.icon-juxing');
    let duobian=document.querySelector('.icon-duobianxing');
    let style=document.querySelector('.style');
    let yuan=document.querySelector('.icon-iconfontwancheng');
    let label=document.querySelectorAll('.gongju');
    let eraser=document.querySelector('.icon-eraser');
    let clip=document.querySelector('.icon-caijian');
    let news=document.querySelector('.new');
    let back=document.querySelector('.back');
    let save=document.querySelector('.save');
    let roundJuXin=document.querySelector('.icon-rounded-corners-stroke1-s40-r08');
    let wujiao=document.querySelector('.icon-wujiaoxing');
    let mask=document.querySelector('.mask');
    let font=document.querySelector('.icon-wenzi');
    let obj=document.querySelector('canvas');
    let ctx=obj.getContext('2d');
    let tanKuang=document.querySelector('.tanKuang');
    let savebtn=document.querySelector('.savebtn');
    console.log(savebtn);
    let Nsavebtn=document.querySelector('.Nsavebtn');
    let quXiao=document.querySelector('.quXiao');
    let color=document.querySelectorAll('.color');
    let huaban=new huaBan(obj,ctx,color,mask);
    huaban.back();
    label.forEach(function (value) {
        value.addEventListener('click',function () {
            for(let i=0;i<label.length;i++){
                label[i].style.background='#F3F9FF';
            }
            value.style.background='#C6D1D8';
        },false)
    });
    color.forEach(function (value,index) {
        value.addEventListener('click',function () {
            for(let i=0;i<color.length;i++){
                color[i].style.backgroundColor='#F3F9FF';
            }
            value.style.background='#C6D1D8';
        },false)
    });
    huaban.line();
    label[0].style.background='#C6D1D8';
    color[1].style.backgroundColor='#C6D1D8';
    line.onclick=function () {
        style.innerHTML='';
        huaban.line();
    }
    xuxian.onclick=function () {
        style.innerHTML='';
        huaban.xuxian();
    }
    pencil.onclick=function () {
        style.innerHTML='';
        huaban.pencil();
    }
    juxin.onclick=function () {
        style.innerHTML='';
        huaban.juxin();
    }
    duobian.onclick=function () {
        style.innerHTML='<span>多边形边数</span><input class="input" type="text" placeholder="输入">'
        huaban.duoBian();
    }
    yuan.onclick=function () {
        style.innerHTML='';
        huaban.yuan();
    }
    font.onclick=function () {
        style.innerHTML='';
        huaban.font();
    }
    wujiao.onclick=function () {
        style.innerHTML='<span>多角形角数</span><input class="input" type="text" placeholder="输入">'
        huaban.wujiao();
    }
    roundJuXin.onclick=function () {
        style.innerHTML='<span>圆角大小</span><input class="input" type="text" placeholder="输入">'
        huaban.roundJuXin();
    }
    eraser.onclick=function () {
        style.innerHTML='';
        huaban.eraser();
    }
    clip.onclick=function () {
        style.innerHTML='';
        huaban.clip();
    }
    news.onclick=function () {
        style.innerHTML='';
        tanKuang.style.display='block';
        savebtn.onclick=function () {
            huaban.news();
            huaban.saves();
            tanKuang.style.display='none';
        }
        Nsavebtn.onclick=function () {
            huaban.news();
            tanKuang.style.display='none';
        }
        quXiao.onclick=function () {
            tanKuang.style.display='none';
        }

    }
    back.onclick=function () {
        huaban.back1();
    }
    save.onclick=function () {
        huaban.saves();
    }
}
