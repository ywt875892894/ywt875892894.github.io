/**
 * Created by wenwu on 2017/5/18.
 */
// 直线 铅笔 矩形 多边形 多角形 圆 虚线 圆角矩形
// 填充 描边 填充样式 描边样式
// 橡皮 文字 裁剪

function huaBan(obj,ctx,color,mask) {
    this.lineWidth=4;
    this.fillcolor=document.querySelector('.fillcolor');
    this.strokecolor=document.querySelector('.strokecolor');
    this.ears=document.querySelector('.eraser');
    this.cli=document.querySelector('.clip');
    this.fillStyle='#000000';
    this.strokeStyle='#000000';
    this.type='stroke';
    this.mask=mask;
    this.width=800;
    this.height=600;
    this.canvas=obj;
    this.ctx=ctx;
    this.arr=[];
    this.flag=true;
    this.flag1=true;
    this.aa;
    this.bb;
    this.cx=1;
    this.cy=1;
    this.color=color;
}
huaBan.prototype= {
    back: function () {
        let self = this;
        document.onkeydown = function (e) {
            if (e.ctrlKey && e.keyCode == 90 && (self.arr.length) > 0) {
                let last = self.arr.pop();
                self.ctx.putImageData(last, 0, 0);
            }
            self.cli.style.display='none';
            self.cli.style.left = `0px`;
            self.cli.style.top = `0px`;
            self.flag=true;
            self.flag1=false;
        }
        self.fillcolor.onchange = function () {
            self.fillStyle = self.fillcolor.value;
        }
        self.strokecolor.onchange = function () {
            self.strokeStyle = self.strokecolor.value;
        }
        self.color[0].onclick = function () {
            self.type = 'fill';
        }
        self.color[1].onclick = function () {
            self.type = 'stroke';
        }
    },
    back1:function () {
        let self = this;
        let last = self.arr.pop();
        self.ctx.putImageData(last, 0, 0);
        self.cli.style.display='none';
        self.cli.style.left = `0px`;
        self.cli.style.top = `0px`;
        self.flag=true;
        self.flag1=false;
    },
    //初始化
    init: function () {
        let self = this;
        self.mask.onmouseup = function () {
            self.mask.onmousemove = null;
        };
        self.lineCap = 'butt';
        self.ctx.setLineDash([0, 0]);
        self.ctx.lineWidth = self.lineWidth;
        self.ctx.fillStyle = self.fillStyle;
        self.ctx.strokeStyle = self.strokeStyle;
    },
    //直线
    line: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(cx, cy);
                self.ctx.stroke();
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //虚线
    xuxian: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.setLineDash([5, 5]);
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(cx, cy);
                self.ctx.stroke();
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //矩形
    juxin: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox, oy);
                self.ctx.lineTo(ox, cy);
                self.ctx.lineTo(cx, cy);
                self.ctx.lineTo(cx, oy);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //铅笔工具
    pencil: function () {
        let self = this;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.init();
            self.ctx.beginPath();
            self.ctx.moveTo(ox, oy);
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.ctx.lineTo(cx, cy);
                self.ctx.stroke();
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //多边形
    duoBian: function () {
        let self = this;
        this.input = document.querySelector('.input');
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                let zXin = [(cx - ox) / 2 + ox, (cy - oy) / 2 + oy];
                let length = (cx - ox) / 2;
//            let length=Math.sqrt((cx-ox)*(cx-ox)+(cy-oy)*(cy-oy));
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                let num = self.input.value ? self.input.value : 5;
                let du = 360 / num;
                for (let i = 0; i < num; i++) {
                    self.ctx.lineTo(zXin[0] + (length * Math.cos(du * i * Math.PI / 180)), zXin[1] + (length * Math.sin(du * i * Math.PI / 180)));
                }
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //圆
    yuan: function () {
        let self = this;
        this.input = document.querySelector('.input');
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                let zXin = [(cx - ox) / 2 + ox, (cy - oy) / 2 + oy];
                let length = (cx - ox) / 2;
                if (length < 0) {
                    length *= -1;
                }
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.arc(zXin[0], zXin[1], length, 0, 2 * Math.PI);
                self.ctx.closePath();
                self.ctx[self.type]();
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //文字
    font: function () {
        let self = this;
        let flag = true;
        self.mask.onmousedown = function (e) {
            if (!flag) {
                return;
            }
            flag = false;
            let ox = e.clientX, oy = e.clientY;
            let ax = e.offsetX, ay = e.offsetY;
            let arr1 = [];
            document.onmousemove = function (e) {
                let cx = e.clientX, cy = e.clientY;
                console.log(cx,cy);
                if (arr1.length > 0) {
                    document.body.removeChild(arr1.pop());
                }
                let divs = document.createElement('div');
                divs.style.cssText = `width:${cx - ox}px;height:${cy - oy}px;position:absolute;left:${ox}px;top:${oy}px;border:1px solid black;font-size:20px`;
                document.body.appendChild(divs);
                divs.setAttribute('contenteditable', 'true');
                arr1.push(divs);
                divs.focus();
                arr1[0].onmousedown = function (e) {
                    let ox = e.offsetX, oy = e.offsetY;
                    arr1[0].onmousemove = function (e) {
                        let cx = e.clientX, cy = e.clientY;
                        let left = cx - ox, top = cy - oy;
                        ax = left - 130;
                        ay = top - 47;
                        this.style.left = left + 'px';
                        this.style.top = top + 'px';
                        console.log(ax, ay);
                    }
                    arr1[0].onmouseup = function () {
                        arr1[0].onmousemove = null;
                        arr1[0].onmouseup = null;
                    }
                }
            };
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
            document.onmouseup = function () {
                document.onmousemove = null;
                if (arr1.length > 0) {
                    arr1[0].onblur = function () {
                        flag = true;
                        this.onblur = null;
                        self.ctx.font = `20px black`;
                        document.body.removeChild(this);
                        self.ctx.fillText(this.innerText, ax + 1, ay + 19);
                    }
                } else {
                    flag = true;
                }
                document.onmouseup = null;
            }

        }
    },
    //多角形
    wujiao: function () {
        let self = this;
        this.input = document.querySelector('.input');
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                let zXin = [(cx - ox) / 2 + ox, (cy - oy) / 2 + oy];

                let length = Math.sqrt((cx - ox) * (cx - ox) + (cy - oy) * (cy - oy));
                let length1 = length / 3;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                self.init();
                self.ctx.beginPath();
                let num = self.input.value ? self.input.value : 5;
                let du = 360 / (num * 2) * Math.PI / 180;
                for (let i = 0; i < num * 2; i++) {
                    if (i % 2 == 0) {
                        self.ctx.lineTo(zXin[0] + length * Math.cos(i * du), zXin[1] + length * Math.sin(i * du));
                    } else {
                        self.ctx.lineTo(zXin[0] + length1 * Math.cos(i * du), zXin[1] + length1 * Math.sin(i * du));
                    }
                }
                self.ctx.closePath();
                self.ctx[self.type]();
            };
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //圆角矩形
    roundJuXin: function () {
        let self = this;
        this.input = document.querySelector('.input');
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX, oy = e.offsetY;
            self.mask.onmousemove = function (e) {
                let cx = e.offsetX, cy = e.offsetY;
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.arr.length > 0) {
                    self.ctx.putImageData(self.arr[self.arr.length - 1], 0, 0);
                }
                let largeX = Number(self.input.value ? self.input.value : 5);
                let largeY = Number(self.input.value ? self.input.value : 5);
                if (cx < ox) {
                    largeX *= -1;
                }
                if (cy < oy) {
                    largeY *= -1;
                }
                self.init();
                self.ctx.beginPath();
                self.ctx.moveTo(ox + largeX, oy);
                self.ctx.lineTo(cx - largeX, oy);
                self.ctx.quadraticCurveTo(cx, oy, cx, oy + largeY);
                self.ctx.lineTo(cx, cy - largeY);
                self.ctx.quadraticCurveTo(cx, cy, cx - largeX, cy);
                self.ctx.lineTo(ox + largeX, cy);
                self.ctx.quadraticCurveTo(ox, cy, ox, cy - largeY);
                self.ctx.lineTo(ox, oy + largeY);
                self.ctx.quadraticCurveTo(ox, oy, ox + largeX, oy);
                self.ctx.closePath();
                self.ctx[self.type]();

            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        }
    },
    //橡皮
    eraser: function () {
        let self = this;
        let width = 50;
        self.mask.onmousedown = function (e) {
            let ox = e.offsetX;
            oy = e.offsetY;
            self.ears.style.width = width + 'px';
            self.ears.style.height = width + 'px';
            self.ears.style.display = 'block';
            self.ears.style.left = `${ox - width / 2}px`;
            self.ears.style.top = `${oy - width / 2}px`;
            self.mask.onmousemove = function (e) {
                let cx = e.clientX - 130 - width / 2;
                cy = e.clientY - 45 - width / 2;
                if (cx < 0) {
                    cx = 0;
                }
                if (cx > self.width - width) {
                    cx = self.width - width;
                }
                if (cy <= 0) {
                    cy = 0;
                }
                if (cy > self.height - width) {
                    cy = self.height - width;
                }
                self.ears.style.left = cx + 'px';
                self.ears.style.top = cy + 'px';
                self.ctx.clearRect(cx, cy, width, width);
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
            self.mask.onmouseup = function () {
                self.mask.onmousemove = null;
                self.ears.style.display = 'none';
                self.mask.onmouseup = null;
            }

        }
    },
    //裁剪
    clip: function () {
        let self = this;
        let ox,oy,ax,ay;
        self.mask.onmousedown = function (e) {
            ox = e.clientX; oy = e.clientY;
            ax = e.offsetX; ay = e.offsetY;
            document.onmousemove = function (e) {
                self.cli.style.display = 'block';
                self.cli.style.left = `${ox}px`;
                self.cli.style.top = `${oy}px`;
                let cx = e.clientX, cy = e.clientY;
                self.cx=cx-ox;
                self.cy=cy-oy;
                self.cli.style.width = self.cx + 'px';
                self.cli.style.height = self.cy + 'px';
                self.cli.onmousedown = function (e) {
                    let ox = e.offsetX,oy = e.offsetY;
                    self.cli.onmousemove = function (e) {
                        let cx = e.clientX, cy = e.clientY;
                        let left = cx - ox, top = cy - oy;
                        if(left<130){
                            left=130;
                        }
                        if(left>130+self.width-self.cx){
                            left=130+self.width-self.cx;
                        }
                        if(top<45){
                            top=45;
                        }
                        if(top>45+self.height-self.cy){
                            top=45+self.height-self.cy;
                        }
                        ax = left-130;
                        ay = top-45;
                        console.log(ox,ax,cx,left);
                        this.style.left = left + 'px';
                        this.style.top = top + 'px';
                        self.ctx.clearRect(0,0,self.width,self.height);
                        self.ctx.putImageData(self.bb,0,0);
                        self.ctx.putImageData(self.aa,ax,ay);

                    }
                    self.cli.onmouseup = function () {
                        self.cli.onmousemove = null;
                        self.cli.onmouseup = null;
                    }
                    self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
                }
                if(self.flag1){
                    document.onmousedown=function (e) {
                        let dx=e.clientX-130,dy=e.clientY-45;
                        if(dx>ax&&dx<ax+self.cx&&dy>ay&&dy<ay+self.cy){
                            return;
                        }
                        self.cli.style.display='none';
                        /*self.cli.style.left = `0px`;
                         self.cli.style.top = `0px`;*/
                        self.flag=true;
                        self.flag1=false;
                    }
                }
            };
            document.onmouseup= function () {
                document.onmousemove = null;
                if(self.flag){
                    self.flag=false;
                    self.aa=self.ctx.getImageData(ax,ay,self.cx,self.cy);
                    self.ctx.clearRect(ax,ay,self.cx,self.cy);
                    self.bb=self.ctx.getImageData(0,0,self.width,self.height);
                    self.ctx.putImageData(self.aa,ax,ay);
                }
                document.onmouseup = null;
            }
            self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));

        }
    },
    //新建
    news:function () {
        let self=this;
        self.ctx.clearRect(0,0,self.width,self.height);
        self.arr.push(self.ctx.getImageData(0, 0, self.width, self.height));
        self.arr=[];
    },
    //保存
    saves:function () {
        let self=this;
        let data=self.canvas.toDataURL('image/png').replace('data:image/png','data:stream/octet');
        location.href=data;
    }
}
