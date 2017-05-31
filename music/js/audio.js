    window.onload=function () {
        let radio=document.querySelector('audio');
        let playBtn=document.querySelector('.play');
        let prev=document.querySelector('.prev');
        let next=document.querySelector('.next');
        let song=document.querySelector('.song');
        let auther=document.querySelector('.auther');
        let lyrics=document.querySelector('.lyrics');
        let ctime=document.querySelector('.ctime');
        let dtime=document.querySelector('.dtime');
        let jdt=document.querySelector('.progress>.pSon');
        let sound=document.querySelector('.fullSon');
        let voice=document.querySelector('.sound');
        let full=document.querySelector('.full');
        let progress=document.querySelector('.progress');
        let body=document.querySelector('body');
        let left=document.querySelector('.intr>.left');
        let span1=document.querySelectorAll('.middle>.right>span')[0];
        let span2=document.querySelectorAll('.middle>.right>span')[1];
        let voiceBtn=document.querySelector('.right>.full>.fullSon>.after');
        console.log(voiceBtn);
        let index=0;
        let i=0;
        let lyric='';
        let x=0;
        let arr=['url("images/1.jpg")','url("images/2.jpg")','url("images/3.jpg")','url("images/4.jpg")','url("images/1.jpg")'];
        duqu(database[index]);
        function duqu(obj) {
            let aa=obj;
            lyric='';
            radio.src=aa.src;
            song.innerText=aa.songs;
            auther.innerText=aa.name;
            dtime.innerText=aa.alltime;
            left.style.backgroundImage=`url(${aa.photo})`;
            span1.innerText=aa.songs;
            span2.innerText=aa.name;
            body.style.backgroundImage=arr[index];
            /*aa.lyrics.forEach(function (value,index) {
                lyric+=`<li>${value.lyric}</li>`
            });*/
            for(let j=0;j<aa.lyrics.length;j++){
                lyric+=`<li>${aa.lyrics[j].lyric}</li>`
            }
            lyrics.innerHTML='';
            lyrics.innerHTML=lyric;
        }
        playBtn.onclick=function () {
            if(radio.paused){
                radio.play();
                playBtn.classList.toggle("icon-zanting");
            }else {
                radio.pause();
                playBtn.classList.toggle("icon-zanting");
            }
        }
        next.onclick=function () {
            index++;
            if(index>database.length-1){
                index=0;
            }
            duqu(database[index]);
            playBtn.classList.remove('icon-zanting');
        }
        prev.onclick=function () {
            index--;
            if(index<0){
                index=database.length-1;
            }
            duqu(database[index]);
            playBtn.classList.remove('icon-zanting');
        }
        progress.onclick=function (e) {
            radio.currentTime=2.4;
            console.log(parseInt(e.offsetX/500*radio.duration));
            console.log(typeof radio.currentTime);
        }
        radio.ontimeupdate=function () {
            current=ctime.innerText=changeTime(radio.currentTime);
            duration=changeTime(radio.duration);
            let jindu= (radio.currentTime/radio.duration)*500;
            jdt.style.width=jindu+'px';
            database[index].lyrics.forEach(function (value,index) {
                if(current==value.time){
                    i=index;
                }
            })
            lyric="";
            if(i<3){
                x=0;
            }else{
                x=i-2;
            }
            for(let j=x;j<database[index].lyrics.length;j++){
                if(j==i){
                    lyric+=`<li class="hot">${database[index].lyrics[j].lyric}</li>`
                }else {
                lyric+=`<li>${database[index].lyrics[j].lyric}</li>`
                }
            }
            lyrics.innerHTML='';
            lyrics.innerHTML=lyric;
            sound.style.width=radio.volume*100+'px';
            if(radio.ended){
                index++;
                if(index>database.length-1){
                    index=0;
                }
                duqu(database[index]);
            }
        }
        function changeTime(time) {
            let m=Math.floor(time/60)>9?Math.floor(time/60):`0${Math.floor(time/60)}`;
            let s=Math.floor(time%60)>9?Math.floor(time%60):`0${Math.floor(time%60)}`;
            return `${m}:${s}`;
        }
        voice.onclick=function () {
            if(radio.volume>0){
                radio.volume=0;
                voice.classList.toggle("icon-jingyin");
                sound.style.width=radio.volume*100+'px';
                voiceBtn.style.left='0px';
            }else{
                console.log(radio.muted);
                radio.volume=1;
                voice.classList.remove("icon-jingyin");
                sound.style.width=radio.volume*100+'px';
                voiceBtn.style.left='100px';
            }
        }
        full.onclick=function (e) {
            radio.volume=e.offsetX/100;
            sound.style.width=radio.volume*100+'px';
        }
        let offLeft=full.offsetLeft;
        voiceBtn.onmousedown=function (e) {
            let ox=e.offsetX;
            full.onclick=null;
            document.onmousemove=function (e) {
                let cx=e.clientX;
                voiceBtn.style.left=cx-offLeft-ox-6+'px';
                if(cx-offLeft-ox-6<0){
                    voiceBtn.style.left='0px';
                }
                if(cx-offLeft-ox-6>100){
                    voiceBtn.style.left='100px';
                }
                radio.volume=parseInt(voiceBtn.style.left)/100;
                sound.style.width=radio.volume*100+'px';
                console.log(radio.volume);
            }
        }
        voiceBtn.onmouseup=function (e) {
            document.onmousemove=null;
        }
        document.onmouseup=function (e) {
            document.onmousemove=null;
        }
    };