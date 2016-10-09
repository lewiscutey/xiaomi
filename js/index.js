window.onload=function  () {
    var  bannerbox=document.getElementsByClassName('bannerImg')[0];
    var  imgs=bannerbox.getElementsByTagName('img');
    var  btns=document.getElementsByClassName('dian');
    var now=0;
    function move(){
        now++;
        if(now>=5){
            now=0;
        }
    
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].style.opacity=0;
            btns[i].style.background="#333";
        };
        imgs[now].style.opacity=1;
        btns[now].style.background="#fff";
    }
    var t=setInterval(move,2000);            //进程函数

    var banner =document.getElementsByClassName("banner")[0];
    banner.onmouseover=function(){
        clearInterval(t);             //清除时间函数
    }
    var flag=true;

    banner.onmouseout=function(){
        if(flag){
            t=setInterval(move,2000);     //开启时间函数
        }   
    }
    
    var btnRight=document.getElementsByClassName("btnRight")[0];
    btnRight.onclick=function(){
        move();
    }
    
    var btnLeft=document.getElementsByClassName("btnLeft")[0];
    btnLeft.onclick=function(){
        now--;
        if(now<0){
            now=imgs.length-1;
        }
    
    for (var i = 0; i < imgs.length; i++) {
        imgs[i].style.opacity=0;
        btns[i].style.background="#333";
    };
    imgs[now].style.opacity=1;
    btns[now].style.background="#fff";
    }

    for (var i = 0; i < btns.length; i++) {
        (function(i){
                    btns[i].onmouseover=function(){
                        for (var j = 0; j < btns.length; j++) {
                            btns[j].style.background="#333";    
                        };
                    btns[i].style.background="#fff";     
                }
                btns[i].onclick=function(){
                    flag=false;
                    for (var j = 0; j < imgs.length; j++) {
                        imgs[j].style.opacity=0;    
                    };
                    imgs[i].style.opacity=1;
                }
                })(i);
        
    };
}