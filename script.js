var b=0,i=1,flag='none';
var n1=0,n2=0;

var btn1=document.getElementById('btn1');
btn1.addEventListener('click',addvalue1)
var btn2=document.getElementById('btn2');
btn2.addEventListener('click',addvalue2)
var btn3=document.getElementById('btn3');
btn3.addEventListener('click',addvalue3)
var btn4=document.getElementById('btn4');
btn4.addEventListener('click',addvalue4)
var btn5=document.getElementById('btn5');
btn5.addEventListener('click',addvalue5)
var btn6=document.getElementById('btn6');
btn6.addEventListener('click',addvalue6)
var btn7=document.getElementById('btn7');
btn7.addEventListener('click',addvalue7)
var btn8=document.getElementById('btn8');
btn8.addEventListener('click',addvalue8)
var btn9=document.getElementById('btn9');
btn9.addEventListener('click',addvalue9)
var btn0=document.getElementById('btn0');
btn0.addEventListener('click',addvalue0);

var plus=document.getElementById('plus');
var subs=document.getElementById('subs');
var mult=document.getElementById('mult');
var divde=document.getElementById('divde');
var equl=document.getElementById('equl');
var clr=document.getElementById('clr');
var num1=document.getElementById('num1');
var num2=document.getElementById('num2');

plus.onclick=add;
subs.onclick=minus;
mult.onclick=prod;
divde.onclick=quot;
equl.onclick=equal;
clr.onclick=clear;

function addvalue1(){
   var a=btn1.innerHTML;
   a=parseInt(a)
   b=(b*10)+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue2(){
   var a=btn2.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue3(){
   var a=btn3.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue4(){
   var a=btn4.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue5(){
   var a=btn5.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue6(){
   var a=btn6.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue7(){
   var a=btn7.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue8(){
   var a=btn8.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}
function addvalue9(){
   var a=btn9.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}function addvalue0(){
   var a=btn0.innerHTML;
   a=parseInt(a)
   b=b*10+a;
   if(i==1)
   num1.value=b;
   else num2.value=b;
}

function equal(){
    n1=num1.value;
    n2=num2.value;
    n1=parseInt(n1);
    n2=parseInt(n2);
    if(flag=='plus'){
        num1.value=n1+n2;
    } 
       if(flag=='subs'){
        num1.value=n1-n2;
    }
    if(flag=='mult'){
        num1.value=n1*n2;
    }
    if(flag=='divde'){
        num1.value=n1/n2;
    }
    num1.style.backgroundColor='green'
    num1.style.color='white'
}

function add(){
flag='plus';i=0;a=0; b=0;
}
function minus(){
flag='subs';i=0;a=0; b=0;
}
function prod(){
flag='mult';i=0;a=0; b=0;
}
function quot(){
flag='divde';i=0;a=0; b=0;
}

function clear(){
   num1.value='';a=0;b=0;
   num2.value='' ;i=1;
   num1.style.backgroundColor=''
    num1.style.color=''
}
const d=new Date();var c=1
var h=document.getElementById('clock');
var hr=d.getHours();
var mn=d.getMinutes();
var sc=d.getSeconds();
setInterval(()=>{
<<<<<<< HEAD
h.innerHTML=(hr%12)+':'+mn+":"+sc;
sc++;
if(sc==60){
    mn++;sc=0
}if(mn==60){
    hr++;mn=0
}
},1000)
=======
    h.innerHTML=(hr%12)+':'+mn+":"+sc;
    sc++;
    if(sc==60){
        mn++;sc=0;
    }if(mn==60){
        hr++;mn=0;
    }
    },1000)
>>>>>>> e34ec08819c8083c82ab3d51a6543cc4302947de
