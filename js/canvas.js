$(function () {
    let canvas=$('canvas');
    let ctx1=canvas[0].getContext('2d');
    let ctx2=canvas[1].getContext('2d');
    let ctx3=canvas[2].getContext('2d');
    let ctx4=canvas[3].getContext('2d');
        Percent(ctx1,85,20);
        Percent(ctx2,80,20);
        Percent(ctx3,70,20);
        Percent(ctx4,70,20);
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
            ctx4.arc(100,80,60,-Math.PI/2,angir-Math.PI/2,false);
            ctx4.stroke();
            ctx4.fillText(`${num}%`,100,90,40);
        }
    }
})
