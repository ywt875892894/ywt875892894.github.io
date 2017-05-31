function $(selector) {
    return new aa(selector);
}
function aa(obj) {
    if(typeof obj=='string'){
        let bb=document.querySelectorAll(obj);
        console.log(bb);
        this.length=bb.length;
        for(let i=0;i<this.length;i++){
            this[i]=bb[i];
        }
    }
}
aa.prototype={
    each:function (callback) {
        for (let i=0;i<this.length;i++){
            callback(i,this[i]);
        }
    },
    css:function (attrObj) {
        this.each(function (i,obj) {
            for(let j in attrObj){
                obj.style[j]=attrObj[j];
            }
        })
        return this;
    },
    html:function (str) {
        this.each(function (i,obj) {
            obj.innerText=str;
        })
        return this;
    },
    click:function (fun) {
        this.each(function (i,obj) {
            obj.onclick=fun;
        })
        return this;
    }
}