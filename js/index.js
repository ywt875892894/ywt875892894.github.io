$(function(){
    $('#dowebok').fullpage({
        sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90','#000','#f40','$4f53f'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
        menu: '#mune',
        afterLoad:function (anchorLink, index) {
            console.log(index);
           if(index==2){
                $('.bg').animate({opacity:1});
               $('.bg').find('.left').delay(300).animate({left:0},1000);
               $('.bg').find('.right').delay(300).animate({right:0},1000);
           }
           if(index==3){
               $('.main .head1').animate({top:0});
               $('.main .head1 .hua').delay(1000).animate({opacity:1},1000);
               $($('.tech1')[0]).delay(300).animate({opacity:1,left:80},800,function () {
                   Percent(ctx1,85,15);
               });
               $($('.tech1')[1]).delay(300).animate({opacity:1,right:80},800,function () {
                   Percent(ctx2,50,15);
               });
               $($('.tech1')[2]).delay(400).animate({opacity:1,left:80,bottom:-50},800,function () {
                   Percent(ctx3,75,15);
               });
               $($('.tech1')[3]).delay(400).animate({opacity:1,right:80,bottom:-50},800,function () {
                   Percent(ctx4,65,15);
               });
           }
           if(index==4){
               $('.main1 .head1').animate({top:0});
               $('.main1 .head1 .hua').delay(1000).animate({opacity:1},1000);
               $('.main1 .left').delay(500).animate({left:100});
               $('.main1 .right').delay(500).animate({right:0});
           }
           if(index==5){
               $('.main2 .head2').animate({top:0});
               $('.main2 .head2 .hua').delay(1000).animate({opacity:1},1000);
           }
        }
    });
    let canvas=$('canvas');
    console.log(canvas);
    let ctx1=canvas[0].getContext('2d');
    let ctx2=canvas[1].getContext('2d');
    let ctx3=canvas[2].getContext('2d');
    let ctx4=canvas[3].getContext('2d');
    function Percent(ctx4,number,speed) {
        let end=0;
        let num=0;
        if(number||speed){
            end=number;
        }else{
            alert('请重新输入数值');
            return;
        }
        let t=setInterval(percent,speed);
        ctx4.font='bold 30px white';
        ctx4.fillStyle='white';
        ctx4.textAlign='center';
        function percent() {
            ctx4.lineWidth=10;
            ctx4.lineJoin='round';
            ctx4.strokeStyle='#fff';
            num++;
            ctx4.clearRect(0,0,300,300);
            if(num==end){
                clearInterval(t);
            }
            ctx4.beginPath();
            let angir=(num*360/100)*Math.PI/180;
            ctx4.arc(100,90,50,-Math.PI/2,angir-Math.PI/2,false);
            ctx4.stroke();
            ctx4.fillText(`${num}%`,100,100,40);
        }
    }
    let right=$('.main1 .right')
    let btn=$('.btn');
    let a1=$('.a1');
    let string=right[0].innerHTML;
    for(let i=0;i<btn.length;i++){
        $(btn[i]).attr('num',i);
    }
    btn[0].style.background='#00A78E';
    btn.on('click',function () {
        btn.css({background:''})
        $(this).css({background:'#00A78E'})
        switch(parseInt($(this).attr('num'))){
            case 0: right[0].innerHTML=string;
                break;
            case 1:right[0].innerHTML=`<div class="a1">
                            <a href="iPhone/index.html">
                                <img src="img/c1.png" alt="">
                                <span>IPhone</span>
                            </a>
                        </div>
                        <div class="a1">
                            <a href="mi/index.html">
                                <img src="img/c2.png" alt="">
                                <span>小米</span>
                            </a>
                        </div>
                        <div class="a1">
                            <a href="mao/index.html">
                                <img src="img/c3.png" alt="">
                                <span>天猫</span>
                            </a>
                        </div>
                        <div class="a1">
                            <a href="xiangyin/index.html">
                                <img src="img/c4.png" alt="">
                                <span>响应式</span>
                            </a>
                        </div>`;
            break;
            case 2:right[0].innerHTML=`<div class="a1">
                            <a href="poke/poke.html">
                                <img src="img/c6.png" alt="">
                                <span>纸牌游戏</span>
                            </a>
                        </div>
                        <div class="a1">
                            <a href="fontgame/fontGame.html">
                                <img src="img/c8.png" alt="">
                                <span>打字游戏</span>
                            </a>
                        </div>`;
            break;
            case 3:right[0].innerHTML=`<div class="a1">
                            <a href="music/audio.html">
                                <img src="img/c5.png" alt="">
                                <span>音乐播放器</span>
                            </a>
                        </div>
                        <div class="a1">
                            <a href="draw/huaban.html">
                                <img src="img/c7.png" alt="">
                                <span>画板</span>
                            </a>
                        </div>`;
        }
    })
});