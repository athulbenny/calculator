
    var a=0,b=0;
    var plus=document.getElementById('plus');
    var subs=document.getElementById('subs');
    var mult=document.getElementById('mult');
    var divde=document.getElementById('divde');
    var expn=document.getElementById('expn');
    var clr=document.getElementById('clr');
    var num1=document.getElementById('num1');
    var num2=document.getElementById('num2');
    plus.onclick=add;
    subs.onclick=minus;
    mult.onclick=prod;
    divde.onclick=quot;
    expn.onclick=power;
    clr.onclick=clear;

    function add(){
         a=num1.value;
         b=num2.value;
        a=parseInt(a);
        b=parseInt(b);
        num1.value=a+b;
        num1.style.backgroundColor='green'
        num1.style.color='white'
    }
    function minus(){
         a=num1.value;
         b=num2.value;
        a=parseInt(a);
        b=parseInt(b);
        num1.value=a-b;
        num1.style.backgroundColor='green'
        num1.style.color='white'
    }
    function prod(){
         a=num1.value;
         b=num2.value;
        a=parseInt(a);
        b=parseInt(b);
        num1.value=a*b;
        num1.style.backgroundColor='green'
        num1.style.color='white'
    }
    function quot(){
         a=num1.value;
         b=num2.value;
        a=parseInt(a);
        b=parseInt(b);
        num1.value=a/b;
        num1.style.backgroundColor='green'
        num1.style.color='white'
    }
    function power(){
         a=num1.value;
         b=num2.value;
        a=parseInt(a);
        b=parseInt(b);
        num1.value=a**b;
        num1.style.backgroundColor='green'
        num1.style.color='white'
    }
    function clear(){
       num1.value=''
       num2.value='' 
       num1.style.backgroundColor=''
        num1.style.color=''
    }
const d=new Date();var c=1
var h=document.getElementById('clock');
var hr=d.getHours();
var mn=d.getMinutes();
var sc=d.getSeconds();
setInterval(()=>{
    h.innerHTML=(hr%12)+':'+mn+":"+sc;
    sc++;
    if(sc==60){
        mn++;sc=0;
    }if(mn==60){
        hr++;mn=0;
    }
    },1000)
